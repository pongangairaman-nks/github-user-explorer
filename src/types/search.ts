export interface SearchBarProps {
  onSearch: (query: string) => void;
}

export interface UserCardProps {
  avatarUrl: string;
  githubUrl: string;
  username: string;
  onClick?: () => void;
}
