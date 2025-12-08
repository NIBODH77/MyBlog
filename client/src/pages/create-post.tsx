
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';
import { useLocation } from 'wouter';

export default function CreatePostPage() {
  const [, setLocation] = useLocation();
  const [postContent, setPostContent] = useState('');
  const [visibility, setVisibility] = useState('Public');

  const handleCreatePost = () => {
    console.log('Post created:', postContent);
    // API call to save the post
    setLocation('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-card rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-border p-4">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-foreground">Create Post</h1>
            <button
              onClick={() => setLocation('/')}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Tips Section */}
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <h3 className="text-blue-900 dark:text-blue-300 font-semibold text-sm mb-2">
                Tips on creating engaging posts
              </h3>
              <ul className="space-y-1 text-blue-700 dark:text-blue-400 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Share unique insights and perspectives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Add images or links to make your post more engaging</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep it clear and well-formatted</span>
                </li>
              </ul>
            </div>

            {/* Input Section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  L
                </div>
                <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                  ▸
                </button>
                <select
                  value={visibility}
                  onChange={(e) => setVisibility(e.target.value)}
                  className="text-sm text-gray-700 dark:text-gray-300 dark:bg-secondary border border-gray-300 dark:border-border rounded px-2 py-1 focus:outline-none focus:border-blue-500"
                >
                  <option>Public</option>
                  <option>Private</option>
                  <option>Anonymous</option>
                </select>
              </div>

              <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder='Say something...'
                className="w-full min-h-[200px] p-3 border border-gray-300 dark:border-border dark:bg-background rounded-lg focus:outline-none focus:border-blue-500 resize-none text-gray-900 dark:text-foreground"
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3">
              <Button
                variant="ghost"
                onClick={() => setLocation('/')}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreatePost}
                disabled={!postContent.trim()}
                className={`rounded-full px-6 ${
                  postContent.trim()
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
