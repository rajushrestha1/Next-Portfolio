import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.rajushrestha1.com.np";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";
  const proto = request.headers.get("x-forwarded-proto") || "http";

  const isWrongHost = host !== CANONICAL_HOST;
  const isHttp = proto === "http";

  if (isWrongHost || isHttp) {
    url.protocol = "https";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|home.png).*)",
  ],
};