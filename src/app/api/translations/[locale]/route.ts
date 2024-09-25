// src/app/api/translations/[locale]/route.ts

import { handleRoute } from "@/app/utils/routeHandler";

export async function GET(
  request: Request,
  { params }: { params: { locale: string } }
) {
  const { locale } = params;
  return handleRoute(locale);
}
