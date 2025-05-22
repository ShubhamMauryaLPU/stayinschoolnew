import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TeacherStudentPage = () => {
  const { college } = useParams();
  const navigate = useNavigate();

  let handleTeacherOnClick = () => {
    navigate(`/admin/${college}/teacher`);
  };

  let handleStudentOnClick = () => {
    navigate(`/admin/${college}/student`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 flex flex-col justify-center items-center p-6">
      <div className="w-full text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800">{college}</h1>
        <p className="text-xl text-gray-600 mt-2">Choose the type of user to manage</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Teacher Section */}
        <div 
          className="cursor-pointer flex flex-col items-center justify-center bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-orange-100 hover:text-orange-700"
          onClick={handleTeacherOnClick}
        >
          <i className="fa-solid fa-person-chalkboard text-6xl text-orange-600 mb-4 transform transition-all duration-300 hover:scale-125"></i>
          <p className="font-semibold text-2xl text-gray-800">Teacher</p>
        </div>

        {/* Student Section */}
        <div 
          className="cursor-pointer flex flex-col items-center justify-center bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-orange-100 hover:text-orange-700"
          onClick={handleStudentOnClick}
        >
          <i className="fa-solid fa-person text-6xl text-blue-600 mb-4 transform transition-all duration-300 hover:scale-125"></i>
          <p className="font-semibold text-2xl text-gray-800">Student</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherStudentPage;
