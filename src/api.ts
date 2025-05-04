import { request } from "graphql-request";
import { GET_CONTRIBUTIONS, GET_REPO_INFO } from "./graphql";

// ==================== Interfaces ====================
export interface ContributionDay {
  count: number;
  date: string;
}

export interface GithubContributions {
  totalContributions: number;
  contributions: ContributionDay[];
}

export interface CommitDetails {
  sha: string;
  message: string;
  committedDate: string;
  author: {
    name: string;
    email: string;
    date: string;
  };
  url: string;
}

export interface RepositoryDetails {
  name: string;
  url: string;
  branch: string;
  pushedAt: string;
  timeSincePush: string;
}

export interface GithubRepoInfo {
  latestRepository?: RepositoryDetails;
  latestCommit?: CommitDetails;
}

// ==================== Helper Functions ====================
const getTimeSince = (dateString: string): string => {
  const pushedDate = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - pushedDate.getTime()) / 1000,
  );

  if (diffInSeconds < 60)
    return `${diffInSeconds} second${diffInSeconds === 1 ? "" : "s"} ago`;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60)
    return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24)
    return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
};

// ==================== API Functions ====================
export const getGithubContributions = async (
  username: string,
  token: string,
): Promise<GithubContributions> => {
  try {
    const response = await request(
      "https://api.github.com/graphql",
      GET_CONTRIBUTIONS,
      { userName: username },
      { Authorization: `Bearer ${token}` },
    );

    const calendar = response.user.contributionsCollection.contributionCalendar;
    return {
      totalContributions: calendar.totalContributions,
      contributions: calendar.weeks.flatMap((week: any) =>
        week.contributionDays.map((day: any) => ({
          count: day.contributionCount,
          date: day.date.replace(/-/g, "/"),
        })),
      ),
    };
  } catch (error) {
    console.error("Failed to fetch contributions:", error);
    return { totalContributions: 0, contributions: [] };
  }
};

export const getGithubRepoInfo = async (
  username: string,
  token: string,
): Promise<GithubRepoInfo> => {
  try {
    const response = await request(
      "https://api.github.com/graphql",
      GET_REPO_INFO,
      { userName: username },
      { Authorization: `Bearer ${token}` },
    );

    const latestRepo = response.user.repositories.nodes[0] || null;
    if (!latestRepo) return {};

    const latestCommit =
      latestRepo.defaultBranchRef?.target?.history?.nodes?.[0];
    return {
      latestRepository: {
        name: latestRepo.name,
        url: latestRepo.url,
        branch: latestRepo.defaultBranchRef?.name || "unknown",
        pushedAt: latestRepo.pushedAt,
        timeSincePush: getTimeSince(latestRepo.pushedAt),
      },
      latestCommit: latestCommit
        ? {
            sha: latestCommit.oid,
            message: latestCommit.message,
            committedDate: latestCommit.committedDate,
            author: {
              name: latestCommit.author.name,
              email: latestCommit.author.email,
              date: latestCommit.author.date,
            },
            url: latestCommit.url,
          }
        : undefined,
    };
  } catch (error) {
    console.error("Failed to fetch repo info:", error);
    return {};
  }
};
