import React from "react";
import { Skeleton, Box, Avatar, Grid, Divider, Paper } from "@mui/material";
import colors from "../constants/colors";

const UserProfileCardSkeleton: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        mb: 4,
        background: `linear-gradient(135deg, ${colors.blueLight4} 0%, ${colors.purpleLight5} 100%)`
      }}
    >
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Skeleton variant="circular">
            <Avatar sx={{ width: 180, height: 180 }} />
          </Skeleton>
        </Grid>

        <Grid item xs={12} sm={9}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start"
            }}
          >
            <Box>
              <Skeleton variant="text" width={200} height={40} />
              <Skeleton variant="text" width={120} height={24} />
            </Box>

            <Skeleton
              variant="rectangular"
              width={160}
              height={36}
              sx={{ borderRadius: 1 }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Skeleton variant="text" width="40%" height={20} />
            <Box sx={{ mx: 2 }}>
              <Divider orientation="vertical" />
            </Box>
            <Skeleton variant="text" width="20%" height={20} />
          </Box>

          <Grid container spacing={6} sx={{ mt: 2 }}>
            {["Followers", "Following", "Repositories", "Gists"].map(
              (_, index) => (
                <Grid item key={index}>
                  <Skeleton variant="text" width={40} height={32} />
                  <Skeleton variant="text" width={70} height={20} />
                </Grid>
              )
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserProfileCardSkeleton;
