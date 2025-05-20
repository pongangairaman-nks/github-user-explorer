import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import UserProfileCard from "../components/UserProfileCard";
import { Typography, Grid, Box, type SelectChangeEvent } from "@mui/material";
import RepoCard from "../components/RepoCard";
import RepoCardSkeleton from "../components/RepoCardSkeleton";
import UserProfileCardSkeleton from "../components/UserProfileCardSkeleton";
import PaginationServerSide from "../components/PaginationServerSide";

const UserProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const {
    userProfile,
    profileLoading,
    repos,
    repoLoading,
    totalRepos,
    reposPerPage,
    repoCurrentPage,
    setReposPerPage,
    fetchUserProfile,
    fetchReposWithPage
  } = useUserStore();

  const handlePageClick = (page: number) => {
    if (userProfile) fetchReposWithPage(userProfile.login, page);
  };

  const handlePerPageChange = (event: SelectChangeEvent<number>) => {
    const newPerPage = parseInt(event.target.value as string, 10);
    setReposPerPage(newPerPage);
    if (userProfile) fetchReposWithPage(userProfile.login, 1);
  };

  useEffect(() => {
    if (username) {
      fetchUserProfile(username);
      fetchReposWithPage(username, 1);
    }
  }, [username, fetchUserProfile, fetchReposWithPage]);

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
          <PaginationServerSide
            totalCount={totalRepos}
            perPage={reposPerPage}
            currentPage={repoCurrentPage}
            onPageChange={handlePageClick}
            onPerPageChange={handlePerPageChange}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserProfilePage;
