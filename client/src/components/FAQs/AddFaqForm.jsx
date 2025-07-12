import React, { useState } from 'react';
import axios from 'axios';
import { FaQuestionCircle, FaPaperPlane } from 'react-icons/fa';

const AddFaqForm = () => {
  const [faq, setFaq] = useState({ ques: '', ans: '' });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
    setSuccessMsg('');
    setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!faq.ques.trim() || !faq.ans.trim()) {
      setErrorMsg('Both question and answer are required.');
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/add-faq`, faq);
      setSuccessMsg('FAQ added successfully!');
      setFaq({ ques: '', ans: '' });
    } catch (err) {
      setErrorMsg('Failed to add FAQ. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg max-w-2xl mx-auto p-6 md:p-8 space-y-6 animate-fade-in"
    >
      <h2 className="text-2xl font-bold text-orange-700 flex items-center gap-2">
        <FaQuestionCircle />
        Add a New FAQ
      </h2>

      {/* Question Field */}
      <div className="relative">
        <label
          htmlFor="ques"
          className="absolute top-0 left-3 text-sm text-orange-600 bg-white px-1 transform -translate-y-1/2"
        >
          Question
        </label>
        <textarea
          name="ques"
          id="ques"
          rows="2"
          value={faq.ques}
          onChange={handleChange}
          placeholder="Enter your question"
          className="w-full border border-gray-300 rounded-lg px-4 pt-6 pb-3 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
      </div>

      {/* Answer Field */}
      <div className="relative">
        <label
          htmlFor="ans"
          className="absolute top-0 left-3 text-sm text-orange-600 bg-white px-1 transform -translate-y-1/2"
        >
          Answer
        </label>
        <textarea
          name="ans"
          id="ans"
          rows="3"
          value={faq.ans}
          onChange={handleChange}
          placeholder="Enter the answer"
          className="w-full border border-gray-300 rounded-lg px-4 pt-6 pb-3 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
      </div>

      {/* Success/Error */}
      {successMsg && <p className="text-green-600 text-sm">{successMsg}</p>}
      {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-lg text-white font-semibold transition ${
          loading
            ? 'bg-orange-400 cursor-not-allowed'
            : 'bg-orange-600 hover:bg-orange-700'
        }`}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Saving...
          </div>
        ) : (
          <>
            <FaPaperPlane />
            Submit FAQ
          </>
        )}
      </button>
    </form>
  );
};

export default AddFaqForm;
