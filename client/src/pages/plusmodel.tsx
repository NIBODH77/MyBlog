import { useState } from 'react';
import { X, Sparkles, CreditCard } from 'lucide-react';
import { Link } from 'wouter';

export default function MyBlogPlusPage() {
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center overflow-hidden z-50">
      <div className="bg-white dark:bg-card rounded-lg shadow-2xl w-[95%] max-w-[420px] border border-gray-200 dark:border-border relative">
        {/* Close Button */}
        <Link
          href="/"
          className="absolute top-3 left-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          data-testid="button-close-plus"
        >
          <X size={20} />
        </Link>

        {/* Header */}
        <div className="text-center pt-6 pb-3">
          <h1 className="text-[#a82400] text-2xl font-bold mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            MyBlog<span className="text-lg align-super">+</span>
          </h1>
          <div className="flex justify-center mb-2">
            <div className="relative">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                L
              </div>
              <div className="absolute -top-1 -right-1 bg-red-600 rounded-full p-1">
                <Sparkles size={10} className="text-white" fill="white" />
              </div>
            </div>
          </div>
          <h2 className="text-base font-semibold text-gray-900 dark:text-foreground">Join MyBlog+</h2>
        </div>

        {/* Benefits Row */}
        <div className="flex justify-center gap-4 px-4 mb-4">
          <div className="text-center w-28">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-1">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="white">
                <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" />
              </svg>
            </div>
            <p className="text-xs text-gray-700 dark:text-gray-300">Browse MyBlog ad-free</p>
          </div>
          <div className="text-center w-28">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-1">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="white">
                <rect x="5" y="3" width="10" height="14" rx="1" />
              </svg>
            </div>
            <p className="text-xs text-gray-700 dark:text-gray-300">Unlock millions of answers</p>
          </div>
          <div className="text-center w-28">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-1">
              <span className="text-white font-bold text-sm">$0</span>
            </div>
            <p className="text-xs text-gray-700 dark:text-gray-300">Try it free for 30 days</p>
          </div>
        </div>

        {/* Plan Selection - Side by Side */}
        <div className="flex gap-3 px-4 mb-4">
          <button
            onClick={() => setSelectedPlan('yearly')}
            className={`flex-1 p-3 rounded-lg border-2 transition-all ${
              selectedPlan === 'yearly' ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30' : 'border-gray-200 dark:border-gray-700'
            }`}
            data-testid="button-plan-yearly"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'yearly' ? 'border-blue-500' : 'border-gray-300'}`}>
                {selectedPlan === 'yearly' && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
              </div>
              <span className="font-semibold text-sm text-gray-900 dark:text-foreground">Yearly</span>
              <span className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded font-medium">Save 43%</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-muted-foreground ml-6">$3.99/mo</p>
          </button>

          <button
            onClick={() => setSelectedPlan('monthly')}
            className={`flex-1 p-3 rounded-lg border-2 transition-all ${
              selectedPlan === 'monthly' ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30' : 'border-gray-200 dark:border-gray-700'
            }`}
            data-testid="button-plan-monthly"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'monthly' ? 'border-blue-500' : 'border-gray-300'}`}>
                {selectedPlan === 'monthly' && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
              </div>
              <span className="font-semibold text-sm text-gray-900 dark:text-foreground">Monthly</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-muted-foreground ml-6">$6.99/mo</p>
          </button>
        </div>

        {/* Price Details */}
        <div className="px-4 mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium text-gray-900 dark:text-foreground">30-day free trial</span>
            <span className="font-medium text-gray-900 dark:text-foreground">$0.00</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600 dark:text-muted-foreground">Starting January 9, 2026</span>
            <span className="text-gray-900 dark:text-foreground">$47.88/yr</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-muted-foreground mb-1">
            Your subscription will renew automatically each year. Cancel at any time in settings.
          </p>
          <p className="text-xs text-gray-500 dark:text-muted-foreground mb-3">
            By signing up for a subscription, you agree to MyBlog's <a href="#" className="text-blue-600 underline">Subscriber Terms of Service</a>.
          </p>
        </div>

        {/* Payment Buttons */}
        <div className="px-4 space-y-2 mb-2">
          <button 
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 rounded-full flex items-center justify-center gap-2 transition-colors text-sm"
            data-testid="button-pay-link"
          >
            Pay with <span className="font-bold">link</span>
          </button>
          <button 
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2.5 rounded-full flex items-center justify-center transition-colors text-sm"
            data-testid="button-pay-paypal"
          >
            <span className="italic">Pay</span>Pal
          </button>
        </div>

        {/* OR Divider */}
        <div className="flex items-center gap-3 px-4 my-2">
          <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          <span className="text-gray-500 dark:text-muted-foreground text-xs">OR</span>
          <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
        </div>

        {/* Card Input */}
        <div className="px-4 mb-2">
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2">
            <CreditCard size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Card number"
              className="flex-1 text-sm bg-transparent focus:outline-none text-gray-900 dark:text-foreground"
              data-testid="input-card-number"
            />
            <button className="bg-gray-900 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
              Autofill <span className="text-green-400 font-bold">link</span>
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-500 dark:text-muted-foreground px-4 mb-3">
          Existing subscriptions will also be charged to this card. You may receive a temporary authorization charge to validate your card. <a href="#" className="text-blue-600 underline">Learn more</a>.
        </p>

        {/* Try Free Button */}
        <div className="px-4 pb-4">
          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full text-sm transition-colors"
            data-testid="button-try-free"
          >
            Try 30 Days Free
          </button>
        </div>
      </div>
    </div>
  );
}
