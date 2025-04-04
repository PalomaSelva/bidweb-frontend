import "@/index.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";
export function App() {
  return (
    <HelmetProvider>
      <Toaster />
      <Helmet titleTemplate="%s | SalesTrack" />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
