import { NextResponse } from "next/server";

export async function middleware() {
  globalThis['SHARED_VALUE'] = "this is a shared value set in the edge runtime! (from a middleware)";
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
