import React, { useEffect, useState } from "react";
const StudentProfilePage = () => {
  const [student, setStudent] = useState({
    id: "PRT-001",
    name: "David Wilson",
    mobile: "6543210987",
    class: "9B",
    currentCourse: "Science",
    currentCollege: "High School",
    password: "password123",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    children: [
      {
        id: "C001",
        class: "6A",
        course: "",
        school: "Primary School",
        behavior: "Good",
        gpa: "8.5",
        attendance: "95",
        collegeName: "",
      },
      {
        id: "C002",
        class: "",
        course: "BCA",
        school: "College",
        behavior: "Excellent",
        gpa: "9.2",
        attendance: "70",
        collegeName: "Shiv Nadar University",
      },
    ],
    parent: {
      name: "James Wilson",
      mobile: "9876543210",
    },
  });
  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleParentChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      parent: {
        ...prev.parent,
        [name]: value,
      },
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    if (previewImage) {
      setStudent((prev) => ({ ...prev, image: previewImage }));
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setPreviewImage("");
  };
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user")) || {};
    console.log(userData);
    setStudent(userData ? userData : {});
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header with Image */}
        <div className="relative">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-48 md:h-56 flex items-end">
            <div className="container mx-auto px-6 pb-6 flex items-end">
              <div className="flex-1">
                <h1 className="text-2xl  md:text-4xl font-bold text-white">
                  {student.name || "Student profile"} ({student.currentCourse})
                </h1>
                <p className="text-orange-100 mt-2 text-md">
                  {student.currentCollege}
                </p>
              </div>

              {/* Profile Image */}
              <div className="relative -mb-16 ml-6 group">
                <div
                  className={`w-32 h-32 md:w-40 md:h-40 rounded-full border-4 ${
                    isEditing ? "border-orange-500" : "border-white"
                  } bg-white shadow-xl overflow-hidden`}
                >
                  <img
                    src={previewImage || student.image}
                    alt="Student Profile"
                    className="w-full h-full object-cover"
                  />
                  {isEditing && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center gap-1">
                      <label className="cursor-pointer p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-orange-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </label>
                      <button
                        onClick={() => setPreviewImage(student.image)}
                        className="p-1 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition text-xs text-gray-700"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="px-6 md:px-8 pt-20 pb-8">
          <div className="space-y-6">
            {/* Student Information Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Student Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Student ID */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-600">
                    Student ID
                  </label>
                  <input
                    type="text"
                    name="id"
                    value={student.id || ""}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-100 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                    readOnly
                  />
                </div>

                {/* Student Name */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={student.name ||""}
                    onChange={handleStudentChange}
                    className="w-full px-4 py-3 border-2 bg-gray-100 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition disabled:bg-gray-100"
                    readOnly
                  />
                </div>

                {/* Mobile */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-600">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={student.mobile || ""}
                    onChange={handleStudentChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition disabled:bg-gray-50"
                    disabled={!isEditing}
                  />
                </div>

                {/* Class */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-600">
                    Class
                  </label>
                  <input
                    type="text"
                    name="class"
                    value={student.class || student.section}
                    onChange={handleStudentChange}
                    className="w-full px-4 py-3 border-2 bg-gray-100 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition disabled:bg-gray-100"
                    readOnly
                  />
                </div>
                {/* Password */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-600">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={isEditing ? "text" : "password"}
                      name="password"
                      value={student.password || ""}
                      onChange={handleStudentChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition disabled:bg-gray-50"
                      disabled={!isEditing}
                    />
                    {!isEditing && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Parent Information Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Parent Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Parent Name */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-600">
                    Parent Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={student.parent.name||""}
                    onChange={handleParentChange}
                    className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition disabled:bg-gray-100"
                    readOnly
                  />
                </div>

                {/* Parent Mobile */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-600">
                    Parent Mobile
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={student.parent.mobile||""}
                    onChange={handleParentChange}
                    className="w-full px-4 py-3 border-2 bg-gray-100 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition disabled:bg-gray-100"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Children Information Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Academic Information
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Child ID
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Class/Course
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        School
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Behavior
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        GPA
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Attendance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {student.children.map((child, index) => {
                      // Determine GPA color (red < 1.5, blue 1.5-3.0, green > 3.0)
                      const gpaColor =
                        child.gpa < 6
                          ? "#ef4444"
                          : child.gpa < 7.0
                          ? "#3b82f6"
                          : "#10b981";

                      // Determine attendance color (red < 45, blue 45-75, green > 75)
                      const attendanceColor =
                        child.attendance < 45
                          ? "#ef4444"
                          : child.attendance <= 75
                          ? "#3b82f6"
                          : "#10b981";

                      return (
                        <tr key={index}>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {index + 1}.
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {child.class || child.course}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {child.school || child.collegeName ||""}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
            ${
              child.behavior === "Excellent"
                ? "bg-green-100 text-green-800"
                : child.behavior === "Good"
                ? "bg-blue-100 text-blue-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
                            >
                              {child.behavior}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="relative w-10 h-10 mr-2">
                                <svg
                                  className="w-full h-full"
                                  viewBox="0 0 36 36"
                                >
                                  <path
                                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#e6e6e6"
                                    strokeWidth="3"
                                  />
                                  <path
                                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke={gpaColor}
                                    strokeWidth="3"
                                    strokeDasharray={`${
                                      (child.gpa / 4) * 100
                                    }, 100`}
                                  />
                                </svg>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold">
                                  {child.gpa}
                                </div>
                              </div>
                              {/* <span>GPA</span> */}
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="relative w-10 h-10 mr-2">
                                <svg
                                  className="w-full h-full"
                                  viewBox="0 0 36 36"
                                >
                                  <path
                                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#e6e6e6"
                                    strokeWidth="3"
                                  />
                                  <path
                                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke={attendanceColor}
                                    strokeWidth="3"
                                    strokeDasharray={`${child.attendance}, 100`}
                                  />
                                </svg>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold">
                                  {child.attendance}%
                                </div>
                              </div>
                              {/* <span>Attendance</span> */}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 pt-8">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  onClick={handleCancel}
                  className="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Save Changes
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;
