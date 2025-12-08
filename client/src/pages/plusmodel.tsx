import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Link } from 'wouter';

export default function MyBlogPlusPage() {
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');

  return (
    <div className="fixed inset-0 bg-gray-100 dark:bg-background flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      <div className="bg-white dark:bg-card rounded-lg shadow-2xl w-full max-w-[95vw] sm:max-w-md md:max-w-lg border border-gray-200 dark:border-border max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-2 sm:p-3 pb-1 sm:pb-2">
          <Link
            href="/"
            className="absolute top-2 left-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            data-testid="button-close-plus"
          >
            <X size={18} />
          </Link>
          <div className="text-center">
            <h1 className="text-[#a82400] text-lg sm:text-xl font-bold mb-1 sm:mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              MyBlog<span className="text-base sm:text-lg align-super">+</span>
            </h1>
            <div className="flex justify-center mb-1 sm:mb-2">
              <div className="relative">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-green-600 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-semibold">
                  L
                </div>
                <div className="absolute -top-1 -right-1 bg-red-600 rounded-full p-0.5 sm:p-1">
                  <Sparkles size={8} className="text-white sm:hidden" fill="white" />
                  <Sparkles size={10} className="text-white hidden sm:block" fill="white" />
                </div>
              </div>
            </div>
            <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-foreground">Join MyBlog+</h2>
          </div>
        </div>

        {/* Content */}
        <div className="px-2 sm:px-3 pb-2 sm:pb-3">
          {/* Benefits */}
          <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-2 sm:mb-3">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-1.5 sm:p-2 text-center">
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-0.5 sm:mb-1">
                <svg width="12" height="12" viewBox="0 0 20 20" fill="white" className="sm:w-[14px] sm:h-[14px]">
                  <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" />
                </svg>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight">Browse ad-free</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-1.5 sm:p-2 text-center">
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-0.5 sm:mb-1">
                <svg width="12" height="12" viewBox="0 0 20 20" fill="white" className="sm:w-[14px] sm:h-[14px]">
                  <rect x="5" y="3" width="10" height="14" rx="1" />
                  <line x1="8" y1="7" x2="12" y2="7" stroke="white" strokeWidth="1.5"/>
                  <line x1="8" y1="10" x2="12" y2="10" stroke="white" strokeWidth="1.5"/>
                </svg>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight">Unlock answers</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-1.5 sm:p-2 text-center">
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-0.5 sm:mb-1">
                <span className="text-white font-bold text-[10px] sm:text-xs">$0</span>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight">30 days free</p>
            </div>
          </div>

          {/* Plan Selection */}
          <div className="space-y-1.5 sm:space-y-2 mb-2 sm:mb-3">
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`w-full p-2 sm:p-2.5 rounded-lg border-2 transition-all ${
                selectedPlan === 'yearly'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
              }`}
              data-testid="button-plan-yearly"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === 'yearly' ? 'border-blue-500' : 'border-gray-300'
                  }`}>
                    {selectedPlan === 'yearly' && (
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500"></div>
                    )}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-foreground">Yearly</span>
                      <span className="bg-blue-500 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full font-medium">
                        Save 43%
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-600 dark:text-muted-foreground">$3.99/mo</p>
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`w-full p-2 sm:p-2.5 rounded-lg border-2 transition-all ${
                selectedPlan === 'monthly'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
              }`}
              data-testid="button-plan-monthly"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === 'monthly' ? 'border-blue-500' : 'border-gray-300'
                  }`}>
                    {selectedPlan === 'monthly' && (
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500"></div>
                    )}
                  </div>
                  <div className="text-left">
                    <span className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-foreground">Monthly</span>
                    <p className="text-[10px] sm:text-xs text-gray-600 dark:text-muted-foreground">$6.99/mo</p>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Price Details */}
          <div className="space-y-0.5 sm:space-y-1 mb-1.5 sm:mb-2 text-[10px] sm:text-xs">
            <div className="flex justify-between gap-2">
              <span className="text-gray-600 dark:text-muted-foreground">30-day free trial</span>
              <span className="font-semibold text-gray-900 dark:text-foreground">$0.00</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-gray-600 dark:text-muted-foreground">Starting January 6, 2026</span>
              <span className="font-semibold text-gray-900 dark:text-foreground">$47.88/yr</span>
            </div>
          </div>

          <p className="text-[10px] sm:text-xs text-gray-500 dark:text-muted-foreground mb-1.5 sm:mb-2">
            Auto-renews yearly. Cancel anytime.
          </p>

          {/* Payment Buttons */}
          <div className="space-y-1.5 sm:space-y-2 mb-1.5 sm:mb-2">
            <button 
              className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-1.5 sm:py-2 rounded-lg flex items-center justify-center gap-2 transition-colors text-xs sm:text-sm"
              data-testid="button-pay-link"
            >
              Pay with <span className="font-bold">link</span>
            </button>
            <button 
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-1.5 sm:py-2 rounded-lg flex items-center justify-center transition-colors text-xs sm:text-sm"
              data-testid="button-pay-paypal"
            >
              <span className="font-bold italic" style={{ fontFamily: 'Verdana, sans-serif' }}>Pay</span>
              <span className="font-bold" style={{ fontFamily: 'Verdana, sans-serif' }}>Pal</span>
            </button>
          </div>

          {/* OR Divider */}
          <div className="flex items-center gap-2 sm:gap-3 my-1.5 sm:my-2">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            <span className="text-gray-500 dark:text-muted-foreground text-[10px] sm:text-xs">OR</span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          {/* Card Input */}
          <div className="mb-1.5 sm:mb-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Card number"
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-xs sm:text-sm bg-white dark:bg-secondary"
                data-testid="input-card-number"
              />
              <button className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex items-center gap-1">
                Autofill <span className="font-bold text-green-400">link</span>
              </button>
            </div>
          </div>

          <p className="text-[10px] sm:text-xs text-gray-500 dark:text-muted-foreground mb-1.5 sm:mb-2">
            May receive temporary authorization charge.
          </p>

          {/* Try Free Button */}
          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors"
            data-testid="button-try-free"
          >
            Try 30 Days Free
          </button>
        </div>
      </div>
    </div>
  );
}
