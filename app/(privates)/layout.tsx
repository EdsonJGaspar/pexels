import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/web/app-sidebar";
import { Header } from "@/components/web/header/header";
import { Chilanka } from "next/font/google";
import { ReactNode } from "react";

export default function LayoutPrivate({ children }: { children: ReactNode }) {
  return (
    <div>
      {" "}
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="border w-full">
            <Header />
            {children}
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </div>
  );
}
