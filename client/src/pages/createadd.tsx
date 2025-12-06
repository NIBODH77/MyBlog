import React, { useState } from 'react';
import { X, Info } from 'lucide-react';

export default function CreateAdPage() {
  const [accountName, setAccountName] = useState('Lolu');
  const [contactEmail, setContactEmail] = useState('janedoe@businessemail.com');
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-4">
      {/* Header */}
      <div className="absolute top-0 left-0 p-4">
        <h1 className="text-gray-500 text-sm font-medium">Quora Ads</h1>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-8 relative">
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Create an ad account
            </h2>

            {/* Account Name Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account name <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  maxLength={251}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
                  placeholder="Account name"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                  {accountName.length}/251
                </span>
              </div>
            </div>

            {/* Contact Email Field */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Contact email <span className="text-red-600">*</span>
                </label>
                <button className="text-gray-400 hover:text-gray-600">
                  <Info size={16} />
                </button>
              </div>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
                placeholder="janedoe@businessemail.com"
              />
            </div>

            {/* Next Button */}
            <div className="flex justify-end">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg font-medium transition-colors"
                onClick={() => {
                  console.log('Account created:', { accountName, contactEmail });
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}