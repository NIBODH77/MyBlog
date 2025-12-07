import React, { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Feed } from '@/components/feed/Feed';
import { mockQuestions } from '@/lib/mock-data';

export default function Home() {
  return (
    <AppShell>
      <div className="max-w-2xl mx-auto">
        {/* Post Composer */}
        <div className="bg-card rounded-2xl p-5 sm:p-6 border border-border/60 mb-4 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
              U
            </div>
            <input
              type="text"
              placeholder="What do you want to ask or share?"
              className="flex-1 text-foreground bg-transparent focus:outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex gap-4 pt-4 border-t border-border/40">
            <button className="flex items-center gap-2 text-muted-foreground hover:bg-secondary/50 px-3 py-2 rounded-lg transition-colors">
              <span className="text-lg">?</span>
              <span className="text-sm font-medium">Ask</span>
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:bg-secondary/50 px-3 py-2 rounded-lg transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <span className="text-sm font-medium">Answer</span>
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:bg-secondary/50 px-3 py-2 rounded-lg transition-colors">
              <span className="text-lg">✎</span>
              <span className="text-sm font-medium">Post</span>
            </button>
          </div>
        </div>

        {/* Feed */}
        <Feed questions={mockQuestions} />
      </div>
    </AppShell>
  );
}