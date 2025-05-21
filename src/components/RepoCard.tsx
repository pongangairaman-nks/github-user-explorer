import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { CallSplit as CallSplitIcon } from "@mui/icons-material";
import { formatDate } from "../utils/dateUtils";
import languageColors from "../constants/languageColors";
import type { RepositoryCardProps } from "../types/profile";

const RepoCard: React.FC<RepositoryCardProps> = ({
  name,
  description,
  stars,
  updatedDate,
  forks,
  language
}) => {
  const formattedDate = formatDate(updatedDate);

  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3 },
        mb: { xs: 0, sm: 2 },
        height: { xs: "auto", sm: 180 },
        minHeight: { xs: 180, sm: 180 },
        background: `linear-gradient(135deg, #ffffffe6 0%, #681ddb47 100%)`,
        boxShadow: "0 2px 8px rgba(186, 169, 236, 0.12)",
        borderRadius: { xs: 2, sm: 4 },
        border: "1px solid transparent",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          borderColor: "#7C81DD",
          boxShadow: "0 4px 12px rgba(186, 169, 236, 0.25)"
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden"
      }}
    >
      <Box sx={{ mb: { xs: 1, sm: 0 } }}>
        <Typography
          variant="h6"
          color="#868cff"
          fontWeight={600}
          gutterBottom
          sx={{
            display: "inline-block",
            fontSize: { xs: "1rem", sm: "1.25rem" },
            lineHeight: { xs: 1.4, sm: 1.5 },
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "100%"
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="body2"
          color="#8e93ef"
          sx={{
            fontSize: { xs: "0.75rem", sm: "0.875rem" }
          }}
        >
          Updated on {formattedDate}
        </Typography>
      </Box>

      {description && (
        <Typography
          variant="body1"
          color="#5c548c"
          sx={{
            mt: 1,
            flexGrow: 1,
            fontSize: { xs: "0.875rem", sm: "1rem" },
            display: "-webkit-box",
            WebkitLineClamp: { xs: 2, sm: 3 },
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {description}
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          mt: { xs: 1.5, sm: 2 },
          gap: { xs: 1.5, sm: 2 }
        }}
      >
        {language && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0
            }}
          >
            <Box
              sx={{
                width: { xs: 10, sm: 12 },
                height: { xs: 10, sm: 12 },
                borderRadius: "50%",
                backgroundColor: languageColors[language] || "#868cff",
                mr: 0.8
              }}
            />
            <Typography
              variant="body2"
              color="#868cff"
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.875rem" }
              }}
            >
              {language}
            </Typography>
          </Box>
        )}

        {stars > 0 && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0
            }}
          >
            <StarIcon
              sx={{
                fontSize: { xs: 14, sm: 16 },
                mr: 0.5,
                color: "#868cff"
              }}
            />
            <Typography
              variant="body2"
              color="#868cff"
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.875rem" }
              }}
            >
              {stars}
            </Typography>
          </Box>
        )}

        {forks > 0 && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0
            }}
          >
            <CallSplitIcon
              sx={{
                fontSize: { xs: 14, sm: 16 },
                mr: 0.5,
                color: "#868cff"
              }}
            />
            <Typography
              variant="body2"
              color="#868cff"
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.875rem" }
              }}
            >
              {forks}
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default RepoCard;
