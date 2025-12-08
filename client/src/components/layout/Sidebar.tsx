import React from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  Hash,
  Bell,
  User,
  Settings,
  LogOut,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TranslatedText } from '@/hooks/useTranslation';


const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Users, label: "Following", href: "/following" },
  { icon: Hash, label: "Topics", href: "/topics" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar({ className }: { className?: string }) {
  const [location] = useLocation();

  return (
    <aside className={cn("w-64 hidden md:flex flex-col h-[calc(100vh-4rem)] sticky top-16 pt-6 pb-6", className)}>
      <nav className="space-y-1 px-2">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer group",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}
                />
                <TranslatedText>{item.label}</TranslatedText>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-6">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/10">
          <h4 className="text-sm font-semibold text-foreground mb-1">Nexus Pro</h4>
          <p className="text-xs text-muted-foreground mb-3">Unlock analytics & exclusive badges.</p>
          <Button size="sm" className="w-full bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20">
            Upgrade
          </Button>
        </div>
      </div>
    </aside>
  );
}