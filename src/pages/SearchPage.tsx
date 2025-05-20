import { Grid, Typography, type SelectChangeEvent } from "@mui/material";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import { useEffect } from "react";
import { useUserStore } from "../store/userStore";
import UserCardSkeleton from "../components/UserCardSkeleton";
import { useNavigate } from "react-router-dom";
import PaginationServerSide from "../components/PaginationServerSide";

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
      if (query.trim()) fetchUsersWithPage(query.trim());
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
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={5}>
        <SearchBar onSearch={handleSearch} />
      </Grid>
      <Grid item xs={12} md={4} lg={7}>
        {usersLoading ? (
          Array.from({ length: 5 }).map((_, i) => <UserCardSkeleton key={i} />)
        ) : users.length > 0 ? (
          users.map((user) => (
            <UserCard
              key={user.id}
              avatarUrl={user.avatar_url}
              username={user.login}
              onClick={() => navigate(`/user/${user.login}`)}
            />
          ))
        ) : (
          <Typography variant="body1" color="text.secondary" mt={2}>
            User not found.
          </Typography>
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
