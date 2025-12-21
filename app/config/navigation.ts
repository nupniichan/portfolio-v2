import enTranslations from "../locales/en.json";
import viTranslations from "../locales/vi.json";

const translations = {
  en: enTranslations,
  vi: viTranslations,
};

export type NavKey = "home" | "about" | "skills" | "projects" | "journey" | "contact";

export type NavigationItem = {
  href: string;
  key: NavKey;
};

export const NAV_ITEMS: readonly NavigationItem[] = [
  { href: "/", key: "home" },
  { href: "/about-me", key: "about" },
  { href: "/skills", key: "skills" },
  { href: "/projects", key: "projects" },
  { href: "/journey", key: "journey" },
  { href: "/contact", key: "contact" },
];

export const getNavLabels = (language: "en" | "vi") => {
  return translations[language].navigation;
};

