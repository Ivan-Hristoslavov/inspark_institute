import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Mirrors the COMING_SOON flag in app/layout.tsx — while true, every route
// except the Coming Soon landing page ("/") and API routes is blocked with 404.
const COMING_SOON = true;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Static assets (images, fonts, favicon, manifest, etc.) always have a file
  // extension in their last path segment — pages never do. Let those through
  // untouched so the Coming Soon page's own assets keep loading.
  const isStaticAsset = /\.[a-zA-Z0-9]+$/.test(pathname);

  if (COMING_SOON && pathname !== "/" && !pathname.startsWith("/api") && !isStaticAsset) {
    return new NextResponse(null, { status: 404 });
  }

  // Protect admin pages (UI)
  if (pathname.startsWith("/admin")) {
    if (pathname === "/admin/login") {
      return NextResponse.next();
    }

    const adminAuth = request.cookies.get("adminAuth");
    if (!adminAuth?.value) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // Protect admin API routes
  if (pathname.startsWith("/api/admin")) {
    if (pathname === "/api/admin/auth") {
      return NextResponse.next();
    }

    const adminAuth = request.cookies.get("adminAuth");
    if (!adminAuth?.value) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
