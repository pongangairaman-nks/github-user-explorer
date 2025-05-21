import React from "react";
import { Card, CardContent, Skeleton, Box } from "@mui/material";
import colors from "../constants/colors";

const RepoCardSkeleton: React.FC = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        mb: 2,
        height: 180,
        borderRadius: 4,
        background: `linear-gradient(135deg, ${colors.blueLight4} 0%, ${colors.purpleLight5} 100%)`,
        boxShadow: "0 2px 8px rgba(186, 169, 236, 0.12)"
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 3
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Skeleton
            variant="text"
            width="50%"
            height={28}
            sx={{ bgcolor: "rgba(134, 140, 255, 0.3)" }}
          />
          <Skeleton
            variant="circular"
            width={24}
            height={24}
            sx={{ bgcolor: "rgba(134, 140, 255, 0.3)" }}
          />
        </Box>

        <Skeleton
          variant="text"
          width="40%"
          height={20}
          sx={{ mt: 1, bgcolor: "rgba(142, 147, 239, 0.3)" }}
        />

        <Skeleton
          variant="text"
          width="100%"
          height={40}
          sx={{ mt: 1, bgcolor: "rgba(92, 84, 140, 0.3)" }}
        />

        <Box display="flex" gap={2} mt={2}>
          <Skeleton
            variant="circular"
            width={12}
            height={12}
            sx={{ bgcolor: "rgba(134, 140, 255, 0.3)" }}
          />
          <Skeleton
            variant="text"
            width={50}
            height={18}
            sx={{ bgcolor: "rgba(134, 140, 255, 0.3)" }}
          />

          <Skeleton
            variant="circular"
            width={16}
            height={16}
            sx={{ bgcolor: "rgba(134, 140, 255, 0.3)" }}
          />
          <Skeleton
            variant="text"
            width={30}
            height={18}
            sx={{ bgcolor: "rgba(134, 140, 255, 0.3)" }}
          />

          <Skeleton
            variant="circular"
            width={16}
            height={16}
            sx={{ bgcolor: "rgba(134, 140, 255, 0.3)" }}
          />
          <Skeleton
            variant="text"
            width={30}
            height={18}
            sx={{ bgcolor: "rgba(134, 140, 255, 0.3)" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default RepoCardSkeleton;
