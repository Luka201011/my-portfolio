"use client";

import { useEffect, useRef } from "react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

export default function LinguiClientProvider({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  const isInitial = useRef(true);
  if (isInitial.current) {
    i18n.load(locale, messages);
    i18n.activate(locale);
    isInitial.current = false;
  }
  useEffect(() => {
    i18n.load(locale, messages);
    i18n.activate(locale);
  }, [locale, messages]);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
