"use client";
import Nav from "@components/Nav";
import { SessionProvider } from "next-auth/react";
import "@styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const layout = ({ children }) => {
  return (
    <html>
      <title>IssueNest</title>
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <SessionProvider>
            <Nav />
            {children}
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default layout;
