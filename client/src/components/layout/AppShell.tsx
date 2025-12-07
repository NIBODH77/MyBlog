import React from "react";
import { Header } from "./Header";
import { RightSidebar } from "./RightSidebar";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

interface AppShellProps {
  children: React.ReactNode;
  hideRightSidebar?: boolean;
  hideSidebar?: boolean; // Kept for compatibility but unused
}

export function AppShell({ children, hideRightSidebar = false }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#F1F2F2] dark:bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Header />
      
      <div className="container mx-auto px-0 md:px-24 flex justify-center gap-6 py-6">
        {/* Main Content */}
        <main className="flex-1 min-w-0 max-w-[800px]">
          {children}
        </main>

        {/* Right Sidebar */}
        {!hideRightSidebar && (
          <div className="hidden lg:block w-[300px] shrink-0">
             <RightSidebar />
          </div>
        )}
      </div>
      
      <Toaster />
    </div>
  );
}
