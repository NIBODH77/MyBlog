import React, { useState, useEffect } from 'react';
import { MoreHorizontal, Search, Check, Plus, Trash2 } from 'lucide-react';
import { Link } from "wouter";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: any;
  }
}

interface Country {
  name: string;
  flag: string;
  code: string;
  languages: string[];
  population: number;
}

interface Language {
  code: string;
  name: string;
  color: string;
}

export default function QuoraLanguageSettings() {
  const [primaryLanguage, setPrimaryLanguage] = useState<string>('en');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(['en']);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddLanguage, setShowAddLanguage] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const allLanguages: Language[] = [
    { code: 'en', name: 'English', color: 'bg-blue-500' },
    { code: 'nl', name: 'Nederlands', color: 'bg-red-600' },
    { code: 'es', name: 'Español', color: 'bg-orange-500' },
    { code: 'fr', name: 'Français', color: 'bg-blue-700' },
    { code: 'de', name: 'Deutsch', color: 'bg-yellow-500' },
    { code: 'it', name: 'Italiano', color: 'bg-green-600' },
    { code: 'ja', name: '日本語', color: 'bg-red-500' },
    { code: 'id', name: 'Indonesia', color: 'bg-red-400' },
    { code: 'pt', name: 'Português', color: 'bg-green-700' },
    { code: 'hi', name: 'हिंदी', color: 'bg-teal-500' },
    { code: 'da', name: 'Dansk', color: 'bg-red-600' },
    { code: 'fi', name: 'Suomi', color: 'bg-blue-600' },
    { code: 'no', name: 'Norsk', color: 'bg-blue-800' },
    { code: 'sv', name: 'Svenska', color: 'bg-blue-500' },
    { code: 'mr', name: 'मराठी', color: 'bg-orange-600' },
    { code: 'bn', name: 'বাংলা', color: 'bg-red-700' },
    { code: 'ko', name: '한국어', color: 'bg-blue-400' },
    { code: 'zh-CN', name: '中文', color: 'bg-red-600' },
    { code: 'ar', name: 'العربية', color: 'bg-green-600' },
    { code: 'ru', name: 'Русский', color: 'bg-blue-700' },
    { code: 'tr', name: 'Türkçe', color: 'bg-red-500' },
    { code: 'pl', name: 'Polski', color: 'bg-red-600' },
    { code: 'vi', name: 'Tiếng Việt', color: 'bg-red-500' },
    { code: 'th', name: 'ไทย', color: 'bg-red-600' }
  ];

  const languages = allLanguages.filter(lang => selectedLanguages.includes(lang.code));
  const availableLanguages = allLanguages.filter(lang => !selectedLanguages.includes(lang.code));

  const filteredAvailableLanguages = availableLanguages.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Initialize Google Translate
  useEffect(() => {
    // Load Google Translate script
    const addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,nl,es,fr,de,it,ja,id,pt,hi,da,fi,no,sv,mr,bn,ko,zh-CN,ar,ru,tr,pl,vi,th',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
    };

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll('script[src*="translate.google.com"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  // Major countries list (70+ countries)
  const majorCountries = [
    'United States', 'China', 'India', 'United Kingdom', 'Germany', 'France', 'Japan', 
    'Canada', 'Australia', 'Brazil', 'Russia', 'Italy', 'Spain', 'Mexico', 'South Korea',
    'Indonesia', 'Netherlands', 'Saudi Arabia', 'Turkey', 'Switzerland', 'Poland', 
    'Belgium', 'Sweden', 'Ireland', 'Austria', 'Norway', 'Israel', 'United Arab Emirates',
    'Singapore', 'Denmark', 'Malaysia', 'Philippines', 'Pakistan', 'Bangladesh', 'Egypt',
    'South Africa', 'Vietnam', 'Thailand', 'Nigeria', 'Argentina', 'Chile', 'Colombia',
    'Finland', 'Portugal', 'Greece', 'Czech Republic', 'Romania', 'New Zealand', 'Peru',
    'Iraq', 'Qatar', 'Algeria', 'Kazakhstan', 'Hungary', 'Kuwait', 'Morocco', 'Ecuador',
    'Slovakia', 'Ethiopia', 'Kenya', 'Ukraine', 'Angola', 'Ghana', 'Tanzania', 'Myanmar',
    'Luxembourg', 'Oman', 'Croatia', 'Uruguay', 'Panama', 'Costa Rica', 'Serbia', 'Jordan',
    'Lebanon', 'Lithuania', 'Slovenia', 'Latvia', 'Estonia', 'Tunisia'
  ];

  // Fetch countries from API
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then((data: any[]) => {
        // Filter only major countries
        const filteredCountries = data
          .filter((country: any) => majorCountries.includes(country.name.common))
          .map((country: any) => ({
            name: country.name.common,
            flag: country.flags.svg,
            code: country.cca2,
            languages: country.languages ? Object.values(country.languages) as string[] : [],
            population: country.population || 0
          }))
          .sort((a, b) => b.population - a.population); // Sort by population (most popular first)

        setCountries(filteredCountries);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
        setLoading(false);
      });
  }, []);

  // Change language using Google Translate
  const changeLanguage = (langCode: string) => {
    // IMPLEMENTATION NOTE: When integrating into your project:
    // 1. Save the selected language to localStorage or state management (Redux/Context)
    // 2. Apply the language across all pages using Google Translate API
    // 3. Example code:
    //    localStorage.setItem('preferredLanguage', langCode);
    //    window.location.reload(); // to apply translation

    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));
    }

    setPrimaryLanguage(langCode);

    // Add to selected languages if not already present
    if (!selectedLanguages.includes(langCode)) {
      setSelectedLanguages([...selectedLanguages, langCode]);
    }
  };

  const addLanguage = (code: string) => {
    if (!selectedLanguages.includes(code)) {
      setSelectedLanguages([...selectedLanguages, code]);
      // IMPLEMENTATION NOTE: Save to localStorage or backend
      // localStorage.setItem('selectedLanguages', JSON.stringify([...selectedLanguages, code]));
    }
    setShowAddLanguage(false);
    setSearchQuery('');
  };

  const removeLanguage = (code: string) => {
    if (code === 'en') {
      alert('Cannot remove English (default language)');
      return;
    }
    if (code === primaryLanguage) {
      alert('Cannot remove primary language. Set another language as primary first.');
      return;
    }
    setSelectedLanguages(selectedLanguages.filter(lang => lang !== code));
    // IMPLEMENTATION NOTE: Update localStorage or backend
    // localStorage.setItem('selectedLanguages', JSON.stringify(selectedLanguages.filter(lang => lang !== code)));
  };

  const handleCountryClick = (country: Country) => {
    // IMPLEMENTATION NOTE: When a country is selected, you can:
    // 1. Get the primary language of that country
    // 2. Automatically switch to that language
    // Example:
    // const countryLang = getCountryPrimaryLanguage(country.code);
    // changeLanguage(countryLang);

    console.log('Selected country:', country.name);
    // For now, just log the selection
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-3">
                <h2 className="text-sm font-semibold text-gray-700 mb-3 px-3">Settings</h2>
                <nav className="space-y-1">
                  <Link href="/settings">
                    <a className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
                      Account
                    </a>
                  </Link>
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
                    <a className="block px-3 py-2 text-sm text-red-600 bg-red-50 rounded font-medium cursor-pointer">
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
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Language Settings</h1>

            <div className="bg-white rounded-lg shadow-sm">
              {/* Header with Add Button */}
              <div className="p-5 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h2 className="text-sm font-semibold text-gray-900">Your Languages</h2>
                  <p className="text-xs text-gray-500 mt-1">Manage languages you want to see content in</p>
                </div>
              </div>

              {/* Add Language Panel */}
              {showAddLanguage && (
                <div className="p-5 border-b border-gray-200 bg-gray-50">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search languages..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="max-h-64 overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <style>{`
                      .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                      }
                    `}</style>
                    <div className="space-y-1">
                      {filteredAvailableLanguages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => addLanguage(language.code)}
                          className="w-full flex items-center space-x-3 p-3 hover:bg-white rounded-lg transition-colors text-left"
                        >
                          <div className={`w-8 h-8 ${language.color} rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0`}>
                            {language.code.substring(0, 2).toUpperCase()}
                          </div>
                          <span className="text-sm text-gray-900">{language.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Languages List */}
              <div className="max-h-[300px] overflow-y-auto scrollbar-hide divide-y divide-gray-200" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {languages.map((language) => (
                  <div key={language.code} className="p-5 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${language.color} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                          {language.code.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-900">{language.name}</span>
                            {primaryLanguage === language.code && (
                              <span className="flex items-center space-x-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                <Check className="w-3 h-3" />
                                <span>Primary</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {primaryLanguage !== language.code && (
                          <button
                            onClick={() => changeLanguage(language.code)}
                            className="px-4 py-1.5 border-2 border-blue-600 text-blue-600 text-sm font-medium rounded-full hover:bg-blue-50 transition-colors"
                          >
                            Set as primary
                          </button>
                        )}
                        {language.code !== 'en' && (
                          <button
                            onClick={() => removeLanguage(language.code)}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
                            title="Remove language"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries Section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Countries & Regions</h2>
              
              <div className="bg-white rounded-lg shadow-sm">
                <div className="h-[850px] overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <style>{`
                    .scrollbar-hide::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading countries...</div>
                  ) : (
                    <div className="divide-y divide-gray-200">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => handleCountryClick(country)}
                          className="w-full p-4 hover:bg-gray-50 transition-colors text-left"
                        >
                          <div className="flex items-center space-x-3">
                            <img 
                              src={country.flag} 
                              alt={country.name}
                              className="w-8 h-6 object-cover rounded shadow-sm"
                            />
                            <div className="flex-1">
                              <span className="text-sm text-gray-900">{country.name}</span>
                              {country.languages.length > 0 && (
                                <p className="text-xs text-gray-500 mt-0.5">
                                  {country.languages[0]}
                                </p>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Implementation Notes */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">🔧 Implementation Notes:</h3>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>• Google Translate API is integrated and ready to use</li>
                <li>• When deploying: Save selected language to localStorage or backend</li>
                <li>• Apply language across all pages using the changeLanguage() function</li>
                <li>• Country selection can auto-detect and switch to that country's language</li>
                <li>• Default language is English and cannot be removed</li>
                <li>• Primary language changes affect the entire application</li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}