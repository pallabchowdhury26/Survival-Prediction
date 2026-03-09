"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
