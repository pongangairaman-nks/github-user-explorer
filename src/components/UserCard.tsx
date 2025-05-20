import React from "react";
import { Card, Avatar, Typography, Box, Button } from "@mui/material";

interface UserCardProps {
  avatarUrl: string;
  username: string;
  onClick?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  avatarUrl,
  username,
  onClick
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 2,
        px: 2,
        py: 1,
        cursor: "pointer",
        "&:hover": { backgroundColor: "#f5f5f5" }
      }}
      onClick={onClick}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar src={avatarUrl} alt={username} />
        <Typography variant="subtitle1">{username}</Typography>
      </Box>
      <Button variant="outlined" size="small">
        View Profile
      </Button>
    </Card>
  );
};

export default UserCard;
