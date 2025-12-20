import translations from "../locales/translations.json";

export type NavKey = "home" | "about" | "skills" | "projects" | "education" | "contact";

export type NavigationItem = {
  href: string;
  key: NavKey;
};

export const NAV_ITEMS: readonly NavigationItem[] = [
  { href: "/", key: "home" },
  { href: "/about-me", key: "about" },
  { href: "/skills", key: "skills" },
  { href: "/projects", key: "projects" },
  { href: "/education-work", key: "education" },
  { href: "/contact", key: "contact" },
];

export const getNavLabels = (language: "en" | "vi") => {
  return translations[language].navigation;
};

