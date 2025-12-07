import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, Bell, Home, List, PenSquare, Users, Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { currentUser } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import MyBlogPlusModal from "@/components/MyBlogPlusModal";

export function Header() {
  const [location, setLocation] = useLocation();
  const [isPlusModalOpen, setIsPlusModalOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: List, label: "Following", href: "/following" },
    { icon: PenSquare, label: "Answer", href: "/answer" },
    { icon: Users, label: "Spaces", href: "/spaces" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
        <div className="container mx-auto flex h-14 items-center px-4 md:px-24 gap-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer mr-4 shrink-0">
              <span className="text-2xl font-serif font-bold text-destructive tracking-tight text-[#b92b27]">
                MyBlog
              </span>
            </div>
          </Link>

          {/* Navigation Icons (Center-Left) */}
          <nav className="hidden md:flex items-center gap-1 flex-1 max-w-md">
            {navItems.map((item) => {
              const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href}>
                  <div className="relative group px-1">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={cn(
                            "flex items-center justify-center h-12 w-14 rounded-md transition-colors cursor-pointer hover:bg-secondary/50",
                            isActive
                              ? "text-[#b92b27] border-b-2 border-[#b92b27]"
                              : "text-muted-foreground hover:text-[#b92b27]"
                          )}
                        >
                          <item.icon className={cn("h-6 w-6", isActive && "fill-current")} strokeWidth={isActive ? 2.5 : 2} />
                          {item.label === "Notifications" && (
                            <span className="absolute top-3 right-3 h-2 w-2 bg-destructive rounded-full border border-background" />
                          )}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex relative flex-1 max-w-md mx-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search MyBlog"
              className="pl-9 h-9 bg-secondary/30 border-border/50 hover:border-primary/30 focus:bg-background focus:border-primary/50 transition-all rounded-sm"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden lg:flex rounded-full text-muted-foreground gap-1 border border-transparent hover:bg-secondary/50"
              onClick={() => setIsPlusModalOpen(true)}
            >
              <span className="text-xs font-medium">Try MyBlog+</span>
            </Button>

            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground rounded-full">
              <Globe className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0 overflow-hidden ring-1 ring-border hover:ring-primary/20 transition-all">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                    <AvatarFallback>L</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64" align="end" forceMount>
                <DropdownMenuLabel className="font-normal p-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                      <AvatarFallback className="bg-green-600 text-white text-lg">L</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-base font-semibold leading-none text-gray-900">{currentUser.name}</p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="my-0" />
                <DropdownMenuItem asChild className="cursor-pointer py-3 px-4 hover:bg-gray-50">
                  <Link href="/messages">
                    <span className="text-base text-gray-900 font-normal">Messages</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer py-3 px-4 hover:bg-gray-50">
                  <Link href="/create-ad">
                    <span className="text-base text-gray-900 font-normal">Create Ad</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer py-3 px-4 hover:bg-gray-50">
                  <Link href="/monetization">
                    <span className="text-base text-gray-900 font-normal">Monetization</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer py-3 px-4 hover:bg-gray-50">
                  <span className="text-base text-gray-900 font-normal">Your content & stats</span>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer py-3 px-4 hover:bg-gray-50">
                  <Link href="/bookmarks">
                    <span className="text-base text-gray-900 font-normal">Bookmarks</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer py-3 px-4 hover:bg-gray-50">
                  <Link href="/drafts">
                    <span className="text-base text-gray-900 font-normal">Drafts</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer py-3 px-4 hover:bg-gray-50">
                  <span className="text-base text-gray-900 font-normal">Try MyBlog+</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-0" />
                <DropdownMenuItem asChild className="cursor-pointer py-3 px-4 hover:bg-gray-50">
                  <Link href="/darkmode">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-base text-gray-900 font-normal">Dark mode</span>
                      <span className="text-xs text-blue-600 font-semibold">AUTO</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer py-3 px-4 hover:bg-gray-50">
                  <Link href="/settings">
                    <span className="text-base text-gray-900 font-normal">Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer py-3 px-4 hover:bg-gray-50">
                  <Link href="/languages">
                    <span className="text-base text-gray-900 font-normal">Languages</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer py-3 px-4 hover:bg-gray-50">
                  <Link href="/help">
                    <span className="text-base text-gray-900 font-normal">Help</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer py-3 px-4 hover:bg-gray-50">
                  <span className="text-base text-gray-900 font-normal">Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button size="sm" className="rounded-full bg-[#b92b27] hover:bg-[#a32420] text-white font-medium px-4 h-8">
              Add question
            </Button>
          </div>
        </div>
      </header>

      <MyBlogPlusModal isOpen={isPlusModalOpen} onClose={() => setIsPlusModalOpen(false)} />
    </>
  );
}
