import React from "react";
import { Card, Skeleton, Box, Avatar } from "@mui/material";

const UserProfileCardSkeleton: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 4, p: 2 }}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Skeleton variant="circular">
          <Avatar sx={{ width: 120, height: 120 }} />
        </Skeleton>
        <Skeleton variant="text" width="50%" height={32} />
        <Skeleton variant="text" width="80%" height={24} />
        <Box display="flex" justifyContent="space-around" width="100%" mt={2}>
          <Box textAlign="center">
            <Skeleton variant="text" width={30} height={20} />
            <Skeleton variant="text" width={60} height={16} />
          </Box>
          <Box textAlign="center">
            <Skeleton variant="text" width={30} height={20} />
            <Skeleton variant="text" width={60} height={16} />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default UserProfileCardSkeleton;
