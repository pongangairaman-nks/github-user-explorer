import React from "react";
import { Card, Avatar, Typography, Box } from "@mui/material";

interface UserProfile {
  avatar_url: string;
  bio: string | null;
  followers: number;
  public_repos: number;
  login: string;
}

interface UserProfileCardProps {
  user: UserProfile;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 4, p: 2 }}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Avatar
          src={user.avatar_url}
          alt={user.login}
          sx={{ width: 120, height: 120 }}
        />
        <Typography variant="h5">{user.login}</Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center">
          {user.bio || "No bio available."}
        </Typography>
        <Box display="flex" justifyContent="space-around" width="100%" mt={2}>
          <Box textAlign="center">
            <Typography variant="subtitle1" fontWeight="bold">
              {user.followers}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Followers
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="subtitle1" fontWeight="bold">
              {user.public_repos}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Repositories
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default UserProfileCard;
