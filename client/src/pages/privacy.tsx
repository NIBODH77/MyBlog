
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Shield, Lock, Eye, Database } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <AppShell hideRightSidebar>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-muted-foreground mb-8">
            Last Updated: December 2024
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-foreground mb-1">Data Protection</h3>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Your data is encrypted and secure</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <Lock className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-foreground mb-1">Privacy Control</h3>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">You control what you share</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-foreground mb-1">Transparency</h3>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Clear about data usage</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
              <Database className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-foreground mb-1">Data Rights</h3>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Access and delete your data</p>
              </div>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                Information We Collect
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground mb-2">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-muted-foreground space-y-1">
                <li>Account information (name, email, password)</li>
                <li>Profile information (bio, profile picture, interests)</li>
                <li>Content you create (questions, answers, posts, comments)</li>
                <li>Communications with us and other users</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground mb-2">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-muted-foreground space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Personalize your experience and content recommendations</li>
                <li>Send you notifications and updates</li>
                <li>Detect and prevent fraud and abuse</li>
                <li>Analyze usage patterns and trends</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                Information Sharing
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground">
                We do not sell your personal information. We may share your information with third-party service providers who help us operate our platform, and when required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                Your Privacy Rights
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground mb-2">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-muted-foreground space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your account and data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                Cookies and Tracking
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground">
                We use cookies and similar tracking technologies to provide functionality, analyze usage, and personalize content. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                Contact Us
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at privacy@myblog.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
