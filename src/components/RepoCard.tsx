import React from "react";
import { Card, CardContent, Typography, Link, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface RepoCardProps {
  name: string;
  description: string | null;
  stars: number;
  url: string;
}

const RepoCard: React.FC<RepoCardProps> = ({
  name,
  description,
  stars,
  url
}) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link
            href={url}
            target="_blank"
            rel="noopener"
            underline="hover"
            variant="h6"
          >
            {name}
          </Link>
          <Box display="flex" alignItems="center" gap={0.5}>
            <StarIcon fontSize="small" />
            <Typography variant="body2">{stars}</Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {description || "No description provided."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RepoCard;
