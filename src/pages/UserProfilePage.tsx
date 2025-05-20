import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import UserProfileCard from "../components/UserProfileCard";
import { CircularProgress, Typography, Box, Grid } from "@mui/material";

const UserProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const { userProfile, profileLoading, profileError, fetchUserProfile } =
    useUserStore();

  useEffect(() => {
    if (username) {
      fetchUserProfile(username);
    }
  }, [username, fetchUserProfile]);

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
        <Box>Respository List</Box>
      </Grid>
    </Grid>
  );
};

export default UserProfilePage;
