import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

interface MyBlogPlusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MyBlogPlusModal({ isOpen, onClose }: MyBlogPlusModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Header */}
        <div className="relative p-6 pb-4">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
          <div className="text-center">
            <h1 className="text-[#a82400] text-3xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              MyBlog<span className="text-2xl align-super">+</span>
            </h1>
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl font-semibold">
                  L
                </div>
                <div className="absolute -top-1 -right-1 bg-red-600 rounded-full p-1">
                  <Sparkles size={16} className="text-white" fill="white" />
                </div>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Join MyBlog+</h2>
          </div>
        </div>

        {/* Benefits */}
        <div className="px-6 pb-4">
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-yellow-50 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" />
                </svg>
              </div>
              <p className="text-xs text-gray-700 font-medium">Browse MyBlog ad-free</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <rect x="5" y="3" width="10" height="14" rx="1" />
                  <line x1="8" y1="7" x2="12" y2="7" stroke="white" strokeWidth="1.5"/>
                  <line x1="8" y1="10" x2="12" y2="10" stroke="white" strokeWidth="1.5"/>
                </svg>
              </div>
              <p className="text-xs text-gray-700 font-medium">Unlock millions of answers</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">$0</span>
              </div>
              <p className="text-xs text-gray-700 font-medium">Try it free for 30 days</p>
            </div>
          </div>

          {/* Plan Selection */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                selectedPlan === 'yearly'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === 'yearly' ? 'border-blue-500' : 'border-gray-300'
                  }`}>
                    {selectedPlan === 'yearly' && (
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    )}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">Yearly</span>
                      <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                        Save 43%
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">$3.99/mo</p>
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                selectedPlan === 'monthly'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === 'monthly' ? 'border-blue-500' : 'border-gray-300'
                  }`}>
                    {selectedPlan === 'monthly' && (
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    )}
                  </div>
                  <div className="text-left">
                    <span className="font-semibold text-gray-900">Monthly</span>
                    <p className="text-sm text-gray-600">$6.99/mo</p>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Price Details */}
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">30-day free trial</span>
              <span className="font-semibold">$0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Starting January 6, 2026</span>
              <span className="font-semibold">$47.88/yr</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 mb-4">
            Your subscription will renew automatically each year. Cancel at any time in settings.
          </p>

          <p className="text-xs text-gray-500 mb-6">
            By signing up for a subscription, you agree to MyBlog's{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Subscriber Terms of Service
            </a>
            .
          </p>

          {/* Payment Buttons */}
          <div className="space-y-3 mb-4">
            <button className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
              Pay with
              <span className="font-bold">◉ link</span>
            </button>
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 rounded-lg flex items-center justify-center transition-colors">
              <span className="font-bold italic" style={{ fontFamily: 'Verdana, sans-serif' }}>Pay</span>
              <span className="font-bold" style={{ fontFamily: 'Verdana, sans-serif' }}>Pal</span>
            </button>
          </div>

          {/* OR Divider */}
          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Card Input */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Card number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                Autofill
                <span className="font-bold text-green-400">link</span>
              </button>
            </div>
          </div>

          <p className="text-xs text-gray-500 mb-4">
            Existing subscriptions will also be charged to this card. You may receive a temporary authorization charge to validate your card.{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Learn more
            </a>
            .
          </p>

          {/* Try Free Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full text-base transition-colors">
            Try 30 Days Free
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
