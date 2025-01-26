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
    // ✅ Fetch total count separately (without pagination)
    const { count, error: countError } = await supabase
      .from("products")
      .select("*", { count: "exact", head: true });

    if (countError) {
      return NextResponse.json({ error: countError.message }, { status: 500 });
    }

    // ✅ Fetch paginated products separately
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

    console.log("Total products count:", count);

    return NextResponse.json({ products, total: count, page, limit });
  } catch (err) {
    console.error("Error fetching products:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
