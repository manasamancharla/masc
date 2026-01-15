import { request } from "graphql-request";
import { ContributionsResponse, GET_CONTRIBUTIONS } from "./graphql";
import { getTimeSince } from "./lib/utils";

const MEDIUM_USERNAME = import.meta.env.VITE_MEDIUM_USERNAME;

export type ContributionDay = {
  count: number;
  date: string;
};

export type GithubContributions = {
  totalContributions: number;
  contributions: ContributionDay[];
};

export type LatestPublicCommit = {
  repoName: string;
  repoUrl: string;
  branch: string;
  commitSha: string;
  commitMessage: string;
  commitUrl: string;
  timeSincePush: string;
};

export type Article = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string | null;
  description: string;
};

type MediumAPIItem = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

export const getGithubContributions = async (
  username: string,
  token: string,
): Promise<GithubContributions> => {
  try {
    const response = await request<ContributionsResponse>(
      "https://api.github.com/graphql",
      GET_CONTRIBUTIONS,
      { userName: username },
      { Authorization: `Bearer ${token}` },
    );

    const calendar = response.user.contributionsCollection.contributionCalendar;

    type Week =
      ContributionsResponse["user"]["contributionsCollection"]["contributionCalendar"]["weeks"][number];
    type Day = Week["contributionDays"][number];

    return {
      totalContributions: calendar.totalContributions,
      contributions: calendar.weeks.flatMap((week: Week) =>
        week.contributionDays.map((day: Day) => ({
          count: day.contributionCount,
          date: day.date, // Keep the original YYYY-MM-DD format
        })),
      ),
    };
  } catch (error) {
    // console.error("Failed to fetch contributions:", error);
    return { totalContributions: 0, contributions: [] };
  }
};

export const getLatestPublicCommit = async (
  username: string,
  token: string,
): Promise<LatestPublicCommit | null> => {
  try {
    const eventsRes = await fetch(
      `https://api.github.com/users/${username}/events/public`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
      },
    );

    if (!eventsRes.ok) throw new Error("Events API error");

    const events = await eventsRes.json();

    const pushEvent = events.find(
      (event: any) => event.type === "PushEvent" && event.payload?.head,
    );

    if (!pushEvent) return null;

    const [owner, repo] = pushEvent.repo.name.split("/");
    const branch = pushEvent.payload.ref.replace("refs/heads/", "");
    const sha = pushEvent.payload.head;

    const commitRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits/${sha}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
      },
    );

    if (!commitRes.ok) throw new Error("Commit API error");

    const commitData = await commitRes.json();

    return {
      repoName: repo,
      repoUrl: `https://github.com/${owner}/${repo}`,
      branch,
      commitSha: sha.slice(0, 7),
      commitMessage: commitData.commit.message,
      commitUrl: `https://github.com/${owner}/${repo}/commit/${sha}`,
      timeSincePush: getTimeSince(pushEvent.created_at),
    };
  } catch (error) {
    console.error("Failed to fetch latest public commit:", error);
    return null;
  }
};

export const fetchLatestMediumArticles = async (
  limit = 3,
): Promise<Article[]> => {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
  );

  const data = await response.json();

  if (!data.items || !Array.isArray(data.items)) {
    throw new Error("No articles found.");
  }

  const articles: Article[] = data.items
    .slice(0, limit)
    .map((item: MediumAPIItem) => {
      const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
      const thumbnail = imgMatch ? imgMatch[1] : null;

      return {
        title: item.title,
        link: item.link,
        pubDate: new Date(item.pubDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        thumbnail,
        description: item.description.replace(/<[^>]+>/g, ""),
      };
    });

  return articles;
};
