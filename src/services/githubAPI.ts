import axios from "axios";

export async function searchUsers(query: string) {
  const res = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return res.data.items;
}
