import { useThemeLanguage } from "../components/ThemeLanguageProvider";
import translations from "../locales/translations.json";

export function useTranslations() {
  const { language } = useThemeLanguage();

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Fallback to key if translation not found
      }
    }

    return value;
  };

  return { t };
}