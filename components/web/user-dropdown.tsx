import { BadgeCheckIcon, BellIcon, LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
type UserDropdownProps = {
  username?: string;
  ocupation?: string;
};
export function UserDropdown({ username, ocupation }: UserDropdownProps) {
  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="/eds.jpeg" alt="User" />
                <AvatarFallback>EG</AvatarFallback>
              </Avatar>
            </Button>
          }
        />
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BadgeCheckIcon />
              Perfil
            </DropdownMenuItem>

            <DropdownMenuItem>
              <BellIcon />
              Notificações
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOutIcon />
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <p className="group-data-[collapsible=icon]:hidden flex flex-col gap-.5">
        <span className="font-serif">{username}</span>
        <span className="text-sm text-foreground font-light">{ocupation}</span>
      </p>
    </div>
  );
}
