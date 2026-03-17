"use client"

import * as React from "react"
import { useNavigate } from "@tanstack/react-router"
import type { FileRouteTypes } from "@/routeTree.gen"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

type AppRouteTo = FileRouteTypes["to"]

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: AppRouteTo
    icon: React.ReactNode
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const navigate = useNavigate()

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                size="sm"
                render={
                  <button
                    type="button"
                    onClick={() => navigate({ to: item.url })}
                  />
                }
              >
                {item.icon}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
