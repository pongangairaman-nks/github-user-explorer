import axios from "axios";

export async function searchUsers(query: string) {
  const res = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return res.data.items;
}

export const fetchUserProfileAPI = async (username: string) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
