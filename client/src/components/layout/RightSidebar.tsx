import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { topics, users } from "@/lib/mock-data";
import { ArrowUpRight, Hash, Plus } from "lucide-react";
import { Link } from "wouter";
import { TranslatedText } from '@/hooks/useTranslation';

export function RightSidebar() {
  return (
    <aside className="sticky top-20 space-y-4">
      {/* Trending Topics */}
      <div className="rounded-sm border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Hash className="h-5 w-5 text-primary" />
          <h3 className="font-semibold"><TranslatedText>Spaces to follow</TranslatedText></h3>
        </div>
        <div className="space-y-3">
          {topics.slice(0, 5).map((topic) => (
            <Link key={topic.id} href={`/topic/${topic.id}`}>
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-secondary flex items-center justify-center text-xs group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {topic.icon || <Hash className="w-3 h-3" />}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground group-hover:underline transition-colors"><TranslatedText>{topic.name}</TranslatedText></p>
                    <p className="text-[10px] text-muted-foreground"><TranslatedText>{topic.questionCount}</TranslatedText> <TranslatedText>questions</TranslatedText></p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Suggested Users */}
      <div className="rounded-sm border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-5 w-5 text-primary" />
          <h3 className="font-semibold"><TranslatedText>Who to follow</TranslatedText></h3>
        </div>
        <div className="space-y-3">
          {users.slice(1, 4).map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border border-border">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-foreground hover:underline cursor-pointer">
                    {user.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground truncate max-w-[120px]">
                    {user.handle}
                  </span>
                </div>
              </div>
              <Button size="sm" variant="outline" className="h-7 rounded-full text-xs px-2 border-primary/20 hover:bg-primary/5 hover:text-primary">
                <TranslatedText>Follow</TranslatedText>
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="text-[11px] text-muted-foreground px-2 border-t pt-2">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <a href="#" className="hover:underline"><TranslatedText>About</TranslatedText></a>
          <span>•</span>
          <a href="#" className="hover:underline"><TranslatedText>Careers</TranslatedText></a>
          <span>•</span>
          <a href="#" className="hover:underline"><TranslatedText>Terms</TranslatedText></a>
          <span>•</span>
          <a href="#" className="hover:underline"><TranslatedText>Privacy</TranslatedText></a>
          <span>•</span>
          <a href="#" className="hover:underline"><TranslatedText>Acceptable Use</TranslatedText></a>
          <span>•</span>
          <a href="#" className="hover:underline"><TranslatedText>Advertise</TranslatedText></a>
          <span>•</span>
          <a href="#" className="hover:underline"><TranslatedText>Press</TranslatedText></a>
          <span>•</span>
          <a href="#" className="hover:underline"><TranslatedText>Your Ad Choices</TranslatedText></a>
        </div>
        <div className="mt-2"><TranslatedText>© 2025 Nexus Inc.</TranslatedText></div>
      </div>
    </aside>
  );
}