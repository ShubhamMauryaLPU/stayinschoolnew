import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EnrollPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/enroll-success');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-100 to-orange-300 p-6">
      <div className="w-full max-w-lg bg-white p-10 md:p-12 rounded-3xl shadow-2xl">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-8">
          Enroll in Course {courseId}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your phone number"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-full text-lg shadow-md transition-all duration-300"
          >
            Confirm Enrollment
          </button>
        </form>

      </div>
    </div>
  );
};

export default EnrollPage;
