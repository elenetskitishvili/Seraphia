import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/src/i18n/routing";

const restrictedPages = [
  "/en/account/profile",
  "/en/account/my-blogs",
  "/en/account/my-listings",
  "/en/account/orders",
  "/en/add-product",
  "/en/cart",
  "/en/create-blog",
  "/en/edit-blog",
  "/en/edit-product",
  "/en/reset-password",
  "/ka/account/profile",
  "/ka/account/my-blogs",
  "/ka/account/my-listings",
  "/ka/account/orders",
  "/ka/add-product",
  "/ka/cart",
  "/ka/create-blog",
  "/ka/edit-blog",
  "/ka/edit-product",
  "/ka/reset-password",
];

const nonProtectedPages = ["/en/reset-password", "/ka/reset-password"];

export const updateSession = async (request: NextRequest) => {
  try {
    if (request.nextUrl.pathname.startsWith("/api")) {
      return NextResponse.next();
    }

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
