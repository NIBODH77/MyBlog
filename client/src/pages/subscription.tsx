import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

export default function QuoraPlusSubscription() {
  const [planType, setPlanType] = useState('yearly');

  return (
    <div className="h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-amber-50 px-3 py-2 flex items-center justify-between border-b border-gray-200">
        <button className="text-gray-600 hover:text-gray-800">
          <X size={20} />
        </button>
        <div className="flex-1 flex justify-center">
          <h1 className="text-2xl font-serif text-red-700">Quora+</h1>
        </div>
        <div className="w-5"></div>
      </div>

      <div className="flex-1 max-w-5xl mx-auto px-3 py-2 overflow-hidden">
        {/* Profile Icon */}
        <div className="flex justify-center mb-2">
          <div className="relative">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">L</span>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✨</span>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-center mb-3 text-gray-900">Join Quora+</h2>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-amber-50 rounded-lg p-2 border border-amber-100">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mb-1">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <p className="text-xs font-medium text-gray-800">Browse Quora ad-free</p>
          </div>

          <div className="bg-amber-50 rounded-lg p-2 border border-amber-100">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mb-1">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs font-medium text-gray-800">Unlock millions of answers</p>
          </div>

          <div className="bg-amber-50 rounded-lg p-2 border border-amber-100">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mb-1">
              <span className="text-white text-sm font-bold">$0</span>
            </div>
            <p className="text-xs font-medium text-gray-800">Try it free for 30 days</p>
          </div>
        </div>

        {/* Pricing Options */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <button
            onClick={() => setPlanType('yearly')}
            className={`relative rounded-lg p-2 border-2 transition-all ${
              planType === 'yearly'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 bg-white hover:border-gray-400'
            }`}
          >
            <div className="flex items-start justify-between mb-1">
              <div className="flex items-center gap-1">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  planType === 'yearly' ? 'border-blue-500' : 'border-gray-400'
                }`}>
                  {planType === 'yearly' && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
                <span className="text-sm font-semibold text-gray-900">Yearly</span>
              </div>
              <span className="bg-blue-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                Save 43%
              </span>
            </div>
            <div className="ml-5">
              <p className="text-base font-bold text-blue-600">$3.99/mo</p>
            </div>
          </button>

          <button
            onClick={() => setPlanType('monthly')}
            className={`rounded-lg p-2 border-2 transition-all ${
              planType === 'monthly'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 bg-white hover:border-gray-400'
            }`}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                planType === 'monthly' ? 'border-blue-500' : 'border-gray-400'
              }`}>
                {planType === 'monthly' && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
              <span className="text-sm font-semibold text-gray-900">Monthly</span>
            </div>
            <div className="ml-5">
              <p className="text-base font-bold text-gray-600">$6.99/mo</p>
            </div>
          </button>
        </div>

        {/* Trial Info */}
        <div className="flex justify-between items-center mb-1 px-1">
          <span className="text-sm font-semibold text-gray-900">30-day free trial</span>
          <span className="text-sm font-semibold text-gray-900">$0.00</span>
        </div>

        <div className="flex justify-between items-center mb-2 px-1">
          <span className="text-xs text-gray-600">Starting January 9, 2026</span>
          <span className="text-sm font-semibold text-gray-900">
            ${planType === 'yearly' ? '47.88' : '83.88'}/yr
          </span>
        </div>

        <p className="text-xs text-gray-600 mb-2 px-1">
          Your subscription will renew automatically each year. Cancel at any time in settings.
        </p>

        <p className="text-xs text-gray-600 mb-2 px-1">
          By signing up for a subscription, you agree to Quora's{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Subscriber Terms of Service
          </a>
          .
        </p>

        {/* Payment Buttons */}
        <div className="space-y-2 mb-2">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-1 transition-colors text-sm">
            Pay with <span className="font-bold text-base">◉ link</span>
          </button>

          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-2 rounded-lg transition-colors text-sm">
            <span className="text-base">Pay</span>
            <span className="text-base text-blue-600">Pal</span>
          </button>
        </div>

        <div className="text-center text-gray-400 font-semibold my-2 text-xs">OR</div>

        {/* Card Input */}
        <div className="mb-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Card number"
              className="w-full px-2 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-green-400 px-2 py-1 rounded-lg font-semibold text-xs hover:bg-gray-800 transition-colors">
              Autofill <span className="font-bold">link</span>
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-600 mb-2 px-1">
          Existing subscriptions will also be charged to this card. You may receive a temporary authorization
          charge to validate your card.{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Learn more
          </a>
          .
        </p>

        {/* Submit Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-2.5 rounded-xl transition-colors shadow-lg">
          Try 30 Days Free
        </button>
      </div>
    </div>
  );
}