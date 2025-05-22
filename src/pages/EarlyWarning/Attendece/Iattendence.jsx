import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Iattendence = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [studentData, setStudentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleGradudationOnClick = (id) => {
    navigate(`/indistudentdata/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const userData = JSON.parse(sessionStorage.getItem("user")) || {};
        setUser(userData);

        if (userData.professionLogin === "teacher") {
          const response = await axios.get(
            `https://newserversis.onrender.com/api/student/school/${userData.college}`
          );

          const filteredStudents = response.data
            .map((item) => item.children)
            .filter((children) => children[children.length - 1].education === "intermediate");

          if (filteredStudents.length > 0) {
            setStudentData(response.data);
          } else {
            setStudentData([]);
          }
        } else {
          const collegeStudents = (userData.children || []).filter(
            (child) => child.education === "intermediate"
          );
          setStudentData(collegeStudents);
        }
      } catch (err) {
        console.error("Error fetching student data:", err);
        setError("Failed to load student data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200">
        <div className="flex flex-col items-center">
          <div className="animate-bounce">
            <svg className="w-16 h-16 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <p className="mt-4 text-lg font-medium text-orange-700">Loading student data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-md text-center">
          <svg className="mx-auto h-12 w-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-orange-800">Error Loading Data</h3>
          <p className="mt-2 text-sm text-orange-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (user.professionLogin === "teacher") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-3">
              Intermediate Students
            </h1>
            <p className="text-lg text-orange-700 max-w-2xl mx-auto">
              View and manage attendance records for all college students
            </p>
          </div>
          
          {studentData.length > 0 ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-orange-100/50">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                    <tr>
                      <th className="px-8 py-5 text-left text-sm font-semibold uppercase tracking-wider rounded-tl-2xl">
                        #
                      </th>
                      <th className="px-8 py-5 text-left text-sm font-semibold uppercase tracking-wider">
                        Course
                      </th>
                      <th className="px-8 py-5 text-left text-sm font-semibold uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-8 py-5 text-left text-sm font-semibold uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-8 py-5 text-left text-sm font-semibold uppercase tracking-wider rounded-tr-2xl">
                        Attendance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100/30">
                    {studentData.map((item, index) => (
                      <tr 
                        key={item.id || index}
                        className="hover:bg-orange-50/50 transition-all duration-200 cursor-pointer group"
                        onClick={() => item.id && handleGradudationOnClick(item.id)}
                      >
                        <td className="px-8 py-5 whitespace-nowrap">
                          <div className="text-sm font-medium text-orange-900 group-hover:text-orange-600">
                            {index + 1}
                          </div>
                        </td>
                        <td className="px-8 py-5 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                              <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-orange-900 group-hover:text-orange-600">
                                {item.section || "—"}
                              </div>
                              <div className="text-xs text-orange-500">
                                {item.section ? "Course" : "Not specified"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-5 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                              {/* <span className="text-orange-600 font-medium">
                                {item.name?.charAt(0)?.toUpperCase() || "S"}
                              </span> */}
                              <img src={item.image} alt="" className="w-16 h-16 rounded-full object-cover border-2 border-orange-400" />

                            </div>
                            <div>
                              <div className="text-sm font-medium text-orange-900 group-hover:text-orange-600">
                                {item.name || "Unknown Student"}
                              </div>
                              <div className="text-xs text-orange-500">
                                {item.id ? `ID: ${String(item.id).slice(0, 8)}` : "ID: N/A"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-5 whitespace-nowrap">
                          <div className="text-sm text-orange-900">
                            {item.mobile || "—"}
                          </div>
                          <div className="text-xs text-orange-500">
                            {item.email || "Email not provided"}
                          </div>
                        </td>
                        <td className="px-8 py-5 whitespace-nowrap">
                          {item.children && item.children.length > 0 ? (
                            <div className="flex items-center">
                              <div className="w-24 h-2 bg-orange-100 rounded-full mr-3 overflow-hidden">
                                <div 
                                  className={`h-full rounded-full ${
                                    parseInt(item.children[item.children.length - 1].attendance) > 75 ? 
                                      'bg-green-400' : 
                                      parseInt(item.children[item.children.length - 1].attendance) > 50 ? 
                                      'bg-yellow-400' : 
                                      'bg-red-400'
                                  }`}
                                  style={{ width: `${item.children[item.children.length - 1].attendance}%` }}
                                ></div>
                              </div>
                              <span className={`text-sm font-semibold ${
                                parseInt(item.children[item.children.length - 1].attendance) > 75 ? 
                                  'text-green-600' : 
                                  parseInt(item.children[item.children.length - 1].attendance) > 50 ? 
                                  'text-yellow-600' : 
                                  'text-red-600'
                              }`}>
                                {item.children[item.children.length - 1].attendance}%
                              </span>
                            </div>
                          ) : (
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-600">
                              N/A
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-8 py-4 bg-orange-50/50 border-t border-orange-100/30 rounded-b-2xl">
                <p className="text-xs text-orange-600 text-center">
                  Showing {studentData.length} students • Click any row to view details
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-12 text-center border border-orange-100/50">
              <svg className="mx-auto h-16 w-16 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-orange-900">No students found</h3>
              <p className="mt-2 text-sm text-orange-600">
                There are currently no graduation students to display.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-3">
            My Intermediate Attendance
          </h1>
          <p className="text-lg text-orange-700 max-w-2xl mx-auto">
            Track your college attendance performance
          </p>
        </div>

        {studentData.length > 0 ? (
          <div className="space-y-6">
            {studentData.map((item, index) => (
              <div 
                key={item.id || index}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-orange-100/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-orange-900">{item.course || item.class}</h3>
                      <p className="text-sm text-orange-600 mt-1">{item.education || "College"}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                        parseInt(item.attendance) > 75 ? 
                          'bg-green-100 text-green-800' : 
                          parseInt(item.attendance) > 50 ? 
                          'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'
                      }`}>
                        {item.attendance || 0}%
                      </span>
                      <p className="text-xs text-orange-500 mt-1">Attendance</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-orange-700">Progress</span>
                      <span className="text-xs font-medium text-orange-500">
                        {item.attendance || 0}% achieved
                      </span>
                    </div>
                    <div className="w-full bg-orange-100 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          parseInt(item.attendance) > 75 ? 
                            'bg-green-400' : 
                            parseInt(item.attendance) > 50 ? 
                            'bg-yellow-400' : 
                            'bg-red-400'
                        }`} 
                        style={{ width: `${item.attendance || 0}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-12 text-center border border-orange-100/50">
            <svg className="mx-auto h-16 w-16 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-orange-900">No attendance records found</h3>
            <p className="mt-2 text-sm text-orange-600">
              Your graduation attendance data will appear here once available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Iattendence;