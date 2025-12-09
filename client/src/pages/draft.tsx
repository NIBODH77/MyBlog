import React from 'react';
import { Header } from '@/components/layout/Header';
import { Link } from 'wouter';

export default function QuoraDrafts() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-6">
      <Header />
      <div className="max-w-7xl mx-auto px-3 md:px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Left Sidebar - Hidden on mobile */}
          <aside className="hidden md:block sticky top-20 h-fit w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-3">
                <h2 className="text-sm font-semibold text-gray-700 mb-2">Questions</h2>
                <nav className="space-y-1">
                  <Link href="/answer" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded" data-testid="link-questions-for-you">
                    Questions for you
                  </Link>
                  <Link href="/answer-requests" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded" data-testid="link-answer-requests">
                    Answer requests
                  </Link>
                  <a href="#" className="block px-3 py-2 text-sm text-red-600 bg-red-50 rounded font-medium">
                    Drafts
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                    AI Interviewer
                  </a>
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-sm min-h-96 flex flex-col items-center justify-center p-6 md:p-12">
              {/* Empty State Icon */}
              <div className="mb-6">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-gray-400">
                  <path 
                    d="M25 25 C25 22 27 20 30 20 L50 20 C53 20 55 22 55 25 L55 45 C55 48 53 50 50 50 L40 50 L35 58 L35 50 L30 50 C27 50 25 48 25 45 Z" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line x1="52" y1="22" x2="56" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="52" y1="28" x2="58" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Empty State Text */}
              <h2 className="text-lg md:text-xl font-normal text-gray-700 mb-2 text-center">No answer drafts</h2>
              <p className="text-gray-500 text-sm mb-6 text-center max-w-md px-4">
                Start writing answers by finding questions to answer in Questions for You.
              </p>

              {/* CTA Button */}
              <Link href="/answer" className="px-6 md:px-8 py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors" data-testid="button-see-questions">
                See questions for you
              </Link>
            </div>
          </main>

          {/* Right Sidebar - Hidden on mobile and tablet */}
          <aside className="hidden lg:block sticky top-20 h-fit w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                Add topics you know about
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Adding topics helps us find questions for you to answer
              </p>
              <Link href="/topics" className="px-5 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-medium rounded-full transition-colors inline-block">
                Add topics
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}