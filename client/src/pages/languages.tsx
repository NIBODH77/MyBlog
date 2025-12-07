import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

interface Language {
  code: string;
  name: string;
  color: string;
}

const languages: Language[] = [
  { code: 'EN', name: 'English', color: 'bg-blue-500' },
  { code: 'NL', name: 'Nederlands', color: 'bg-red-600' },
  { code: 'ES', name: 'Español', color: 'bg-orange-500' },
  { code: 'FR', name: 'Français', color: 'bg-blue-600' },
  { code: 'DE', name: 'Deutsch', color: 'bg-yellow-500' },
  { code: 'IT', name: 'Italiano', color: 'bg-green-600' },
  { code: 'JA', name: '日本語', color: 'bg-red-500' },
  { code: 'ID', name: 'Indonesia', color: 'bg-red-500' },
  { code: 'PT', name: 'Português', color: 'bg-green-700' },
  { code: 'HI', name: 'हिन्दी', color: 'bg-teal-500' },
  { code: 'DA', name: 'Dansk', color: 'bg-pink-600' },
  { code: 'FI', name: 'Suomi', color: 'bg-blue-700' },
  { code: 'NO', name: 'Norsk', color: 'bg-blue-800' },
  { code: 'SV', name: 'Svenska', color: 'bg-cyan-500' },
  { code: 'MR', name: 'मराठी', color: 'bg-orange-600' },
  { code: 'BN', name: 'বাংলা', color: 'bg-red-600' },
  { code: 'TA', name: 'தமிழ்', color: 'bg-purple-700' },
  { code: 'AR', name: 'العربية', color: 'bg-green-600' },
  { code: 'HE', name: 'עברית', color: 'bg-blue-600' },
  { code: 'GU', name: 'ગુજરાતી', color: 'bg-orange-600' },
  { code: 'KN', name: 'ಕನ್ನಡ', color: 'bg-red-600' },
  { code: 'ML', name: 'മലയാളം', color: 'bg-red-600' },
  { code: 'TE', name: 'తెలుగు', color: 'bg-blue-600' },
  { code: 'PL', name: 'Polski', color: 'bg-red-600' },
];

const LanguageSettings: React.FC = () => {
  const [, setLocation] = useLocation();
  const [primaryLanguage, setPrimaryLanguage] = useState('EN');
  const [activeTab, setActiveTab] = useState('Languages');
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [showFlashMessage, setShowFlashMessage] = useState(false);
  const [flashMessage, setFlashMessage] = useState('');

  const menuItems = [
    'Account',
    'Privacy',
    'Display',
    'Email & Notifications',
    'Languages',
    'Subscriptions & Billing',
    'Help',
  ];

  useEffect(() => {
    if (showFlashMessage) {
      const timer = setTimeout(() => {
        setShowFlashMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showFlashMessage]);

  const handleSetPrimary = () => {
    const selectedLang = languages.find(lang => lang.code === selectedLanguage);
    if (selectedLang) {
      setPrimaryLanguage(selectedLanguage);
      setFlashMessage(`Your primary language is now set to ${selectedLang.name}`);
      setShowFlashMessage(true);

      // Change entire project language (you can add your logic here)
      document.documentElement.lang = selectedLanguage.toLowerCase();
    }
  };

  const handleMenuItemClick = (item: string) => {
    if (item === 'Help') {
      setLocation('/help');
    } else {
      setActiveTab(item);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Account':
        return <div>Account Settings</div>;
      case 'Privacy':
        return <div>Privacy Settings</div>;
      case 'Display':
        return <div>Display Settings</div>;
      case 'Email & Notifications':
        return <div>Email & Notifications Settings</div>;
      case 'Languages':
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="divide-y divide-gray-200">
              {languages.map((language) => (
                <div
                  key={language.code}
                  onClick={() => setSelectedLanguage(language.code)}
                  className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-all ${
                    selectedLanguage === language.code
                      ? 'bg-blue-50 border-l-4 border-blue-600'
                      : 'hover:bg-gray-50 border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full ${language.color} flex items-center justify-center text-white text-xs font-semibold`}
                    >
                      {language.code}
                    </div>
                    <span className="text-gray-800 font-medium">
                      {language.name}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    {primaryLanguage === language.code && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                        Primary
                      </span>
                    )}
                    {selectedLanguage === language.code && (
                      <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                      </div>
                    )}
                    {selectedLanguage !== language.code && (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Subscriptions & Billing':
        return <div>Subscriptions & Billing Settings</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Flash Message */}
      {showFlashMessage && (
        <div className="fixed top-4 right-4 z-50 animate-fade-in">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">{flashMessage}</span>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Settings</h2>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleMenuItemClick(item)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeTab === item && item !== 'Help'
                    ? 'bg-red-50 text-red-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-3xl">
          {activeTab === 'Languages' && (
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Language Settings
              </h1>
              <button
                onClick={handleSetPrimary}
                disabled={selectedLanguage === primaryLanguage}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  selectedLanguage === primaryLanguage
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md'
                }`}
              >
                Set as primary
              </button>
            </div>
          )}
          {renderContent()}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LanguageSettings;