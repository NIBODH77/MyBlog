
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { FileText, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PressPage() {
  const pressReleases = [
    {
      date: 'December 15, 2024',
      title: 'MyBlog Reaches 300 Million Monthly Active Users',
      description: 'Platform continues rapid growth as knowledge-sharing becomes essential tool for millions worldwide.'
    },
    {
      date: 'November 28, 2024',
      title: 'MyBlog Announces New AI-Powered Features',
      description: 'Introducing intelligent question suggestions and enhanced content recommendations.'
    },
    {
      date: 'October 10, 2024',
      title: 'MyBlog Expands to 50+ Languages',
      description: 'Global expansion brings knowledge sharing to more communities around the world.'
    }
  ];

  return (
    <AppShell hideRightSidebar>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-foreground mb-4">
            Press & Media
          </h1>
          <p className="text-lg text-gray-600 dark:text-muted-foreground mb-6">
            News, updates, and resources for journalists and media professionals
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Mail className="w-4 h-4 mr-2" />
            Contact Press Team
          </Button>
        </div>

        {/* Company Overview */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
            About MyBlog
          </h2>
          <p className="text-gray-700 dark:text-muted-foreground mb-4">
            MyBlog is the world's leading knowledge-sharing platform where people ask questions and connect with others who contribute unique insights and quality answers. With over 300 million monthly active users, MyBlog empowers people to learn from each other and better understand the world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">300M+</div>
              <div className="text-sm text-gray-600 dark:text-muted-foreground">Monthly Users</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">50K+</div>
              <div className="text-sm text-gray-600 dark:text-muted-foreground">Topics</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">50+</div>
              <div className="text-sm text-gray-600 dark:text-muted-foreground">Languages</div>
            </div>
          </div>
        </div>

        {/* Press Releases */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6">
            Recent Press Releases
          </h2>
          <div className="space-y-4">
            {pressReleases.map((release, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-border pb-4 last:border-b-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-gray-500 dark:text-muted-foreground mb-1">
                      {release.date}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground mb-2">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 dark:text-muted-foreground">
                      {release.description}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="flex-shrink-0">
                    <FileText className="w-4 h-4 mr-2" />
                    Read
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Assets */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
            Brand Assets
          </h2>
          <p className="text-gray-600 dark:text-muted-foreground mb-6">
            Download official MyBlog logos, images, and brand guidelines for use in your publications.
          </p>
          <div className="flex gap-4">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Logos
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Brand Guidelines
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-sm p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Media Inquiries
          </h2>
          <p className="mb-4 opacity-90">
            For press inquiries, interview requests, or additional information, please contact:
          </p>
          <div className="space-y-2">
            <p className="font-medium">Email: press@myblog.com</p>
            <p className="font-medium">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
