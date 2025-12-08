import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Header } from '@/components/layout/Header';

interface Language {
  code: string;
  name: string;
  color: string;
  googleTranslateCode?: string;
}

const languages: Language[] = [
  { code: 'EN', name: 'English', color: 'bg-blue-500', googleTranslateCode: 'en' },
  { code: 'NL', name: 'Nederlands', color: 'bg-red-600', googleTranslateCode: 'nl' },
  { code: 'ES', name: 'Español', color: 'bg-orange-500', googleTranslateCode: 'es' },
  { code: 'FR', name: 'Français', color: 'bg-blue-600', googleTranslateCode: 'fr' },
  { code: 'DE', name: 'Deutsch', color: 'bg-yellow-500', googleTranslateCode: 'de' },
  { code: 'IT', name: 'Italiano', color: 'bg-green-600', googleTranslateCode: 'it' },
  { code: 'JA', name: '日本語', color: 'bg-red-500', googleTranslateCode: 'ja' },
  { code: 'ID', name: 'Indonesia', color: 'bg-red-500', googleTranslateCode: 'id' },
  { code: 'PT', name: 'Português', color: 'bg-green-700', googleTranslateCode: 'pt' },
  { code: 'HI', name: 'हिन्दी', color: 'bg-teal-500', googleTranslateCode: 'hi' },
  { code: 'DA', name: 'Dansk', color: 'bg-pink-600', googleTranslateCode: 'da' },
  { code: 'FI', name: 'Suomi', color: 'bg-blue-700', googleTranslateCode: 'fi' },
  { code: 'NO', name: 'Norsk', color: 'bg-blue-800', googleTranslateCode: 'no' },
  { code: 'SV', name: 'Svenska', color: 'bg-cyan-500', googleTranslateCode: 'sv' },
  { code: 'MR', name: 'मराठी', color: 'bg-orange-600', googleTranslateCode: 'mr' },
  { code: 'BN', name: 'বাংলা', color: 'bg-red-600', googleTranslateCode: 'bn' },
  { code: 'TA', name: 'தமிழ்', color: 'bg-purple-700', googleTranslateCode: 'ta' },
  { code: 'AR', name: 'العربية', color: 'bg-green-600', googleTranslateCode: 'ar' },
  { code: 'HE', name: 'עברית', color: 'bg-blue-600', googleTranslateCode: 'he' },
  { code: 'GU', name: 'ગુજરાતી', color: 'bg-orange-600', googleTranslateCode: 'gu' },
  { code: 'KN', name: 'ಕನ್ನಡ', color: 'bg-red-600', googleTranslateCode: 'kn' },
  { code: 'ML', name: 'മലയാളം', color: 'bg-red-600', googleTranslateCode: 'ml' },
  { code: 'TE', name: 'తెలుగు', color: 'bg-blue-600', googleTranslateCode: 'te' },
  { code: 'PL', name: 'Polski', color: 'bg-red-600', googleTranslateCode: 'pl' },
];

const LanguageSettings: React.FC = () => {
  const [, setLocation] = useLocation();
  const [primaryLanguage, setPrimaryLanguage] = useState('EN');
  const [activeTab, setActiveTab] = useState('Languages');
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [showFlashMessage, setShowFlashMessage] = useState(false);
  const [flashMessage, setFlashMessage] = useState('');
  const [showTranslateWidget, setShowTranslateWidget] = useState(false);

  const menuItems = [
    'Account',
    'Privacy',
    'Display',
    'Email & Notifications',
    'Languages',
    'Subscriptions & Billing',
    'Help',
  ];

  // Google Translate Initialization
  const googleTranslateElementInit = () => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        "google_translate_element"
      );
    }
  };

  useEffect(() => {
    // Load Google Translate Script
    if (showTranslateWidget) {
      const scriptId = 'google-translate-script';

      // Check if script already exists
      if (!document.getElementById(scriptId)) {
        const addScript = document.createElement("script");
        addScript.id = scriptId;
        addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        addScript.async = true;
        document.body.appendChild(addScript);
      }

      window.googleTranslateElementInit = googleTranslateElementInit;
    }

    // Cleanup function
    return () => {
      // Remove Google Translate widget if exists
      const widget = document.getElementById('google_translate_element');
      if (widget) {
        widget.innerHTML = '';
      }
    };
  }, [showTranslateWidget]);

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

      // If language is not English, show Google Translate
      if (selectedLanguage !== 'EN' && selectedLang.googleTranslateCode) {
        setShowTranslateWidget(true);
        setFlashMessage(`Your primary language is now set to ${selectedLang.name}. Page translation activated.`);
      } else {
        setFlashMessage(`Your primary language is now set to ${selectedLang.name}`);
      }

      setShowFlashMessage(true);

      // Change entire project language
      document.documentElement.lang = selectedLang.googleTranslateCode || selectedLanguage.toLowerCase();

      // If language is not English, trigger Google Translate
      if (selectedLanguage !== 'EN' && selectedLang.googleTranslateCode) {
        setTimeout(() => {
          if (window.google && window.google.translate && window.google.translate.translate) {
            // Translate the page
            window.google.translate.translate(
              document.documentElement.innerHTML,
              'en',
              selectedLang.googleTranslateCode,
              function(result: any) {
                if (result.translation) {
                  document.documentElement.innerHTML = result.translation;
                }
              }
            );
          }
        }, 1000);
      }
    }
  };

  const handleMenuItemClick = (item: string) => {
    if (item === 'Help') {
      setLocation('/help');
    } else if (item === 'Account') {
      setLocation('/settings');
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
          <div className="space-y-6">
            {/* Google Translate Widget (Conditional) */}
            {showTranslateWidget && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-yellow-800 font-medium">
                    Page Translation Active
                  </h3>
                  <button
                    onClick={() => setShowTranslateWidget(false)}
                    className="text-yellow-600 hover:text-yellow-800 text-lg font-bold"
                  >
                    ×
                  </button>
                </div>
                <div id="google_translate_element" className="mb-2"></div>
                <p className="text-yellow-600 text-sm">
                  Page is being translated via Google Translate. You can change languages using the dropdown above.
                </p>
              </div>
            )}

            {/* Language Selection Card */}
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
                      <div>
                        <span className="text-gray-800 font-medium block">
                          {language.name}
                        </span>
                        {language.googleTranslateCode && (
                          <span className="text-gray-500 text-xs">
                            Google Translate: {language.googleTranslateCode}
                          </span>
                        )}
                      </div>
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

            {/* Translation Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-blue-800 font-medium mb-2">
                Language Settings Information
              </h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• <strong>English:</strong> Selecting English will keep the page in original language</li>
                <li>• <strong>Other Languages:</strong> Click "Set as primary" to translate the page to selected language</li>
                <li>• Google Translate will automatically activate for non-English languages</li>
                <li>• You can close the translation widget using the × button</li>
              </ul>
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
    <>
      <Header />
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
        <div className="sticky top-20 h-fit w-64 bg-white border-r border-gray-200">
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
          <div className="max-w-3xl flex flex-col" style={{ height: 'calc(100vh - 8rem)' }}>
            {activeTab === 'Languages' && (
              <div className="flex-shrink-0 flex items-center justify-between mb-8">
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

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
              {renderContent()}
            </div>
          </div>
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

        /* Hide Google Translate branding */
        .skiptranslate {
          display: none !important;
        }
        body {
          top: 0 !important;
        }

        /* Style Google Translate dropdown */
        .goog-te-combo {
          padding: 8px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          background: white;
          color: #374151;
          font-size: 14px;
          width: 100%;
          margin-top: 8px;
        }

        .goog-te-combo:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </>
  );
};

export default LanguageSettings;