
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';

export default function TermsPage() {
  return (
    <AppShell hideRightSidebar>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 dark:text-muted-foreground mb-8">
            Last Updated: December 2024
          </p>

          <div className="prose dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground">
                By accessing and using MyBlog, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                2. Use of Service
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground mb-2">
                You agree to use MyBlog only for lawful purposes. You are prohibited from:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-muted-foreground space-y-1">
                <li>Posting false, misleading, or fraudulent content</li>
                <li>Harassing, threatening, or intimidating other users</li>
                <li>Violating intellectual property rights</li>
                <li>Attempting to gain unauthorized access to the platform</li>
                <li>Using automated systems to scrape or collect data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                3. User Content
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground">
                You retain ownership of the content you post on MyBlog. However, by posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in connection with operating and promoting the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                4. Account Termination
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground">
                We reserve the right to suspend or terminate your account at any time, with or without notice, for violations of these Terms of Service or for any other reason we deem appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                5. Disclaimer of Warranties
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground">
                MyBlog is provided "as is" without any warranties, express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground">
                MyBlog shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                7. Changes to Terms
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting a notice on the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-3">
                8. Contact Information
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at legal@myblog.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
