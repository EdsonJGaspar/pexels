import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Group,
  Heart,
  Home,
  Image,
  Navigation,
  Settings,
  User,
  Video,
} from "lucide-react";
import { SidebarCollapseButtom } from "./sidebar-collapse-buttom";
import { SidebarMenuItems } from "./sidebar-menu-items";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <h1 className="group-data-[collapsible=icon]:hidden text-primary font-bold text-2xl font-heading p-3 md:p-6">
          Pexels
        </h1>
        <SidebarMenu>
          <SidebarCollapseButtom />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <span className="group-data-[collapsible=icon]:hidden">Label</span>
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
      <SidebarFooter className="flex flex-row gap-2 items-center">
        <User />
        <span className="group-data-[collapsible=icon]:hidden">User</span>
      </SidebarFooter>
    </Sidebar>
  );
}
