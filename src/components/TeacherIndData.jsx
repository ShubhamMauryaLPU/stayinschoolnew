import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const TeacherIndData = () => {
  let { id } = useParams();
  let [teacher, setTeacher] = useState({
    fullName: "",
    college: "",
    subject: "",
    mobileNumber: "",
    email: "",
    image: "",
    id: "",
    professionLogin: "teacher",
  });
  useEffect(() => {
    let findTeacher = async () => {
      let foundTeacher = await axios.get(
        `https://newserversis.onrender.com/api/teacher/${id}`
      );
      // console.log(foundTeacher)
      setTeacher(foundTeacher.data);
    };
    findTeacher();
  }, [id]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-800 mb-2">
            Faculty Profile
          </h1>
          <p className="text-lg text-orange-700">
            Meet our distinguished educator
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - Image */}
          <div className="md:w-1/3 bg-gradient-to-b from-orange-500 to-orange-700 p-8 flex flex-col items-center justify-center">
            <div className="relative">
              <img
                src={teacher.image}
                alt={teacher.fullName}
                className="w-48 h-48 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                ID: {teacher.id}
              </div>
            </div>
            <h2 className="mt-8 text-2xl font-bold text-white text-center">
              {teacher.fullName}
            </h2>
            <p className="text-orange-200 mt-1">{teacher.subject}</p>
          </div>

          {/* Right Side - Details */}
          <div className="md:w-2/3 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* College */}
              <div className="bg-orange-50 rounded-xl p-5 shadow-sm">
                <h3 className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                  College
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {teacher.college}
                </p>
              </div>

              {/* Subject */}
              <div className="bg-orange-50 rounded-xl p-5 shadow-sm">
                <h3 className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                  Department
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {teacher.subject}
                </p>
              </div>

              {/* Contact */}
              <div className="bg-orange-50 rounded-xl p-5 shadow-sm">
                <h3 className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                  Contact
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {teacher.mobileNumber}
                </p>
                <p className="mt-1 text-sm text-orange-600 break-all">
                  {teacher.email}
                </p>
              </div>

              {/* Professional Info */}
              <div className="bg-orange-50 rounded-xl p-5 shadow-sm">
                <h3 className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                  Professional
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900 capitalize">
                  {teacher.professionLogin}
                </p>
                <p className="mt-1 text-sm text-orange-600">
                  Faculty ID: {teacher.id}
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl p-6 shadow-inner">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">
                About {teacher.fullName}
              </h3>
              <p className="text-gray-700">
                Professor {teacher.fullName} specializes in {teacher.subject} at{" "}
                {teacher.college}. With extensive experience in the field, they
                bring practical knowledge and academic excellence to their
                students.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg shadow-md transition-colors duration-200">
                Schedule Meeting
              </button>
              <button className="px-6 py-3 border border-orange-600 text-orange-600 hover:bg-orange-50 font-medium rounded-lg shadow-sm transition-colors duration-200">
                View Courses
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-orange-700">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherIndData;
