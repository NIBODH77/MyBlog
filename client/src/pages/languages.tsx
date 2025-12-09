
import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Header } from '@/components/layout/Header';
import { useLanguage, languages, Language } from '@/contexts/LanguageContext';
import { TranslatedText } from '@/hooks/useTranslation';
import { ChevronRight } from 'lucide-react';

const LanguageSettings: React.FC = () => {
  const [, setLocation] = useLocation();
  const { currentLanguage, setLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState('Languages');
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage.code);
  const [showFlashMessage, setShowFlashMessage] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const menuItems = [
    'Account',
    'Privacy',
    'Display',
    'Email & Notifications',
    'Languages',
    'Subscriptions & Billing',
    'Help',
  ];

  const handleSetPrimary = () => {
    const selectedLang = languages.find(lang => lang.code === selectedLanguage);
    if (selectedLang) {
      setLanguage(selectedLang);
      setShowFlashMessage(true);
      setTimeout(() => setShowFlashMessage(false), 3000);
    }
  };

  const handleMenuItemClick = (item: string) => {
    if (item === 'Help') {
      setLocation('/help');
    } else if (item === 'Account') {
      setLocation('/settings');
    } else {
      setActiveTab(item);
      setShowMobileSidebar(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Languages':
        return (
          <div className="space-y-6">
            {/* Current Language Info */}
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="text-blue-800 dark:text-blue-300 font-medium mb-2">
                <TranslatedText>Current Language</TranslatedText>: {currentLanguage.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm">
                <TranslatedText>This language is applied globally across all pages</TranslatedText>
              </p>
            </div>

            {/* Language Selection Card */}
            <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-gray-200 dark:border-border">
              <div className="divide-y divide-gray-200 dark:divide-border">
                {languages.map((language) => (
                  <div
                    key={language.code}
                    onClick={() => setSelectedLanguage(language.code)}
                    className={`flex items-center justify-between px-4 md:px-6 py-4 cursor-pointer transition-all ${
                      selectedLanguage === language.code
                        ? 'bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600'
                        : 'hover:bg-gray-50 dark:hover:bg-muted/50 border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full ${language.color} flex items-center justify-center text-white text-xs font-semibold`}
                      >
                        {language.code}
                      </div>
                      <div>
                        <span className="text-gray-800 dark:text-foreground font-medium block">
                          {language.name}
                        </span>
                        {language.googleTranslateCode && (
                          <span className="text-gray-500 dark:text-muted-foreground text-xs">
                            Code: {language.googleTranslateCode}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      {currentLanguage.code === language.code && (
                        <span className="px-2 md:px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs md:text-sm font-medium rounded-full">
                          <TranslatedText>Primary</TranslatedText>
                        </span>
                      )}
                      {selectedLanguage === language.code && (
                        <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        </div>
                      )}
                      {selectedLanguage !== language.code && (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-border"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Translation Instructions */}
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h4 className="text-yellow-800 dark:text-yellow-300 font-medium mb-2">
                <TranslatedText>How Language Translation Works</TranslatedText>
              </h4>
              <ul className="text-yellow-700 dark:text-yellow-400 text-sm space-y-1">
                <li><TranslatedText>Select a language and click "Set as primary"</TranslatedText></li>
                <li><TranslatedText>The entire application will be translated to selected language</TranslatedText></li>
                <li><TranslatedText>Translation persists across all pages and sessions</TranslatedText></li>
                <li><TranslatedText>Google Translate API is used for automatic translation</TranslatedText></li>
                <li><TranslatedText>English is the default language</TranslatedText></li>
              </ul>
            </div>
          </div>
        );
      default:
        return <div className="text-gray-600 dark:text-muted-foreground">Select a menu item</div>;
    }
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-50 dark:bg-background pb-20 md:pb-0">
        {/* Flash Message */}
        {showFlashMessage && (
          <div className="fixed top-20 md:top-4 right-4 z-50 animate-fade-in">
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <TranslatedText as="span" className="font-medium">Language updated successfully!</TranslatedText>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-card border-b border-gray-200 dark:border-border z-40 px-4 py-3">
          <button
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
            className="w-full flex items-center justify-between text-left px-3 py-2 rounded-md bg-gray-50 dark:bg-muted/50 text-gray-700 dark:text-foreground"
          >
            <span className="font-medium">{activeTab}</span>
            <ChevronRight className={`w-5 h-5 transition-transform ${showMobileSidebar ? 'rotate-90' : ''}`} />
          </button>

          {/* Mobile Dropdown Menu */}
          {showMobileSidebar && (
            <div className="absolute left-0 right-0 top-full bg-white dark:bg-card border-b border-gray-200 dark:border-border shadow-lg max-h-[60vh] overflow-y-auto">
              <nav className="py-2">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleMenuItemClick(item)}
                    className={`w-full text-left px-6 py-3 text-sm transition-colors ${
                      activeTab === item && item !== 'Help'
                        ? 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 font-medium'
                        : 'text-gray-700 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-muted/50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden md:block sticky top-20 h-fit w-64 bg-white dark:bg-card border-r border-gray-200 dark:border-border">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-foreground mb-4"><TranslatedText>Settings</TranslatedText></h2>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuItemClick(item)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeTab === item && item !== 'Help'
                      ? 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 font-medium'
                      : 'text-gray-700 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-muted/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8 mt-16 md:mt-0">
          <div className="max-w-3xl flex flex-col" style={{ height: 'calc(100vh - 8rem)' }}>
            {activeTab === 'Languages' && (
              <div className="flex-shrink-0 flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
                <h1 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-foreground">
                  <TranslatedText>Language Settings</TranslatedText>
                </h1>
                <button
                  onClick={handleSetPrimary}
                  disabled={selectedLanguage === currentLanguage.code}
                  className={`w-full md:w-auto px-6 py-2 rounded-md font-medium transition-all ${
                    selectedLanguage === currentLanguage.code
                      ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md'
                  }`}
                  data-testid="button-set-primary"
                >
                  <TranslatedText>Set as primary</TranslatedText>
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

        /* Hide Google Translate UI elements */
        #google_translate_element {
          display: none !important;
        }
        .skiptranslate {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .goog-te-banner-frame {
          display: none !important;
        }
        .goog-te-balloon-frame {
          display: none !important;
        }
      `}</style>
    </>
  );
};

export default LanguageSettings;
