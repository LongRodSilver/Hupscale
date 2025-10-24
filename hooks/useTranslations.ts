'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import enTranslations from '@/locales/en/translation.json';
import frTranslations from '@/locales/fr/translation.json';

const translations = {
  en: enTranslations,
  fr: frTranslations,
};

export function useTranslations() {
  const { language } = useLanguage();
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found in fallback
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return { t, language };
}
