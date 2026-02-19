// services/github.js
import { GITHUB_ACCOUNTS } from "@/commons/constants/Github";
import axios from "axios";

const GITHUB_USER_ENDPOINT = "https://api.github.com/graphql";

const GITHUB_USER_QUERY = `query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        colors
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`;

export const fetchGithubData = async (username, token) => {
  try {
    const { status, data } = await axios.post(
      GITHUB_USER_ENDPOINT,
      { query: GITHUB_USER_QUERY, variables: { username } },
      { headers: { Authorization: `bearer ${token}` } },
    );

    if (status >= 400) {
      throw new Error(`GitHub API responded with status: ${status}`);
    }

    return { status, data: data?.data?.user ?? {} };
  } catch (error) {
    console.error("Error fetching GitHub data:", error.message);
    return { status: 500, data: {} };
  }
};

export const getGithubUser = async (type) => {
  const account = GITHUB_ACCOUNTS.find(
    ({ type: accType, is_active }) => accType === type && is_active,
  );

  if (!account) throw new Error("Invalid user type");

  return fetchGithubData(account.username, account.token);
};
