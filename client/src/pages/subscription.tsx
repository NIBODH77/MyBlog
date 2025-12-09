import React, { useState } from "react";
import { X } from "lucide-react";
import { useLocation } from "wouter";

export default function QuoraPlusSubscription() {
  const [, setLocation] = useLocation();

  const handleStartTrial = () => {
    setLocation("/trial-confirmation");
  };

  return (
    <div className="h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-amber-50 px-3 py-2 flex items-center justify-between border-b border-gray-200 flex-shrink-0">
        <button className="text-gray-600 hover:text-gray-800">
          <X size={20} />
        </button>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl md:text-2xl font-serif text-red-700">
            MyBlog+
          </h1>
        </div>
        <div className="w-5"></div>
      </div>

      <div className="flex-1 max-w-4xl w-full mx-auto px-3 py-2 overflow-y-auto scrollbar-hide">
        <div className="h-full flex flex-col justify-between">
          {/* Top Section */}
          <div className="space-y-2">
            {/* Profile Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg md:text-xl font-bold">
                    M
                  </span>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 md:w-4 md:h-4 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
              </div>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-center text-gray-900">
              Join MyBlog+
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-1.5 md:gap-2">
              <div className="bg-amber-50 rounded-lg p-1.5 md:p-2 border border-amber-100">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full flex items-center justify-center mb-0.5 md:mb-1 mx-auto">
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                </div>
                <p className="text-[10px] md:text-xs font-medium text-gray-800 text-center">
                  Ad-free browsing
                </p>
              </div>

              <div className="bg-amber-50 rounded-lg p-1.5 md:p-2 border border-amber-100">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full flex items-center justify-center mb-0.5 md:mb-1 mx-auto">
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-[10px] md:text-xs font-medium text-gray-800 text-center">
                  Unlimited content
                </p>
              </div>

              <div className="bg-amber-50 rounded-lg p-1.5 md:p-2 border border-amber-100">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full flex items-center justify-center mb-0.5 md:mb-1 mx-auto">
                  <span className="text-white text-xs md:text-sm font-bold">
                    $0
                  </span>
                </div>
                <p className="text-[10px] md:text-xs font-medium text-gray-800 text-center">
                  30 days free
                </p>
              </div>
            </div>

            {/* Pricing Display */}
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Best Value</p>
                <p className="text-3xl font-bold text-blue-600 mb-1">
                  $3.99/mo
                </p>
                <p className="text-xs text-gray-500">Billed yearly at $47.88</p>
                <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mt-2">
                  Save 43%
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-1.5 md:space-y-2 pb-2">
            {/* Trial Info */}
            <div className="flex justify-between items-center px-1 text-xs md:text-sm">
              <span className="font-semibold text-gray-900">
                30-day free trial
              </span>
              <span className="font-semibold text-gray-900">$0.00</span>
            </div>

            <div className="flex justify-between items-center px-1">
              <span className="text-[10px] md:text-xs text-gray-600">
                Starting Jan 9, 2026
              </span>
              <span className="text-xs md:text-sm font-semibold text-gray-900">
                $47.88/yr
              </span>
            </div>

            <p className="text-[10px] md:text-xs text-gray-600 px-1">
              Auto-renews yearly. Cancel anytime in settings.
            </p>

            {/* Button */}
            <button
              onClick={handleStartTrial}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 rounded-xl transition-colors shadow-lg mt-2"
            >
              Try 30 Days Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}