import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CourseDetailsPage = () => {
  const { courseId } = useParams();
 
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10 md:p-16">
        
        {/* Course Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
            Course Title (Course ID: {courseId})
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Dive deep into this course and master skills that can transform your career!
          </p>
        </div>

        {/* Course Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Duration</h3>
              <p className="text-gray-700 text-lg">5 Hours 30 Minutes</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Level</h3>
              <p className="text-gray-700 text-lg">Intermediate</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Students Enrolled</h3>
              <p className="text-gray-700 text-lg">900+ Students</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Rating</h3>
              <p className="text-gray-700 text-lg">4.8 Stars</p>
            </div>
          </div>
        </div>

        {/* Course Description */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">Course Overview</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            This course offers an in-depth understanding of essential concepts. Through practical lessons and real-world projects,
            you'll gain hands-on experience, enhance your skills, and position yourself for success in today's competitive environment.
          </p>
        </div>

        {/* Enroll Now Button */}
        <div className="text-center">
          <Link to={`/enroll/${courseId}`}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-full text-xl shadow-lg transition-all duration-300">
              Enroll Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailsPage;
