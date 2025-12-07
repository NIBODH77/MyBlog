import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';

export default function MyBlogNotificationsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Notifications' },
    { id: 'stories', label: 'Stories' },
    { id: 'questions', label: 'Questions' },
    { id: 'spaces', label: 'Spaces' },
    { id: 'people', label: 'People updates' },
    { id: 'comments', label: 'Comments and mentions' },
    { id: 'upvotes', label: 'Upvotes' },
    { id: 'content', label: 'Your content' },
    { id: 'profile', label: 'Your profile' },
    { id: 'announcements', label: 'Announcements' },
    { id: 'earnings', label: 'Earnings' },
    { id: 'subscriptions', label: 'Subscriptions' }
  ];

  return (
    <AppShell hideRightSidebar>
      {/* Notifications Header */}
      <div className="bg-white dark:bg-card rounded-lg shadow-sm mb-4">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-border">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-foreground">Notifications</h2>
          <button className="text-sm text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground" data-testid="button-settings">Settings</button>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Left Sidebar - Filters */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-white dark:bg-card rounded-lg shadow-sm p-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-foreground px-3 py-2">Filters</h3>
            <div className="space-y-1">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  data-testid={`button-filter-${filter.id}`}
                  className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                    selectedFilter === filter.id
                      ? 'bg-red-50 dark:bg-primary/10 text-gray-900 dark:text-foreground'
                      : 'text-gray-600 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-secondary/50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="bg-white dark:bg-card rounded-lg shadow-sm">
            <div className="flex flex-col items-center justify-center py-32 px-6">
              <svg className="w-32 h-32 text-gray-300 dark:text-muted-foreground mb-6" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="35" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 43 L50 55" stroke="currentColor" strokeWidth="2"/>
                <path d="M42 50 C42 50 42 60 50 60 C58 60 58 50 58 50" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M35 65 L35 75 C35 78 37 80 40 80 L60 80 C63 80 65 78 65 75 L65 65" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M50 25 L50 20 M35 30 L31 26 M65 30 L69 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-foreground mb-2">No New Notifications</h3>
              <p className="text-sm text-gray-500 dark:text-muted-foreground text-center">
                Notifications you received in the last 30 days will show up here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
