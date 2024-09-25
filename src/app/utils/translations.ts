import enTranslations from "@/translations/en.json";
import frTranslations from "@/translations/fr.json";

// Centralized translation handler
export const getTranslations = (locale: string) => {
  switch (locale) {
    case "fr":
      return frTranslations;
    case "en":
    default:
      return enTranslations;
  }
};
