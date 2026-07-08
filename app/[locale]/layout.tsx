import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import LinguiClientProvider from "@/components/LinguiClientProvider";
import { getMessages } from "../i18n";
import MainNav from "@/components/navigation/mainNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Luka Jevremovic",
  description: "This is my portfolio website",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-bg min-h-screen text-text-black antialiased`}
      >
        <LinguiClientProvider locale={locale} messages={messages}>
          <MainNav />
          {children}
        </LinguiClientProvider>
      </body>
    </html>
  );
}
