import { NextResponse } from "next/server";
import { getTranslations } from "./translations";

// Centralized route handler
export const handleRoute = async (locale: string) => {
  const translations = getTranslations(locale);

  if (!translations) {
    return NextResponse.json(
      { error: "Translations not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(translations);
};
