import React from 'react';
import { Link } from 'react-router-dom';

const EnrollmentSuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-orange-100 to-orange-300 p-6">
      <div className="text-center bg-white p-10 md:p-16 rounded-3xl shadow-2xl max-w-2xl w-full">
        
        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
          🎉 Enrollment Successful!
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Thank you for enrolling! We have sent you an email with all the course details.
          We can't wait to see you excel!
        </p>

        <Link to="/">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300">
            Back to Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default EnrollmentSuccessPage;
