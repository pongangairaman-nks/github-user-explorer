import React from "react";
import { Avatar, Typography, Box, Paper, Grid, Divider } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import colors from "../constants/colors";
import type { UserProfile } from "../types/profile";

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
            sx={{ width: { xs: 120, sm: 180 }, height: { xs: 120, sm: 180 } }}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { xs: "center", sm: "space-between" },
                alignItems: { xs: "center", sm: "flex-start" },
                gap: { xs: 2, sm: 0 }
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  component={"h1"}
                  gutterBottom
                  color={colors.white}
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" }
                  }}
                >
                  {user?.name || user?.login}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={colors.white}
                  gutterBottom
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" }
                  }}
                >
                  {user?.login || "-"}
                </Typography>
              </Box>

              <a
                href={user?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#d1d3ff",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  color: "#868cff",
                  fontWeight: 600,
                  fontSize: 16,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center"
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
                  style={{ marginLeft: "8px" }}
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "center" },
                mt: 1,
                gap: { xs: 1, sm: 0 }
              }}
            >
              {user?.bio && (
                <Typography
                  variant="body2"
                  color={colors.white}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: { xs: "0.8125rem", sm: "0.875rem" }
                  }}
                >
                  {user.bio}
                </Typography>
              )}
              {user?.bio && user?.location && (
                <Box
                  sx={{
                    mx: 2,
                    display: { xs: "none", sm: "block" }
                  }}
                >
                  <Divider orientation="vertical" />
                </Box>
              )}
              {user?.location && (
                <Typography
                  variant="body2"
                  color={colors.white}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: { xs: "0.8125rem", sm: "0.875rem" }
                  }}
                >
                  <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
                  {user.location}
                </Typography>
              )}
            </Box>
            <Grid
              container
              spacing={{ xs: 2, sm: 4, md: 6 }}
              sx={{
                mt: { xs: 2, sm: 2 },
                justifyContent: { xs: "space-between", sm: "flex-start" }
              }}
            >
              <Grid item xs={5} sm="auto">
                <Typography
                  variant="h5"
                  component="div"
                  color={colors.white}
                  sx={{
                    fontSize: { xs: "1.25rem", sm: "1.5rem" }
                  }}
                  textAlign={{ xs: "center", sm: "start" }}
                >
                  {user?.followers || 0}
                </Typography>
                <Typography
                  variant="body2"
                  color={colors.white}
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" }
                  }}
                  textAlign={{ xs: "center", sm: "start" }}
                >
                  Followers
                </Typography>
              </Grid>

              <Grid item xs={5} sm="auto">
                <Typography
                  variant="h5"
                  component="div"
                  color={colors.white}
                  sx={{
                    fontSize: { xs: "1.25rem", sm: "1.5rem" }
                  }}
                  textAlign={{ xs: "center", sm: "start" }}
                >
                  {user?.following || 0}
                </Typography>
                <Typography
                  variant="body2"
                  color={colors.white}
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" }
                  }}
                  textAlign={{ xs: "center", sm: "start" }}
                >
                  Following
                </Typography>
              </Grid>

              <Grid item xs={5} sm="auto">
                <Typography
                  variant="h5"
                  component="div"
                  color={colors.white}
                  sx={{
                    fontSize: { xs: "1.25rem", sm: "1.5rem" }
                  }}
                  textAlign={{ xs: "center", sm: "start" }}
                >
                  {user?.public_repos || 0}
                </Typography>
                <Typography
                  variant="body2"
                  color={colors.white}
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" }
                  }}
                  textAlign={{ xs: "center", sm: "start" }}
                >
                  Repositories
                </Typography>
              </Grid>

              <Grid item xs={5} sm="auto">
                <Typography
                  variant="h5"
                  component="div"
                  color={colors.white}
                  sx={{
                    fontSize: { xs: "1.25rem", sm: "1.5rem" }
                  }}
                  textAlign={{ xs: "center", sm: "start" }}
                >
                  {user?.public_gists || 0}
                </Typography>
                <Typography
                  variant="body2"
                  color={colors.white}
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" }
                  }}
                  textAlign={{ xs: "center", sm: "start" }}
                >
                  Gists
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserProfileCard;
