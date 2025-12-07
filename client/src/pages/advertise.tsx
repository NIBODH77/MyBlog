
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Target, TrendingUp, Users, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdvertisePage() {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Targeted Reach',
      description: 'Connect with highly engaged audiences based on interests, topics, and demographics.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Quality Audience',
      description: 'Reach millions of knowledge seekers actively looking for information and solutions.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Performance Driven',
      description: 'Track your campaigns with detailed analytics and optimize for better results.'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Flexible Budget',
      description: 'Start with any budget and scale as you see results. Pay only for what works.'
    }
  ];

  return (
    <AppShell hideRightSidebar>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-12 mb-8 text-white text-center">
          <h1 className="text-5xl font-bold mb-4">
            Advertise on MyBlog
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Reach millions of engaged users seeking knowledge and answers
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">300M+</div>
            <div className="text-gray-600 dark:text-muted-foreground">Monthly Visitors</div>
          </div>
          <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">50K+</div>
            <div className="text-gray-600 dark:text-muted-foreground">Topics Covered</div>
          </div>
          <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">85%</div>
            <div className="text-gray-600 dark:text-muted-foreground">Engagement Rate</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-8 text-center">
            Why Advertise With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border border-gray-200 dark:border-border rounded-lg hover:shadow-md transition-shadow">
                <div className="text-blue-600 dark:text-blue-400 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ad Formats */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-6">
            Advertising Formats
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-2">
                Display Ads
              </h3>
              <p className="text-gray-600 dark:text-muted-foreground">
                Eye-catching banner ads placed strategically across the platform for maximum visibility.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-2">
                Sponsored Content
              </h3>
              <p className="text-gray-600 dark:text-muted-foreground">
                Native advertising that blends seamlessly with organic content for higher engagement.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-2">
                Topic Sponsorship
              </h3>
              <p className="text-gray-600 dark:text-muted-foreground">
                Sponsor specific topics or spaces to reach highly targeted audiences interested in your niche.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg shadow-sm p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contact our advertising team to create a custom campaign for your business.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contact Sales Team
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
