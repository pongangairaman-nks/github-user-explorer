import { TextField, InputAdornment, Box, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useUserStore } from "../store/userStore";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import colors from "../constants/colors";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  //   const [value, setValue] = useState("");
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
        padding: 4,
        background: `linear-gradient(135deg, ${colors.hoverBorder} 0%, ${colors.darkPurple2} 100%)`,
        borderRadius: 2
      }}
    >
      <Grid
        item
        md={12}
        sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <Box>
          <Typography
            sx={{ color: colors.white, pb: 2, fontWeight: 600, fontSize: 24 }}
          >
            GitHub User Explorer
          </Typography>
        </Box>
      </Grid>
      <Grid item md={12}>
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
        md={9}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            mt: 4,
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
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
                height: "44px",
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
            mt: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Typography sx={{ color: colors.white, fontSize: 18 }}>
            Search for GitHub users and explore their profiles and repositories
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        md={3}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 5,
            mb: 3
          }}
        >
          <GitHubIcon sx={{ fontSize: 80, color: colors.white, mr: 2 }} />
        </Box>
      </Grid>
    </Grid>
  );
}
