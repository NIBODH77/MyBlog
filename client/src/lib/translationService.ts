const TRANSLATION_CACHE_KEY = 'translation_cache';
const TRANSLATION_VERSION = 'v1';

interface TranslationCache {
  [key: string]: {
    [targetLang: string]: string;
  };
}

let translationCache: TranslationCache = {};
const pendingRequests: Map<string, Promise<string>> = new Map();
let saveDebounceTimer: ReturnType<typeof setTimeout> | null = null;

export const loadCacheFromStorage = (): void => {
  try {
    const stored = localStorage.getItem(TRANSLATION_CACHE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.version === TRANSLATION_VERSION) {
        translationCache = parsed.data || {};
      }
    }
  } catch (error) {
    console.error('Error loading translation cache:', error);
    translationCache = {};
  }
};

export const saveCacheToStorage = (): void => {
  if (saveDebounceTimer) {
    clearTimeout(saveDebounceTimer);
  }
  saveDebounceTimer = setTimeout(() => {
    try {
      const toStore = {
        version: TRANSLATION_VERSION,
        data: translationCache,
        timestamp: Date.now()
      };
      localStorage.setItem(TRANSLATION_CACHE_KEY, JSON.stringify(toStore));
    } catch (error) {
      console.error('Error saving translation cache:', error);
    }
  }, 500);
};

export const getCachedTranslation = (text: string, targetLang: string): string | null => {
  const cacheKey = text.trim();
  return translationCache[cacheKey]?.[targetLang] || null;
};

export const setCachedTranslation = (text: string, targetLang: string, translation: string): void => {
  const cacheKey = text.trim();
  if (!translationCache[cacheKey]) {
    translationCache[cacheKey] = {};
  }
  translationCache[cacheKey][targetLang] = translation;
};

const getRequestKey = (text: string, targetLang: string): string => {
  return `${targetLang}:${text.trim()}`;
};

export const translateText = async (
  text: string,
  targetLang: string,
  sourceLang: string = 'auto'
): Promise<string> => {
  if (!text || !text.trim()) return text;
  if (targetLang === 'en' || targetLang === 'EN') return text;

  const cached = getCachedTranslation(text, targetLang);
  if (cached) {
    return cached;
  }

  const requestKey = getRequestKey(text, targetLang);
  const pending = pendingRequests.get(requestKey);
  if (pending) {
    return pending;
  }

  const translationPromise = (async () => {
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          targetLang,
          sourceLang,
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Translation failed: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.translatedText) {
        setCachedTranslation(text, targetLang, data.translatedText);
        saveCacheToStorage();
        return data.translatedText;
      }
      
      return text;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    } finally {
      pendingRequests.delete(requestKey);
    }
  })();

  pendingRequests.set(requestKey, translationPromise);
  return translationPromise;
};

export const translateBatch = async (
  texts: string[],
  targetLang: string,
  sourceLang: string = 'auto'
): Promise<Map<string, string>> => {
  const results = new Map<string, string>();
  
  if (targetLang === 'en' || targetLang === 'EN') {
    texts.forEach(text => results.set(text, text));
    return results;
  }
  
  const toTranslate: string[] = [];
  
  for (const text of texts) {
    const cached = getCachedTranslation(text, targetLang);
    if (cached) {
      results.set(text, cached);
    } else if (text && text.trim()) {
      toTranslate.push(text);
    }
  }
  
  if (toTranslate.length === 0) {
    return results;
  }
  
  try {
    const response = await fetch('/api/translate/batch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        texts: toTranslate,
        targetLang,
        sourceLang,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Batch translation failed: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.translations) {
      Object.entries(data.translations).forEach(([original, translated]) => {
        results.set(original, translated as string);
        setCachedTranslation(original, targetLang, translated as string);
      });
      saveCacheToStorage();
    }
  } catch (error) {
    console.error('Batch translation error:', error);
    toTranslate.forEach(text => results.set(text, text));
  }
  
  return results;
};

export const clearTranslationCache = (): void => {
  translationCache = {};
  localStorage.removeItem(TRANSLATION_CACHE_KEY);
};

loadCacheFromStorage();
