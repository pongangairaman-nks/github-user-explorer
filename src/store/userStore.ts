import { create } from "zustand";
import axios from "axios";
import {
  searchUsers,
  fetchUserProfileAPI,
  getUserRepos
} from "../services/githubAPI";

interface GitHubUser {
  login: string;
  avatar_url: string;
  id: number;
}

interface UserProfile {
  login: string;
  avatar_url: string;
  bio: string | null;
  followers: number;
  public_repos: number;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
}

interface UserStore {
  query: string;
  users: GitHubUser[];
  totalUsers: number;
  usersCurrentPage: number;
  usersPerPage: number;
  loading: boolean;
  error: string | null;

  userProfile: UserProfile | null;
  profileLoading: boolean;
  profileError: string | null;

  repos: GitHubRepo[];
  repoLoading: boolean;
  repoError: string | null;
  repoCurrentPage: number;
  reposPerPage: number;
  totalRepos: number;

  setReposCurrentPage: (query: number) => void;
  setReposPerPage: (query: number) => void;

  setQuery: (query: string) => void;
  fetchUsers: (query: string) => void;

  fetchUserProfile: (username: string) => void;
  fetchReposWithPage: (username: string, page: number) => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  query: "",
  users: [],
  totalUsers: 0,
  usersCurrentPage: 1,
  usersPerPage: 10,
  loading: false,
  error: null,

  userProfile: null,
  profileLoading: false,
  profileError: null,

  repos: [],
  repoCurrentPage: 1,
  reposPerPage: 10,
  totalRepos: 0,
  repoLoading: false,
  repoError: null,

  setUsersCurrentPage: (page: number) => set({ usersCurrentPage: page }),
  setUsersPerPage: (count: number) =>
    set({ usersPerPage: count, usersCurrentPage: 1 }),
  setReposCurrentPage: (page: number) => set({ repoCurrentPage: page }),
  setReposPerPage: (count: number) =>
    set({ reposPerPage: count, repoCurrentPage: 1 }),

  setQuery: (query) => set({ query }),

  fetchUsers: async (query) => {
    if (!query) return;
    set({ loading: true, error: null });
    try {
      const users = await searchUsers(query);
      set({ users: users, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch users" + error, loading: false });
    }
  },

  fetchUserProfile: async (username) => {
    if (!username) return;
    set({ profileLoading: true, profileError: null, userProfile: null });
    try {
      const profile = await fetchUserProfileAPI(username);
      set({ userProfile: profile, profileLoading: false });
    } catch (error) {
      set({
        profileError: "Failed to fetch profile" + error,
        profileLoading: false
      });
    }
  },
  fetchReposWithPage: async (username: string, page: number = 1) => {
    const { reposPerPage } = get();
    if (!username) return;
    if (page === 1) {
      set({
        repoLoading: true,
        repoError: null,
        repos: [],
        repoCurrentPage: 1
      });
      try {
        const profile = await fetchUserProfileAPI(username);
        const total = profile.public_repos;
        const data = await getUserRepos(username, page, reposPerPage);
        set({
          userProfile: profile,
          repos: data,
          repoLoading: false,
          repoCurrentPage: page,
          totalRepos: total
        });
      } catch (error) {
        const message = axios.isAxiosError(error)
          ? error.response?.data?.message || error.message
          : "An unknown error occurred";
        set({
          repoError: "Failed to fetch repos: " + message,
          repoLoading: false
        });
      }
    } else {
      set({ repoLoading: true, repoError: null });
      try {
        const data = await getUserRepos(username, page, reposPerPage);
        set({
          repos: data,
          repoCurrentPage: page,
          repoLoading: false
        });
      } catch (error) {
        const message = axios.isAxiosError(error)
          ? error.response?.data?.message || error.message
          : "An unknown error occurred";
        set({
          repoError: "Failed to fetch repos: " + message,
          repoLoading: false
        });
      }
    }
  }
}));
