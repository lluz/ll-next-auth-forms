// import { NextRequest, NextResponse } from 'next/server';

// import { getSessionCookie } from "better-auth";

// function getIpAddress(request: NextRequest) {
//   const forwardedFor = request.headers.get('x-forwarded-for');

//   if (forwardedFor) {
//     return forwardedFor.split(',')[0].trim();
//   }
//   return request.headers.get('x-real-ip') || 'unknown';
// }

// export function middleware(request: NextRequest) {

//   /* 
//   * REQUEST 
//   */
//   const url = request.nextUrl.clone();
//   const ipAddress = getIpAddress(request) as string;
  
//   request.headers.set('x-full-url', url.toString());
//   request.headers.set('x-ip-address', ipAddress);

//   /* 
//   * RESPONSE 
//   */
//   const sessionCookie = getSessionCookie(request); // Optionally pass config as the second argument if cookie name or prefix is customized.
// 	if (!sessionCookie) {
// 		return NextResponse.redirect(new URL("/", request.url));
// 	}

//   const response = NextResponse.next({
//     request: {
//       headers: request.headers,
//     },
//   });

//   return response;
  
// }

// export const config = {
//   matcher: '/:path*', // Apply middleware to all routes
// };




// import { betterFetch } from "@better-fetch/fetch";
// import type { auth } from "@/lib/auth2";
// import { NextRequest, NextResponse } from "next/server";
 
// type Session = typeof auth.$Infer.Session;
 
// export async function middleware(request: NextRequest) {

// 	const { data: session } = await betterFetch<Session>("/api/auth/get-session", {
// 		baseURL: request.nextUrl.origin,
// 		headers: {
// 			cookie: request.headers.get("cookie") || "", // Forward the cookies from the request
// 		},
// 	});
 
// 	if (!session) {
// 		return NextResponse.redirect(new URL("/logged-out", request.url));
// 	}
 
// 	return NextResponse.next();
// }
 
// export const config = {
// 	matcher: ["/my-account"], // Apply middleware to specific routes
// };






// import { betterFetch } from "@better-fetch/fetch";
// import type { auth } from "@/lib/auth2";
// import { NextRequest, NextResponse } from "next/server";
 
// type Session = typeof auth.$Infer.Session;
 
// export async function middleware(request: NextRequest) {

//   const pathname = request.nextUrl.pathname;

//   // Example: Protect routes that require authentication
//   const protectedRoutes = ['/my-account']; // Add your protected routes

//   // if (protectedRoutes.includes(pathname) && !session222) {
//   //   const from = encodeURIComponent(pathname);
//   //   return NextResponse.redirect(new URL(`/logged-out?callbackUrl=${from}`, request.url));
//   // }
//   // else {
//   //   return NextResponse.redirect(new URL(pathname, request.url));
//   // }

  
// 	const { data: session } = await betterFetch<Session>("/api/auth/get-session", {
// 		baseURL: request.nextUrl.origin,
// 		headers: {
// 			cookie: request.headers.get("cookie") || "", // Forward the cookies from the request
// 		},
// 	});

//   console.log("middleware----------", session);

 
// 	// if (protectedRoutes.includes(pathname) && !session) {


// 	// 	return NextResponse.redirect(new URL("/logged-out", request.url));
// 	// }
 
// 	return NextResponse.next();
// }
 
// export const config = {
//   matcher: ['/((?!api|static|.*\\..*|_next).*)'], // Match all routes except those starting with /api, /static, containing a dot, or _next
// };




// import { NextRequest, NextResponse } from "next/server";
// import { getSessionCookie } from "better-auth";
// import { betterFetch } from "@better-fetch/fetch";

// import type { auth } from "@/lib/auth2";

// type Session = typeof auth.$Infer.Session;
 
// export async function middleware(request: NextRequest) {
// 	const sessionCookie = getSessionCookie(request); // Optionally pass config as the second argument if cookie name or prefix is customized.




	
// 		const { data: session } = await betterFetch<Session>("/api/auth/get-session", {
// 			baseURL: request.nextUrl.origin,
// 			headers: {
// 				cookie: request.headers.get("cookie") || "", // Forward the cookies from the request
// 			},
// 		});
	 
		
// 		console.log("middleware------session----", session, request.cookies);



//   const pathname = request.nextUrl.pathname;
//   const protectedRoutes = ['/my-account']; // Add your protected routes

// 	if (protectedRoutes.includes(pathname) && !session) {

//     console.log("middleware------hit protectedRoute!!!----", pathname);

// 		return NextResponse.redirect(new URL("/dummy-login", request.url));
// 	}
// 	return NextResponse.next();
// }
 
// export const config = {
// 	matcher: ['/((?!api|static|.*\\..*|_next).*)'],
// };




// import { NextRequest, NextResponse } from "next/server";
// import { getSessionCookie } from "better-auth";
 
// export async function middleware(request: NextRequest) {
	
// 	return NextResponse.next();
// }
 
// export const config = {
//   matcher: ['/((?!api|static|.*\\..*|_next).*)'],
// };






import { NextRequest, NextResponse } from "next/server";
import { betterFetch } from "@better-fetch/fetch";

import type { auth } from "@/lib/auth2";

type Session = typeof auth.$Infer.Session;
 
export async function middleware(request: NextRequest) {
	
	const pathname = request.nextUrl.pathname;
  const protectedRoutes = ['/my-account'];

	const { data: session } = await betterFetch<Session>("/api/auth/get-session", {
		baseURL: request.nextUrl.origin,
		headers: {
			cookie: request.headers.get("__Secure-better-auth.session_token") || "", // Forward the cookies from the request
		},
	});
	 
		
		console.log("middleware------session----", session, request.cookies, request.nextUrl.origin);


		
	if (protectedRoutes.includes(pathname) && !session) {

    console.log("middleware------hit protectedRoute!!!----", pathname);

		return NextResponse.redirect(new URL("/dummy-login", request.url));
	}
	return NextResponse.next();
}
 
export const config = {
	matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};