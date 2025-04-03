import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div>
      <h1>Cavbeçalho</h1>
      <Outlet />
    </div>
  );
}
