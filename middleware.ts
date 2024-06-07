import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // You can now access url.pathname, url.searchParams, etc.

  // Optionally, pass URL parts to headers or cookies for further use in components
  const response = NextResponse.next();
  response.headers.set("x-pathname", url.pathname);
  response.headers.set("x-search-params", url.searchParams.toString());

  return response;
}

export const config = {
  matcher: ["/login"], // define the paths where the middleware should run
};
