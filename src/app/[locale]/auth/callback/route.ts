import { NextResponse } from "next/server";
import { createClient } from "@/src/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";
  const locale = searchParams.get("locale") ?? "en";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Fetch the authenticated user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error("User fetch error:", userError);
        return NextResponse.redirect(
          `${origin}/${locale}/auth/auth-code-error`
        );
      }

      // Check if the user has a cart
      const { data: existingCart, error: cartError } = await supabase
        .from("user_cart")
        .select("id, products")
        .eq("user_id", user.id)
        .single();

      // Create a cart if none exists
      if (!existingCart || cartError) {
        const { error: insertError } = await supabase.from("user_cart").insert([
          {
            user_id: user.id,
            products: [],
          },
        ]);

        if (insertError) {
          console.error("Cart creation error:", insertError);
        }
      }

      // Determine redirect URL
      const forwardedHost = request.headers.get("x-forwarded-host");
      const isLocalEnv = process.env.NODE_ENV === "development";

      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}/${locale}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(
          `https://${forwardedHost}/${locale}${next}`
        );
      } else {
        return NextResponse.redirect(`${origin}/${locale}${next}`);
      }
    }
  }

  // Handle errors
  return NextResponse.redirect(`${origin}/${locale}/auth/auth-code-error`);
}
