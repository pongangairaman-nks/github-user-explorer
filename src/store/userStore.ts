import { create } from "zustand";
import { searchUsers } from "../services/githubAPI";

interface GitHubUser {
  login: string;
  avatar_url: string;
  id: number;
}

interface UserStore {
  query: string;
  results: GitHubUser[];
  loading: boolean;
  error: string | null;
  setQuery: (query: string) => void;
  fetchUsers: (query: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  query: "",
  results: [],
  loading: false,
  error: null,
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
  }
}));
