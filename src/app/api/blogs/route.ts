import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/src/utils/supabase/server";

export async function GET(req: NextRequest) {
  const supabase = await createClient();
  const { searchParams } = req.nextUrl;

  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "desc";
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const offset = (page - 1) * limit;

  try {
    let query = supabase.from("blogs").select("*", { count: "exact" });

    if (search) {
      query = query.or(
        `title_en.ilike.%${search}%,content_en.ilike.%${search}%`
      );
    }

    query = query.order("created_at", { ascending: sort === "asc" });

    query = query.range(offset, offset + limit - 1);

    const { data: blogs, error, count } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ blogs, total: count, page, limit });
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
