import "@/styles/globals.css";

import { AppSidebar } from "@/components/navigation/AppSidebar";
import Dashboard from "@/components/Dashboard";
import { Public_Sans } from "next/font/google";

import { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Graph Visualizer",
  description: "Graph Visualizer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const publicSans = Public_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${publicSans.className}`}>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <Dashboard>{children}</Dashboard>
        </SidebarProvider>
      </body>
    </html>
  );
}
