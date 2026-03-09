import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#1976d2",
    },

    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },

    text: {
      primary: "#171717",
      secondary: "#666666",
    },
  },

  typography: {
    fontFamily: "roboto, Arial, Helvetica, sans-serif",

    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    body1: { fontSize: "14px", textAlign: "justify" },
    subtitle1: { fontSize: "12px", textAlign: "justify", fontStyle: "italic" },
  },

  shape: {
    borderRadius: 8,
  },
});

export default theme;
