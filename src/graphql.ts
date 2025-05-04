import { gql } from "graphql-request";

// 1. Contributions Query (Simplified)
export const GET_CONTRIBUTIONS = gql`
  query GetContributions($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              weekday
            }
          }
        }
      }
    }
  }
`;

// 2. Repository Info Query (Enhanced)
export const GET_REPO_INFO = gql`
  query GetRepoInfo($userName: String!) {
    user(login: $userName) {
      repositories(
        first: 1
        orderBy: { field: PUSHED_AT, direction: DESC }
        privacy: PUBLIC
      ) {
        nodes {
          name
          url
          pushedAt
          isPrivate
          stargazerCount
          defaultBranchRef {
            name
            target {
              ... on Commit {
                oid
                history(first: 1) {
                  totalCount
                  nodes {
                    oid
                    messageHeadline
                    message
                    committedDate
                    authoredDate
                    author {
                      name
                      email
                      user {
                        login
                      }
                    }
                    url
                    changedFiles
                    additions
                    deletions
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
