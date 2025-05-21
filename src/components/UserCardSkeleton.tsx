import React from "react";
import { Card, Skeleton, Box } from "@mui/material";
import colors from "../constants/colors";

const UserCardSkeleton: React.FC = () => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 1.5,
        px: 2,
        py: 2.5,
        background: `linear-gradient(135deg, ${colors.blueLight4} 0%, ${colors.purpleLight5} 100%)`,
        borderRadius: 2
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Skeleton
          variant="circular"
          width={76}
          height={76}
          sx={{ bgcolor: colors.skeletonBg }}
        />
        <Box>
          <Skeleton
            variant="text"
            width={140}
            height={24}
            sx={{ bgcolor: colors.skeletonBg, mb: 1 }}
          />
          <Skeleton
            variant="text"
            width={100}
            height={20}
            sx={{ bgcolor: colors.skeletonBg }}
          />
        </Box>
      </Box>

      <Skeleton
        variant="rounded"
        width={100}
        height={32}
        sx={{
          borderRadius: "4px",
          bgcolor: colors.skeletonBg
        }}
      />
    </Card>
  );
};

export default UserCardSkeleton;
