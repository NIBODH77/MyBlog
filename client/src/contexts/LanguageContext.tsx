import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

export interface Language {
  code: string;
  name: string;
  color: string;
  googleTranslateCode?: string;
}

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  isTranslating: boolean;
}

export const languages: Language[] = [
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
  { code: 'ZH', name: '中文', color: 'bg-red-700', googleTranslateCode: 'zh' },
  { code: 'KO', name: '한국어', color: 'bg-blue-700', googleTranslateCode: 'ko' },
  { code: 'RU', name: 'Русский', color: 'bg-blue-800', googleTranslateCode: 'ru' },
  { code: 'TH', name: 'ไทย', color: 'bg-purple-600', googleTranslateCode: 'th' },
  { code: 'VI', name: 'Tiếng Việt', color: 'bg-red-600', googleTranslateCode: 'vi' },
  { code: 'TR', name: 'Türkçe', color: 'bg-red-500', googleTranslateCode: 'tr' },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    return languages.find(lang => lang.code === savedLang) || languages[0];
  });
  const [isTranslating, setIsTranslating] = useState(false);

  const setLanguage = useCallback((language: Language) => {
    setIsTranslating(true);
    setCurrentLanguage(language);
    localStorage.setItem('selectedLanguage', language.code);
    
    setTimeout(() => {
      setIsTranslating(false);
    }, 500);
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      const lang = languages.find(l => l.code === savedLang);
      if (lang && lang.code !== currentLanguage.code) {
        setCurrentLanguage(lang);
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
