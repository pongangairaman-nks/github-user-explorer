import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import UserProfileCard from "../components/UserProfileCard";
import {
  Typography,
  Grid,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent
} from "@mui/material";
import RepoCard from "../components/RepoCard";
import RepoCardSkeleton from "../components/RepoCardSkeleton";
import UserProfileCardSkeleton from "../components/UserProfileCardSkeleton";

const UserProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const {
    userProfile,
    profileLoading,
    repos,
    repoLoading,
    totalRepos,
    perPage,
    repoPage,
    setPerPage,
    fetchUserProfile,
    fetchRepos,
    fetchRepoPage
  } = useUserStore();

  const totalPages = Math.ceil(totalRepos / perPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (page: number) => {
    if (userProfile) fetchRepoPage(userProfile.login, page);
  };

  const handlePerPageChange = (event: SelectChangeEvent<number>) => {
    const newPerPage = parseInt(event.target.value as string, 10);
    setPerPage(newPerPage);
    if (userProfile) fetchRepoPage(userProfile.login, 1);
  };

  useEffect(() => {
    if (username) {
      fetchUserProfile(username);
      fetchRepos(username);
    }
  }, [username, fetchUserProfile, fetchRepos]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={5}>
        {profileLoading ? (
          <UserProfileCardSkeleton />
        ) : userProfile ? (
          <UserProfileCard user={userProfile} />
        ) : (
          <Typography align="center" mt={4}>
            No user data available.
          </Typography>
        )}
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
        <Box
          mt={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <FormControl sx={{ minWidth: 120, mb: 2 }}>
            <InputLabel id="per-page-label">Per Page</InputLabel>
            <Select
              labelId="per-page-label"
              value={perPage}
              label="Per Page"
              onChange={handlePerPageChange}
            >
              {[5, 10, 20, 30].map((count) => (
                <MenuItem key={count} value={count}>
                  {count}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box display="flex" gap={1} flexWrap="wrap">
            {pages.map((page) => (
              <Button
                key={page}
                variant={repoPage === page ? "contained" : "outlined"}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserProfilePage;
