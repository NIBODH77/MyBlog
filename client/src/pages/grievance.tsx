
import React, { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function GrievancePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  return (
    <AppShell hideRightSidebar>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-foreground mb-4">
            Grievance Officer
          </h1>
          <p className="text-gray-600 dark:text-muted-foreground mb-6">
            For complaints regarding content or platform usage
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
            <p className="text-sm text-blue-900 dark:text-blue-300">
              In accordance with Information Technology Act 2000 and rules made thereunder, the name and contact details of the Grievance Officer are provided below:
            </p>
          </div>

          {/* Grievance Officer Details */}
          <div className="border border-gray-200 dark:border-border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-500 dark:text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-muted-foreground">Email</p>
                  <p className="font-medium text-gray-900 dark:text-foreground">grievance@myblog.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-500 dark:text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-muted-foreground">Phone</p>
                  <p className="font-medium text-gray-900 dark:text-foreground">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 dark:text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-muted-foreground">Address</p>
                  <p className="font-medium text-gray-900 dark:text-foreground">
                    MyBlog, Inc.<br />
                    123 Knowledge Street<br />
                    San Francisco, CA 94102<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Complaint Form */}
          <div className="border border-gray-200 dark:border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-6">
              Submit a Complaint
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                  Your Name *
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                  Subject *
                </label>
                <Input
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="Brief subject of your complaint"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                  Complaint Details *
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Please provide detailed information about your complaint"
                  rows={6}
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4 mr-2" />
                Submit Complaint
              </Button>
            </form>
          </div>

          {/* Response Time */}
          <div className="mt-6 bg-gray-50 dark:bg-secondary/50 rounded-lg p-4">
            <p className="text-sm text-gray-700 dark:text-muted-foreground">
              <strong className="text-gray-900 dark:text-foreground">Response Time:</strong> We acknowledge all complaints within 24 hours and aim to resolve them within 15 business days. You will receive updates via email throughout the process.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
