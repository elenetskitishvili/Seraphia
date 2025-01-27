"use server";

import { createClient } from "@/src/utils/supabase/server";
import { getLocale } from "next-intl/server";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData: FormData) {
  const supabase = await createClient();
  const locale = await getLocale();

  const fullName = formData.get("fullName") as string;
  const phone = formData.get("phone") as string;
  const makesJewelry = formData.get("makesJewelry") === "on";
  const address = formData.get("address") as string;

  try {
    const userResponse = await supabase.auth.getUser();
    const userId = userResponse.data.user?.id;

    if (!userId) throw new Error("User not authenticated.");

    const { error } = await supabase
      .from("users")
      .update({
        full_name: fullName,
        phone: phone,
        makes_jewelry: makesJewelry,
        address: address,
      })
      .eq("user_id", userId);

    revalidatePath(`${locale}/account/profile`);

    if (error) {
      throw new Error("Failed to update user in Supabase.");
    }
  } catch (error) {
    console.error("Error updating user information in Supabase:", error);

    throw error;
  }
}
