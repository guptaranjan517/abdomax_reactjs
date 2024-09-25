import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdomax",
  description: "Abdomax provide best serveice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
