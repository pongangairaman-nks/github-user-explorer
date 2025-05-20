import React from "react";
import { Card, Skeleton, Box } from "@mui/material";

const UserCardSkeleton: React.FC = () => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 2,
        px: 2,
        py: 1
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width={120} height={24} />
      </Box>
      <Skeleton variant="rounded" width={100} height={32} />
    </Card>
  );
};

export default UserCardSkeleton;
