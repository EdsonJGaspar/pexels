import { BadgeCheckIcon, Bell, BellIcon, LogOutIcon } from "lucide-react";
import { ModeToggle } from "../buttom-toogle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserDropdown } from "../user-dropdown";
import { LocaleSwitcher } from "../localswitch";

export function Header() {
  return (
    <header className="border-b flex items-center gap-5 justify-end px-6 py-4">
      <LocaleSwitcher />
      <ModeToggle />
      <Bell />

      <UserDropdown />
    </header>
  );
}
