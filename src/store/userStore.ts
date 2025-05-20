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
  results: GitHubUser[];
  loading: boolean;
  error: string | null;

  userProfile: UserProfile | null;
  profileLoading: boolean;
  profileError: string | null;

  repos: GitHubRepo[];
  repoLoading: boolean;
  repoError: string | null;
  repoPage: number;
  perPage: number;
  totalRepos: number;
  hasMoreRepos: boolean;

  setRepoPage: (query: number) => void;
  setPerPage: (query: number) => void;

  setQuery: (query: string) => void;
  fetchUsers: (query: string) => void;

  fetchUserProfile: (username: string) => void;
  fetchRepos: (username: string) => void;
  fetchRepoPage: (username: string, page: number) => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  query: "",
  results: [],
  loading: false,
  error: null,

  userProfile: null,
  profileLoading: false,
  profileError: null,

  repos: [],
  repoLoading: false,
  repoError: null,
  repoPage: 1,
  perPage: 10,
  totalRepos: 0,
  hasMoreRepos: true,

  setRepoPage: (page: number) => set({ repoPage: page }),
  setPerPage: (count: number) => set({ perPage: count, repoPage: 1 }),

  setQuery: (query) => set({ query }),

  fetchUsers: async (query) => {
    if (!query) return;
    set({ loading: true, error: null });
    try {
      const users = await searchUsers(query);
      set({ results: users, loading: false });
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
  fetchRepos: async (username) => {
    const { perPage } = get();
    if (!username) return;
    set({
      repoLoading: true,
      repoError: null,
      repos: [],
      repoPage: 1,
      hasMoreRepos: true
    });
    try {
      const profile = await fetchUserProfileAPI(username);
      const total = profile.public_repos;

      const data = await getUserRepos(username, 1, perPage);
      set({
        userProfile: profile,
        repos: data,
        repoLoading: false,
        repoPage: 1,
        totalRepos: total,
        hasMoreRepos: data.length >= perPage
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
  },
  fetchRepoPage: async (username: string, page: number) => {
    const { perPage } = get();
    set({ repoLoading: true, repoError: null });
    try {
      const data = await getUserRepos(username, page, perPage);
      set({ repos: data, repoPage: page, repoLoading: false });
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
}));
