import { setupI18n } from "@lingui/core";

export async function getI18nInstance(locale: string) {
  const { messages } = await import(`@/src/locales/${locale}/messages.po`);
  const i18n = setupI18n({
    locale,
    messages: { [locale]: messages },
  });
  return i18n;
}

export async function getMessages(locale: string) {
  const { messages } = await import(`@/src/locales/${locale}/messages.po`);
  return messages;
}
