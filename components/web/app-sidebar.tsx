import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import {
  Group,
  Heart,
  Home,
  Image,
  Navigation,
  Settings,
  Video,
} from "lucide-react";
import { SidebarCollapseButtom } from "./sidebar-collapse-buttom";
import { SidebarMenuItems } from "./sidebar-menu-items";
import { UserDropdown } from "./user-dropdown";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <h1 className="group-data-[collapsible=icon]:hidden text-primary font-bold text-2xl p-3 md:p-6 font-serif">
          Pexels
        </h1>
        <SidebarMenu>
          <SidebarCollapseButtom />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <span className="group-data-[collapsible=icon]:hidden">Menus</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItems icon={Home} link="/" title="Home" />
              <SidebarMenuItems
                icon={Navigation}
                link="/explore"
                title="Explore"
              />
              <SidebarMenuItems icon={Image} link="/phots" title="Photos" />
              <SidebarMenuItems icon={Video} link="/videos" title="Videos" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>
            <span className="group-data-[collapsible=icon]:hidden">
              Labriry
            </span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItems
                icon={Group}
                link="/collections"
                title="Collections"
              />
              <SidebarMenuItems
                icon={Heart}
                link="/favorites"
                title="Favorites"
              />
              <SidebarMenuItems
                icon={Settings}
                link="/settings"
                title="Settings"
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserDropdown username="Edson Gaspar" ocupation="Engenheiro" />
      </SidebarFooter>
    </Sidebar>
  );
}
