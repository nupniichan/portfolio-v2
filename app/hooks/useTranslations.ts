import { useCallback } from "react";
import { useThemeLanguage } from "../components/ThemeLanguageProvider";
import enTranslations from "../locales/en.json";
import viTranslations from "../locales/vi.json";

const translations = {
  en: enTranslations,
  vi: viTranslations,
};

export function useTranslations() {
  const { language, mounted } = useThemeLanguage();

  const t = useCallback((key: string) => {
    const currentLang = mounted ? language : "vi";
    const keys = key.split('.');
    let value: any = translations[currentLang];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return value;
  }, [language, mounted]);

  return { t };
}