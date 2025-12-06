import React, { useState } from 'react';
import { ChevronRight, MessageSquare, Megaphone, DollarSign, BarChart3, Bookmark, FileEdit, Star, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export default function ProfileMenuDropdown() {
  const [darkMode, setDarkMode] = useState('AUTO');
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-8">
      <div className="w-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
        {/* Back Button */}
        <button 
          onClick={() => setLocation('/')}
          className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors border-b border-gray-200"
        >
          <ArrowLeft size={20} className="text-gray-600" />
          <span className="text-gray-700 font-medium">Back</span>
        </button>

        {/* Profile Header */}
        <button className="w-full px-4 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-200">
          <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold flex-shrink-0">
            L
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-xl font-semibold text-gray-900">Lolu</h3>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </button>

        {/* Menu Items */}
        <div className="py-2">
          <Link href="/messages">
            <button className="w-full px-4 py-3 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left">
              <MessageSquare size={22} className="text-gray-700" />
              <span className="text-gray-900 font-normal text-base">Messages</span>
            </button>
          </Link>

          <Link href="/create-ad">
            <button className="w-full px-4 py-3 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left">
              <Megaphone size={22} className="text-gray-700" />
              <span className="text-gray-900 font-normal text-base">Create Ad</span>
            </button>
          </Link>

          <Link href="/monetization">
            <button className="w-full px-4 py-3 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left">
              <DollarSign size={22} className="text-gray-700" />
              <span className="text-gray-900 font-normal text-base">Monetization</span>
            </button>
          </Link>

          <button className="w-full px-4 py-3 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left">
            <BarChart3 size={22} className="text-gray-700" />
            <span className="text-gray-900 font-normal text-base">Your content & stats</span>
          </button>

          <Link href="/bookmarks">
            <button className="w-full px-4 py-3 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left">
              <Bookmark size={22} className="text-gray-700" />
              <span className="text-gray-900 font-normal text-base">Bookmarks</span>
            </button>
          </Link>

          <Link href="/drafts">
            <button className="w-full px-4 py-3 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left">
              <FileEdit size={22} className="text-gray-700" />
              <span className="text-gray-900 font-normal text-base">Drafts</span>
            </button>
          </Link>

          <button className="w-full px-4 py-3 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left">
            <Star size={22} className="text-gray-700" fill="currentColor" />
            <span className="text-gray-900 font-normal text-base">Try Quora+</span>
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Settings Section */}
        <div className="py-2">
          <Link href="/darkmode">
            <div className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="text-gray-900 font-normal text-base">Dark mode</span>
              <span className="text-blue-600 font-semibold text-sm">
                {darkMode}
              </span>
            </div>
          </Link>

          <Link href="/settings">
            <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors">
              <span className="text-gray-900 font-normal text-base">Settings</span>
            </button>
          </Link>

          <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors">
            <span className="text-gray-900 font-normal text-base">Languages</span>
          </button>

          <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors">
            <span className="text-gray-900 font-normal text-base">Help</span>
          </button>

          <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors">
            <span className="text-gray-900 font-normal text-base">Logout</span>
          </button>
        </div>

        {/* Footer */}
        <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-gray-500 leading-relaxed">
            About Quora · Terms · Privacy · Acceptable Use · Advertise · Your Ad Choices · Grievance Officer · Careers · Press · Company
          </p>
        </div>
      </div>
    </div>
  );
}
