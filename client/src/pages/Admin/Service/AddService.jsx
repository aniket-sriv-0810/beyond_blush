import React, { useState } from "react";
import axios from "axios";
import ImagePreview from "../../../components/ImagePreview/ImagePreview";

const AddService = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/add-service`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage("✅ Service added successfully!");
      setTitle("");
      setImage(null);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add service. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-lg mx-auto p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 border border-orange-300"
      >
        <h2 className="text-3xl font-bold text-center text-orange-600">
          Add New Service
        </h2>

        <div>
          <label className="block text-sm font-medium text-orange-700 mb-1">
            Service Title
          </label>
          <input
            type="text"
            placeholder="Enter service title"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-orange-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-orange-700 mb-1">
            Upload Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
            className="w-full"
          />
          <ImagePreview image={image} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-md font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all flex items-center justify-center ${
            loading ? "cursor-not-allowed opacity-80" : ""
          }`}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
          )}
          {loading ? "Uploading..." : "Add Service"}
        </button>

        {message && (
          <div
            className={`text-center text-sm ${
              message.startsWith("✅")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddService;
