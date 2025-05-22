import { useState } from "react";
import colleges from "../../../data/colleges";
import axios from "axios";

const AddTeacherPage = () => {
  const [teacher, setTeacher] = useState({
    id: "",
    name: "",
    college: "",
    areaOfTeaching: "",
    email: "",
    mobile: "",
    qualification: "",
    password: "",
    image: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setTeacher((prev) => ({
          ...prev,
          image: event.target.result,
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("id", teacher.id);
      formData.append("fullName", teacher.name);
      formData.append("college", teacher.college);
      formData.append("subject", teacher.areaOfTeaching);
      formData.append("email", teacher.email);
      formData.append("mobileNumber", teacher.mobile);
      formData.append("qualification", teacher.qualification);
      formData.append("password", teacher.password);
      formData.append("image", teacher.image);

      const response = await axios.post(
        "https://newserversis.onrender.com/api/teacher/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setNotification({
        show: true,
        type: "success",
        message: "Teacher added successfully!",
      });

      setTeacher({
        id: "",
        name: "",
        college: "",
        areaOfTeaching: "",
        email: "",
        mobile: "",
        qualification: "",
        password: "",
        image: "",
      });
    } catch (error) {
      console.error(error);
      setNotification({
        show: true,
        type: "error",
        message: "Failed to add teacher. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setNotification({ show: false, type: "", message: "" });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-8 px-4 sm:px-6 lg:px-8 relative">
      {/* Notification */}
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 transition-all duration-500 ease-in-out`}>
          <div className={`px-6 py-4 rounded-lg shadow-lg ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
            <div className="flex items-center">
              {notification.type === 'success' ? (
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              <span>{notification.message}</span>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white">Teacher Information</h2>
            <p className="mt-1 text-orange-100">Register a new faculty member to the system</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
            {/* Profile Picture */}
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="relative w-36 h-36 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <img
                    src={teacher.image || "/images/random.jpg"}
                    alt="Teacher"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium">Change Photo</span>
                  </div>
                </div>
                <label
                  htmlFor="imageUpload"
                  className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-3 rounded-full cursor-pointer hover:bg-orange-600 shadow-md transition-all duration-300 hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input
                    id="imageUpload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <InputField label="Teacher ID" name="id" value={teacher.id} onChange={handleChange} placeholder="TEA-2023-001" required />
              <InputField label="Full Name" name="name" value={teacher.name} onChange={handleChange} placeholder="Dr. Jane Doe" required />

              <div className="sm:col-span-2">
                <Label name="college" label="College" />
                <select
                  id="college"
                  name="college"
                  value={teacher.college}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-300"
                >
                  <option value="" disabled>Select College</option>
                  {colleges.map((college) => (
                    <option key={college.id} value={college.name}>{college.name}</option>
                  ))}
                </select>
              </div>

              <SelectField label="Area of Teaching" name="areaOfTeaching" value={teacher.areaOfTeaching} onChange={handleChange} required options={[
                "Mathematics", "Physics", "Chemistry", "Computer Science", "Biology", "English", "History", "Economics"
              ]} />

              <InputField label="Qualification" name="qualification" value={teacher.qualification} onChange={handleChange} placeholder="Ph.D in Computer Science" required />
              <InputField type="email" label="Email" name="email" value={teacher.email} onChange={handleChange} placeholder="teacher@university.edu" required />
              <InputField type="tel" label="Mobile Number" name="mobile" value={teacher.mobile} onChange={handleChange} placeholder="+1 (555) 123-4567" required />

              {/* Password */}
              <div className="sm:col-span-2">
                <Label name="password" label="Password" />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={teacher.password}
                    onChange={handleChange}
                    required
                    placeholder="Create a strong password"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-orange-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">Minimum 8 characters with at least one number and special character</p>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
              >
                {isSubmitting ? "Submitting..." : "Add Teacher"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const InputField = ({ label, name, value, onChange, type = "text", required = false, placeholder = "" }) => (
  <div>
    <Label name={name} label={label} />
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options = [], required = false }) => (
  <div>
    <Label name={name} label={label} />
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
    >
      <option value="" disabled>Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const Label = ({ name, label }) => (
  <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
    {label} <span className="text-orange-600">*</span>
  </label>
);

export default AddTeacherPage;
