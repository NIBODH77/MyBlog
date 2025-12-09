import { MessageSquare } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';

export default function MessagesPage() {
  return (
    <AppShell hideRightSidebar>
      <div className="flex flex-col md:flex-row h-[calc(100vh-180px)] md:h-[calc(100vh-180px)] gap-3 md:gap-4">
        {/* Left Sidebar - Messages List */}
        <div className="w-full md:w-80 flex-shrink-0 bg-white dark:bg-card rounded-lg shadow-sm">
          <div className="p-3 md:p-4 border-b border-gray-200 dark:border-border">
            <h2 className="text-base md:text-lg font-semibold text-gray-900 dark:text-foreground">Messages</h2>
          </div>
          <div className="p-3 md:p-4">
            <p className="text-sm text-gray-500 dark:text-muted-foreground text-center py-4 md:py-8">No messages</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-white dark:bg-card rounded-lg shadow-sm">
          <div className="text-center max-w-md px-6">
            <div className="flex justify-center mb-6">
              <svg className="w-24 h-24 md:w-32 md:h-32 text-gray-300 dark:text-muted-foreground" viewBox="0 0 100 100" fill="none">
                {/* Mailbox */}
                <rect x="25" y="45" width="50" height="35" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M25 50 L50 65 L75 50" stroke="currentColor" strokeWidth="2" fill="none"/>
                <line x1="25" y1="50" x2="25" y2="80" stroke="currentColor" strokeWidth="2"/>
                <line x1="75" y1="50" x2="75" y2="80" stroke="currentColor" strokeWidth="2"/>
                {/* Flag */}
                <line x1="50" y1="45" x2="50" y2="20" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 20 L65 25 L50 30" fill="currentColor"/>
                {/* Base */}
                <line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 dark:text-foreground mb-2">
              No message selected
            </h3>
            <p className="text-sm text-gray-500 dark:text-muted-foreground mb-4 md:mb-6">
              Select an existing message, or start a new one.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-medium flex items-center gap-2 mx-auto transition-colors" data-testid="button-new-message">
              <MessageSquare size={18} />
              New message
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
