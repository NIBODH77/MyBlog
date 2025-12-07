
import React from 'react';
import { Header } from '@/components/layout/Header';

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Content & Stats</h1>
          <p className="text-gray-600">View your content performance and statistics here.</p>
        </div>
      </div>
    </div>
  );
}
