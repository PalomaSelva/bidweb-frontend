import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, LogOut } from "lucide-react";
import { getProfile } from "@/api/get-profile";
import { useQuery } from "@tanstack/react-query";
import { removeAuthToken } from "@/lib/auth";
import { useNavigate } from "react-router";

export function AccountMenu() {
  const navigate = useNavigate();
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })


  function handleSignOut() {
    removeAuthToken();
    navigate('/sign-in');
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none"
        >
          {profile?.name}
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col p-1.5">
          <span className="font-medium">{profile?.name}</span>
          <span className="text-muted-foreground text-xs">
            {profile?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut size={16} />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
