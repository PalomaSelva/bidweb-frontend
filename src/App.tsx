import "@/index.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-providers";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="sales-theme">
        <Toaster />
        <Helmet titleTemplate="%s | SalesTrack" />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
