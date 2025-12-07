
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function AcceptableUsePage() {
  const allowed = [
    'Ask genuine questions and provide helpful answers',
    'Share knowledge and expertise respectfully',
    'Engage in constructive discussions',
    'Cite sources when sharing information',
    'Respect others\' opinions and perspectives',
    'Report violations of community guidelines'
  ];

  const prohibited = [
    'Harassment, bullying, or hate speech',
    'Spam or promotional content',
    'Misinformation or deliberately false content',
    'Impersonation of others',
    'Sharing private information without consent',
    'Copyright infringement',
    'Adult or inappropriate content',
    'Soliciting illegal activities'
  ];

  return (
    <AppShell hideRightSidebar>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8">
          <div className="flex items-start gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400 flex-shrink-0" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-foreground mb-2">
                Acceptable Use Policy
              </h1>
              <p className="text-gray-600 dark:text-muted-foreground">
                Guidelines for responsible use of MyBlog platform
              </p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-4">
                Overview
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground">
                This Acceptable Use Policy outlines the rules and guidelines for using MyBlog. By using our platform, you agree to comply with this policy. Violations may result in content removal, account suspension, or permanent ban.
              </p>
            </section>

            <section className="bg-green-50 dark:bg-green-950/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground m-0">
                  Encouraged Behavior
                </h2>
              </div>
              <ul className="space-y-2">
                {allowed.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-red-50 dark:bg-red-950/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground m-0">
                  Prohibited Activities
                </h2>
              </div>
              <ul className="space-y-2">
                {prohibited.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-muted-foreground">
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                Content Moderation
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground">
                We use a combination of automated tools and human moderators to enforce this policy. Content that violates these guidelines will be removed, and repeat offenders may face account restrictions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                Reporting Violations
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground">
                If you encounter content that violates this policy, please report it using the report button available on all content. Our moderation team will review and take appropriate action.
              </p>
            </section>

            <section className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                Questions?
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground">
                If you have questions about this Acceptable Use Policy, contact us at conduct@myblog.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
