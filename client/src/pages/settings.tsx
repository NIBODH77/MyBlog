import React, { useState } from 'react';
import { Link } from "wouter";

export default function QuoraAccountSettings() {
  const [emailVerification, setEmailVerification] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-3">
                <h2 className="text-sm font-semibold text-gray-700 mb-3 px-3">Settings</h2>
                <nav className="space-y-1">
                  <a href="#" className="block px-3 py-2 text-sm text-red-600 bg-red-50 rounded font-medium">
                    Account
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                    Privacy
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                    Display
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                    Email & Notifications
                  </a>
                  <Link href="/languages">
                    <a className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
                      Languages
                    </a>
                  </Link>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                    Subscriptions & Billing
                  </a>
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Account Settings</h1>

            <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
              {/* Email Section */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Email</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-900">lolu4224@gmail.com</span>
                      <span className="text-xs text-gray-500">Primary Email</span>
                    </div>
                    <a href="#" className="text-sm text-blue-600 hover:underline mt-1 inline-block">
                      Add Another Email Address
                    </a>
                  </div>
                </div>
              </div>

              {/* Password Section */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-700">Password</h3>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Change Password
                  </a>
                </div>
              </div>

              {/* Country of Residence Section */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">Country of residence</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      Select Country
                    </a>
                    <a href="#" className="text-xs text-gray-400 hover:underline">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>

              {/* Logout Section */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-700">Logout</h3>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Log out of all other browsers
                  </a>
                </div>
              </div>

              {/* Login Security Section */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-700">Login security</h3>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">Require email verification</span>
                    <button
                      onClick={() => setEmailVerification(!emailVerification)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        emailVerification ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          emailVerification ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Connected Accounts Section */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Connected Accounts & Contacts</h2>
                <a href="#" className="text-xs text-gray-400 hover:underline">
                  Learn more
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
                {/* Google Account */}
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="text-sm font-medium text-gray-900">Google</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-900">lolu4224@gmail.com</div>
                      <div className="text-xs text-gray-400">Disconnected</div>
                    </div>
                  </div>
                </div>

                {/* Facebook Account */}
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="text-sm font-medium text-gray-900">Facebook</span>
                    </div>
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      Connect Facebook Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}