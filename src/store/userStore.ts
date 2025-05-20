import { create } from "zustand";
import { searchUsers, fetchUserProfileAPI } from "../services/githubAPI";

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

interface UserStore {
  query: string;
  results: GitHubUser[];
  loading: boolean;
  error: string | null;

  userProfile: UserProfile | null;
  profileLoading: boolean;
  profileError: string | null;

  setQuery: (query: string) => void;
  fetchUsers: (query: string) => void;

  fetchUserProfile: (username: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  query: "",
  results: [],
  loading: false,
  error: null,

  userProfile: null,
  profileLoading: false,
  profileError: null,

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
  }
}));
