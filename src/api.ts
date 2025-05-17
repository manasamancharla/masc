import { request } from "graphql-request";
import { ContributionsResponse, GET_CONTRIBUTIONS } from "./graphql";
import { truncateText, getTimeSince } from "./lib/utils";

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

type GitHubCommit = {
  sha: string;
  message: string;
  url: string;
};

type GitHubPushEvent = {
  type: "PushEvent";
  repo: {
    name: string;
  };
  payload: {
    ref: string;
    commits: GitHubCommit[];
  };
  created_at: string;
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
          date: day.date.replace(/-/g, "/"),
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
    const res = await fetch(
      `https://api.github.com/users/${username}/events/public`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
      },
    );

    if (!res.ok) throw new Error("GitHub API error");

    const events = await res.json();

    const pushEvent = (events as GitHubPushEvent[]).find(
      (event) => event.type === "PushEvent",
    );
    if (!pushEvent || pushEvent.payload.commits.length === 0) return null;

    const commit = pushEvent.payload.commits[0];
    const branch = pushEvent.payload.ref.replace("refs/heads/", "");

    return {
      repoName: pushEvent.repo.name.split("/")[1],
      repoUrl: `https://github.com/${pushEvent.repo.name}`,
      branch,
      commitSha: commit.sha.slice(0, 7),
      commitMessage: truncateText(commit.message, 30),
      commitUrl: commit.url
        .replace("api.", "")
        .replace("repos/", "")
        .replace("commits", "commit"),
      timeSincePush: getTimeSince(pushEvent.created_at),
    };
  } catch (error) {
    // console.error("Failed to fetch latest public commit:", error);
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
        description:
          item.description.replace(/<[^>]+>/g, "").slice(0, 100) + "...",
      };
    });

  return articles;
};
