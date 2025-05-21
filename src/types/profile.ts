export interface UserProfile {
  avatar_url: string;
  bio: string | null;
  followers: number;
  public_repos: number;
  login: string;
  name: string;
  html_url: string;
  location: string;
  following: string;
  public_gists: string;
}

export interface RepositoryCardProps {
  name: string;
  updatedDate: string;
  description?: string;
  language: string | null;
  stars: number;
  forks: number;
  url?: string;
}
