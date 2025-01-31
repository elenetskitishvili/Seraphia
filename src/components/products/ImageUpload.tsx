"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ImageUploadProps {
  existingImages: string[];
  onImagesChange: (updatedImages: (string | File)[]) => void;
}

export default function ImageUpload({
  existingImages,
  onImagesChange,
}: ImageUploadProps) {
  const [images, setImages] = useState<(string | File)[]>(existingImages || []);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // Generate preview URLs and clean up old ones
  useEffect(() => {
    const urls = images.map((image) =>
      typeof image === "string" ? image : URL.createObjectURL(image)
    );
    setPreviewUrls(urls);

    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [images]);

  // Update parent state only after images state changes (prevents update during render)
  useEffect(() => {
    onImagesChange(images);
  }, [images, onImagesChange]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const filesArray = Array.from(event.target.files);
    setImages((prev) => [...prev, ...filesArray]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 flex-wrap">
        {previewUrls.map((src, index) => (
          <div key={index} className="relative">
            <Image
              src={src}
              alt="Product image"
              width={100}
              height={100}
              className="rounded-md"
            />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute -top-2 -right-2 bg-white shadow-lg rounded-full w-6 h-6 flex items-center justify-center text-base"
            >
              <XMarkIcon className="w-[18px] h-[18px]" />
            </button>
          </div>
        ))}
      </div>

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
}
