import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

type SidebarMenuItems = {
  title: string;
  link: string;
  icon?: React.ElementType;
};
export function SidebarMenuItems({
  title,
  link,
  icon: Icon,
}: SidebarMenuItems) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        render={
          <a href={link} className="">
            {Icon && <Icon />}
            <span className="group-data-[collapsible=icon]:hidden font-medium">
              {title}
            </span>
          </a>
        }
      />
    </SidebarMenuItem>
  );
}
