// app/layout.tsx

import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Supported locales
const locales = ["en", "fr"];

// Layout component
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }; // Ensure locale is a string
}>) {
  const { locale } = params; // Destructure locale from params

  // Fetch messages based on locale
  const messages = await getMessages({ locale }); // Ensure getMessages receives an object with locale
  unstable_setRequestLocale(locale); // Set the request locale

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Generate static params for localization
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale })); // Return locales as objects
}
