import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeJwt } from "jose";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //   return NextResponse.redirect(new URL('/home', request.url))
  const token = request.cookies.get("directus_session_token")?.value || "";

  const directusToken = request.cookies.get("directus_session_token")?.value;

  const pathName = request.nextUrl.pathname;

  const publicPath = pathName === "/" || pathName === "/auth";

  if (publicPath && token) {
    if (directusToken === "" || directusToken === undefined) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }

    const { iss } = decodeJwt(directusToken);

    if (iss !== "directus") {
      return NextResponse.redirect(new URL("/auth", request.url));
    } else {
      return NextResponse.redirect(new URL("/account", request.url));
    }
  }

  if (!publicPath && !token) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/auth", "/account", "/accounts/profile"],
};
