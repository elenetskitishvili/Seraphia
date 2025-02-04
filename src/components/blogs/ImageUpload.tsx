"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageUploadProps {
  existingImageUrl?: string;
  onImageChange: (file: File) => void;
}

const ImageUpload = ({ existingImageUrl, onImageChange }: ImageUploadProps) => {
  const [imagePreview, setImagePreview] = useState(existingImageUrl || null);

  interface HandleImageChangeEvent
    extends React.ChangeEvent<HTMLInputElement> {}

  const handleImageChange = (event: HandleImageChangeEvent) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        onImageChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {imagePreview && (
        <Image
          width={100}
          height={100}
          src={imagePreview}
          alt="Preview"
          className="rounded-md"
        />
      )}
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImageUpload;
