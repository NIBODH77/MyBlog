import React, { useState } from "react";
import { Check, X } from "lucide-react";
import { Link } from "wouter";

export default function QuoraPlusSubscription() {
  const [planType, setPlanType] = useState("yearly");

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

            {/* Features Grid - Compact */}
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

            {/* Pricing Options - Compact */}
            <div className="grid grid-cols-2 gap-1.5 md:gap-2">
              <button
                onClick={() => setPlanType("yearly")}
                className={`relative rounded-lg p-1.5 md:p-2 border-2 transition-all ${
                  planType === "yearly"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
              >
                <div className="flex items-start justify-between mb-0.5 md:mb-1">
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 flex items-center justify-center ${
                        planType === "yearly"
                          ? "border-blue-500"
                          : "border-gray-400"
                      }`}
                    >
                      {planType === "yearly" && (
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-gray-900">
                      Yearly
                    </span>
                  </div>
                  <span className="bg-blue-600 text-white text-[10px] md:text-xs font-semibold px-1 md:px-1.5 py-0.5 rounded-full">
                    Save 43%
                  </span>
                </div>
                <div className="ml-4 md:ml-5">
                  <p className="text-sm md:text-base font-bold text-blue-600">
                    $3.99/mo
                  </p>
                </div>
              </button>

              <button
                onClick={() => setPlanType("monthly")}
                className={`rounded-lg p-1.5 md:p-2 border-2 transition-all ${
                  planType === "monthly"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
              >
                <div className="flex items-center gap-1 mb-0.5 md:mb-1">
                  <div
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 flex items-center justify-center ${
                      planType === "monthly"
                        ? "border-blue-500"
                        : "border-gray-400"
                    }`}
                  >
                    {planType === "monthly" && (
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-gray-900">
                    Monthly
                  </span>
                </div>
                <div className="ml-4 md:ml-5">
                  <p className="text-sm md:text-base font-bold text-gray-600">
                    $6.99/mo
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-1.5 md:space-y-2 pb-2">
            {/* Trial Info - Compact */}
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
                ${planType === "yearly" ? "47.88" : "83.88"}/yr
              </span>
            </div>

            <p className="text-[10px] md:text-xs text-gray-600 px-1">
              Auto-renews yearly. Cancel anytime in settings.
            </p>

            {/* Payment Buttons - Compact */}
            <div className="space-y-1.5">
              <Link href="/upi-payment">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-1.5 md:py-2 rounded-lg transition-colors text-xs md:text-sm">
                  <span className="text-sm md:text-base">Pay Now With UPI</span>
                </button>
              </Link>
            </div>

            <div className="text-center text-gray-400 font-semibold text-[10px] md:text-xs">
              OR
            </div>

            {/* Card Input - Compact */}
            <div className="space-y-1.5">
              <Link href="/card-payment">
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-1.5 md:py-3 rounded-lg transition-colors text-xs md:text-sm mb-5">
                  Pay with Card
                </button>
              </Link>
            </div>

            {/* Submit Button */}
            <Link href="/trial-confirmation">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm md:text-base py-3 md:py-3 rounded-xl transition-colors shadow-lg">
                Try 30 Days Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
