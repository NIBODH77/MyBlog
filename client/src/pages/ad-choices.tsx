
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Settings, Eye, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

export default function AdChoicesPage() {
  return (
    <AppShell hideRightSidebar>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-foreground mb-4">
            Your Ad Choices
          </h1>
          <p className="text-gray-600 dark:text-muted-foreground mb-8">
            Control how ads are personalized for you on MyBlog
          </p>

          {/* Ad Personalization */}
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-border rounded-lg p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground mb-2">
                      Personalized Ads
                    </h3>
                    <p className="text-gray-600 dark:text-muted-foreground text-sm">
                      See ads based on your interests, activity on MyBlog, and information from our advertising partners.
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="border border-gray-200 dark:border-border rounded-lg p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground mb-2">
                      Interest-Based Ads
                    </h3>
                    <p className="text-gray-600 dark:text-muted-foreground text-sm">
                      Allow advertisers to show you ads based on topics you follow and content you engage with.
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="border border-gray-200 dark:border-border rounded-lg p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground mb-2">
                      Third-Party Data
                    </h3>
                    <p className="text-gray-600 dark:text-muted-foreground text-sm">
                      Allow our advertising partners to use data from other websites and apps to personalize ads for you.
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-8 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-4">
              How Ad Personalization Works
            </h2>
            <div className="space-y-3 text-sm text-gray-700 dark:text-muted-foreground">
              <p>
                <strong className="text-gray-900 dark:text-foreground">Activity-Based:</strong> We use your activity on MyBlog, such as questions you've asked, answers you've read, and topics you follow to show relevant ads.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-foreground">Partner Information:</strong> Our advertising partners may share information about your activity on other websites to help personalize ads.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-foreground">Privacy First:</strong> Your privacy is important. We never sell your personal information, and you can control your ad preferences at any time.
              </p>
            </div>
          </div>

          {/* Industry Standards */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-4">
              Industry Opt-Out Tools
            </h2>
            <p className="text-gray-600 dark:text-muted-foreground mb-4">
              You can also manage your ad preferences through these industry organizations:
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                Digital Advertising Alliance (DAA)
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Network Advertising Initiative (NAI)
              </Button>
              <Button variant="outline" className="w-full justify-start">
                European Interactive Digital Advertising Alliance (EDAA)
              </Button>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 border-t border-gray-200 dark:border-border pt-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-3">
              Learn More
            </h2>
            <p className="text-gray-600 dark:text-muted-foreground text-sm">
              For more information about how we use data and protect your privacy, please review our{' '}
              <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
