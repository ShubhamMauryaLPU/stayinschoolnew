import React, { useState, useEffect } from "react";
import axios from "axios";
const AdminProfilePage = () => {
  const [admin, setAdmin] = useState({
    id: "",
    name: "",
    mobile: "",
    role: "",
    image: "",
    email: "",
    password: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setAdmin((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setIsEditing(false);
    try {
      const formData = new FormData();
      formData.append("name", admin.name);
      formData.append("email", admin.email);
      formData.append("mobile", admin.mobile);
      formData.append("password", admin.password);

      // Only append image if it's a File object
      if (admin.image instanceof File) {
        formData.append("image", admin.image);
      }

      const response = await axios.put(
        `https://newserversis.onrender.com/api/admin/${admin.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(response.data.admin);
      sessionStorage.clear();
      sessionStorage.setItem("user", JSON.stringify(response.data.admin));
    } catch (e) {
      console.error("Failed to update admin:", e);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setPreviewImage("");
    const userData = JSON.parse(sessionStorage.getItem("user")) || {};
    setAdmin(userData || {});
  };
  // Assuming adminData is available (from props or context)
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user")) || {};
    // console.log(userData)
    if (userData) {
      setAdmin(userData);
      setPreviewImage(userData.image || "");
    }
  }, [sessionStorage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header with Image */}
        <div className="relative">
          <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-48 md:h-56 flex items-end">
            <div className="container mx-auto px-6 pb-6 flex items-end">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {admin?.name}
                </h1>
                <p className="text-orange-100 mt-2 text-lg">
                  {admin?.role || "Administrator"} Dashboard
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
                    src={
                      previewImage ||
                      admin?.image ||
                      "/images/logo.jpg"
                    }
                    loading="lazy"
                    alt="Admin Profile"
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
                        onClick={() => setPreviewImage("")}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ID */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-600">
                Admin ID
              </label>
              <input
                type="text"
                name="id"
                value={admin?.id || ""}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                readOnly
              />
            </div>

            {/* Name */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={admin?.name || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 bg-gray-50 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition disabled:bg-gray-100"
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
                value={admin?.mobile || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition disabled:bg-gray-100"
                disabled={!isEditing}
              />
            </div>

            {/* Role */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-600">
                Role
              </label>
              <input
                type="text"
                name="role"
                value={admin?.role || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition disabled:bg-gray-100"
                readOnly
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={admin?.email || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition disabled:bg-gray-100"
                disabled={!isEditing}
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
                  value={admin?.password || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition disabled:bg-gray-100"
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;
