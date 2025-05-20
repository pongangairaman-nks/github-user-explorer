import { Box, Grid } from "@mui/material";
import SearchBar from "../components/SearchBar";

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
        <Box>Users List</Box>
      </Grid>
    </Grid>
  );
}
