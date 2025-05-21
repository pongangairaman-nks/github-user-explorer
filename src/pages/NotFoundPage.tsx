import { Box, Typography, Link } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="transparent"
      px={{ xs: 2, sm: 3 }}
    >
      <Box
        textAlign="center"
        maxWidth={{ xs: "280px", sm: "400px", md: "500px" }}
        py={{ xs: 4, sm: 5 }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          mb={{ xs: 1, sm: 1.5, md: 2 }}
          sx={{
            fontSize: { xs: "3rem", sm: "4rem", md: "6rem" }
          }}
        >
          404
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          mb={{ xs: 1.5, sm: 2 }}
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
            px: { xs: 1, sm: 2 }
          }}
        >
          Oops! Page not found
        </Typography>
        <Box
          component={Link}
          href="/"
          color="primary"
          underline="hover"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            display: "inline-block",
            mt: { xs: 1, sm: 1 },
            py: { xs: 1, sm: 1 }
          }}
        >
          Return to Home
        </Box>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
