import { createBrowserRouter } from "react-router";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/sign-up";
import { SignIn } from "./pages/auth/sign-in";
import { Sales } from "./pages/app/sales/sales";
import { Dashboard } from "./pages/app/dashboard/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/sales",
        element: <Sales />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
]);
