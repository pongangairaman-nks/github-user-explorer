import axios from "axios";

export async function searchUsers(query: string) {
  const res = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return res.data.items;
}

export const fetchUserProfileAPI = async (username: string) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const getUserRepos = async (
  username: string,
  page = 1,
  perPage = 10
) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos`,
    {
      params: {
        page,
        per_page: perPage,
        sort: "updated"
      }
    }
  );
  return response.data;
};
