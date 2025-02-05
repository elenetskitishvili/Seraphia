"use server";

import { encodedRedirect } from "@/src/utils/utils";
import { createClient } from "@/src/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";

// Sign Up
export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const locale = await getLocale();
  const t = await getTranslations("Auth");

  if (!email || !password) {
    return encodedRedirect(
      "error",
      `/${locale}/sign-up`,
      t("require-email-password")
    );
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", `/${locale}/sign-up`, error.message);
  } else {
    return encodedRedirect(
      "success",
      `/${locale}/sign-up`,
      t("success-signup")
    );
  }
};

// Sign In
export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();
  const locale = await getLocale();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", `/${locale}/sign-in`, error.message);
  }

  const userId = data.user?.id;

  if (userId) {
    const { data: existingUser } = await supabase
      .from("users")
      .select("user_id")
      .eq("user_id", userId)
      .single();

    if (!existingUser || !existingUser.user_id) {
      const { data, error } = await supabase.from("users").insert([
        {
          user_id: userId,
          makes_jewelry: false,
          is_admin: false,
          max_items: 5,
          subscription_plan: "standard",
        },
      ]);
    }
  }

  return redirect(`/${locale}/`);
};

// Forgot Password
export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();
  const locale = formData.get("locale")?.toString();
  const t = await getTranslations("Auth");

  if (!email) {
    return encodedRedirect(
      "error",
      `/${locale}/forgot-password`,
      t("require-email")
    );
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/${locale}/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      `/${locale}/forgot-password`,
      t("error-reset-password")
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    `/${locale}/forgot-password`,
    t("success-reset-password")
  );
};

// Reset Password
export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const locale = formData.get("locale")?.toString();
  const t = await getTranslations("Auth");

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      `/${locale}/reset-password`,
      t("require-password-confirm")
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      `/${locale}/reset-password`,
      t("error-password-mismatch")
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      `/${locale}/reset-password`,
      t("error-password-update")
    );
  }

  encodedRedirect(
    "success",
    `/${locale}/sign-in`,
    t("success-password-update")
  );
};

// Sign Out
export const signOutAction = async (formData: FormData) => {
  const supabase = await createClient();
  const locale = formData.get("locale")?.toString();
  await supabase.auth.signOut();
  return redirect(`/${locale}/sign-in`);
};

// Sign In with GitHub
export const signInWithGithubAction = async (formData: FormData) => {
  const supabase = await createClient();
  const locale = await getLocale();
  const origin = (await headers()).get("origin");

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${origin}/${locale}/auth/callback`,
    },
  });

  if (error) {
    console.error("OAuth Sign-In Error:", error.message);
    return encodedRedirect("error", `/${locale}/sign-in`, error.message);
  }

  if (data.url) {
    return redirect(data.url);
  }
};
