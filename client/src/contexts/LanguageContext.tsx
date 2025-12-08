
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

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    return languages.find(lang => lang.code === savedLang) || languages[0];
  });
  const [isGoogleTranslateReady, setIsGoogleTranslateReady] = useState(false);

  const translatePage = (targetLang: string) => {
    const googleTranslateCode = languages.find(l => l.code === targetLang)?.googleTranslateCode;
    
    if (!googleTranslateCode) {
      return;
    }

    const changeLanguage = () => {
      try {
        const frame = document.querySelector('.goog-te-menu-frame') as HTMLIFrameElement;
        if (!frame) {
          setTimeout(changeLanguage, 100);
          return;
        }

        const frameDocument = frame.contentDocument || frame.contentWindow?.document;
        if (!frameDocument) {
          setTimeout(changeLanguage, 100);
          return;
        }

        const languageOptions = frameDocument.querySelectorAll('.goog-te-menu2-item span.text');
        for (let i = 0; i < languageOptions.length; i++) {
          const option = languageOptions[i] as HTMLElement;
          const langCode = option.parentElement?.getAttribute('value');
          
          if (langCode === googleTranslateCode) {
            option.click();
            console.log('Language changed to:', googleTranslateCode);
            return;
          }
        }

        // Fallback: try using the combo select
        const translateCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (translateCombo) {
          translateCombo.value = googleTranslateCode;
          translateCombo.dispatchEvent(new Event('change', { bubbles: true }));
        }
      } catch (error) {
        console.error('Translation error:', error);
      }
    };

    if (isGoogleTranslateReady) {
      // Trigger translation
      if (googleTranslateCode === 'en') {
        // Reset to original language
        const translateCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (translateCombo) {
          translateCombo.value = '';
          translateCombo.dispatchEvent(new Event('change', { bubbles: true }));
        }
      } else {
        changeLanguage();
      }
    }
  };

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('selectedLanguage', language.code);
    document.documentElement.lang = language.googleTranslateCode || language.code.toLowerCase();
    
    // Apply translation
    setTimeout(() => {
      translatePage(language.code);
    }, 300);
  };

  useEffect(() => {
    // Load Google Translate script
    const loadGoogleTranslate = () => {
      if ((window as any).google?.translate) {
        initializeGoogleTranslate();
        return;
      }

      const scriptId = 'google-translate-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    const initializeGoogleTranslate = () => {
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: languages.map(l => l.googleTranslateCode).filter(Boolean).join(','),
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
        
        setIsGoogleTranslateReady(true);
        
        // Apply saved language after initialization
        if (currentLanguage.code !== 'EN') {
          setTimeout(() => translatePage(currentLanguage.code), 1000);
        }
      };

      if ((window as any).google?.translate) {
        (window as any).googleTranslateElementInit();
      }
    };

    loadGoogleTranslate();

    // Hide Google Translate banner
    const style = document.createElement('style');
    style.innerHTML = `
      body { top: 0 !important; }
      .goog-te-banner-frame { display: none !important; }
      .goog-te-balloon-frame { display: none !important; }
      #google_translate_element { display: none !important; }
      .skiptranslate { display: none !important; }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  useEffect(() => {
    // Re-apply translation when ready state changes
    if (isGoogleTranslateReady && currentLanguage.code !== 'EN') {
      setTimeout(() => translatePage(currentLanguage.code), 500);
    }
  }, [isGoogleTranslateReady]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, translatePage }}>
      <div id="google_translate_element"></div>
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
