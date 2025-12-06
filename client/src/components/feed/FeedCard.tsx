import React from "react";
import { motion } from "framer-motion";
import { Question } from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ArrowUp, Share2, MoreHorizontal, Bookmark } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Link } from "wouter";

interface FeedCardProps {
  question: Question;
  index?: number;
}

export function FeedCard({ question, index = 0 }: FeedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl p-5 sm:p-6 border border-border/60 hover:border-primary/20 hover:shadow-md transition-all duration-300 mb-4"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <Link href={`/profile`}>
            <div className="relative cursor-pointer">
              <Avatar className="h-10 w-10 ring-2 ring-background">
                <AvatarImage src={question.author.avatar} />
                <AvatarFallback>{question.author.name[0]}</AvatarFallback>
              </Avatar>
              {question.author.isExpert && (
                <div className="absolute -bottom-1 -right-1 bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full border-2 border-background font-bold shadow-sm">
                  PRO
                </div>
              )}
            </div>
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <Link href={`/profile`}>
                <span className="text-sm font-semibold text-foreground hover:text-primary cursor-pointer transition-colors">
                  {question.author.name}
                </span>
              </Link>
              <span className="text-xs text-muted-foreground">•</span>
              <Link href={`/question/${question.id}`}>
                <span className="text-xs text-muted-foreground hover:underline cursor-pointer">
                  {formatDistanceToNow(new Date(question.createdAt), { addSuffix: true })}
                </span>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-1">{question.author.bio}</p>
          </div>
        </div>
        
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-secondary/80 rounded-full">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <div className="mb-4">
        <Link href={`/question/${question.id}`}>
          <h2 className="text-xl font-display font-bold text-foreground mb-2 leading-tight cursor-pointer hover:text-primary transition-colors">
            {question.title}
          </h2>
        </Link>
        <Link href={`/question/${question.id}`}>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 cursor-pointer">
            {question.content}
          </p>
        </Link>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {question.topics.map((topic) => (
          <Link key={topic.id} href={`/topic/${topic.id}`}>
            <Badge 
              variant="secondary" 
              className="bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer font-normal px-3 py-1"
            >
              {topic.icon} {topic.name}
            </Badge>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-border/40">
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-full gap-2 px-3 hover:bg-primary/10 hover:text-primary group-hover:bg-secondary/50 transition-all"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="font-medium">{question.upvotes}</span>
          </Button>
          <Link href={`/question/${question.id}`}>
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full gap-2 px-3 hover:bg-primary/10 hover:text-primary group-hover:bg-secondary/50 transition-all"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="font-medium">{question.answers.length}</span>
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-1">
           <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10"
          >
            <Share2 className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
