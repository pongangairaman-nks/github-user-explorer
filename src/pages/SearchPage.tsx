import { Grid } from "@mui/material";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";

export default function SearchPage() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={5}>
        <SearchBar onSearch={handleSearch} />
      </Grid>
      <Grid item xs={12} md={4} lg={7}>
        <UserCard
          avatarUrl="https://avatars.githubusercontent.com/u/583231?v=4"
          username="octocat"
          onClick={() => console.log("Navigate to profile")}
        />
      </Grid>
    </Grid>
  );
}
