"use client";

import { useEffect } from "react";
import { useThemeLanguage } from "./ThemeLanguageProvider";
import { useTranslations } from "../hooks/useTranslations";

interface MetadataUpdaterProps {
  pageKey: "home" | "about" | "skills" | "projects" | "journey" | "contact";
}

export default function MetadataUpdater({ pageKey }: MetadataUpdaterProps) {
  const { language, mounted } = useThemeLanguage();
  const { t } = useTranslations();

  useEffect(() => {
    if (!mounted) return;

    const metaTitleKey = pageKey === "home" 
      ? "pages.home.title" 
      : `pages.${pageKey}.metaTitle`;
    const descriptionKey = `pages.${pageKey}.description`;

    const title = t(metaTitleKey);
    const description = t(descriptionKey);

    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", description);

    document.documentElement.setAttribute("lang", language);
  }, [language, mounted, pageKey, t]);

  return null;
}

