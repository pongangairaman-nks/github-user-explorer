import React from "react";
import { Avatar, Typography, Box, Paper, Grid, Divider } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import colors from "../constants/colors";

interface UserProfile {
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

interface UserProfileCardProps {
  user: UserProfile;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        mb: 4,
        background: `linear-gradient(135deg, ${colors.hoverBorder} 0%, ${colors.darkPurple2} 100%)`
      }}
    >
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Avatar
            src={user?.avatar_url}
            alt="avatar image"
            sx={{ width: 180, height: 180 }}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start"
            }}
          >
            <Box>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                color={colors.white}
              >
                {user.name || user.login}
              </Typography>
              <Typography variant="subtitle1" color={colors.white} gutterBottom>
                {user.login || "-"}
              </Typography>
            </Box>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#d1d3ff",
                padding: 4,
                borderRadius: "4px",
                color: "#868cff",
                fontWeight: 600
              }}
            >
              View on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Typography
              variant="body2"
              color={colors.white}
              sx={{ display: "flex", alignItems: "center" }}
            >
              {user.bio}
            </Typography>
            <Box sx={{ mx: 2 }}>
              <Divider orientation="vertical" />
            </Box>
            <Typography
              variant="body2"
              color={colors.white}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
              {user.location}
            </Typography>
          </Box>

          <Grid container spacing={6} sx={{ mt: 2 }}>
            <Grid item>
              <Typography variant="h5" component="div" color={colors.white}>
                {user.followers}
              </Typography>
              <Typography variant="body2" color={colors.white}>
                Followers
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" component="div" color={colors.white}>
                {user.following}
              </Typography>
              <Typography variant="body2" color={colors.white}>
                Following
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" component="div" color={colors.white}>
                {user.public_repos}
              </Typography>
              <Typography variant="body2" color={colors.white}>
                Repositories
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" component="div" color={colors.white}>
                {user.public_gists}
              </Typography>
              <Typography variant="body2" color={colors.white}>
                Gists
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserProfileCard;
