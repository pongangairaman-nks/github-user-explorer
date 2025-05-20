import { Box, Grid } from "@mui/material";

export default function UserProfilePage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={5}>
        <Box>Profile</Box>
      </Grid>
      <Grid item xs={12} md={4} lg={7}>
        <Box>Respository List</Box>
      </Grid>
    </Grid>
  );
}
