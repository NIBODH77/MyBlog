
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Briefcase, Globe, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CareersPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'People First',
      description: 'We prioritize our team\'s wellbeing and growth.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We encourage creativity and new ideas.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Making a difference worldwide.'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Ownership',
      description: 'Take initiative and own your work.'
    }
  ];

  const openings = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time'
    },
    {
      title: 'Content Moderator',
      department: 'Trust & Safety',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Full-time'
    }
  ];

  return (
    <AppShell hideRightSidebar>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-12 mb-8 text-white text-center">
          <h1 className="text-5xl font-bold mb-4">
            Join Our Team
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Help us build the world's best knowledge-sharing platform
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            View Open Positions
          </Button>
        </div>

        {/* Values Section */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-6">
            Benefits & Perks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-foreground mb-1">
                  Competitive Salary
                </h4>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">
                  Above-market compensation and equity options
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-foreground mb-1">
                  Health Insurance
                </h4>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">
                  Comprehensive medical, dental, and vision coverage
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-foreground mb-1">
                  Flexible Work
                </h4>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">
                  Remote-friendly with flexible hours
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
              <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-foreground mb-1">
                  Learning Budget
                </h4>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">
                  Annual budget for courses and conferences
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-6">
            Open Positions
          </h2>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <div key={index} className="border border-gray-200 dark:border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-2">
                      {job.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-gray-600 dark:text-muted-foreground">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button>Apply Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
