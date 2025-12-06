import React, { useState } from 'react';
import { X, HelpCircle } from 'lucide-react';

export default function ThemeSettingModal() {
  const [selectedTheme, setSelectedTheme] = useState('light');

  return (
    <div className="min-h-screen bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Theme setting</h2>
            <p className="text-sm text-gray-600 mt-1">
              Adjust how you'd like Quora to appear on this browser.
            </p>
          </div>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Theme Options */}
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4">
            {/* Light Theme */}
            <button
              onClick={() => setSelectedTheme('light')}
              className={`relative border-2 rounded-lg overflow-hidden transition-all ${
                selectedTheme === 'light' ? 'border-blue-600' : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="absolute top-3 left-3 flex items-center space-x-2">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  selectedTheme === 'light' ? 'border-blue-600 bg-blue-600' : 'border-gray-400'
                }`}>
                  {selectedTheme === 'light' && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-semibold text-gray-900">Light</span>
              </div>

              {/* Light Theme Preview */}
              <div className="bg-gray-50 p-4 pt-12">
                <div className="bg-white rounded shadow-sm p-3 mb-3">
                  <div className="h-2 bg-red-500 w-16 mb-3 rounded"></div>
                  <div className="flex space-x-3 mb-3">
                    <div className="space-y-2 flex-shrink-0">
                      <div className="h-1.5 bg-gray-300 w-12 rounded"></div>
                      <div className="h-1.5 bg-gray-300 w-12 rounded"></div>
                      <div className="h-1.5 bg-gray-300 w-12 rounded"></div>
                      <div className="h-1.5 bg-gray-300 w-12 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-400 w-3/4 mb-2 rounded"></div>
                      <div className="h-1.5 bg-gray-300 w-1/2 mb-3 rounded"></div>
                      <div className="h-16 bg-gray-900 rounded mb-2"></div>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-1">
                          <div className="h-1 bg-gray-300 w-8 rounded"></div>
                          <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 flex-shrink-0">
                      <div className="h-1.5 bg-gray-300 w-12 rounded"></div>
                      <div className="h-1.5 bg-gray-300 w-12 rounded"></div>
                      <div className="h-1.5 bg-gray-300 w-12 rounded"></div>
                    </div>
                  </div>
                  <div className="h-1.5 bg-gray-200 w-20 rounded"></div>
                </div>
              </div>
            </button>

            {/* Dark Theme */}
            <button
              onClick={() => setSelectedTheme('dark')}
              className={`relative border-2 rounded-lg overflow-hidden transition-all ${
                selectedTheme === 'dark' ? 'border-blue-600' : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="absolute top-3 left-3 flex items-center space-x-2 z-10">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  selectedTheme === 'dark' ? 'border-blue-600 bg-blue-600' : 'border-gray-400'
                }`}>
                  {selectedTheme === 'dark' && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-semibold text-white">Dark</span>
              </div>

              {/* Dark Theme Preview */}
              <div className="bg-gray-900 p-4 pt-12">
                <div className="bg-gray-800 rounded shadow-sm p-3 mb-3">
                  <div className="h-2 bg-red-500 w-16 mb-3 rounded"></div>
                  <div className="flex space-x-3 mb-3">
                    <div className="space-y-2 flex-shrink-0">
                      <div className="h-1.5 bg-gray-600 w-12 rounded"></div>
                      <div className="h-1.5 bg-gray-600 w-12 rounded"></div>
                      <div className="h-1.5 bg-gray-600 w-12 rounded"></div>
                      <div className="h-1.5 bg-gray-600 w-12 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-400 w-3/4 mb-2 rounded"></div>
                      <div className="h-1.5 bg-gray-500 w-1/2 mb-3 rounded"></div>
                      <div className="h-16 bg-white rounded mb-2"></div>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-1">
                          <div className="h-1 bg-gray-500 w-8 rounded"></div>
                          <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 flex-shrink-0">
                      <div className="h-1.5 bg-gray-600 w-12 rounded"></div>
                      <div className="h-1.5 bg-gray-600 w-12 rounded"></div>
                      <div className="h-1.5 bg-gray-600 w-12 rounded"></div>
                    </div>
                  </div>
                  <div className="h-1.5 bg-gray-700 w-20 rounded"></div>
                </div>
              </div>
            </button>

            {/* Auto Theme */}
            <button
              onClick={() => setSelectedTheme('auto')}
              className={`relative border-2 rounded-lg overflow-hidden transition-all ${
                selectedTheme === 'auto' ? 'border-blue-600' : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="absolute top-3 left-3 flex items-center space-x-2 z-10">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  selectedTheme === 'auto' ? 'border-blue-600 bg-blue-600' : 'border-gray-400'
                }`}>
                  {selectedTheme === 'auto' && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-semibold text-gray-900">Auto</span>
              </div>
              <button className="absolute top-3 right-3 z-10">
                <HelpCircle className="w-5 h-5 text-gray-600" />
              </button>

              {/* Auto Theme Preview (Split) */}
              <div className="flex h-full">
                <div className="w-1/2 bg-gray-50 p-2 pt-12">
                  <div className="bg-white rounded shadow-sm p-2">
                    <div className="h-1.5 bg-red-500 w-12 mb-2 rounded"></div>
                    <div className="flex space-x-2 mb-2">
                      <div className="space-y-1.5 flex-shrink-0">
                        <div className="h-1 bg-gray-300 w-8 rounded"></div>
                        <div className="h-1 bg-gray-300 w-8 rounded"></div>
                        <div className="h-1 bg-gray-300 w-8 rounded"></div>
                      </div>
                      <div className="flex-1">
                        <div className="h-1.5 bg-gray-400 w-full mb-1.5 rounded"></div>
                        <div className="h-1 bg-gray-300 w-2/3 mb-2 rounded"></div>
                        <div className="h-12 bg-gray-900 rounded mb-1.5"></div>
                        <div className="h-1 bg-gray-200 w-6 rounded"></div>
                      </div>
                      <div className="space-y-1.5 flex-shrink-0">
                        <div className="h-1 bg-gray-300 w-8 rounded"></div>
                      </div>
                    </div>
                    <div className="h-1 bg-gray-200 w-16 rounded"></div>
                  </div>
                </div>
                <div className="w-1/2 bg-gray-900 p-2 pt-12">
                  <div className="bg-gray-800 rounded shadow-sm p-2">
                    <div className="h-1.5 bg-red-500 w-12 mb-2 rounded"></div>
                    <div className="flex space-x-2 mb-2">
                      <div className="space-y-1.5 flex-shrink-0">
                        <div className="h-1 bg-gray-600 w-8 rounded"></div>
                        <div className="h-1 bg-gray-600 w-8 rounded"></div>
                        <div className="h-1 bg-gray-600 w-8 rounded"></div>
                      </div>
                      <div className="flex-1">
                        <div className="h-1.5 bg-gray-400 w-full mb-1.5 rounded"></div>
                        <div className="h-1 bg-gray-500 w-2/3 mb-2 rounded"></div>
                        <div className="h-12 bg-white rounded mb-1.5"></div>
                        <div className="h-1 bg-gray-700 w-6 rounded"></div>
                      </div>
                      <div className="space-y-1.5 flex-shrink-0">
                        <div className="h-1 bg-gray-600 w-8 rounded"></div>
                      </div>
                    </div>
                    <div className="h-1 bg-gray-700 w-16 rounded"></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-200">
          <button className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}