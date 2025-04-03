import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div>
      <h1>Cavbeçalho</h1>
      <Outlet />
    </div>
  );
}
