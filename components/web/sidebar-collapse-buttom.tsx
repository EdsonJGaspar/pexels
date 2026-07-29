"use client";

import { PanelLeft } from "lucide-react";
import { SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar";

export function SidebarCollapseButtom() {
  const { toggleSidebar } = useSidebar();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton onClick={toggleSidebar}>
        <PanelLeft />
        <span className="group-data-[collapsible=icon]:hidden">Recolher</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
