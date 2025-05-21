import { createTheme } from "@mui/material/styles";
import colors from "../constants/colors";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `
            radial-gradient(circle at top left, ${colors.purpleLight}, transparent 50%),
            radial-gradient(circle at top right, ${colors.blueLightest}, transparent 50%),
            radial-gradient(circle at bottom right, ${colors.blueLight}, transparent 50%),
            radial-gradient(circle at bottom left, ${colors.secondaryPurple}, transparent 50%)
          `,
          minHeight: "100vh",
          margin: 0,
          padding: 0
        }
      }
    }
  }
});

export default theme;
