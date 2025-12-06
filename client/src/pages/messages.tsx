import React, { useState } from 'react';
import { Home, Book, Edit, Gift, Bell, Globe, ChevronDown, MessageSquare } from 'lucide-react';
import { Link } from 'wouter';

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-14 gap-4">
            {/* Logo */}
            <div className="text-[#a82400] text-3xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
              Quora
            </div>

            {/* Navigation Icons */}
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                <Home size={20} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                <Book size={20} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                <Edit size={20} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                <Gift size={20} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
                <Bell size={20} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search Quora"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 ml-auto">
              <button className="text-gray-600 text-sm hover:text-gray-800">
                Try Quora+
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
      <div className="flex h-[calc(100vh-56px)]">
        {/* Left Sidebar - Messages List */}
        <div className="w-80 border-r border-gray-200 bg-white">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-500 text-center py-8">No messages</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md px-6">
            <div className="flex justify-center mb-6">
              <svg className="w-32 h-32 text-gray-300" viewBox="0 0 100 100" fill="none">
                {/* Mailbox */}
                <rect x="25" y="45" width="50" height="35" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M25 50 L50 65 L75 50" stroke="currentColor" strokeWidth="2" fill="none"/>
                <line x1="25" y1="50" x2="25" y2="80" stroke="currentColor" strokeWidth="2"/>
                <line x1="75" y1="50" x2="75" y2="80" stroke="currentColor" strokeWidth="2"/>
                {/* Flag */}
                <line x1="50" y1="45" x2="50" y2="20" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 20 L65 25 L50 30" fill="currentColor"/>
                {/* Base */}
                <line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No message selected
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Select an existing message, or start a new one.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 mx-auto transition-colors">
              <MessageSquare size={18} />
              New message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}