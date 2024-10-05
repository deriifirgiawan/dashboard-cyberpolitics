import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	// Get the pathname (excluding query and host)
	const { pathname } = request.nextUrl;

	// Check if the request is for the homepage "/"
	if (pathname === "/") {
		// Redirect to /auth
		return NextResponse.redirect(new URL("/auth", request.url));
	}

	// If no redirect is needed, continue with the request
	return NextResponse.next();
}
