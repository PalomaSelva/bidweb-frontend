import "@/index.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-providers";
export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="sales-theme">
        <Toaster />
        <Helmet titleTemplate="%s | SalesTrack" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
