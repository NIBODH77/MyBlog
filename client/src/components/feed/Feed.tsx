import React from "react";
import { FeedCard } from "./FeedCard";
import { Question } from "@/lib/mock-data";
import { Loader2 } from "lucide-react";

interface FeedProps {
  questions: Question[];
}

export function Feed({ questions }: FeedProps) {
  const [loading, setLoading] = React.useState(false);

  // Simulate infinite scroll
  const handleScroll = () => {
    // Implement actual intersection observer later
  };

  return (
    <div className="space-y-2">
      {questions.map((q, i) => (
        <FeedCard key={q.id} question={q} index={i} />
      ))}
      
      <div className="py-8 flex justify-center text-muted-foreground">
        {loading ? (
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        ) : (
          <div className="text-sm font-medium opacity-50">You've reached the end</div>
        )}
      </div>
    </div>
  );
}
