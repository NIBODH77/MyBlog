import React, { useState } from 'react';
import { Link } from 'wouter';
import { Home, Book, Edit, Gift, Bell, Globe, ChevronDown, Plus } from 'lucide-react';

export default function MyBlogAnswerPage() {
  const [topics] = useState([
    {
      id: 1,
      name: "Preparation Techniques",
      followers: "2K followers",
      icon: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Baking",
      followers: "7.4M followers",
      icon: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Simple Recipes",
      followers: "18K followers",
      icon: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "Food and Recipes",
      followers: "173 followers",
      icon: null
    },
    {
      id: 5,
      name: "Culinary Arts Education",
      followers: "6 followers",
      icon: null
    }
  ]);

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
                <button className="w-10 h-10 flex items-center justify-center text-[#a82400] border-b-2 border-[#a82400]">
                  <Edit size={20} />
                </button>
              </Link>
              <Link href="/spaces">
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                  <Gift size={20} />
                </button>
              </Link>
              <Link href="/notifications">
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-0">
        <div className="flex gap-0">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0 pt-6 pr-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-4 py-3 border-b border-gray-200">
                <h3 className="text-gray-700 font-semibold text-base">Questions</h3>
              </div>
              <div className="py-2">
                <button className="w-full text-left px-4 py-2.5 text-sm bg-red-50 text-gray-900 hover:bg-red-100">
                  Questions for you
                </button>
                <button className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
                  Answer requests
                </button>
                <button className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
                  Drafts
                </button>
                <button className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
                  AI Interviewer
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 border-l border-r border-gray-200 min-h-screen">
            {/* Follow Topics Section */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Follow more topics</h2>
              <p className="text-sm text-gray-500 mb-6">Personalize your feed with more relevant content.</p>

              <div className="space-y-4">
                {topics.map(topic => (
                  <div key={topic.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {topic.icon ? (
                        <img
                          src={topic.icon}
                          alt={topic.name}
                          className="w-10 h-10 rounded object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                          <Book size={20} className="text-gray-500" />
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{topic.name}</div>
                        <div className="text-xs text-gray-500">{topic.followers}</div>
                      </div>
                    </div>
                    <button className="px-4 py-1.5 border border-blue-500 text-blue-500 rounded-full text-sm font-medium hover:bg-blue-50 flex items-center gap-1">
                      <Plus size={16} />
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* End of Feed */}
            <div className="flex flex-col items-center justify-center py-16 px-6">
              <svg className="w-24 h-24 text-gray-300 mb-6" viewBox="0 0 100 100" fill="none">
                <rect x="30" y="40" width="40" height="35" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M35 40 L35 30 C35 27 37 25 40 25 L60 25 C63 25 65 27 65 30 L65 40" stroke="currentColor" strokeWidth="2"/>
                <circle cx="50" cy="57" r="3" fill="currentColor"/>
                <line x1="45" y1="65" x2="55" y2="65" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <h3 className="text-gray-700 font-medium mb-2">You've reached the end of your feed</h3>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600">
                Refresh Page
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 flex-shrink-0 pt-6 pl-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-900">Topics you know about</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <Edit size={16} />
                </button>
              </div>

              <div className="flex flex-col items-center justify-center py-8">
                <svg className="w-20 h-20 text-gray-300 mb-4" viewBox="0 0 100 100" fill="none">
                  <rect x="25" y="35" width="50" height="40" rx="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M35 35 L35 28 C35 26 37 25 40 25 L60 25 C63 25 65 26 65 28 L65 35" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="50" cy="55" r="4" fill="currentColor"/>
                </svg>
                <h4 className="text-sm font-medium text-gray-700 mb-2">No topics yet</h4>
                <p className="text-xs text-gray-500 text-center mb-4 max-w-xs">
                  You'll get better questions if you add more specific topics.
                </p>
                <button className="px-5 py-2 border-2 border-blue-500 text-blue-500 rounded-full text-sm font-medium hover:bg-blue-50">
                  Add topics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
