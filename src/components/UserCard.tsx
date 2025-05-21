import React from "react";
import { Card, Avatar, Typography, Box, Chip } from "@mui/material";
import colors from "../constants/colors";
import type { UserCardProps } from "../types/search";

const UserCard: React.FC<UserCardProps> = ({
  avatarUrl,
  githubUrl,
  username,
  onClick
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 1.5,
        px: 2,
        py: 2.5,
        cursor: "pointer",
        backgroundColor: `linear-gradient(135deg, ${colors.blueLight6} 0%, ${colors.blueLight5} 100%)`,
        "&:hover": { border: `1px solid ${colors.hoverBorder}` }
      }}
      onClick={onClick}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar src={avatarUrl} alt={username} sx={{ width: 76, height: 76 }} />
        <Box>
          <Typography fontSize={19} fontWeight={600}>
            {username}
          </Typography>
          <Box sx={{ mt: 0.5 }}>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: colors.hoverBorder }}
              onClick={(e) => e.stopPropagation()}
            >
              View on GitHub
            </a>
          </Box>
        </Box>
      </Box>
      <Chip
        label={<Typography color={colors.darkPurple}>Clickable</Typography>}
        onClick={onClick}
        sx={{
          background: colors.chipBg,
          px: 1,
          borderRadius: "4px",
          "&:hover": {
            background: colors.purpleHoverBg
          }
        }}
      />
    </Card>
  );
};

export default UserCard;
