import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Unterstützte Sprachen
const locales = ["de", "en"];
// Start-Sprache (Standardmäßig auf Deutsch)
const defaultLocale = "de";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Prüfen, ob die URL schon mit /de oder /en anfängt
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // Wenn ja, tun wir nichts und lassen den Nutzer die Seite sehen
  if (pathnameHasLocale) return;

  // 2. Wenn keine Sprache in der URL ist (z.B. nur /), leiten wir auf /de weiter
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Wichtig: Verhindert, dass die Middleware interne Next.js-Dateien oder Bilder umleitet
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|pdf|txt|xml|woff|woff2|ttf|css|js)$).*)",
  ],
};
