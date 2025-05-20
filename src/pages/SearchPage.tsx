import { Grid, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import { useEffect } from "react";
import { useUserStore } from "../store/userStore";
import UserCardSkeleton from "../components/UserCardSkeleton";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const navigate = useNavigate();
  const { results, loading, fetchUsers, query } = useUserStore();

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (query.trim()) fetchUsers(query.trim());
    }, 500);

    return () => clearTimeout(debounce);
  }, [query, fetchUsers]);

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={5}>
        <SearchBar onSearch={handleSearch} />
      </Grid>
      <Grid item xs={12} md={4} lg={7}>
        {loading ? (
          Array.from({ length: 5 }).map((_, i) => <UserCardSkeleton key={i} />)
        ) : results.length > 0 ? (
          results.map((user) => (
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
      </Grid>
    </Grid>
  );
}
