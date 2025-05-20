import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { CallSplit as CallSplitIcon } from "@mui/icons-material";
import { formatDate } from "../utils/dateUtils";
import languageColors from "../constants/languageColors";

interface RepositoryCardProps {
  name: string;
  updatedDate: string;
  description?: string;
  language: string | null;
  stars: number;
  forks: number;
  url: string;
}

const RepoCard: React.FC<RepositoryCardProps> = ({
  name,
  description,
  stars,
  // url,
  updatedDate,
  forks,
  language
}) => {
  const formattedDate = formatDate(updatedDate);

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 2,
        height: 180,
        background: `linear-gradient(135deg, #ffffffe6 0%, #681ddb47 100%)`,
        boxShadow: "0 2px 8px rgba(186, 169, 236, 0.12)",
        borderRadius: 4,
        border: "1px solid transparent",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          borderColor: "#7C81DD",
          boxShadow: "0 4px 12px rgba(186, 169, 236, 0.25)",
          cursor: "pointer"
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Typography
        variant="h6"
        color="#868cff"
        fontWeight={600}
        gutterBottom
        sx={{
          display: "inline-block",
          "&:hover": {
            textDecoration: "underline"
          }
        }}
      >
        {name}
      </Typography>

      <Typography variant="body2" color="#8e93ef">
        Updated on {formattedDate}
      </Typography>

      {description && (
        <Typography variant="body1" color="#5c548c" sx={{ mt: 1, flexGrow: 1 }}>
          {description}
        </Typography>
      )}

      <Box sx={{ display: "flex", alignItems: "center", mt: 2, gap: 2 }}>
        {language && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: languageColors[language] || "#868cff",
                mr: 0.8
              }}
            />
            <Typography variant="body2" color="#868cff">
              {language}
            </Typography>
          </Box>
        )}

        {stars > 0 && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StarIcon sx={{ fontSize: 16, mr: 0.5, color: "#868cff" }} />
            <Typography variant="body2" color="#868cff">
              {stars}
            </Typography>
          </Box>
        )}

        {forks > 0 && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CallSplitIcon sx={{ fontSize: 16, mr: 0.5, color: "#868cff" }} />
            <Typography variant="body2" color="#868cff">
              {forks}
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default RepoCard;
