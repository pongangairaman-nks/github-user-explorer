import axiosInstance from "./axiosInstance";

export async function searchUsers(query: string, page = 1, perPage = 10) {
  const res = await axiosInstance.get("/search/users", {
    params: {
      q: query,
      page,
      per_page: perPage
    }
  });
  return res.data;
}

export const fetchUserProfileAPI = async (username: string) => {
  const response = await axiosInstance.get(`/users/${username}`);
  return response.data;
};

export const getUserRepos = async (
  username: string,
  page = 1,
  perPage = 10
) => {
  const response = await axiosInstance.get(`/users/${username}/repos`, {
    params: {
      page,
      per_page: perPage,
      sort: "updated"
    }
  });
  return response.data;
};
