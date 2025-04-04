import { ChartNoAxesCombined } from "lucide-react";
import lightImage from "@/assets/sign-in.svg";
import darkImage from "@/assets/sign-in-dark.svg";
import { Outlet } from "react-router";
import { useTheme } from "@/components/theme/theme-providers";

export function AuthLayout() {
  const { theme } = useTheme();
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="border-foreground/5 bg-muted hidden h-full flex-col justify-between border-r p-10 md:flex">
        <div className="text-foreground flex items-center gap-2 text-lg">
          <ChartNoAxesCombined size={26} className="text-primary" />
          <span className="font-semibold">SalesTrack</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={theme == "dark" ? darkImage : lightImage}
            alt=""
            className="image w-[420px]"
          />
          <h2 className="mt-5 text-center text-3xl font-semibold tracking-tight text-gray-800 dark:text-violet-400">
            Monitore e otimize suas vendas
          </h2>
          <p className="text-muted-foreground mt-3 max-w-[540px] text-center text-lg">
            Gerencie suas vendas de forma eficiente e otimize suas estratégias
            de vendas.
          </p>
        </div>
        <footer className="text-sm">
          &copy; SalesTrack - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="col-span-2 flex flex-col items-center justify-center md:col-span-1">
        <Outlet />
      </div>
    </div>
  );
}
