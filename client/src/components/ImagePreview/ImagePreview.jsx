import React from "react";

const ImagePreview = ({ image }) => {
  if (!image) return null;

  const url = typeof image === "string" ? image : URL.createObjectURL(image);

  return (
    <div className="mt-2 w-full">
      <p className="text-sm text-gray-500 mb-1">Image Preview:</p>
      <img
        src={url}
        alt="preview"
        className="rounded-lg border w-full max-h-56 object-contain shadow-md"
      />
    </div>
  );
};

export default ImagePreview;
