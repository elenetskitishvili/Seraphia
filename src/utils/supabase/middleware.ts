import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/src/i18n/routing";

const restrictedPages = [
  "/en",
  "/en/about",
  "/en/blogs",
  "/en/contact",
  "/en/create-product",
  "/en/pricing",
  "/en/products",
  "/en/profile",
  "/en/reset-password",
  "/ka",
  "/ka/about",
  "/ka/blogs",
  "/ka/contact",
  "/ka/create-product",
  "/ka/pricing",
  "/ka/products",
  "/ka/profile",
  "/ka/reset-password",
];

const authPages = [
  "/en/sign-in",
  "/en/sign-up",
  "/en/forgot-password",
  "/ka/sign-in",
  "/ka/sign-up",
  "/ka/forgot-password",
];

const nonProtectedPages = ["/en/reset-password", "/ka/reset-password"];

export const updateSession = async (request: NextRequest) => {
  try {
    let response = createMiddleware(routing)(request);

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            );
            response = NextResponse.next({
              request,
            });
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    const user = await supabase.auth.getUser();

    if (
      restrictedPages.includes(request.nextUrl.pathname) &&
      user.error &&
      !nonProtectedPages.includes(request.nextUrl.pathname)
    ) {
      return NextResponse.redirect(new URL("/en/sign-in", request.url));
    }

    if (request.nextUrl.pathname === "/" && !user.error) {
      return NextResponse.redirect(new URL("/en", request.url));
    }

    return response;
  } catch (e) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
};
