import * as React from "react";

import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { PieChartIcon, TerminalIcon, PackageIcon } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import type { FileRouteTypes } from "@/routeTree.gen";

type AppRouteTo = FileRouteTypes["to"];

const data = {
  navMain: [],
  navSecondary: [],
  projects: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: <PieChartIcon />,
    },
    {
      name: "Products",
      url: "/dashboard/products",
      icon: <PackageIcon />,
    },
  ] as { name: string; url: AppRouteTo; icon: React.ReactNode }[],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { loggedUser, handleLogout } = useAuth();
  const firstName = loggedUser?.firstName ?? "";
  const lastName = loggedUser?.lastName ?? "";
  const fullName = `${firstName} ${lastName}`.trim();

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<button type="button" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <TerminalIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {loggedUser?.company?.name}
                </span>
                <span className="truncate text-xs">
                  {loggedUser?.company?.title}
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          handleLogout={handleLogout}
          user={{
            avatar: loggedUser?.image || "",
            email: loggedUser?.email || "",
            name: fullName,
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
