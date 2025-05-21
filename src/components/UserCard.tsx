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
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: { xs: "center", sm: "space-between" },
        mb: 1.5,
        px: { xs: 1.5, sm: 2 },
        py: { xs: 2, sm: 2.5 },
        cursor: "pointer",
        backgroundColor: `linear-gradient(135deg, ${colors.blueLight6} 0%, ${colors.blueLight5} 100%)`,
        "&:hover": { border: `1px solid ${colors.hoverBorder}` }
      }}
      onClick={onClick}
    >
      <Box
        display="flex"
        alignItems="center"
        gap={{ xs: 1.5, sm: 2 }}
        width={{ xs: "100%", sm: "auto" }}
        mb={{ xs: 1.5, sm: 0 }}
      >
        <Avatar
          src={avatarUrl}
          alt={username}
          sx={{
            width: { xs: 56, sm: 68, md: 76 },
            height: { xs: 56, sm: 68, md: 76 }
          }}
        />
        <Box>
          <Typography
            fontSize={{ xs: 16, sm: 18, md: 19 }}
            fontWeight={600}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: { xs: "180px", sm: "250px", md: "300px" }
            }}
          >
            {username}
          </Typography>
          <Box
            component="a"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: colors.hoverBorder,
              fontSize: { xs: "0.875rem", sm: "1rem" },
              display: "inline-block"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            View on GitHub
          </Box>
        </Box>
      </Box>

      <Chip
        label={
          <Typography
            color={colors.darkPurple}
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem" }
            }}
          >
            Clickable
          </Typography>
        }
        onClick={onClick}
        sx={{
          background: colors.chipBg,
          px: 1,
          borderRadius: "4px",
          alignSelf: { xs: "flex-end", sm: "center" },
          mt: { xs: 0, sm: 0 },
          "&:hover": {
            background: colors.purpleHoverBg
          }
        }}
      />
    </Card>
  );
};

export default UserCard;
