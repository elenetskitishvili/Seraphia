import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/src/utils/supabase/server";

export async function GET(req: NextRequest) {
  const supabase = await createClient();
  const { searchParams } = req.nextUrl;

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category");
  const sort = searchParams.get("sort") || "asc";
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const offset = (page - 1) * limit;

  try {
    let query = supabase.from("products").select("*", { count: "exact" });

    if (search) {
      query = query.or(
        `name_en.ilike.%${search}%,description_en.ilike.%${search}%`
      );
    }

    if (category) {
      query = query.eq("category", category);
    }

    query = query.order("price", { ascending: sort === "asc" });

    query = query.range(offset, offset + limit - 1);

    const { data: products, error, count } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ products, total: count, page, limit });
  } catch (err) {
    console.error("Error fetching products:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
