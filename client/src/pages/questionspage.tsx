import { useState } from 'react';
import { Book, Plus } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Link } from 'wouter';

export default function MyBlogAnswerPage() {
  const [topics] = useState([
    {
      id: 1,
      name: "Preparation Techniques",
      followers: "2K followers",
      icon: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Baking",
      followers: "7.4M followers",
      icon: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Simple Recipes",
      followers: "18K followers",
      icon: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "Food and Recipes",
      followers: "173 followers",
      icon: null
    },
    {
      id: 5,
      name: "Culinary Arts Education",
      followers: "6 followers",
      icon: null
    }
  ]);

  return (
    <AppShell hideRightSidebar>
      <div className="flex gap-4">
        {/* Left Sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-20 bg-white dark:bg-card rounded-lg shadow-sm border border-gray-200 dark:border-border">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-border">
              <h3 className="text-gray-700 dark:text-foreground font-semibold text-base">Questions</h3>
            </div>
            <div className="py-2">
              <button className="w-full text-left px-4 py-2.5 text-sm bg-red-50 dark:bg-primary/10 text-gray-900 dark:text-foreground hover:bg-red-100 dark:hover:bg-primary/20" data-testid="button-questions-for-you">
                Questions for you
              </button>
              <button className="w-full text-left px-4 py-2.5 text-sm text-gray-600 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-secondary/50" data-testid="button-answer-requests">
                Answer requests
              </button>
              <Link href="/drafts" className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-secondary/50" data-testid="button-drafts">
                Drafts
              </Link>
              <button className="w-full text-left px-4 py-2.5 text-sm text-gray-600 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-secondary/50" data-testid="button-ai-interviewer">
                AI Interviewer
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Follow Topics Section */}
          <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-foreground mb-2">Follow more topics</h2>
            <p className="text-sm text-gray-500 dark:text-muted-foreground mb-6">Personalize your feed with more relevant content.</p>

            <div className="space-y-4">
              {topics.map(topic => (
                <div key={topic.id} className="flex items-center justify-between" data-testid={`card-topic-${topic.id}`}>
                  <div className="flex items-center gap-3">
                    {topic.icon ? (
                      <img
                        src={topic.icon}
                        alt={topic.name}
                        className="w-10 h-10 rounded object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gray-200 dark:bg-secondary rounded flex items-center justify-center">
                        <Book size={20} className="text-gray-500 dark:text-muted-foreground" />
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-gray-900 dark:text-foreground text-sm">{topic.name}</div>
                      <div className="text-xs text-gray-500 dark:text-muted-foreground">{topic.followers}</div>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 border border-blue-500 text-blue-500 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-950/30 flex items-center gap-1" data-testid={`button-follow-topic-${topic.id}`}>
                    <Plus size={16} />
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* End of Feed */}
          <div className="bg-white dark:bg-card rounded-lg shadow-sm flex flex-col items-center justify-center py-16 px-6">
            <svg className="w-24 h-24 text-gray-300 dark:text-muted-foreground mb-6" viewBox="0 0 100 100" fill="none">
              <rect x="30" y="40" width="40" height="35" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M35 40 L35 30 C35 27 37 25 40 25 L60 25 C63 25 65 27 65 30 L65 40" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="57" r="3" fill="currentColor"/>
              <line x1="45" y1="65" x2="55" y2="65" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <h3 className="text-gray-700 dark:text-foreground font-medium mb-2">You've reached the end of your feed</h3>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600" data-testid="button-refresh">
              Refresh Page
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="bg-gray-50 dark:bg-secondary/30 rounded-lg p-6 border border-gray-200 dark:border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-foreground">Topics you know about</h3>
            </div>

            <div className="flex flex-col items-center justify-center py-8">
              <svg className="w-20 h-20 text-gray-300 dark:text-muted-foreground mb-4" viewBox="0 0 100 100" fill="none">
                <rect x="25" y="35" width="50" height="40" rx="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M35 35 L35 28 C35 26 37 25 40 25 L60 25 C63 25 65 26 65 28 L65 35" stroke="currentColor" strokeWidth="2"/>
                <circle cx="50" cy="55" r="4" fill="currentColor"/>
              </svg>
              <h4 className="text-sm font-medium text-gray-700 dark:text-foreground mb-2">No topics yet</h4>
              <p className="text-xs text-gray-500 dark:text-muted-foreground text-center mb-4 max-w-xs">
                You'll get better questions if you add more specific topics.
              </p>
              <button className="px-5 py-2 border-2 border-blue-500 text-blue-500 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-950/30" data-testid="button-add-topics">
                Add topics
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
