import EditBlogForm from "@/src/components/blogs/EditBlogForm";
import { fetchBlog } from "@/src/lib/data-service";
import { Blog } from "@/src/types/types";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Edit blog",
};

export default async function EditBlog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const blogId = await resolvedParams.id;
  const blog: Blog | null = await fetchBlog(blogId);

  if (!blog) {
    return notFound();
  }
  return (
    <div className="pt-[60px] 770px:pt-20 ">
      <EditBlogForm blog={blog} />
    </div>
  );
}
