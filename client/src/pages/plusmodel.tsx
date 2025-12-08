import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Link } from 'wouter';

export default function MyBlogPlusPage() {
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');

  return (
    <div className="fixed inset-0 bg-gray-100 dark:bg-background flex items-center justify-center p-1 overflow-hidden">
      <div className="bg-white dark:bg-card rounded-lg shadow-2xl w-full max-w-[90vw] sm:max-w-sm border border-gray-200 dark:border-border flex flex-col" style={{ maxHeight: 'calc(100vh - 16px)' }}>
        {/* Header */}
        <div className="relative p-2 pb-1 flex-shrink-0">
          <Link
            href="/"
            className="absolute top-1 left-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            data-testid="button-close-plus"
          >
            <X size={16} />
          </Link>
          <div className="text-center">
            <h1 className="text-[#a82400] text-base font-bold" style={{ fontFamily: 'Georgia, serif' }}>
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
        </div>

        {/* Content */}
        <div className="px-2 pb-2 flex-1 overflow-hidden flex flex-col">
          {/* Benefits */}
          <div className="grid grid-cols-3 gap-1 mb-1.5 flex-shrink-0">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded p-1 text-center">
              <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-0.5">
                <svg width="10" height="10" viewBox="0 0 20 20" fill="white">
                  <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" />
                </svg>
              </div>
              <p className="text-[9px] text-gray-700 dark:text-gray-300 font-medium leading-tight">Browse ad-free</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded p-1 text-center">
              <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-0.5">
                <svg width="10" height="10" viewBox="0 0 20 20" fill="white">
                  <rect x="5" y="3" width="10" height="14" rx="1" />
                </svg>
              </div>
              <p className="text-[9px] text-gray-700 dark:text-gray-300 font-medium leading-tight">Unlock answers</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded p-1 text-center">
              <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-0.5">
                <span className="text-white font-bold text-[8px]">$0</span>
              </div>
              <p className="text-[9px] text-gray-700 dark:text-gray-300 font-medium leading-tight">30 days free</p>
            </div>
          </div>

          {/* Plan Selection */}
          <div className="space-y-1 mb-1.5 flex-shrink-0">
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`w-full p-1.5 rounded border-2 transition-all ${
                selectedPlan === 'yearly'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
              data-testid="button-plan-yearly"
            >
              <div className="flex items-center gap-1.5">
                <div className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${
                  selectedPlan === 'yearly' ? 'border-blue-500' : 'border-gray-300'
                }`}>
                  {selectedPlan === 'yearly' && <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>}
                </div>
                <div className="text-left flex items-center gap-1.5">
                  <span className="font-semibold text-[11px] text-gray-900 dark:text-foreground">Yearly</span>
                  <span className="bg-blue-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-medium">Save 43%</span>
                  <span className="text-[10px] text-gray-600 dark:text-muted-foreground">$3.99/mo</span>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`w-full p-1.5 rounded border-2 transition-all ${
                selectedPlan === 'monthly'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
              data-testid="button-plan-monthly"
            >
              <div className="flex items-center gap-1.5">
                <div className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${
                  selectedPlan === 'monthly' ? 'border-blue-500' : 'border-gray-300'
                }`}>
                  {selectedPlan === 'monthly' && <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>}
                </div>
                <div className="text-left flex items-center gap-1.5">
                  <span className="font-semibold text-[11px] text-gray-900 dark:text-foreground">Monthly</span>
                  <span className="text-[10px] text-gray-600 dark:text-muted-foreground">$6.99/mo</span>
                </div>
              </div>
            </button>
          </div>

          {/* Price Details */}
          <div className="text-[9px] mb-1 flex-shrink-0">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-muted-foreground">30-day free trial</span>
              <span className="font-semibold text-gray-900 dark:text-foreground">$0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-muted-foreground">Starting January 6, 2026</span>
              <span className="font-semibold text-gray-900 dark:text-foreground">$47.88/yr</span>
            </div>
          </div>

          <p className="text-[9px] text-gray-500 dark:text-muted-foreground mb-1 flex-shrink-0">
            Auto-renews yearly. Cancel anytime.
          </p>

          {/* Payment Buttons */}
          <div className="space-y-1 mb-1 flex-shrink-0">
            <button 
              className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-1.5 rounded flex items-center justify-center gap-1 transition-colors text-[11px]"
              data-testid="button-pay-link"
            >
              Pay with <span className="font-bold">link</span>
            </button>
            <button 
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-1.5 rounded flex items-center justify-center transition-colors text-[11px]"
              data-testid="button-pay-paypal"
            >
              <span className="font-bold italic">Pay</span>
              <span className="font-bold">Pal</span>
            </button>
          </div>

          {/* OR Divider */}
          <div className="flex items-center gap-2 my-1 flex-shrink-0">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            <span className="text-gray-500 dark:text-muted-foreground text-[9px]">OR</span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          {/* Card Input */}
          <div className="mb-1 flex-shrink-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Card number"
                className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:border-blue-500 text-[11px] bg-white dark:bg-secondary"
                data-testid="input-card-number"
              />
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black text-white text-[9px] px-1.5 py-0.5 rounded flex items-center gap-0.5">
                Autofill <span className="font-bold text-green-400">link</span>
              </button>
            </div>
          </div>

          <p className="text-[9px] text-gray-500 dark:text-muted-foreground mb-1 flex-shrink-0">
            May receive temporary authorization charge.
          </p>

          {/* Try Free Button */}
          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 rounded-full text-[11px] transition-colors flex-shrink-0"
            data-testid="button-try-free"
          >
            Try 30 Days Free
          </button>
        </div>
      </div>
    </div>
  );
}
