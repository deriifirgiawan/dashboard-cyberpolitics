import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	// Get the pathname (excluding query and host)
	const { pathname } = request.nextUrl;

	// Check if the request is for the homepage "/"
	if (pathname === "/") {
		// Redirect to /auth
		return NextResponse.redirect(new URL("/auth", request.url));
	}

	// Retrieve token from cookies
	const token = request.cookies.get("token")?.value;

	// If user tries to access the dashboard without a token, redirect to /auth
	if (pathname === "/dashboard" && !token) {
		return NextResponse.redirect(new URL("/auth", request.url));
	}

	// If no redirect is needed, continue with the request
	return NextResponse.next();
}
