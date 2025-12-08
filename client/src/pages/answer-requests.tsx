import { Header } from '@/components/layout/Header';
import { Link } from 'wouter';

export default function AnswerRequestsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <aside className="sticky top-20 h-fit w-64 flex-shrink-0 hidden md:block">
            <div className="bg-white dark:bg-card rounded-lg shadow-sm">
              <div className="p-3">
                <h2 className="text-sm font-semibold text-gray-700 dark:text-foreground mb-2">Questions</h2>
                <nav className="space-y-1">
                  <Link href="/answer" className="block px-3 py-2 text-sm text-gray-600 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-secondary/50 rounded" data-testid="link-questions-for-you">
                    Questions for you
                  </Link>
                  <div className="block px-3 py-2 text-sm text-red-600 bg-red-50 dark:bg-primary/10 dark:text-primary rounded font-medium" data-testid="link-answer-requests-active">
                    Answer requests
                  </div>
                  <Link href="/drafts" className="block px-3 py-2 text-sm text-gray-600 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-secondary/50 rounded" data-testid="link-drafts">
                    Drafts
                  </Link>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-secondary/50 rounded" data-testid="link-ai-interviewer">
                    AI Interviewer
                  </a>
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white dark:bg-card rounded-lg shadow-sm min-h-96 flex flex-col items-center justify-center p-12">
              {/* Empty State Icon */}
              <div className="mb-6">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-gray-300 dark:text-muted-foreground">
                  <rect x="25" y="30" width="50" height="35" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M25 40 L50 55 L75 40" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="72" cy="25" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M68 25 L71 28 L76 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Empty State Text */}
              <h2 className="text-xl font-semibold text-gray-700 dark:text-foreground mb-2">Answer Requests</h2>
              <p className="text-gray-500 dark:text-muted-foreground text-sm mb-6 text-center max-w-md">
                Ask for answers from other users by clicking Request Answer on a question.
                Requests you receive will show up here.
              </p>

              {/* CTA Button */}
              <Link href="/answer" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors" data-testid="button-see-top-questions">
                See Top Questions
              </Link>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="sticky top-20 h-fit w-80 flex-shrink-0 hidden lg:block">
            <div className="bg-white dark:bg-card rounded-lg shadow-sm p-5">
              <h3 className="text-base font-semibold text-gray-800 dark:text-foreground mb-2">
                Add topics you know about
              </h3>
              <p className="text-sm text-gray-600 dark:text-muted-foreground mb-4 leading-relaxed">
                Adding topics helps us find questions for you to answer
              </p>
              <Link href="/topics" className="px-5 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 text-sm font-medium rounded-full transition-colors inline-block" data-testid="button-add-topics">
                Add topics
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
