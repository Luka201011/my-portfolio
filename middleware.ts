import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["de", "en"];
const DEFAULT_LOCALE = "de";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
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
