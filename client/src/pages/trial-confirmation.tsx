
import React from "react";
import { Header } from "@/components/layout/Header";
import { Link } from "wouter";
import { CheckCircle, Calendar, CreditCard, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TrialConfirmation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to MyBlog+! 🎉
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Your 30-day free trial has started successfully
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <Gift className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">30 Days Free</h3>
              <p className="text-sm text-gray-600">Full access to all premium features</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Cancel Anytime</h3>
              <p className="text-sm text-gray-600">No commitment, cancel before trial ends</p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <CreditCard className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Auto-Renewal</h3>
              <p className="text-sm text-gray-600">Seamless continuation after trial</p>
            </div>
          </div>

          {/* Trial Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-gray-900 mb-4">Your Trial Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Trial Start Date:</span>
                <span className="font-medium">December 9, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Trial End Date:</span>
                <span className="font-medium">January 8, 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Plan Type:</span>
                <span className="font-medium">Yearly ($3.99/mo)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Next Billing Date:</span>
                <span className="font-medium">January 9, 2026</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link href="/">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                Start Exploring MyBlog+
              </Button>
            </Link>
            
            <Link href="/settings">
              <Button variant="outline" className="w-full">
                Manage Subscription
              </Button>
            </Link>
          </div>

          {/* Reminder */}
          <p className="text-xs text-gray-500 mt-6">
            We'll send you a reminder 7 days before your trial ends
          </p>
        </div>
      </div>
    </div>
  );
}
