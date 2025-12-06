import React, { useState } from 'react';
import { Link } from 'wouter';
import { Home, Book, Edit, Gift, Bell, Globe, ChevronDown } from 'lucide-react';

export default function MyBlogNotificationsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Notifications' },
    { id: 'stories', label: 'Stories' },
    { id: 'questions', label: 'Questions' },
    { id: 'spaces', label: 'Spaces' },
    { id: 'people', label: 'People updates' },
    { id: 'comments', label: 'Comments and mentions' },
    { id: 'upvotes', label: 'Upvotes' },
    { id: 'content', label: 'Your content' },
    { id: 'profile', label: 'Your profile' },
    { id: 'announcements', label: 'Announcements' },
    { id: 'earnings', label: 'Earnings' },
    { id: 'subscriptions', label: 'Subscriptions' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-14 gap-4">
            {/* Logo */}
            <div className="text-[#a82400] text-3xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
              MyBlog
            </div>

            {/* Navigation Icons */}
            <div className="flex gap-2">
              <Link href="/">
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                  <Home size={20} />
                </button>
              </Link>
              <Link href="/following">
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                  <Book size={20} />
                </button>
              </Link>
              <Link href="/answer">
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                  <Edit size={20} />
                </button>
              </Link>
              <Link href="/spaces">
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                  <Gift size={20} />
                </button>
              </Link>
              <Link href="/notifications">
                <button className="w-10 h-10 flex items-center justify-center text-[#a82400] border-b-2 border-[#a82400]">
                  <Bell size={20} />
                </button>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search MyBlog"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 ml-auto">
              <button className="text-gray-600 text-sm hover:text-gray-800">
                Try MyBlog+
              </button>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                L
              </div>
              <button className="text-gray-600 hover:bg-gray-100 p-1 rounded">
                <Globe size={20} />
              </button>
              <button className="bg-[#a82400] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#8a1e00] flex items-center gap-1">
                Add question
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Notifications Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <h1 className="text-sm font-semibold text-gray-700">Filters</h1>
              <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
            </div>
            <button className="text-sm text-gray-600 hover:text-gray-900">Settings</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-0">
        <div className="flex">
          {/* Left Sidebar - Filters */}
          <div className="w-64 flex-shrink-0 pr-8 pt-4">
            <div className="space-y-1">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                    selectedFilter === filter.id
                      ? 'bg-red-50 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 border-l border-gray-200 min-h-screen">
            <div className="flex flex-col items-center justify-center py-32 px-6">
              <svg className="w-32 h-32 text-gray-300 mb-6" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="35" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 43 L50 55" stroke="currentColor" strokeWidth="2"/>
                <path d="M42 50 C42 50 42 60 50 60 C58 60 58 50 58 50" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M35 65 L35 75 C35 78 37 80 40 80 L60 80 C63 80 65 78 65 75 L65 65" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M50 25 L50 20 M35 30 L31 26 M65 30 L69 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No New Notifications</h3>
              <p className="text-sm text-gray-500 text-center">
                Notifications you received in the last 30 days will show up here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
