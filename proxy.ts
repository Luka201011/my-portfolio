import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["de", "en"];
const DEFAULT_LOCALE = "de";
const PASSCODE = "meinGeheimesPasswort123"; // <-- Hier dein Passwort eintragen

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Ausnahmen festlegen: Ausgenommen sind die Login-Seite und API-Routen
  const isLoginPage = pathname === "/login" || pathname.endsWith("/login");
  const authCookie = request.cookies.get("site_access");

  // 2. Passwort-Prüfung
  if (authCookie?.value !== PASSCODE && !isLoginPage) {
    const loginUrl = new URL(`/${DEFAULT_LOCALE}/login`, request.url);
    return NextResponse.redirect(loginUrl);
  }

  // 3. Deine bestehende Sprach-Logik (i18n)
  const hasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const targetPath =
    pathname === "/" ? `/${DEFAULT_LOCALE}` : `/${DEFAULT_LOCALE}${pathname}`;
  const redirectUrl = new URL(targetPath, request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|pdf|txt|xml|woff|woff2|ttf|css|js)$).*)",
  ],
};
