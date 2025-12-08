import type { ReactNode } from 'react';
import { useState, useEffect, useCallback, memo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translateText, translateBatch, getCachedTranslation } from '@/lib/translationService';

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();
  const targetLang = currentLanguage.googleTranslateCode || 'en';

  const t = useCallback(async (text: string): Promise<string> => {
    if (!text || targetLang === 'en') return text;
    return translateText(text, targetLang);
  }, [targetLang]);

  const tSync = useCallback((text: string): string => {
    if (!text || targetLang === 'en') return text;
    const cached = getCachedTranslation(text, targetLang);
    return cached || text;
  }, [targetLang]);

  const tBatch = useCallback(async (texts: string[]): Promise<Map<string, string>> => {
    if (targetLang === 'en') {
      const map = new Map<string, string>();
      texts.forEach(t => map.set(t, t));
      return map;
    }
    return translateBatch(texts, targetLang);
  }, [targetLang]);

  return { t, tSync, tBatch, currentLanguage, targetLang };
};

interface TranslatedTextProps {
  children: string;
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'button' | 'a' | 'li' | 'td' | 'th';
  className?: string;
  fallback?: string;
  [key: string]: any;
}

export const TranslatedText = memo(({ 
  children, 
  as: Component = 'span', 
  className,
  fallback,
  ...props 
}: TranslatedTextProps) => {
  const { currentLanguage } = useLanguage();
  const targetLang = currentLanguage.googleTranslateCode || 'en';
  const [translatedText, setTranslatedText] = useState<string>(children);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const translate = async () => {
      if (!children || targetLang === 'en') {
        setTranslatedText(children);
        return;
      }

      const cached = getCachedTranslation(children, targetLang);
      if (cached) {
        setTranslatedText(cached);
        return;
      }

      setIsLoading(true);
      try {
        const result = await translateText(children, targetLang);
        if (isMounted) {
          setTranslatedText(result);
        }
      } catch (error) {
        if (isMounted) {
          setTranslatedText(fallback || children);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    translate();

    return () => {
      isMounted = false;
    };
  }, [children, targetLang, fallback]);

  const ElementComponent = Component as any;
  
  return (
    <ElementComponent 
      className={className} 
      data-translating={isLoading ? 'true' : undefined}
      {...props}
    >
      {translatedText}
    </ElementComponent>
  );
});

TranslatedText.displayName = 'TranslatedText';

interface TranslatedHTMLProps {
  html: string;
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  [key: string]: any;
}

export const TranslatedHTML = memo(({ 
  html, 
  as: Component = 'div', 
  className,
  ...props 
}: TranslatedHTMLProps) => {
  const { currentLanguage } = useLanguage();
  const targetLang = currentLanguage.googleTranslateCode || 'en';
  const [translatedHTML, setTranslatedHTML] = useState<string>(html);

  useEffect(() => {
    let isMounted = true;
    
    const translate = async () => {
      if (!html || targetLang === 'en') {
        setTranslatedHTML(html);
        return;
      }

      const cached = getCachedTranslation(html, targetLang);
      if (cached) {
        setTranslatedHTML(cached);
        return;
      }

      try {
        const result = await translateText(html, targetLang);
        if (isMounted) {
          setTranslatedHTML(result);
        }
      } catch {
        if (isMounted) {
          setTranslatedHTML(html);
        }
      }
    };

    translate();

    return () => {
      isMounted = false;
    };
  }, [html, targetLang]);

  const ElementComponent = Component as any;
  
  return (
    <ElementComponent 
      className={className} 
      dangerouslySetInnerHTML={{ __html: translatedHTML }}
      {...props}
    />
  );
});

TranslatedHTML.displayName = 'TranslatedHTML';

export default useTranslation;
