"use client";

import { useEffect } from "react";
import { useThemeLanguage } from "./ThemeLanguageProvider";
import { useTranslations } from "../hooks/useTranslations";

interface MetadataUpdaterProps {
  pageKey: "home" | "about" | "projects" | "education" | "contact";
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

    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update or create og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);

    // Update or create og:description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", description);

    // Update html lang attribute
    document.documentElement.setAttribute("lang", language);
  }, [language, mounted, pageKey, t]);

  return null;
}

