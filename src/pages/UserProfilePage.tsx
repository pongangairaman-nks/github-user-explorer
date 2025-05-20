import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import UserProfileCard from "../components/UserProfileCard";
import { CircularProgress, Typography, Box, Grid } from "@mui/material";
import RepoCard from "../components/RepoCard";
import RepoCardSkeleton from "../components/RepoCardSkeleton";

const UserProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const {
    userProfile,
    profileLoading,
    profileError,
    repos,
    repoLoading,
    fetchUserProfile,
    fetchRepos
  } = useUserStore();

  useEffect(() => {
    if (username) {
      fetchUserProfile(username);
      fetchRepos(username);
    }
  }, [username, fetchUserProfile, fetchRepos]);

  if (profileLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (profileError) {
    return (
      <Typography color="error" align="center" mt={4}>
        {profileError}
      </Typography>
    );
  }

  if (!userProfile) {
    return (
      <Typography align="center" mt={4}>
        No user data available.
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={5}>
        <UserProfileCard user={userProfile} />
      </Grid>
      <Grid item xs={12} md={4} lg={7}>
        <Typography variant="h6" mb={2}>
          Repositories
        </Typography>
        {repoLoading ? (
          Array.from({ length: 5 }).map((_, i) => <RepoCardSkeleton key={i} />)
        ) : repos.length > 0 ? (
          repos.map((repo) => (
            <RepoCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              stars={repo.stargazers_count}
              url={repo.html_url}
            />
          ))
        ) : (
          <Typography variant="body1" color="text.secondary" mt={2}>
            No repositories found.
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default UserProfilePage;
