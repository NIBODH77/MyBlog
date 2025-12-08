import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Link } from 'wouter';

export default function MyBlogPlusPage() {
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');

  return (
    <div className="fixed inset-0 bg-gray-100 dark:bg-background flex items-center justify-center overflow-hidden">
      <div className="bg-white dark:bg-card rounded-lg shadow-2xl w-[92%] max-w-[380px] border border-gray-200 dark:border-border p-3">
        {/* Header */}
        <div className="relative text-center mb-2">
          <Link
            href="/"
            className="absolute -top-1 -left-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            data-testid="button-close-plus"
          >
            <X size={16} />
          </Link>
          <h1 className="text-[#a82400] text-lg font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            MyBlog<span className="text-sm align-super">+</span>
          </h1>
          <div className="flex justify-center my-1">
            <div className="relative">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-base font-semibold">
                L
              </div>
              <div className="absolute -top-0.5 -right-0.5 bg-red-600 rounded-full p-0.5">
                <Sparkles size={6} className="text-white" fill="white" />
              </div>
            </div>
          </div>
          <h2 className="text-xs font-semibold text-gray-900 dark:text-foreground">Join MyBlog+</h2>
        </div>

        {/* Benefits - Single Row */}
        <div className="flex justify-between gap-1 mb-2">
          <div className="flex-1 bg-yellow-50 dark:bg-yellow-900/20 rounded p-1.5 text-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-0.5">
              <svg width="12" height="12" viewBox="0 0 20 20" fill="white">
                <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" />
              </svg>
            </div>
            <p className="text-[8px] text-gray-700 dark:text-gray-300 font-medium">Browse MyBlog ad-free</p>
          </div>
          <div className="flex-1 bg-yellow-50 dark:bg-yellow-900/20 rounded p-1.5 text-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-0.5">
              <svg width="12" height="12" viewBox="0 0 20 20" fill="white">
                <rect x="5" y="3" width="10" height="14" rx="1" />
              </svg>
            </div>
            <p className="text-[8px] text-gray-700 dark:text-gray-300 font-medium">Unlock millions of answers</p>
          </div>
          <div className="flex-1 bg-yellow-50 dark:bg-yellow-900/20 rounded p-1.5 text-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-0.5">
              <span className="text-white font-bold text-[9px]">$0</span>
            </div>
            <p className="text-[8px] text-gray-700 dark:text-gray-300 font-medium">Try it free for 30 days</p>
          </div>
        </div>

        {/* Plan Selection - Compact */}
        <div className="space-y-1.5 mb-2">
          <button
            onClick={() => setSelectedPlan('yearly')}
            className={`w-full p-2 rounded border-2 ${
              selectedPlan === 'yearly' ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30' : 'border-gray-200 dark:border-gray-700'
            }`}
            data-testid="button-plan-yearly"
          >
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'yearly' ? 'border-blue-500' : 'border-gray-300'}`}>
                {selectedPlan === 'yearly' && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
              </div>
              <span className="font-semibold text-xs text-gray-900 dark:text-foreground">Yearly</span>
              <span className="bg-blue-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-medium">Save 43%</span>
              <span className="text-[10px] text-gray-600 dark:text-muted-foreground ml-auto">$3.99/mo</span>
            </div>
          </button>

          <button
            onClick={() => setSelectedPlan('monthly')}
            className={`w-full p-2 rounded border-2 ${
              selectedPlan === 'monthly' ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30' : 'border-gray-200 dark:border-gray-700'
            }`}
            data-testid="button-plan-monthly"
          >
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'monthly' ? 'border-blue-500' : 'border-gray-300'}`}>
                {selectedPlan === 'monthly' && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
              </div>
              <span className="font-semibold text-xs text-gray-900 dark:text-foreground">Monthly</span>
              <span className="text-[10px] text-gray-600 dark:text-muted-foreground ml-auto">$6.99/mo</span>
            </div>
          </button>
        </div>

        {/* Price Details - Inline */}
        <div className="flex justify-between text-[10px] mb-1">
          <span className="text-gray-600 dark:text-muted-foreground">30-day free trial</span>
          <span className="font-semibold text-gray-900 dark:text-foreground">$0.00</span>
        </div>
        <div className="flex justify-between text-[10px] mb-2">
          <span className="text-gray-600 dark:text-muted-foreground">Starting January 6, 2026</span>
          <span className="font-semibold text-gray-900 dark:text-foreground">$47.88/yr</span>
        </div>

        {/* Try Free Button */}
        <button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full text-xs transition-colors"
          data-testid="button-try-free"
        >
          Try 30 Days Free
        </button>
      </div>
    </div>
  );
}
