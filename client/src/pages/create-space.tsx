
import React, { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Camera, Upload } from 'lucide-react';

export default function CreateSpacePage() {
  const [spaceName, setSpaceName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <AppShell hideRightSidebar>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-2">
            Create a Space
          </h1>
          <p className="text-gray-600 dark:text-muted-foreground mb-8">
            Spaces are communities where people can share content and discuss topics they care about.
          </p>

          <div className="space-y-6">
            {/* Space Cover Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                Cover Image
              </label>
              <div className="w-full h-48 bg-gray-100 dark:bg-secondary rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-border cursor-pointer hover:bg-gray-50 dark:hover:bg-secondary/80">
                <div className="text-center">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 dark:text-muted-foreground">
                    Click to upload cover image
                  </p>
                </div>
              </div>
            </div>

            {/* Space Icon */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                Space Icon
              </label>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-100 dark:bg-secondary rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-border cursor-pointer hover:bg-gray-50 dark:hover:bg-secondary/80">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 dark:text-muted-foreground">
                  Recommended: 200x200px
                </p>
              </div>
            </div>

            {/* Space Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                Space Name *
              </label>
              <Input
                value={spaceName}
                onChange={(e) => setSpaceName(e.target.value)}
                placeholder="Enter your space name"
                className="w-full"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                Description
              </label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What is your space about?"
                rows={4}
                className="w-full"
              />
            </div>

            {/* Privacy Settings */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                Privacy
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-secondary/50">
                  <input type="radio" name="privacy" defaultChecked className="w-4 h-4" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-foreground">Public</p>
                    <p className="text-sm text-gray-500 dark:text-muted-foreground">
                      Anyone can see and join this space
                    </p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-secondary/50">
                  <input type="radio" name="privacy" className="w-4 h-4" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-foreground">Private</p>
                    <p className="text-sm text-gray-500 dark:text-muted-foreground">
                      Only invited members can see and join
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                Create Space
              </Button>
              <Button variant="outline" className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
