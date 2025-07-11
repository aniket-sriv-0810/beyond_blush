import React, { useState } from 'react';
import axios from 'axios';

const AddTermsForm = () => {
  const [terms, setTerms] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!terms.trim()) {
      setError("Terms field cannot be empty.");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/add-terms-and-cond`, {terms} , {withCredentials:true}
    );

      if (response.data?.success) {
        setMessage("Terms added successfully.");
        setTerms('');
      } else {
        setError("Something went wrong.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error adding terms.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded p-6 mt-8">
      <h2 className="text-xl font-bold mb-4 text-[#582f21]">Add Terms & Conditions</h2>

      {message && <p className="text-green-600 mb-2">{message}</p>}
      {error && <p className="text-red-600 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          name="terms"
          rows="6"
          className="w-full border rounded p-3 resize-none text-sm focus:outline-pink-400"
          placeholder="Enter terms and conditions here..."
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-[#f3d2b3] hover:bg-[#f3c2a0] text-[#582f21] font-semibold py-2 px-4 rounded transition"
        >
          Submit Terms
        </button>
      </form>
    </div>
  );
};

export default AddTermsForm;
