"use client";

import { useEffect, useRef } from "react";
import { i18n, Messages } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

type Props = {
  locale: string;
  messages: Messages;
  children: React.ReactNode;
};

export default function LinguiClientProvider({
  locale,
  messages,
  children,
}: Props) {
  const firstRender = useRef(true);

  if (firstRender.current) {
    i18n.load(locale, messages);
    i18n.activate(locale);
    firstRender.current = false;
  }

  useEffect(() => {
    i18n.load(locale, messages);
    i18n.activate(locale);
  }, [locale, messages]);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
