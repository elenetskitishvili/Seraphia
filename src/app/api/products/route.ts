import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/src/utils/supabase/server";

export async function GET(req: NextRequest) {
  const supabase = await createClient();
  const { searchParams } = req.nextUrl;

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category")?.toLowerCase();
  const sort = searchParams.get("sort") || "asc";
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const limit = Number(searchParams.get("limit")) || 10;
  const offset = (page - 1) * limit;

  try {
    let countQuery = supabase
      .from("products")
      .select("*", { count: "exact", head: true });

    if (search) {
      countQuery = countQuery.or(
        `name_en.ilike.%${search}%,description_en.ilike.%${search}%`
      );
    }

    if (category) {
      countQuery = countQuery.eq("category", category);
    }

    const { count, error: countError } = await countQuery;
    if (countError) {
      return NextResponse.json({ error: countError.message }, { status: 500 });
    }

    let query = supabase.from("products").select("*");

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

    const { data: products, error } = await query;
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const totalPages = Math.ceil((count || 0) / limit);

    return NextResponse.json({
      products,
      total: count,
      totalPages,
      page,
      limit,
    });
  } catch (err) {
    console.error("Error fetching products:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
