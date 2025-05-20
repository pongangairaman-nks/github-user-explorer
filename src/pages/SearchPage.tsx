import { Box, Grid } from "@mui/material";

export default function SearchPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={5}>
        <Box>Search</Box>
      </Grid>
      <Grid item xs={12} md={4} lg={7}>
        <Box>Users List</Box>
      </Grid>
    </Grid>
  );
}
