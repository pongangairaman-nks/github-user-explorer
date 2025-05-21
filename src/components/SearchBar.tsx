import { TextField, InputAdornment, Box, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useUserStore } from "../store/userStore";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import colors from "../constants/colors";
import type { SearchBarProps } from "../types/search";

export default function SearchBar({ onSearch }: SearchBarProps) {
  const { query, setQuery } = useUserStore();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setQuery(newValue);
    onSearch(newValue);
  };

  return (
    <Grid
      container
      sx={{
        width: "100%",
        padding: { xs: 2, sm: 3, md: 4 },
        background: `linear-gradient(135deg, ${colors.hoverBorder} 0%, ${colors.darkPurple2} 100%)`,
        borderRadius: { xs: 1, sm: 2 }
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <Box>
          <Typography
            sx={{
              color: colors.white,
              pb: { xs: 1, sm: 1.5, md: 2 },
              fontWeight: 600,
              fontSize: { xs: 20, sm: 22, md: 24 },
              textAlign: { xs: "center", sm: "left" },
              width: { xs: "100%", sm: "auto" }
            }}
          >
            GitHub User Explorer
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            height: "1px",
            width: "100%",
            backgroundColor: colors.lightGrey
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          order: { xs: 1, md: 3 }
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 2, sm: 3, md: 5 },
            mb: { xs: 2, sm: 2, md: 3 }
          }}
        >
          <GitHubIcon
            sx={{
              fontSize: { xs: 60, sm: 70, md: 80 },
              color: colors.white,
              mr: { xs: 0, md: 2 }
            }}
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={9}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "start" },
          justifyContent: "center",
          order: { xs: 2, md: 2 }
        }}
      >
        <Box
          sx={{
            mt: { xs: 1, sm: 3, md: 4 },
            width: { xs: "100%", sm: "90%", md: "80%" },
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" }
          }}
        >
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder="Search GitHub users..."
            value={query}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: colors.white }} />
                </InputAdornment>
              ),
              sx: {
                height: { xs: "40px", sm: "44px" },
                bgcolor: colors.grey,
                color: "white",
                "&::placeholder": {
                  color: colors.grey4
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: colors.grey2
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: colors.grey3
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white"
                }
              }
            }}
          />
        </Box>

        <Box
          sx={{
            mt: { xs: 1, sm: 1.5, md: 2 },
            mb: { xs: 2, md: 0 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2, sm: 3, md: 0 }
          }}
        >
          <Typography
            sx={{
              color: colors.white,
              fontSize: { xs: 14, sm: 16, md: 18 },
              textAlign: { xs: "center", md: "left" }
            }}
          >
            Search for GitHub users and explore their profiles and repositories
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
