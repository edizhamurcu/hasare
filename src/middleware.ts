import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
function stripLocalePrefix(pathname: string): string {
  if (pathname === "/tr" || pathname === "/tr/") return "/";
  if (pathname.startsWith("/tr/")) return pathname.slice(3) || "/";
  const m = pathname.match(/^\/(en|ru)(\/.*)?$/);
  if (m) return m[2] || "/";
  return pathname || "/";
}

/** Open redirect / path injection — kontrol karakterleri ve şema-relative yollar */
const UNSAFE_PATH =
  /[\0-\x1f\x7f]|\\|%5[cC]|%2[eE]{2}|%2[fF]{2}|%5[cC]%2[fF]|%2[fF]%2[fF]/;

function isSafePathname(pathname: string): boolean {
  if (!pathname.startsWith("/")) return false;
  if (UNSAFE_PATH.test(pathname)) return false;
  try {
    const decoded = decodeURIComponent(pathname);
    if (/[\0-\x1f\x7f\\]/.test(decoded)) return false;
  } catch {
    return false;
  }
  return true;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isSafePathname(pathname)) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const response = NextResponse.next();
  response.headers.set("x-internal-path", stripLocalePrefix(pathname));
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|robots.txt|sitemap.xml|llms.txt|manifest.webmanifest|opengraph-image).*)",
  ],
};
