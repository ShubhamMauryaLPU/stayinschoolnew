import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherProfilePage = () => {
  const [teacher, setTeacher] = useState({
    id: "",
    name: "",
    college: "",
    areaOfTeaching: "",
    email: "",
    mobileNumber: "",
    qualification: "",
    password: "",
    image: "",
  });
  const [originalTeacher, setOriginalTeacher] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    try {
      const userData = JSON.parse(sessionStorage.getItem('user'));
      if (userData) {
        setTeacher(userData);
        setOriginalTeacher(userData);
        setPreviewImage(userData.image || '');
      }
    } catch (error) {
      console.error("Invalid user data in sessionStorage:", error);
    }
  }, [sessionStorage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setTeacher((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async() => {
    if (!teacher) return;
    try{
      const formData = new FormData();
      formData.append("email", teacher.email);
      formData.append("mobileNumber", teacher.mobileNumber);
      formData.append("password", teacher.password);

      if (teacher.image instanceof File) {
        formData.append("image", previewImage);
      }
      const res=await axios.put(`https://newserversis.onrender.com/api/teacher/${teacher.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
     
      sessionStorage.clear();
      sessionStorage.setItem("user", JSON.stringify(res.data.teacher));
      setTeacher(res.data.teacher);
      setOriginalTeacher(res.data.teacher);
    }
    catch(e){
      console.error("Failed to Update: ",e);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTeacher(originalTeacher);
    setPreviewImage(originalTeacher?.image || '');
    setIsEditing(false);
  };

  if (!teacher) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-48 md:h-56 flex items-end">
            <div className="container mx-auto px-6 pb-6 flex items-end">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white">{teacher.fullName}</h1>
                <p className="text-orange-100 mt-2 text-lg">
                  {teacher.college} - {teacher.subject}
                </p>
              </div>

              {/* Profile Image */}
              <div className="relative -mb-16 ml-6 group">
                <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full border-4 ${isEditing ? 'border-orange-500' : 'border-white'} bg-white shadow-xl overflow-hidden relative`}>
                  <img
                    src={previewImage || '/images/logo.jpg'}
                    alt="Teacher Profile"
                    className="w-full h-full object-cover"
                  />
                  {isEditing && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center gap-1">
                      <label className="cursor-pointer p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                      </label>
                      <button
                        onClick={() => setPreviewImage(originalTeacher?.image || '')}
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
            {[
              { label: "Teacher ID", name: "id", readOnly: true },
              { label: "Full Name", name: "fullName", readOnly: true },
              { label: "College", name: "college", readOnly: true },
              { label: "Subject", name: "subject", readOnly: true },
              { label: "Mobile Number", name: "mobileNumber" },
              { label: "Email", name: "email" },
              { label: "Password", name: "password", type: isEditing ? "text" : "password" }
            ].map((field) => (
              <div key={field.name} className="space-y-1">
                <label className="block text-sm font-medium text-gray-600">{field.label}</label>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={teacher[field.name] || ''}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl ${field.readOnly || !isEditing ? "bg-gray-100" : "bg-gray-50"} focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition`}
                  disabled={field.readOnly || !isEditing}
                />
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 pt-8">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2"
              >
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2"
                >
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

export default TeacherProfilePage;
