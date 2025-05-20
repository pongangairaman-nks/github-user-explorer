import React from "react";
import { Card, CardContent, Skeleton, Box } from "@mui/material";

const RepoCardSkeleton: React.FC = () => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Skeleton variant="text" width="60%" height={24} />
          <Skeleton variant="circular" width={24} height={24} />
        </Box>
        <Skeleton variant="text" width="100%" height={18} sx={{ mt: 1 }} />
        <Skeleton variant="text" width="80%" height={18} />
      </CardContent>
    </Card>
  );
};

export default RepoCardSkeleton;
