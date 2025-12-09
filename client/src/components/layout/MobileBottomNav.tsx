import { Link, useLocation } from "wouter";
import { Home, Users, PenSquare, Bell, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: typeof Home;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Users, label: "Following", href: "/following" },
  { icon: PenSquare, label: "Answer", href: "/answer" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: Menu, label: "More", href: "/settings" },
];

export function MobileBottomNav() {
  const [location] = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-14 px-2">
        {navItems.map((item) => {
          const isActive = location === item.href || 
            (item.href !== "/" && item.href !== "/settings" && location.startsWith(item.href));
          
          return (
            <Link key={item.href} href={item.href}>
              <button
                className={cn(
                  "flex flex-col items-center justify-center w-full h-full px-3 py-1 rounded-lg transition-colors",
                  isActive
                    ? "text-[#b92b27]"
                    : "text-muted-foreground"
                )}
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
              >
                <item.icon 
                  className={cn(
                    "h-5 w-5 mb-0.5",
                    isActive && "fill-current"
                  )} 
                  strokeWidth={isActive ? 2.5 : 2} 
                />
                <span className="text-[10px] font-medium">{item.label}</span>
                {item.label === "Notifications" && (
                  <span className="absolute top-1 right-1/2 translate-x-3 h-2 w-2 bg-destructive rounded-full" />
                )}
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
