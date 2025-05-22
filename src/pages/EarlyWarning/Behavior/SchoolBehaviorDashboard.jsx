import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const SchoolBehaviorDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [studentData, setStudentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("students");

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
            .filter((children) => children[children.length - 1].education === "primary school");

          if (filteredStudents.length > 0) {
            setStudentData(response.data);
          } else {
            setStudentData([]);
          }
        } else {
          const collegeStudents = (userData.children || []).filter(
            (child) => child.education === "primary school"
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

  // Prepare behavior data for charts
  const getBehaviorData = () => {
    if (user.professionLogin !== "teacher") {
      const behaviorCounts = studentData.reduce((acc, student) => {
        acc[student.behavior] = (acc[student.behavior] || 0) + 1;
        return acc;
      }, {});
      return Object.entries(behaviorCounts).map(([name, value]) => ({ name, value }));
    }

    // For teachers, aggregate behavior data from all students
    const behaviorCounts = studentData.reduce((acc, student) => {
      const lastChild = student.children[student.children.length - 1];
      if (lastChild && lastChild.behavior) {
        acc[lastChild.behavior] = (acc[lastChild.behavior] || 0) + 1;
      }
      return acc;
    }, {});

    return Object.entries(behaviorCounts).map(([name, value]) => ({ name, value }));
  };

  const behaviorData = getBehaviorData();

  // Prepare attendance vs GPA data
  const getPerformanceData = () => {
    if (user.professionLogin !== "teacher") {
      return studentData.map(student => ({
        name: student.course || "Student",
        attendance: parseInt(student.attendance) || 0,
        gpa: parseFloat(student.gpa) || 0
      }));
    }

    return studentData.map(student => {
      const lastChild = student.children[student.children.length - 1];
      return {
        name: student.name || "Student",
        attendance: parseInt(lastChild?.attendance) || 0,
        gpa: parseFloat(lastChild?.gpa) || 0
      };
    });
  };

  const performanceData = getPerformanceData();

  // Behavior color mapping
  const behaviorColors = {
    'Excellent': '#10B981',
    'Good': '#3B82F6',
    'Average': '#F59E0B',
    'Bad': '#EF4444'
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
              primary school Student Dashboard
            </h1>
            <p className="text-lg text-orange-700 max-w-2xl mx-auto">
              Comprehensive view of student behavior and performance
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex mb-8 border-b border-orange-200">
            <button
              className={`px-6 py-3 font-medium text-sm rounded-t-lg mr-2 ${activeTab === 'students' ? 'bg-white text-orange-600 border-t border-l border-r border-orange-200' : 'text-orange-500 hover:text-orange-700'}`}
              onClick={() => setActiveTab('students')}
            >
              Student List
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm rounded-t-lg ${activeTab === 'analytics' ? 'bg-white text-orange-600 border-t border-l border-r border-orange-200' : 'text-orange-500 hover:text-orange-700'}`}
              onClick={() => setActiveTab('analytics')}
            >
              Behavior Analytics
            </button>
          </div>

          {activeTab === 'students' ? (
            <>
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
                            Student
                          </th>
                          <th className="px-8 py-5 text-left text-sm font-semibold uppercase tracking-wider">
                            Behavior
                          </th>
                          <th className="px-8 py-5 text-left text-sm font-semibold uppercase tracking-wider">
                            GPA
                          </th>
                          <th className="px-8 py-5 text-left text-sm font-semibold uppercase tracking-wider rounded-tr-2xl">
                            Attendance
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-orange-100/30">
                        {studentData.map((item, index) => {
                          const lastChild = item.children[item.children.length - 1];
                          return (
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
                                  <div className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                                    <img src={item.image} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-orange-400" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-orange-900 group-hover:text-orange-600">
                                      {item.name || "Unknown Student"}
                                    </div>
                                    <div className="text-xs text-orange-500">
                                      {item.currentCourse || "No course specified"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-8 py-5 whitespace-nowrap">
                                <span 
                                  className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
                                  style={{ 
                                    backgroundColor: `${behaviorColors[lastChild?.behavior]}20`,
                                    color: behaviorColors[lastChild?.behavior],
                                    borderColor: behaviorColors[lastChild?.behavior]
                                  }}
                                >
                                  {lastChild?.behavior || "N/A"}
                                </span>
                              </td>
                              <td className="px-8 py-5 whitespace-nowrap">
                                <div className="text-sm font-medium text-orange-900">
                                  {lastChild?.gpa?.toFixed(2) || "—"}
                                </div>
                              </td>
                              <td className="px-8 py-5 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-24 h-2 bg-orange-100 rounded-full mr-3 overflow-hidden">
                                    <div 
                                      className={`h-full rounded-full ${
                                        parseInt(lastChild?.attendance) > 75 ? 
                                          'bg-green-400' : 
                                          parseInt(lastChild?.attendance) > 50 ? 
                                          'bg-yellow-400' : 
                                          'bg-red-400'
                                      }`}
                                      style={{ width: `${lastChild?.attendance || 0}%` }}
                                    ></div>
                                  </div>
                                  <span className={`text-sm font-semibold ${
                                    parseInt(lastChild?.attendance) > 75 ? 
                                      'text-green-600' : 
                                      parseInt(lastChild?.attendance) > 50 ? 
                                      'text-yellow-600' : 
                                      'text-red-600'
                                  }`}>
                                    {lastChild?.attendance || 0}%
                                  </span>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
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
                    There are currently no college students to display.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-8">
              {/* Behavior Distribution */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-100/50">
                <h3 className="text-xl font-semibold text-orange-800 mb-4">Behavior Distribution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={behaviorData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {behaviorData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={behaviorColors[entry.name] || COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-100/50">
                <h3 className="text-xl font-semibold text-orange-800 mb-4">Attendance vs GPA</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={performanceData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="attendance" name="Attendance %" fill="#8884d8" />
                      <Bar yAxisId="right" dataKey="gpa" name="GPA" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Student View
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-3">
            My primary school Performance
          </h1>
          <p className="text-lg text-orange-700 max-w-2xl mx-auto">
            Track your attendance and behavior metrics
          </p>
        </div>

        {studentData.length > 0 ? (
          <div className="space-y-8">
            {/* Behavior Summary */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-orange-100/50">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Your Behavior</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span 
                    className="px-4 py-2 text-lg font-semibold rounded-full mr-4"
                    style={{ 
                      backgroundColor: `${behaviorColors[studentData[0]?.behavior]}20`,
                      color: behaviorColors[studentData[0]?.behavior],
                      borderColor: behaviorColors[studentData[0]?.behavior]
                    }}
                  >
                    {studentData[0]?.behavior || "Not rated"}
                  </span>
                  <p className="text-orange-600">
                    {studentData[0]?.behavior === "Excellent" ? "Outstanding performance!" : 
                     studentData[0]?.behavior === "Good" ? "Good work, keep it up!" :
                     studentData[0]?.behavior === "Average" ? "Room for improvement" :
                     "Needs immediate improvement"}
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Attendance Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-orange-100/50">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">Attendance</h3>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold text-orange-600">
                      {studentData[0]?.attendance || 0}%
                    </p>
                    <p className="text-sm text-orange-500 mt-1">
                      Current attendance rate
                    </p>
                  </div>
                  <div className="w-24 h-2 bg-orange-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        parseInt(studentData[0]?.attendance) > 75 ? 
                          'bg-green-400' : 
                          parseInt(studentData[0]?.attendance) > 50 ? 
                          'bg-yellow-400' : 
                          'bg-red-400'
                      }`} 
                      style={{ width: `${studentData[0]?.attendance || 0}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* GPA Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-orange-100/50">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">GPA Score</h3>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold text-orange-600">
                      {studentData[0]?.gpa?.toFixed(2) || "0.00"}
                    </p>
                    <p className="text-sm text-orange-500 mt-1">
                      Current GPA
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      parseFloat(studentData[0]?.gpa) > 3.5 ? 'bg-green-100 text-green-800' :
                      parseFloat(studentData[0]?.gpa) > 2.5 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {parseFloat(studentData[0]?.gpa) > 3.5 ? 'Excellent' :
                       parseFloat(studentData[0]?.gpa) > 2.5 ? 'Good' : 'Needs Improvement'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subjects Performance */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-orange-100/50">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Subjects Performance</h3>
              <div className="space-y-4">
                {studentData[0]?.subjects?.map((subject, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="w-1/4">
                      <p className="font-medium text-orange-800">{subject.subject}</p>
                    </div>
                    <div className="w-3/4">
                      <div className="flex items-center">
                        <div className="w-full bg-orange-100 rounded-full h-2.5 mr-3">
                          <div 
                            className={`h-2.5 rounded-full ${
                              subject.marks > 80 ? 'bg-green-400' :
                              subject.marks > 60 ? 'bg-yellow-400' :
                              'bg-red-400'
                            }`}
                            style={{ width: `${subject.marks}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-orange-600">{subject.marks}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-12 text-center border border-orange-100/50">
            <svg className="mx-auto h-16 w-16 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-orange-900">No performance data found</h3>
            <p className="mt-2 text-sm text-orange-600">
              Your college performance data will appear here once available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolBehaviorDashboard;