import { Box, Grid, Typography, type SelectChangeEvent } from "@mui/material";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import { useEffect } from "react";
import { useUserStore } from "../store/userStore";
import UserCardSkeleton from "../components/UserCardSkeleton";
import { useNavigate } from "react-router-dom";
import PaginationServerSide from "../components/PaginationServerSide";
import colors from "../constants/colors";
import { Search } from "@mui/icons-material";

export default function SearchPage() {
  const navigate = useNavigate();
  const {
    users,
    usersLoading,
    totalUsers,
    usersPerPage,
    usersCurrentPage,
    setUsersCurrentPage,
    setUsersPerPage,
    fetchUsersWithPage,
    query
  } = useUserStore();

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchUsersWithPage(query.trim());
    }, 500);

    return () => clearTimeout(debounce);
  }, [query, fetchUsersWithPage]);

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const handlePageClick = (page: number) => {
    setUsersCurrentPage(page);
    fetchUsersWithPage(query.trim());
  };

  const handlePerPageChange = (event: SelectChangeEvent<number>) => {
    const newPerPage = parseInt(event.target.value as string, 10);
    setUsersPerPage(newPerPage);
    setUsersCurrentPage(1);
    fetchUsersWithPage(query.trim());
  };

  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <SearchBar onSearch={handleSearch} />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          minHeight: "400px",
          mt: 4
        }}
      >
        {(usersLoading || users.length > 0) && (
          <Box sx={{ mb: 2, ml: 0.5 }}>
            <Typography
              fontSize={20}
              fontWeight={600}
              color={colors.hoverBorder}
            >
              {`Search results for "${query}"`}
            </Typography>
          </Box>
        )}
        {usersLoading ? (
          Array.from({ length: 5 }).map((_, i) => <UserCardSkeleton key={i} />)
        ) : users.length > 0 ? (
          users.map((user) => (
            <UserCard
              key={user.id}
              avatarUrl={user.avatar_url}
              githubUrl={user.html_url}
              username={user.login}
              onClick={() => navigate(`/user/${user.login}`)}
            />
          ))
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: `1px solid ${colors.purpleLight}`,
              borderRadius: "4px",
              padding: 4
            }}
          >
            <Search sx={{ fontSize: 80, color: "#c497e3" }} />
            <Typography mt={2} fontSize={26} fontWeight={600} color={"#c497e3"}>
              Search for GitHub users
            </Typography>
            <Typography fontSize={18} color={"#c497e3"}>
              Enter a username in the search box above
            </Typography>
          </Box>
        )}
        {users?.length > 0 && (
          <PaginationServerSide
            currentPage={usersCurrentPage}
            perPage={usersPerPage}
            totalCount={totalUsers}
            onPageChange={handlePageClick}
            onPerPageChange={handlePerPageChange}
          />
        )}
      </Grid>
    </Grid>
  );
}
