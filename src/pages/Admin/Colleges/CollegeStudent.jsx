import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const CollegeStudent = () => {
  const { college } = useParams();
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    let filteredStudent = students.filter(
      (student) => student.id == searchTerm
    );
    // console.log(filteredStudent)
    setStudents(filteredStudent);
  };

  const handleIndividualStudent = (id) => {
    navigate(`/indistudentdata/${id}`);
  };
  useEffect(() => {
    const filterStudent = async () => {
      let filStudent = await axios.get(
        `https://newserversis.onrender.com/api/student/school/${college}`
      );
      // console.log(filStudent.data);
      setStudents(filStudent.data);
    };
    filterStudent();
  }, [college, searchTerm]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300">
      {/* Header Section */}
      <div className="py-6 px-4 bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {college} Students
          </h1>
          <p className="text-orange-100">
            Browse through our talented student community
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="py-6 px-4 bg-orange-200 shadow-md">
        <div className="max-w-7xl mx-auto">
          <form
            onSubmit={handleStudentSubmit}
            className="flex flex-col md:flex-row gap-4 items-center"
          >
            <div className="relative w-full md:w-1/2">
              <input
                type="number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search students by ID..."
                className="w-full py-3 px-6 pr-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-white rounded-full border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <Button
              name={"Search"}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full shadow-md transition-colors duration-200"
            />
          </form>
        </div>
      </div>

      {/* Student Cards Grid */}
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {students.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-block p-6 bg-orange-100 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-orange-800">
                No students found
              </h3>
              <p className="text-orange-600">
                Try adjusting your search criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map((student, idx) => (
                <div
                  key={student.id}
                  onClick={() => handleIndividualStudent(student.id)}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl  duration-300 cursor-pointer transform hover:-translate-y-1 transition-transform"
                >
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6">
                    <div className="flex items-center">
                      <div className="bg-white rounded-full p-1 mr-4">
                        <div className="w-16 h-16 rounded-full bg-orange-100 overflow-hidden flex items-center justify-center">
                          <img
                            src={student.image}
                            alt={student.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {student.name}
                        </h3>
                        <p className="text-orange-100">ID: {student.id}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                          College
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          {college}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                          Stream
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          {student.currentCourse || "N/A"}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        View Profile →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="py-4 bg-orange-200 text-center text-orange-700 text-sm">
        <p>
          {students.length} students found in {college}
        </p>
      </div>
    </div>
  );
};

export default CollegeStudent;
