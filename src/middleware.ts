/**
 * DO NOT MODIFY
 */

import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  if (!req.url.includes("/api/")) {
    return NextResponse.next();
  }
  // Simulate a slow API response (e.g., 3 seconds delay)
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
