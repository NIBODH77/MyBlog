
import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function MyBlogPlusPage() {
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      {/* Main Page Content */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to MyBlog</h1>
        <p className="text-gray-600 mb-8">Experience premium features with MyBlog+</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#a82400] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#8a1e00] transition-colors shadow-lg"
        >
          Try MyBlog+
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full border border-gray-200 animate-slideUp">
            {/* Header */}
            <div className="relative p-3 pb-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 left-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={18} />
              </button>
              <div className="text-center">
                <h1 className="text-[#a82400] text-xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  MyBlog<span className="text-lg align-super">+</span>
                </h1>
                <div className="flex justify-center mb-2">
                  <div className="relative">
                    <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                      L
                    </div>
                    <div className="absolute -top-1 -right-1 bg-red-600 rounded-full p-1">
                      <Sparkles size={10} className="text-white" fill="white" />
                    </div>
                  </div>
                </div>
                <h2 className="text-base font-semibold text-gray-900">Join MyBlog+</h2>
              </div>
            </div>

            {/* Content */}
            <div className="px-3 pb-3">
              {/* Benefits */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-yellow-50 rounded-lg p-2 text-center">
                  <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-1">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
                      <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-700 font-medium">Browse ad-free</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-2 text-center">
                  <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-1">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
                      <rect x="5" y="3" width="10" height="14" rx="1" />
                      <line x1="8" y1="7" x2="12" y2="7" stroke="white" strokeWidth="1.5"/>
                      <line x1="8" y1="10" x2="12" y2="10" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-700 font-medium">Unlock answers</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-2 text-center">
                  <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-1">
                    <span className="text-white font-bold text-xs">$0</span>
                  </div>
                  <p className="text-xs text-gray-700 font-medium">30 days free</p>
                </div>
              </div>

              {/* Plan Selection */}
              <div className="space-y-2 mb-3">
                <button
                  onClick={() => setSelectedPlan('yearly')}
                  className={`w-full p-2.5 rounded-lg border-2 transition-all ${
                    selectedPlan === 'yearly'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedPlan === 'yearly' ? 'border-blue-500' : 'border-gray-300'
                      }`}>
                        {selectedPlan === 'yearly' && (
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        )}
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-gray-900">Yearly</span>
                          <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                            Save 43%
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">$3.99/mo</p>
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedPlan('monthly')}
                  className={`w-full p-2.5 rounded-lg border-2 transition-all ${
                    selectedPlan === 'monthly'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedPlan === 'monthly' ? 'border-blue-500' : 'border-gray-300'
                      }`}>
                        {selectedPlan === 'monthly' && (
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        )}
                      </div>
                      <div className="text-left">
                        <span className="font-semibold text-sm text-gray-900">Monthly</span>
                        <p className="text-xs text-gray-600">$6.99/mo</p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Price Details */}
              <div className="space-y-1 mb-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">30-day free trial</span>
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Starting January 6, 2026</span>
                  <span className="font-semibold">$47.88/yr</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-2">
                Auto-renews yearly. Cancel anytime.
              </p>

              {/* Payment Buttons */}
              <div className="space-y-2 mb-2">
                <button className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm">
                  Pay with <span className="font-bold">◉ link</span>
                </button>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-2 rounded-lg flex items-center justify-center transition-colors text-sm">
                  <span className="font-bold italic" style={{ fontFamily: 'Verdana, sans-serif' }}>Pay</span>
                  <span className="font-bold" style={{ fontFamily: 'Verdana, sans-serif' }}>Pal</span>
                </button>
              </div>

              {/* OR Divider */}
              <div className="flex items-center gap-3 my-2">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="text-gray-500 text-xs">OR</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Card Input */}
              <div className="mb-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    Autofill <span className="font-bold text-green-400">link</span>
                  </button>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-2">
                May receive temporary authorization charge.
              </p>

              {/* Try Free Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full text-sm transition-colors">
                Try 30 Days Free
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
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
