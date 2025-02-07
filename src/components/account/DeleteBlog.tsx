"use client";

import { useState, useTransition } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteBlog } from "@/src/app/actions/deleteBlog";
import { useLocale, useTranslations } from "next-intl";

export default function DeleteBlog({ blogId }: { blogId: number }) {
  const t = useTranslations("MyBlogs");
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      await deleteBlog(blogId);
      setIsOpen(false);
    });
  };

  return (
    <>
      {/* DELETE BUTTON */}
      <button
        className="p-2 border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder items-center justify-center text-customGray dark:text-darkModeTextTertiary rounded-sm flex gap-2"
        onClick={() => setIsOpen(true)}
      >
        <TrashIcon className="w-5 h-5" /> <span>{t("delete")}</span>
      </button>

      {/* CONFIRMATION MODAL */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-darkModeBorder p-6 rounded-lg shadow-lg text-center z-50"
          >
            <h2 className="text-lg font-semibold mb-4">{t("question")}</h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border dark:border-darkModeBorder rounded text-customGray dark:text-white hover:bg-bgLight dark:hover:bg-darkModeBgLighter transition-colors duration-200 ease-in-out"
              >
                {t("cancel")}
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors duration-200 ease-in-out disabled:opacity-50"
                disabled={isPending}
              >
                {isPending ? t("deleting") : t("delete")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
