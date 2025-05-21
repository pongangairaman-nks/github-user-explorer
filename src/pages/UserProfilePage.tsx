import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import UserProfileCard from "../components/UserProfileCard";
import { Typography, Grid, Box, type SelectChangeEvent } from "@mui/material";
import RepoCard from "../components/RepoCard";
import RepoCardSkeleton from "../components/RepoCardSkeleton";
import UserProfileCardSkeleton from "../components/UserProfileCardSkeleton";
import PaginationServerSide from "../components/PaginationServerSide";
import { ArrowBack } from "@mui/icons-material";

const UserProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
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
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <ArrowBack fontSize="small" />
          <Typography align="center" fontSize={16} ml={1}>
            Back to Search
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          mt: 2,
          width: "100%",
          borderRadius: 2
        }}
      >
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
      <Grid item container spacing={3} xs={12} md={12} lg={12}>
        {repoLoading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <Grid item xs={12} md={6} lg={6}>
              <RepoCardSkeleton key={i} />
            </Grid>
          ))
        ) : repos.length > 0 ? (
          repos.map((repo) => (
            <Grid item xs={12} md={6} lg={6}>
              <RepoCard
                key={repo.id}
                name={repo.name}
                description={repo.description}
                stars={repo.stargazers_count}
                url={repo.html_url}
                updatedDate={repo.updated_at}
                forks={repo.forks_count}
                language={repo.language}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary" mt={2}>
            No repositories found.
          </Typography>
        )}
      </Grid>
      <Grid item container xs={12} md={12} lg={12}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={"100%"}
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
