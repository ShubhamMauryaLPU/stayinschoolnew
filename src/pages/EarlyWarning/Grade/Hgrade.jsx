import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  BookOpenIcon,
  UserIcon,
  AcademicCapIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  FaceSmileIcon,
  FaceFrownIcon,
  ArrowsUpDownIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const Hgrade = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [studentData, setStudentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });

  const handleStudentClick = (id) => {
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
            .map((item) => ({
              ...item,
              children: item.children.filter(child => child.education === "higher secondary school")
            }))
            .filter(item => item.children.length > 0);

          setStudentData(filteredStudents);
        } else {
          const collegeStudents = (userData.children || []).filter(
            (child) => child.education === "higher secondary school"
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

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedStudents = [...studentData].sort((a, b) => {
    if (sortConfig.key === "gpa") {
      const aGpa = a.children?.[0]?.gpa || 0;
      const bGpa = b.children?.[0]?.gpa || 0;
      return sortConfig.direction === "asc" ? aGpa - bGpa : bGpa - aGpa;
    }
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const filteredStudents = sortedStudents.filter(student => {
    const matchesSearch = 
      student.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      student.section?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id?.toString().includes(searchTerm);
    
    let matchesTab = true;
    if (activeTab !== "all" && student.children?.[0]?.gpa) {
      const gpa = parseFloat(student.children[0].gpa);
      if (activeTab === "excellent") matchesTab = gpa >= 8;
      if (activeTab === "good") matchesTab = gpa >= 6 && gpa < 8;
      if (activeTab === "needsImprovement") matchesTab = gpa < 6;
    }
    
    return matchesSearch && matchesTab;
  });

  const getGpaColor = (gpa) => {
    const numGpa = parseFloat(gpa) || 0;
    if (numGpa >= 8) return "text-emerald-600 bg-emerald-50 border-emerald-200";
    if (numGpa >= 6) return "text-amber-600 bg-amber-600 border-amber-200";
    return "text-rose-600 bg-rose-50 border-rose-200";
  };

  const getGpaIcon = (gpa) => {
    const numGpa = parseFloat(gpa) || 0;
    if (numGpa >= 8) return <FaceSmileIcon className="w-5 h-5 text-emerald-500" />;
    if (numGpa >= 6) return <FaceSmileIcon className="w-5 h-5 text-amber-500" />;
    return <FaceFrownIcon className="w-5 h-5 text-rose-500" />;
  };

  const getGpaCategory = (gpa) => {
    const numGpa = parseFloat(gpa) || 0;
    if (numGpa >= 8) return "Excellent";
    if (numGpa >= 6) return "Good";
    return "Needs Improvement";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-lg">
            <ArrowPathIcon className="w-6 h-6 text-orange-500 animate-spin" />
          </div>
          <h2 className="mt-6 text-xl font-semibold text-gray-700">Loading higher secondary school Data</h2>
          <p className="mt-2 text-gray-500">Please wait while we fetch the latest records</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
        <div className="max-w-md p-6 bg-white rounded-xl shadow-md text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
            <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Data Loading Error</h3>
          <p className="text-sm text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Retry Loading
          </button>
        </div>
      </div>
    );
  }

  if (user?.professionLogin === "teacher") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white shadow-md mb-4">
              <AcademicCapIcon className="w-6 h-6 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">higher secondary school Performance Dashboard</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Track and analyze student GPA performance for higher secondary school candidates
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search students by name, ID, or course..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${activeTab === "all" ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  All Students
                </button>
                <button
                  onClick={() => setActiveTab("excellent")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${activeTab === "excellent" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Excellent (8+ GPA)
                </button>
                <button
                  onClick={() => setActiveTab("good")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${activeTab === "good" ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Good (6-8 GPA)
                </button>
                <button
                  onClick={() => setActiveTab("needsImprovement")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${activeTab === "needsImprovement" ? "bg-rose-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Needs Improvement
                </button>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900">{studentData.length}</p>
                </div>
                <div className="p-3 rounded-lg bg-orange-50">
                  <UserIcon className="w-5 h-5 text-orange-500" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-emerald-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Excellent</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {studentData.filter(s => s.children?.[0]?.gpa >= 8).length}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-emerald-50">
                  <FaceSmileIcon className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-amber-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Good</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {studentData.filter(s => s.children?.[0]?.gpa >= 6 && s.children?.[0]?.gpa < 8).length}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-amber-50">
                  <FaceSmileIcon className="w-5 h-5 text-amber-500" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-rose-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Needs Help</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {studentData.filter(s => s.children?.[0]?.gpa < 6).length}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-rose-50">
                  <FaceFrownIcon className="w-5 h-5 text-rose-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Students Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => requestSort("name")}
                    >
                      <div className="flex items-center">
                        <UserIcon className="mr-2 w-4 h-4" />
                        Student
                        <ArrowsUpDownIcon className={`ml-1 w-4 h-4 ${sortConfig.key === "name" ? "text-orange-500" : "text-gray-400"}`} />
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center">
                        <BookOpenIcon className="mr-2 w-4 h-4" />
                        Course
                      </div>
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => requestSort("gpa")}
                    >
                      <div className="flex items-center">
                        <AcademicCapIcon className="mr-2 w-4 h-4" />
                        GPA
                        <ArrowsUpDownIcon className={`ml-1 w-4 h-4 ${sortConfig.key === "gpa" ? "text-orange-500" : "text-gray-400"}`} />
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student, index) => (
                      <tr 
                        key={student.id || index} 
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 overflow-hidden mr-3 flex items-center justify-center">
                              {student.image ? (
                                <img src={student.image} alt="" className="h-full w-full object-cover" />
                              ) : (
                                <UserIcon className="w-4 h-4 text-gray-500" />
                              )}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {student.name || "Unknown"}
                              </div>
                              <div className="text-xs text-gray-500">
                                ID: {student.id ? String(student.id).slice(0, 8) : "N/A"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{student.section || "—"}</div>
                          <div className="text-xs text-gray-500">College</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.children?.[0]?.gpa ? (
                            <div className="flex items-center">
                              <div className="mr-2">
                                {getGpaIcon(student.children[0].gpa)}
                              </div>
                              <span className={`text-sm font-semibold ${getGpaColor(student.children[0].gpa)} px-3 py-1 rounded-full border`}>
                                {student.children[0].gpa}
                              </span>
                            </div>
                          ) : (
                            <span className="text-xs text-gray-500">N/A</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getGpaColor(student.children?.[0]?.gpa || "0")}`}>
                            {student.children?.[0]?.gpa ? getGpaCategory(student.children[0].gpa) : "No Data"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => student.id && handleStudentClick(student.id)}
                            className="text-orange-600 hover:text-orange-900 focus:outline-none"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center justify-center py-8">
                          <FaceFrownIcon className="w-10 h-10 text-gray-400 mb-2" />
                          <h3 className="text-lg font-medium text-gray-900">No students found</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {searchTerm ? "Try adjusting your search criteria" : "No graduation students available"}
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            {filteredStudents.length > 0 && (
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  Showing <span className="font-medium">{Math.min(filteredStudents.length, 10)}</span> of <span className="font-medium">{filteredStudents.length}</span> students
                </p>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-xs font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-xs font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Student View
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Student Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-white shadow-md mb-4">
            <AcademicCapIcon className="w-6 h-6 text-orange-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My higher secondary school Progress</h1>
          <p className="text-lg text-gray-600">
            Track your academic performance as you approach higher secondary school
          </p>
        </div>

        {/* GPA Summary Card */}
        {studentData.length > 0 ? (
          <div className="space-y-6">
            {studentData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Class {item.course||item.class || "College Program"}</h2>
                      <p className="text-sm text-gray-500 mt-1">{item.collegeName ||item.school|| "College Education"}</p>
                    </div>
                    <div className="flex items-center">
                      {getGpaIcon(item.gpa)}
                      <span className={`ml-2 text-lg font-bold ${getGpaColor(item.gpa).split(' ')[0]}`}>
                        {item.gpa || 0} GPA
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Academic Progress</span>
                      <span className="text-sm font-medium text-gray-700">
                        {getGpaCategory(item.gpa || "0")}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${getGpaColor(item.gpa).replace('text-', 'bg-').split(' ')[0]}`} 
                        style={{ width: `${(item.gpa || 0) * 10}%` }}
                      
                      ></div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-gray-500">
                      <span>0</span>
                      <span>5</span>
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Performance Trends */}
            {/* <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">GPA Trend</h2>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-sm bg-orange-50 text-orange-600 rounded-md">Semester</button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-md">Year</button>
                </div>
              </div>
              
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <ChartBarIcon className="w-12 h-12 mx-auto text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">Performance data visualization coming soon</p>
                </div>
              </div>
            </div> */}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="mx-auto h-16 w-16 text-gray-400 mb-4">
              <FaceFrownIcon className="w-full h-full" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Graduation Data Available</h3>
            <p className="text-sm text-gray-600">
              Your graduation records will appear here once your college program data is available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hgrade;