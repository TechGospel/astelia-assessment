"use client";

import * as React from "react";
import { NavMain } from "@/components/navigation/NavMain";
import { NavMenu } from "@/components/navigation/NavMenu";
import { NavHeader } from "@/components/navigation/NavHeader";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

import { Separator } from "../ui/separator";
import {
  MenuItem1,
  MenuItem2,
  MenuItem3,
  MenuItem4,
  MenuItem5,
  MenuItem6,
  MenuItem7,
  MenuItem8,
  MenuItem9,
} from "../icons";

const data = {
  user: {
    name: "Lorem",
    email: "Lorem",
    avatar: "",
  },
  navMain: [
    {
      title: "Lorem",
      url: "#",
      icon: MenuItem1,
    },
    {
      title: "Lorem",
      url: "#",
      icon: MenuItem2,
    },
    {
      title: "Lorem",
      url: "#",
      icon: MenuItem3,
    },
    {
      title: "Lorem",
      url: "#",
      icon: MenuItem4,
      isActive: true,
    },
    {
      title: "Lorem",
      url: "#",
      icon: MenuItem5,
    },
    {
      title: "Lorem",
      url: "#",
      icon: MenuItem6,
    },
    {
      title: "Lorem",
      url: "#",
      icon: MenuItem7,
    },
    {
      title: "Lorem",
      url: "#",
      icon: MenuItem8,
    },
    {
      title: "Lorem",
      url: "#",
      icon: MenuItem9,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();
  return (
    <Sidebar
      className={!open ? "items-center" : ""}
      collapsible="icon"
      {...props}
    >
      <SidebarHeader className="p-0 pt-7">
        <NavHeader />
      </SidebarHeader>
      <SidebarContent className="">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <Separator />

        <NavMenu user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
