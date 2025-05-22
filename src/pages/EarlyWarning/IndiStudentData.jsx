import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const defaultStudentImage = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const IndiStudentData = () => {
  const { id } = useParams();
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("attendance");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://newserversis.onrender.com/api/student/${id}`);
        setStudentData(response.data);
      } catch (err) {
        setError("Failed to load student data");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, [id]);

  // Prepare all chart data with updated color schemes
  const { attendanceChart, gpaChart, behaviorChart, behaviorSummary } = useMemo(() => {
    if (!studentData?.children) return {};
    
    const children = studentData.children;
    const labels = children.map(item => item.class || item.course || "N/A");

    // Updated Attendance chart data with new color thresholds
    const attendanceChart = {
      labels,
      datasets: [{
        label: "Attendance (%)",
        data: children.map(item => parseFloat(item.attendance) || 0),
        backgroundColor: children.map(item => {
          const attendance = parseFloat(item.attendance) || 0;
          if (attendance < 75) return "#EF4444"; // Red for <75%
          if (attendance <= 85) return "#3B82F6"; // Blue for 75-85%
          return "#10B981"; // Green for >85%
        }),
        borderColor: children.map(item => {
          const attendance = parseFloat(item.attendance) || 0;
          if (attendance < 75) return "#DC2626";
          if (attendance <= 85) return "#2563EB";
          return "#059669";
        }),
        borderWidth: 1
      }]
    };

    // Updated GPA chart data with new color thresholds
    const gpaChart = {
      labels,
      datasets: [{
        label: "GPA Score",
        data: children.map(item => parseFloat(item.gpa) || 0),
        backgroundColor: children.map(item => {
          const gpa = parseFloat(item.gpa) || 0;
          if (gpa < 5) return "#EF4444"; // Red for <5
          if (gpa <= 7) return "#3B82F6"; // Blue for 5-7
          return "#10B981"; // Green for >7
        }),
        borderColor: children.map(item => {
          const gpa = parseFloat(item.gpa) || 0;
          if (gpa < 5) return "#DC2626";
          if (gpa <= 7) return "#2563EB";
          return "#059669";
        }),
        borderWidth: 1
      }]
    };

    // Behavior data (unchanged)
    const behaviorData = children.reduce((acc, item) => {
      const behavior = (item.behavior || "unknown").toLowerCase();
      acc[behavior] = (acc[behavior] || 0) + 1;
      return acc;
    }, {});

    const categories = {
      excellent: { count: behaviorData.excellent || 0, color: "#10B981", description: "Role model behavior" },
      good: { count: behaviorData.good || 0, color: "#84CC16", description: "Meets expectations" },
      average: { count: behaviorData.average || 0, color: "#F59E0B", description: "Occasional issues" },
      poor: { count: behaviorData.poor || behaviorData.bad || 0, color: "#EF4444", description: "Frequent issues" },
      unknown: { count: behaviorData.unknown || 0, color: "#9CA3AF", description: "No data" }
    };

    const behaviorChart = {
      labels: Object.keys(categories).map(key => key.charAt(0).toUpperCase() + key.slice(1)),
      datasets: [{
        data: Object.values(categories).map(c => c.count),
        backgroundColor: Object.values(categories).map(c => c.color),
        borderWidth: 1
      }]
    };

    const behaviorSummary = Object.entries(categories)
      .filter(([_, value]) => value.count > 0)
      .map(([key, value]) => ({
        category: key.charAt(0).toUpperCase() + key.slice(1),
        count: value.count,
        percentage: Math.round((value.count / children.length) * 100),
        color: value.color,
        description: value.description
      }));

    return { attendanceChart, gpaChart, behaviorChart, behaviorSummary };
  }, [studentData]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-lg font-medium text-orange-800">Loading student data...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-md">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold text-red-600 mb-2">Error Loading Data</h2>
        <p className="text-gray-700 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
  
  if (!studentData) return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-md">
        <div className="text-gray-500 text-5xl mb-4">🔍</div>
        <h2 className="text-xl font-bold text-gray-700 mb-2">No Student Found</h2>
        <p className="text-gray-600">We couldn't find any data for this student.</p>
      </div>
    </div>
  );

  // Calculate overall stats for the profile card
  const overallAttendance = studentData.children.length > 0 
    ? (studentData.children.reduce((sum, item) => sum + (parseFloat(item.attendance) || 0), 0) / studentData.children.length).toFixed(1)
    : 0;
    
  const overallGPA = studentData.children.length > 0 
    ? (studentData.children.reduce((sum, item) => sum + (parseFloat(item.gpa) || 0), 0) / studentData.children.length).toFixed(2)
    : 0;

  const primaryBehavior = behaviorSummary?.length > 0
    ? behaviorSummary.reduce((prev, current) => (prev.count > current.count) ? prev : current).category
    : "Unknown";

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Student Profile Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/4 bg-orange-100 flex items-center justify-center p-6">
              <img 
                src={studentData.image || defaultStudentImage} 
                alt={studentData.name}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow"
              />
            </div>
            <div className="md:w-3/4 p-6 md:p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">{studentData.name}</h1>
                  <p className="text-orange-600 font-medium">{studentData.currentCollege || "Unknown Institution"}</p>
                  <p className="text-gray-600 mt-2">
                    <span className="font-medium">Student ID:</span> {id}
                  </p>
                </div>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {studentData.gradeLevel || "Grade Level Not Specified"}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-blue-800 font-medium">Overall Attendance</div>
                  <div className="text-3xl font-bold mt-1">
                    {overallAttendance}%
                    <span className={`ml-2 text-sm ${
                      overallAttendance < 75 ? 'text-red-500' : 
                      overallAttendance <= 85 ? 'text-blue-500' : 'text-green-500'
                    }`}>
                      {overallAttendance < 75 ? '⚠️ Needs Improvement' : 
                       overallAttendance <= 85 ? '🟡 Satisfactory' : '✅ Excellent'}
                    </span>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-purple-800 font-medium">Overall GPA</div>
                  <div className="text-3xl font-bold mt-1">
                    {overallGPA}
                    <span className={`ml-2 text-sm ${
                      overallGPA < 5 ? 'text-red-500' : 
                      overallGPA <= 7 ? 'text-blue-500' : 'text-green-500'
                    }`}>
                      {overallGPA < 5 ? '⚠️ Needs Improvement' : 
                       overallGPA <= 7 ? '🟡 Good' : '✅ Excellent'}
                    </span>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-green-800 font-medium">Primary Behavior</div>
                  <div className="text-3xl font-bold mt-1 capitalize">
                    {primaryBehavior}
                    <span className="ml-2 text-sm text-gray-600">
                      {behaviorSummary?.find(b => b.category === primaryBehavior)?.description || ''}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <nav className="flex overflow-x-auto">
            <button
              className={`py-4 px-6 font-medium whitespace-nowrap ${activeTab === "attendance" ? "border-b-4 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("attendance")}
            >
              <div className="flex items-center">
                <span className="mr-2">📊</span>
                Attendance
              </div>
            </button>
            <button
              className={`py-4 px-6 font-medium whitespace-nowrap ${activeTab === "gpa" ? "border-b-4 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("gpa")}
            >
              <div className="flex items-center">
                <span className="mr-2">🏆</span>
                Academic Performance
              </div>
            </button>
            <button
              className={`py-4 px-6 font-medium whitespace-nowrap ${activeTab === "behavior" ? "border-b-4 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("behavior")}
            >
              <div className="flex items-center">
                <span className="mr-2">👤</span>
                Behavior Analysis
              </div>
            </button>
          </nav>
        </div>

        {/* Attendance Tab */}
        {activeTab === "attendance" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                  📊
                </span>
                Attendance Overview
              </h2>
              <div className="h-80">
                <Bar 
                  data={attendanceChart}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                          display: true,
                          text: 'Percentage (%)'
                        }
                      }
                    },
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: (context) => {
                            return `${context.dataset.label}: ${context.raw}%`;
                          }
                        }
                      },
                      legend: {
                        display: false
                      }
                    }
                  }}
                />
              </div>
              <div className="mt-4 flex justify-center space-x-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                  <span className="text-sm">Below 75%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                  <span className="text-sm">75-85%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                  <span className="text-sm">Above 85%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                  📝
                </span>
                Attendance Records
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institution</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {studentData.children?.map((item, index) => {
                      const attendance = parseFloat(item.attendance) || 0;
                      let status;
                      if (attendance < 75) {
                        status = { color: "bg-red-100 text-red-800", label: "Low" };
                      } else if (attendance <= 85) {
                        status = { color: "bg-blue-100 text-blue-800", label: "Good" };
                      } else {
                        status = { color: "bg-green-100 text-green-800", label: "Excellent" };
                      }

                      return (
                        <tr key={`attendance-${index}`} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.class || item.course || "N/A"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.school || studentData.currentCollege || "N/A"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div 
                                  className={`h-2.5 rounded-full ${
                                    attendance < 75 ? 'bg-red-500' : 
                                    attendance <= 85 ? 'bg-blue-500' : 'bg-green-500'
                                  }`} 
                                  style={{ width: `${attendance}%` }}
                                ></div>
                              </div>
                              {attendance}%
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${status.color}`}>
                              {status.label}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* GPA Tab */}
        {activeTab === "gpa" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-800 p-2 rounded-full mr-3">
                  📈
                </span>
                Academic Performance Overview
              </h2>
              <div className="h-80">
                <Bar 
                  data={gpaChart}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 10.0,
                        title: {
                          display: true,
                          text: 'GPA Score'
                        }
                      }
                    },
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: (context) => {
                            return `${context.dataset.label}: ${context.raw}`;
                          }
                        }
                      },
                      legend: {
                        display: false
                      }
                    }
                  }}
                />
              </div>
              <div className="mt-4 flex justify-center space-x-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                  <span className="text-sm">Below 5</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                  <span className="text-sm">5-7</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                  <span className="text-sm">Above 7</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-800 p-2 rounded-full mr-3">
                  📚
                </span>
                Course Performance Details
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institution</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GPA</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {studentData.children?.map((item, index) => {
                      const gpa = parseFloat(item.gpa) || 0;
                      let status;
                      if (gpa < 5) {
                        status = { color: "bg-red-100 text-red-800", label: "Needs Improvement" };
                      } else if (gpa <= 7) {
                        status = { color: "bg-blue-100 text-blue-800", label: "Good" };
                      } else {
                        status = { color: "bg-green-100 text-green-800", label: "Excellent" };
                      }

                      return (
                        <tr key={`gpa-${index}`} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.class || item.course || "N/A"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.school || studentData.currentCollege || "N/A"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div 
                                  className={`h-2.5 rounded-full ${
                                    gpa < 5 ? 'bg-red-500' : 
                                    gpa <= 7 ? 'bg-blue-500' : 'bg-green-500'
                                  }`} 
                                  style={{ width: `${gpa * 10}%` }}
                                ></div>
                              </div>
                              {gpa.toFixed(2)}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${status.color}`}>
                              {status.label}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Behavior Tab (unchanged) */}
        {activeTab === "behavior" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-green-100 text-green-800 p-2 rounded-full mr-3">
                    👥
                  </span>
                  Behavior Distribution
                </h2>
                <div className="h-80">
                  <Doughnut 
                    data={behaviorChart}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'right',
                        },
                        tooltip: {
                          callbacks: {
                            label: function(context) {
                              const total = context.dataset.data.reduce((a, b) => a + b, 0);
                              const value = context.raw;
                              const percentage = Math.round((value / total) * 100);
                              return `${context.label}: ${value} (${percentage}%)`;
                            }
                          }
                        }
                      }
                    }}
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-green-100 text-green-800 p-2 rounded-full mr-3">
                    📋
                  </span>
                  Behavior Breakdown
                </h2>
                <div className="space-y-4">
                  {behaviorSummary?.map((item, index) => (
                    <div key={index} className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition">
                      <div 
                        className="w-5 h-5 rounded-full mt-1 mr-3 flex-shrink-0" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <div>
                        <div className="font-medium text-gray-800">{item.category}</div>
                        <div className="text-sm text-gray-600">
                          {item.count} records ({item.percentage}%)
                        </div>
                        <div className="text-xs text-gray-500 mt-1 italic">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 mt-4 border-t">
                    <div className="font-medium text-gray-700">Total Records:</div>
                    <div className="text-lg font-bold text-gray-900">{studentData.children.length}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-green-100 text-green-800 p-2 rounded-full mr-3">
                  📝
                </span>
                Detailed Behavior Records
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institution</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Behavior</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {studentData.children?.map((item, index) => {
                      const behavior = (item.behavior || "unknown").toLowerCase();
                      const behaviorMap = {
                        excellent: { color: "bg-green-100 text-green-800", label: "Excellent", icon: "⭐" },
                        good: { color: "bg-green-50 text-green-700", label: "Good", icon: "👍" },
                        average: { color: "bg-yellow-100 text-yellow-800", label: "Average", icon: "➖" },
                        poor: { color: "bg-red-100 text-red-800", label: "Needs Improvement", icon: "⚠️" },
                        bad: { color: "bg-red-100 text-red-800", label: "Needs Improvement", icon: "⚠️" },
                        unknown: { color: "bg-gray-100 text-gray-800", label: "Not Rated", icon: "❓" }
                      };
                      const behaviorInfo = behaviorMap[behavior] || behaviorMap.unknown;

                      return (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.class || item.course || "N/A"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.school || studentData.currentCollege || "N/A"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                            <span className="mr-2">{behaviorInfo.icon}</span>
                            {behavior}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${behaviorInfo.color}`}>
                              {behaviorInfo.label}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndiStudentData;