// src/i18n.ts

import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { getTranslations } from "./app/utils/translations";

// Define supported locales
const locales = ["en", "fr"];

// Define RequestConfig interface
interface RequestConfig {
  locale: string;
  messages: Record<string, any>;
}

export default getRequestConfig(
  async ({ locale }: { locale: string }): Promise<RequestConfig> => {
    // Validate locale
    if (!locales.includes(locale)) {
      notFound();
    }

    // Fetch translations
    const messages = getTranslations(locale);
    // console.log("Fetched messages:", messages); // Check the structure of messages
    // Ensure messages is a plain object
    if (!messages || typeof messages !== "object") {
      notFound();
    }

    // Return the RequestConfig object with the correct structure
    return {
      locale,
      messages, // This should be a simple object or record
    };
  }
);
