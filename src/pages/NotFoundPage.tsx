import { Box, Typography, Link } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="transaparent"
    >
      <Box textAlign="center">
        <Typography variant="h2" fontWeight="bold" mb={2}>
          404
        </Typography>
        <Typography variant="h6" color="textSecondary" mb={2}>
          Oops! Page not found
        </Typography>
        <Link href="/" color="primary" underline="hover">
          Return to Home
        </Link>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
