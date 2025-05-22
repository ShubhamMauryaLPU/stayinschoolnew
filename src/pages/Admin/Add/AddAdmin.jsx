import { useEffect, useState } from "react";
import {
  FiUpload,
  FiUser,
  FiMail,
  FiPhone,
  FiKey,
  FiSave,
  FiLock,
} from "react-icons/fi";
import axios from "axios";

const AddAdmin = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    mobile: "",
    image: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [err, setErr] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prev) => ({
          ...prev,
          image: event.target.result,
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.id ||
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill in all required fields");
      return;
    }
    setShowPasswordPrompt(true);
  };

  const verifyAndSubmit = async () => {
    if (!currentPassword) {
      alert("Please enter your current password");
      return;
    }
    if (currentPassword !== currentAdmin.password) {
      setErr(true);
      return;
    }
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("id", formData.id);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("mobile", formData.mobile);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("image", formData.image);
      formDataToSend.append("currentPassword", currentPassword);

      const response = await axios.post(
        "https://newserversis.onrender.com/api/admin/add",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Admin created successfully!");
      setFormData({
        id: "",
        name: "",
        mobile: "",
        image: "",
        email: "",
        password: "",
      });
      setCurrentPassword("");
      setShowPasswordPrompt(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error.response?.data?.message || "Failed to create admin");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData) {
      setCurrentAdmin(userData);
    }
  }, []);

  const formFields = [
    { id: "id", icon: <FiKey />, label: "Admin ID", type: "text" },
    { id: "name", icon: <FiUser />, label: "Full Name", type: "text" },
    { id: "email", icon: <FiMail />, label: "Email Address", type: "email" },
    { id: "mobile", icon: <FiPhone />, label: "Mobile Number", type: "tel" },
    { id: "password", icon: <FiKey />, label: "Password", type: "password" },
  ];

  if (currentAdmin.role == "Super Admin") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 py-12 px-4 sm:px-6 lg:px-8">
        {/* Password Prompt Modal */}
        {showPasswordPrompt && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl border border-orange-100 transform transition-all duration-300 scale-95 hover:scale-100">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-amber-100 text-amber-600 mr-3">
                  <FiLock className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Verify Your Identity
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Super admin verification required
                  </p>
                </div>
              </div>

              <div className="relative mb-6 group">
                <div className="absolute inset-0.5 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition"></div>
                <div className="relative">
                  <input
                    type="password"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => {
                      setErr(false);
                      setCurrentPassword(e.target.value);
                    }}
                    className="peer h-12 w-full rounded-lg border-2 border-gray-200 px-4 text-gray-900 placeholder-transparent focus:outline-none focus:border-amber-500 bg-white"
                    placeholder=" "
                  />
                  <label
                    htmlFor="currentPassword"
                    className="absolute left-3 -top-2.5 bg-white px-1 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm flex items-center gap-1"
                  >
                    <FiLock className="h-4 w-4" />
                    Current Password
                  </label>
                </div>
              </div>

              {err && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg border border-red-100 flex items-center">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Wrong password. Please try again.
                </div>
              )}

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowPasswordPrompt(false);
                    setCurrentPassword("");
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition hover:shadow-md"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  onClick={verifyAndSubmit}
                  disabled={isSubmitting}
                  className={`px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white flex items-center gap-2 hover:shadow-lg transition-all ${
                    isSubmitting
                      ? "opacity-80"
                      : "hover:from-amber-600 hover:to-orange-700 hover:scale-[1.02]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Verifying...
                    </>
                  ) : (
                    <>
                      <FiSave className="h-4 w-4" />
                      Verify & Submit
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-md mx-auto transform transition-all duration-300 hover:scale-[1.01]">
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-orange-100 hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-orange-500 to-amber-600 py-8 px-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10 flex items-center">
                <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm mr-4">
                  <FiUser className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-tight">
                    Add New Admin
                  </h1>
                  <p className="mt-1 text-amber-100 font-light">
                    Register a new administrator account
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="flex flex-col items-center">
                <div className="relative group">
                  <div className="h-28 w-28 rounded-full bg-gradient-to-br from-orange-200 to-amber-300 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg ring-4 ring-orange-100 group-hover:ring-amber-200 transition-all">
                    {formData.image ? (
                      <img
                        className="h-full w-full object-cover"
                        src={formData.image}
                        alt="Admin profile"
                      />
                    ) : (
                      <FiUser className="h-14 w-14 text-amber-700" />
                    )}
                  </div>
                  <label className="absolute -bottom-2 right-0 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-full p-2 shadow-md cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-lg">
                    <FiUpload className="h-5 w-5" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>

              <div className="space-y-5">
                {formFields.map(({ id, icon, label, type }) => (
                  <div className="relative group" key={id}>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg blur-sm opacity-0 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative">
                      <input
                        type={type}
                        id={id}
                        name={id}
                        value={formData[id]}
                        onChange={handleChange}
                        className="peer h-12 w-full rounded-lg border-2 border-gray-200 px-4 pl-11 text-gray-900 placeholder-transparent focus:outline-none focus:border-amber-500 bg-white"
                        placeholder=" "
                        required={id !== "mobile"}
                      />
                      <label
                        htmlFor={id}
                        className="absolute left-11 -top-2.5 bg-white px-1 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm flex items-center gap-1"
                      >
                        {label}
                      </label>
                      <div className="absolute left-3 top-3 text-gray-400 peer-focus:text-amber-500">
                        {icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium shadow-lg transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
                    isSubmitting ? "opacity-80" : "hover:shadow-xl"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating Admin...
                    </>
                  ) : (
                    <>
                      <FiSave className="h-5 w-5" />
                      Create Admin Account
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="text-center p-8 bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 border border-orange-200">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">
          Unauthorized Access
        </h1>
        <p className="text-gray-600 mb-6">
          You don't have permission to access this page.
        </p>
        <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full w-full mb-6"></div>
        <p className="text-sm text-gray-500">
          Please contact your system administrator for assistance.
        </p>
      </div>
    </div>
  );
};

export default AddAdmin;
