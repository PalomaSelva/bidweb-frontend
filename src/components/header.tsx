import { Separator } from "@radix-ui/react-separator";
import { ChartNoAxesCombined, Home, ShoppingCart } from "lucide-react";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme/theme-toggle";
import { AccountMenu } from "./account-menu";

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <ChartNoAxesCombined size={26} className="text-primary" />

        <Separator
          orientation="vertical"
          className="bg-muted-foreground/25 h-6 w-[1px]"
        />

        <nav className="flex w-full items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home size={20} />
            Início
          </NavLink>
          <NavLink to="/list">
            <ShoppingCart size={20} />
            Pedidos
          </NavLink>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <AccountMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}
