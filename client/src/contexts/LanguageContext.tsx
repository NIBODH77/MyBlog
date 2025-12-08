
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Language {
  code: string;
  name: string;
  color: string;
  googleTranslateCode?: string;
}

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  translatePage: (targetLang: string) => void;
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

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    return languages.find(lang => lang.code === savedLang) || languages[0];
  });
  const [isTranslateReady, setIsTranslateReady] = useState(false);

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
  };

  const setCookie = (name: string, value: string, days: number = 365) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  };

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const translatePage = (targetLang: string) => {
    const googleTranslateCode = languages.find(l => l.code === targetLang)?.googleTranslateCode;
    
    if (!googleTranslateCode) {
      console.error('Invalid language code:', targetLang);
      return;
    }

    console.log('Translating to:', googleTranslateCode);

    if (googleTranslateCode === 'en') {
      // Reset to English
      deleteCookie('googtrans');
      deleteCookie('googtrans', '/auto/en');
      setCookie('googtrans', '/en/en');
      window.location.reload();
      return;
    }

    // Set the Google Translate cookie
    setCookie('googtrans', `/en/${googleTranslateCode}`);
    
    // Force reload to apply translation
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const setLanguage = (language: Language) => {
    console.log('Setting language to:', language.name, language.googleTranslateCode);
    setCurrentLanguage(language);
    localStorage.setItem('selectedLanguage', language.code);
    
    // Apply translation
    if (language.googleTranslateCode) {
      translatePage(language.code);
    }
  };

  useEffect(() => {
    // Load Google Translate script
    const loadGoogleTranslate = () => {
      // Check if already loaded
      if (window.google?.translate) {
        initializeGoogleTranslate();
        return;
      }

      // Remove existing script if any
      const existingScript = document.getElementById('google-translate-script');
      if (existingScript) {
        existingScript.remove();
      }

      // Load the script
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onerror = () => {
        console.error('Failed to load Google Translate script');
      };
      document.head.appendChild(script);
    };

    const initializeGoogleTranslate = () => {
      window.googleTranslateElementInit = () => {
        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: languages
                .map(l => l.googleTranslateCode)
                .filter(Boolean)
                .join(','),
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              multilanguagePage: true,
            },
            'google_translate_element'
          );
          
          setIsTranslateReady(true);
          console.log('Google Translate initialized successfully');

          // Apply saved language if not English
          const savedCookie = getCookie('googtrans');
          console.log('Saved cookie:', savedCookie);
          
        } catch (error) {
          console.error('Error initializing Google Translate:', error);
        }
      };

      // Initialize if google object is available
      if (window.google?.translate) {
        window.googleTranslateElementInit();
      }
    };

    loadGoogleTranslate();

    // Add styles to hide Google Translate UI
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        top: 0 !important;
        position: static !important;
      }
      .goog-te-banner-frame {
        display: none !important;
      }
      .goog-te-balloon-frame {
        display: none !important;
      }
      #google_translate_element {
        display: none !important;
      }
      .skiptranslate {
        display: none !important;
      }
      .goog-te-gadget {
        display: none !important;
      }
      .goog-te-combo {
        display: none !important;
      }
      iframe.skiptranslate {
        display: none !important;
      }
      body > .skiptranslate {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, translatePage }}>
      <div id="google_translate_element" style={{ display: 'none' }}></div>
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

export { languages };
export type { Language };
