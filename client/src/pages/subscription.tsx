
import React, { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Check, Sparkles, Zap, Shield, Crown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TranslatedText } from '@/hooks/useTranslation';

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

  const features = [
    { icon: Shield, title: 'Ad-free Experience', description: 'Browse without any interruptions' },
    { icon: Star, title: 'Premium Content', description: 'Access exclusive answers and insights' },
    { icon: Zap, title: 'Priority Support', description: 'Get help when you need it most' },
    { icon: Crown, title: 'Special Badge', description: 'Stand out with a premium badge' },
  ];

  const plans = [
    {
      type: 'monthly' as const,
      price: 6.99,
      period: 'month',
      total: 83.88,
      discount: null,
    },
    {
      type: 'yearly' as const,
      price: 3.99,
      period: 'month',
      total: 47.88,
      discount: 'Save 43%',
    },
  ];

  return (
    <AppShell hideRightSidebar>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">
                <TranslatedText>MyBlog Premium</TranslatedText>
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-4">
              <TranslatedText>Elevate Your Experience</TranslatedText>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              <TranslatedText>Join thousands of premium members and unlock the full potential of MyBlog</TranslatedText>
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    <TranslatedText>{feature.title}</TranslatedText>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <TranslatedText>{feature.description}</TranslatedText>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              <TranslatedText>Choose Your Plan</TranslatedText>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {plans.map((plan) => (
                <Card
                  key={plan.type}
                  className={`cursor-pointer transition-all ${
                    selectedPlan === plan.type
                      ? 'border-4 border-purple-500 shadow-2xl scale-105'
                      : 'border-2 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
                  }`}
                  onClick={() => setSelectedPlan(plan.type)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedPlan === plan.type
                              ? 'border-purple-500 bg-purple-500'
                              : 'border-gray-300 dark:border-gray-600'
                          }`}
                        >
                          {selectedPlan === plan.type && (
                            <Check className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <h3 className="text-2xl font-bold capitalize text-gray-900 dark:text-white">
                          <TranslatedText>{plan.type}</TranslatedText>
                        </h3>
                      </div>
                      {plan.discount && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                          <TranslatedText>{plan.discount}</TranslatedText>
                        </span>
                      )}
                    </div>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          ${plan.price}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          /<TranslatedText>{plan.period}</TranslatedText>
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        <TranslatedText>Billed ${plan.total} annually</TranslatedText>
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          <TranslatedText>30-day free trial</TranslatedText>
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          <TranslatedText>Cancel anytime</TranslatedText>
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          <TranslatedText>All premium features</TranslatedText>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trial Info */}
            <Card className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 border-2 border-purple-200 dark:border-purple-800 mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    <TranslatedText>Start Your 30-Day Free Trial</TranslatedText>
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <TranslatedText>No credit card required. Cancel anytime during the trial period.</TranslatedText>
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">$0.00</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <TranslatedText>Starting January 9, 2026</TranslatedText>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      ${selectedPlan === 'yearly' ? '47.88' : '83.88'}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <TranslatedText>per year after trial</TranslatedText>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <Button
              className="w-full h-14 text-lg font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 hover:from-purple-700 hover:via-blue-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all"
              data-testid="button-start-trial"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              <TranslatedText>Start Your Free Trial</TranslatedText>
            </Button>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              <TranslatedText>By subscribing, you agree to our</TranslatedText>{' '}
              <a href="/terms" className="text-purple-600 dark:text-purple-400 hover:underline">
                <TranslatedText>Terms of Service</TranslatedText>
              </a>
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
