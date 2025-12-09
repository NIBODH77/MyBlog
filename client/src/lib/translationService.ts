const TRANSLATION_CACHE_KEY = 'translation_cache';
const TRANSLATION_VERSION = 'v1';

interface TranslationCache {
  [key: string]: {
    [targetLang: string]: string;
  };
}

let translationCache: TranslationCache = {};

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

export const translateText = async (
  text: string,
  targetLang: string,
  _sourceLang: string = 'auto'
): Promise<string> => {
  if (!text || !text.trim()) return text;
  if (targetLang === 'en' || targetLang === 'EN') return text;

  const cached = getCachedTranslation(text, targetLang);
  if (cached) {
    return cached;
  }

  return text;
};

export const translateBatch = async (
  texts: string[],
  targetLang: string,
  _sourceLang: string = 'auto'
): Promise<Map<string, string>> => {
  const results = new Map<string, string>();
  
  if (targetLang === 'en' || targetLang === 'EN') {
    texts.forEach(text => results.set(text, text));
    return results;
  }
  
  for (const text of texts) {
    const cached = getCachedTranslation(text, targetLang);
    if (cached) {
      results.set(text, cached);
    } else {
      results.set(text, text);
    }
  }
  
  return results;
};

export const clearTranslationCache = (): void => {
  translationCache = {};
  localStorage.removeItem(TRANSLATION_CACHE_KEY);
};

loadCacheFromStorage();
