import React, { useState, useEffect } from 'react';
import { MoreHorizontal, Search, Check, Plus, Trash2 } from 'lucide-react';
import { Link } from "wouter";
import { Header } from "@/components/layout/Header";

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
  const [countrySearchQuery, setCountrySearchQuery] = useState('');

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

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(countrySearchQuery.toLowerCase())
  );

  // Initialize Google Translate
  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);

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
      const scripts = document.querySelectorAll('script[src*="translate.google.com"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  // All countries data
  const allCountriesData: Country[] = [
    { name: 'English', code: 'EN', languages: ['English'], population: 2000000000, flag: 'https://flagcdn.com/w80/gb.png' },
    { name: 'United States', code: 'US', languages: ['English'], population: 331000000, flag: 'https://flagcdn.com/w80/us.png' },
    { name: 'China', code: 'CN', languages: ['Chinese'], population: 1402000000, flag: 'https://flagcdn.com/w80/cn.png' },
    { name: 'India', code: 'IN', languages: ['Hindi', 'English'], population: 1380000000, flag: 'https://flagcdn.com/w80/in.png' },
    { name: 'Indonesia', code: 'ID', languages: ['Indonesian'], population: 273000000, flag: 'https://flagcdn.com/w80/id.png' },
    { name: 'Pakistan', code: 'PK', languages: ['Urdu', 'English'], population: 220000000, flag: 'https://flagcdn.com/w80/pk.png' },
    { name: 'Brazil', code: 'BR', languages: ['Portuguese'], population: 212000000, flag: 'https://flagcdn.com/w80/br.png' },
    { name: 'Nigeria', code: 'NG', languages: ['English'], population: 206000000, flag: 'https://flagcdn.com/w80/ng.png' },
    { name: 'Bangladesh', code: 'BD', languages: ['Bengali'], population: 164000000, flag: 'https://flagcdn.com/w80/bd.png' },
    { name: 'Russia', code: 'RU', languages: ['Russian'], population: 144000000, flag: 'https://flagcdn.com/w80/ru.png' },
    { name: 'Mexico', code: 'MX', languages: ['Spanish'], population: 128000000, flag: 'https://flagcdn.com/w80/mx.png' },
    { name: 'Japan', code: 'JP', languages: ['Japanese'], population: 126000000, flag: 'https://flagcdn.com/w80/jp.png' },
    { name: 'United Kingdom', code: 'GB', languages: ['English'], population: 67000000, flag: 'https://flagcdn.com/w80/gb.png' },
    { name: 'France', code: 'FR', languages: ['French'], population: 65000000, flag: 'https://flagcdn.com/w80/fr.png' },
    { name: 'Germany', code: 'DE', languages: ['German'], population: 83000000, flag: 'https://flagcdn.com/w80/de.png' },
    { name: 'Turkey', code: 'TR', languages: ['Turkish'], population: 84000000, flag: 'https://flagcdn.com/w80/tr.png' },
    { name: 'Italy', code: 'IT', languages: ['Italian'], population: 60000000, flag: 'https://flagcdn.com/w80/it.png' },
    { name: 'Spain', code: 'ES', languages: ['Spanish'], population: 47000000, flag: 'https://flagcdn.com/w80/es.png' },
    { name: 'South Korea', code: 'KR', languages: ['Korean'], population: 51000000, flag: 'https://flagcdn.com/w80/kr.png' },
    { name: 'Canada', code: 'CA', languages: ['English', 'French'], population: 38000000, flag: 'https://flagcdn.com/w80/ca.png' },
    { name: 'Australia', code: 'AU', languages: ['English'], population: 25000000, flag: 'https://flagcdn.com/w80/au.png' },
    { name: 'Netherlands', code: 'NL', languages: ['Dutch'], population: 17000000, flag: 'https://flagcdn.com/w80/nl.png' },
    { name: 'Poland', code: 'PL', languages: ['Polish'], population: 38000000, flag: 'https://flagcdn.com/w80/pl.png' },
    { name: 'Thailand', code: 'TH', languages: ['Thai'], population: 69000000, flag: 'https://flagcdn.com/w80/th.png' },
    { name: 'Vietnam', code: 'VN', languages: ['Vietnamese'], population: 97000000, flag: 'https://flagcdn.com/w80/vn.png' },
    { name: 'Argentina', code: 'AR', languages: ['Spanish'], population: 45000000, flag: 'https://flagcdn.com/w80/ar.png' },
    { name: 'Colombia', code: 'CO', languages: ['Spanish'], population: 50000000, flag: 'https://flagcdn.com/w80/co.png' },
    { name: 'Egypt', code: 'EG', languages: ['Arabic'], population: 102000000, flag: 'https://flagcdn.com/w80/eg.png' },
    { name: 'Saudi Arabia', code: 'SA', languages: ['Arabic'], population: 34000000, flag: 'https://flagcdn.com/w80/sa.png' },
    { name: 'United Arab Emirates', code: 'AE', languages: ['Arabic'], population: 9000000, flag: 'https://flagcdn.com/w80/ae.png' },
  ];

  useEffect(() => {
    setCountries(allCountriesData);
    setLoading(false);
  }, []);

  // Country to language mapping
  const countryToLanguageMap: { [key: string]: string } = {
    'EN': 'en', 'US': 'en', 'GB': 'en', 'AU': 'en', 'CA': 'en', 'NZ': 'en', 'NG': 'en',
    'CN': 'zh-CN', 'TW': 'zh-CN', 'HK': 'zh-CN',
    'IN': 'hi', 'PK': 'hi', 'BD': 'bn',
    'ID': 'id',
    'BR': 'pt', 'PT': 'pt', 'AO': 'pt', 'MZ': 'pt',
    'MX': 'es', 'ES': 'es', 'AR': 'es', 'CO': 'es', 'CL': 'es', 'PE': 'es', 'VE': 'es',
    'FR': 'fr', 'CD': 'fr', 'CM': 'fr', 'BE': 'fr',
    'DE': 'de', 'AT': 'de', 'CH': 'de',
    'IT': 'it',
    'JP': 'ja',
    'KR': 'ko',
    'RU': 'ru',
    'TR': 'tr',
    'PL': 'pl',
    'VN': 'vi',
    'TH': 'th',
    'NL': 'nl',
    'DK': 'da',
    'FI': 'fi',
    'NO': 'no',
    'SE': 'sv',
    'EG': 'ar', 'SA': 'ar', 'AE': 'ar', 'IQ': 'ar', 'MA': 'ar', 'DZ': 'ar'
  };

  const changeLanguage = (langCode: string) => {
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));
    }
    setPrimaryLanguage(langCode);
  };

  const addLanguage = (code: string) => {
    if (!selectedLanguages.includes(code)) {
      setSelectedLanguages([...selectedLanguages, code]);
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
      setPrimaryLanguage('en');
      changeLanguage('en');
    }

    setSelectedLanguages(selectedLanguages.filter(lang => lang !== code));
  };

  const handleCountryClick = (country: Country) => {
    const languageCode = countryToLanguageMap[country.code] || 'en';

    // Add language to selected list if not already present
    if (!selectedLanguages.includes(languageCode)) {
      setSelectedLanguages([...selectedLanguages, languageCode]);
    }

    // Set as primary language
    setPrimaryLanguage(languageCode);
    changeLanguage(languageCode);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
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
                    <div className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
                      Account
                    </div>
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
                    <div className="block px-3 py-2 text-sm text-red-600 bg-red-50 rounded font-medium cursor-pointer">
                      Languages
                    </div>
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
                <button
                  onClick={() => setShowAddLanguage(!showAddLanguage)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Language</span>
                </button>
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
                        {primaryLanguage !== language.code ? (
                          <>
                            <button
                              onClick={() => changeLanguage(language.code)}
                              className="px-4 py-1.5 border-2 border-blue-600 text-blue-600 text-sm font-medium rounded-full hover:bg-blue-50 transition-colors"
                            >
                              Set as primary
                            </button>
                            {language.code !== 'en' && (
                              <button
                                onClick={() => removeLanguage(language.code)}
                                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
                                title="Remove language"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </>
                        ) : (
                          language.code !== 'en' && (
                            <button
                              onClick={() => removeLanguage(language.code)}
                              className="px-4 py-1.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors flex items-center space-x-1"
                              title="Remove primary language"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span>Remove</span>
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries Section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse by Country</h2>
              <p className="text-sm text-gray-600 mb-4">Select a country to add its language to your preferences</p>

              {/* Country Search Box */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search countries..."
                    value={countrySearchQuery}
                    onChange={(e) => setCountrySearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm">
                <div className="h-[400px] overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <style>{`
                    .scrollbar-hide::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading countries...</div>
                  ) : filteredCountries.length > 0 ? (
                    <div className="divide-y divide-gray-200">
                      {filteredCountries.map((country) => {
                        const languageCode = countryToLanguageMap[country.code] || 'en';
                        const isSelected = selectedLanguages.includes(languageCode);

                        return (
                          <button
                            key={country.code}
                            onClick={() => handleCountryClick(country)}
                            className={`w-full p-4 hover:bg-gray-50 transition-colors text-left ${
                              isSelected ? 'bg-blue-50' : ''
                            }`}
                          >
                            <div className="flex items-center justify-between">
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
                              {isSelected && (
                                <Check className="w-5 h-5 text-blue-600" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-500">No countries found</div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}