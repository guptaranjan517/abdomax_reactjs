// /app/api/translations/[locale]/route.ts

import { NextResponse } from "next/server";
import enTranslations from "@/translations/en.json";
import frTranslations from "@/translations/fr.json";

export async function GET(
  request: Request,
  { params }: { params: { locale: string } }
) {
  const { locale } = params;

  // Choose the appropriate translation based on the locale parameter
  let translations;

  switch (locale) {
    case "fr":
      translations = frTranslations;
      break;
    case "en":
    default:
      translations = enTranslations;
      break;
  }

  // Return the translations as a JSON response
  return NextResponse.json(translations);
}



// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// type Params = {
//   locale: string;
// };

// type Translations = {
//   en: {
//     Index: { title: string };
//     Metadata: { title: string; description: string };
//   };
//   fr: {
//     Index: { title: string };
//     Metadata: { title: string; description: string };
//   };
// };

// const translations: Translations = {
//   en: {
//     Index: { title: "Abdomax!" },
//     Metadata: {
//       title: "Abdomax",
//       description: "Abdomax",
//     },
//   },
//   fr: {
//     Index: { title: "abdomax!" },
//     Metadata: {
//       title: "abdomax",
//       description: "abdomax",
//     },
//   },
// };

// export async function GET(
//   request: NextRequest,
//   { params }: { params: Params }
// ) {
//   const { locale } = params;

//   const translation = translations[locale as keyof Translations];

//   if (!translation) {
//     console.error("Invalid locale:", locale);
//     return NextResponse.json({ error: "Locale not found" }, { status: 404 });
//   }

//   return NextResponse.json(translation);
// }
