import BlogCard from "./BlogCard";
import { Blog } from "@/src/types/types";

export default async function BlogList({
  params,
}: {
  params: {
    search?: string;
    sort?: "asc" | "desc";
    page?: string;
  };
}) {
  const search = params?.search || "";
  const sort = params?.sort || "asc";
  const page = Number(params?.page) || 1;
  const limit = 9;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs?search=${search}&sort=${sort}&page=${page}&limit=${limit}`
  );

  const { blogs, total } = await res.json();

  return (
    <ul className="grid grid-cols-1 480px:grid-cols-2 990px:grid-cols-3 480px:gap-x-6 gap-y-6 480px:gap-y-10 px-6 770px:px-10 py-[60px] 770px:py-20 990px:py-[120px] ">
      {blogs.map((blog: Blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </ul>
  );
}
