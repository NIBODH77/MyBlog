import React from "react";
import { Header } from "./Header";
import { RightSidebar } from "./RightSidebar";
import { MobileBottomNav } from "./MobileBottomNav";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

interface AppShellProps {
  children: React.ReactNode;
  hideRightSidebar?: boolean;
  hideSidebar?: boolean;
}

export function AppShell({ children, hideRightSidebar = false }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#F1F2F2] dark:bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Header />
      
      <div className="container mx-auto px-2 sm:px-4 md:px-24 flex justify-center gap-4 md:gap-6 py-4 md:py-6 pb-20 md:pb-6">
        {/* Main Content */}
        <main className="flex-1 min-w-0 w-full max-w-full md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px]">
          {children}
        </main>

        {/* Right Sidebar */}
        {!hideRightSidebar && (
          <div className="hidden lg:block w-[300px] shrink-0">
             <RightSidebar />
          </div>
        )}
      </div>
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
      
      <Toaster />
    </div>
  );
}
