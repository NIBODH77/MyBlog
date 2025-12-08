import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  Search,
  Bell,
  Home,
  List,
  PenSquare,
  Users,
  Globe,
  Menu,
  MessageCircle,
  Megaphone,
  DollarSign,
  BarChart3,
  Bookmark,
  FileText,
  Plus,
  Moon,
  Settings,
  HelpCircle,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { currentUser } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import AddQuestionModal from "@/components/AddQuestionModal";
import { TranslatedText } from "@/hooks/useTranslation";

export function Header() {
  const [location, setLocation] = useLocation();
  const [isAddQuestionOpen, setIsAddQuestionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };

    if (isProfileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: List, label: "Following", href: "/following" },
    { icon: PenSquare, label: "Answer", href: "/answer" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
  ];

  const menuItems = [
    { icon: MessageCircle, label: 'Messages', href: '/messages', divider: false },
    { icon: Megaphone, label: 'Create Ad', href: '/create-ad', divider: false },
    { icon: DollarSign, label: 'Monetization', href: '/monetization', divider: false },
    { icon: BarChart3, label: 'Your content & stats', href: '/stats', divider: false },
    { icon: Bookmark, label: 'Bookmarks', href: '/bookmarks', divider: false },
    { icon: FileText, label: 'Drafts', href: '/drafts', divider: false },
    { icon: Plus, label: 'Try MyBlog+', href: '#', divider: true },
  ];

  const bottomMenuItems = [
    { icon: Settings, label: 'Settings', href: '/settings', divider: false },
    { icon: Globe, label: 'Languages', href: '/languages', divider: false },
    { icon: HelpCircle, label: 'Help', href: '/help', divider: false },
    { icon: LogOut, label: 'Logout', href: '#', divider: false },
  ];

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
              data-testid="input-search"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex rounded-full text-muted-foreground gap-1 border border-transparent hover:bg-secondary/50"
              data-testid="button-try-plus"
            >
              <TranslatedText as="span" className="text-xs font-medium">Try MyBlog+</TranslatedText>
            </Button>

            {/* <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground rounded-full">
              <Globe className="h-5 w-5" />
            </Button> */}

            <div ref={dropdownRef} className="relative">
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full p-0 overflow-hidden ring-1 ring-border hover:ring-primary/20 transition-all"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                  <AvatarFallback className="bg-green-600 text-white">L</AvatarFallback>
                </Avatar>
              </Button>

              {/* Custom Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-slideDown z-50">
                  {/* User Profile Section */}
                  <div className="px-4 py-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                        <AvatarFallback className="bg-green-600 text-white font-semibold">L</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{currentUser.name}</div>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    {menuItems.map((item, index) => (
                      <React.Fragment key={index}>
                        {item.href === '#' ? (
                          <button
                            className="w-full px-4 py-2.5 flex items-center space-x-3 hover:bg-gray-50 transition-colors text-left"
                            onClick={() => {
                              if (item.label === 'Try MyBlog+') {
                                setIsPlusModalOpen(true);
                                setIsProfileDropdownOpen(false);
                              }
                            }}
                          >
                            <item.icon className="w-5 h-5 text-gray-600" />
                            <TranslatedText as="span" className="text-gray-700 text-sm">{item.label}</TranslatedText>
                          </button>
                        ) : (
                          <Link href={item.href}>
                            <button
                              className="w-full px-4 py-2.5 flex items-center space-x-3 hover:bg-gray-50 transition-colors text-left"
                              onClick={() => setIsProfileDropdownOpen(false)}
                            >
                              <item.icon className="w-5 h-5 text-gray-600" />
                              <TranslatedText as="span" className="text-gray-700 text-sm">{item.label}</TranslatedText>
                            </button>
                          </Link>
                        )}
                        {item.divider && <div className="border-t border-gray-200 my-2" />}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Dark Mode Toggle */}
                  <div className="px-4 py-2.5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer border-t border-gray-200">
                    <div className="flex items-center space-x-3">
                      <Moon className="w-5 h-5 text-gray-600" />
                      <TranslatedText as="span" className="text-gray-700 text-sm">Dark mode</TranslatedText>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsDarkMode(!isDarkMode);
                      }}
                      className={`relative w-10 h-5 rounded-full transition-colors ${
                        isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                          isDarkMode ? 'transform translate-x-5' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Bottom Menu Items */}
                  <div className="py-2 border-t border-gray-200">
                    {bottomMenuItems.map((item, index) => (
                      item.href === '#' ? (
                        <button
                          key={index}
                          className="w-full px-4 py-2.5 flex items-center space-x-3 hover:bg-gray-50 transition-colors text-left"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <item.icon className="w-5 h-5 text-gray-600" />
                          <TranslatedText as="span" className="text-gray-700 text-sm">{item.label}</TranslatedText>
                        </button>
                      ) : (
                        <Link key={index} href={item.href}>
                          <button
                            className="w-full px-4 py-2.5 flex items-center space-x-3 hover:bg-gray-50 transition-colors text-left"
                            onClick={() => setIsProfileDropdownOpen(false)}
                          >
                            <item.icon className="w-5 h-5 text-gray-600" />
                            <TranslatedText as="span" className="text-gray-700 text-sm">{item.label}</TranslatedText>
                          </button>
                        </Link>
                      )
                    ))}
                  </div>

                  {/* Footer Links */}
                  <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
                    <div className="text-xs text-gray-500 space-x-1 flex flex-wrap">
                      <a href="/about" className="hover:underline"><TranslatedText>About</TranslatedText></a>
                      <span>·</span>
                      <a href="/terms" className="hover:underline"><TranslatedText>Terms</TranslatedText></a>
                      <span>·</span>
                      <a href="/privacy" className="hover:underline"><TranslatedText>Privacy</TranslatedText></a>
                      <span>·</span>
                      <a href="/careers" className="hover:underline"><TranslatedText>Careers</TranslatedText></a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Button
              size="sm"
              className="rounded-full bg-[#b92b27] hover:bg-[#a32420] text-white font-medium px-4 h-8"
              onClick={() => setIsAddQuestionOpen(true)}
              data-testid="button-add-question"
            >
              <TranslatedText>Add question</TranslatedText>
            </Button>
          </div>
        </div>
      </header>

      <AddQuestionModal isOpen={isAddQuestionOpen} onClose={() => setIsAddQuestionOpen(false)} />
    </>
  );
}