import { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'wouter';

export default function QuoraPlusSubscription() {
  const [planType, setPlanType] = useState('yearly');

  return (
    <div className="fixed inset-0 w-screen h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col overflow-hidden">
      {/* Header - Fixed height */}
      <div className="h-10 flex-shrink-0 bg-amber-50 px-3 flex items-center justify-between border-b border-gray-200">
        <Link href="/" className="text-gray-600 hover:text-gray-800">
          <X size={18} />
        </Link>
        <h1 className="text-xl font-serif text-red-700">Quora+</h1>
        <div className="w-5"></div>
      </div>

      {/* Content - Takes remaining space */}
      <div className="flex-1 w-full max-w-md mx-auto px-3 py-1 flex flex-col justify-between overflow-hidden">
        {/* Profile Section */}
        <div className="flex justify-center py-1">
          <div className="relative">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">L</span>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-[8px]">✨</span>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold text-center text-gray-900">Join Quora+</h2>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-1.5">
          <div className="bg-amber-50 rounded-lg p-1.5 border border-amber-100 text-center">
            <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-0.5">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <p className="text-[10px] font-medium text-gray-800 leading-tight">Browse Quora ad-free</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-1.5 border border-amber-100 text-center">
            <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-0.5">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-[10px] font-medium text-gray-800 leading-tight">Unlock millions of answers</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-1.5 border border-amber-100 text-center">
            <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-0.5">
              <span className="text-white text-xs font-bold">$0</span>
            </div>
            <p className="text-[10px] font-medium text-gray-800 leading-tight">Try it free for 30 days</p>
          </div>
        </div>

        {/* Pricing Options */}
        <div className="grid grid-cols-2 gap-1.5">
          <button
            onClick={() => setPlanType('yearly')}
            className={`rounded-lg p-1.5 border-2 transition-all ${
              planType === 'yearly' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-0.5">
              <div className="flex items-center gap-1">
                <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${planType === 'yearly' ? 'border-blue-500' : 'border-gray-400'}`}>
                  {planType === 'yearly' && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>}
                </div>
                <span className="text-xs font-semibold text-gray-900">Yearly</span>
              </div>
              <span className="bg-blue-600 text-white text-[9px] font-semibold px-1 py-0.5 rounded-full">Save 43%</span>
            </div>
            <p className="text-sm font-bold text-blue-600 ml-4">$3.99/mo</p>
          </button>

          <button
            onClick={() => setPlanType('monthly')}
            className={`rounded-lg p-1.5 border-2 transition-all ${
              planType === 'monthly' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
            }`}
          >
            <div className="flex items-center gap-1 mb-0.5">
              <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${planType === 'monthly' ? 'border-blue-500' : 'border-gray-400'}`}>
                {planType === 'monthly' && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>}
              </div>
              <span className="text-xs font-semibold text-gray-900">Monthly</span>
            </div>
            <p className="text-sm font-bold text-gray-600 ml-4">$6.99/mo</p>
          </button>
        </div>

        {/* Trial Info */}
        <div className="space-y-0.5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-gray-900">30-day free trial</span>
            <span className="text-xs font-semibold text-gray-900">$0.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-gray-600">Starting January 9, 2026</span>
            <span className="text-xs font-semibold text-gray-900">${planType === 'yearly' ? '47.88' : '83.88'}/yr</span>
          </div>
        </div>

        <p className="text-[9px] text-gray-600 leading-tight">
          Your subscription will renew automatically each year. Cancel at any time in settings.
          By signing up, you agree to Quora's <a href="#" className="text-blue-600">Terms of Service</a>.
        </p>

        {/* Payment Buttons */}
        <div className="space-y-1.5">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-1.5 rounded-lg flex items-center justify-center gap-1 text-xs">
            Pay with <span className="font-bold">◉ link</span>
          </button>
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-1.5 rounded-lg text-xs">
            PayPal
          </button>
        </div>

        <div className="text-center text-gray-400 font-semibold text-[10px]">OR</div>

        {/* Card Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Card number"
            className="w-full px-2 py-1.5 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-xs"
          />
          <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-black text-green-400 px-1.5 py-0.5 rounded text-[10px] font-semibold">
            Autofill <span className="font-bold">link</span>
          </button>
        </div>

        <p className="text-[9px] text-gray-600 leading-tight">
          Existing subscriptions will also be charged to this card. You may receive a temporary authorization charge. <a href="#" className="text-blue-600">Learn more</a>.
        </p>

        {/* Submit Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-2 rounded-xl shadow-lg flex-shrink-0">
          Try 30 Days Free
        </button>
      </div>
    </div>
  );
}
