import React, { useState } from "react";
import colleges from "../../../data/colleges";

const RemoveCollegePage = () => {
  const [formData, setFormData] = useState({
    collegeId: "",
    collegeName: "",
    password: ""
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Mock admin credentials (in a real app, this would be handled by backend)
  const adminCredentials = {
    username: "admin",
    password: "admin123"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCollegeSelect = (e) => {
    const selectedName = e.target.value;
    const college = colleges.find(c => c.name === selectedName);
    
    if (college) {
      setSelectedCollege(college);
      setFormData(prev => ({
        ...prev,
        collegeName: college.name,
        collegeId: college.id
      }));
      setShowPasswordField(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    
    // Verify password
    if (formData.password !== adminCredentials.password) {
      setErrorMessage("Incorrect password. Please try again.");
      return;
    }

    // Show confirmation dialog instead of immediately submitting
    setShowConfirmation(true);
  };

  const confirmRemoval = () => {
    setIsSubmitting(true);
    setShowConfirmation(false);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would call your API here
      console.log("Removing College:", selectedCollege);
      
      // Find index of college to remove
      const collegeIndex = colleges.findIndex(c => c.id === selectedCollege.id);
      
      if (collegeIndex !== -1) {
        // In a real app, you would call your API to remove the college
        // For this demo, we'll just log the action
        console.log(`College "${selectedCollege.name}" would be removed here`);
        
        setSuccessMessage(
          `College "${selectedCollege.name}" removed successfully!`
        );
        setFormData({ collegeId: "", collegeName: "", password: "" });
        setSelectedCollege(null);
        setShowPasswordField(false);
      } else {
        setErrorMessage("College not found in the system.");
      }
      
      setIsSubmitting(false);
    }, 1500);
  };

  const cancelRemoval = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 flex items-center justify-center p-4">
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-100">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Confirm Removal
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to remove <span className="font-semibold">{selectedCollege?.name}</span>? This action cannot be undone.
                  </p>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button
                    type="button"
                    onClick={cancelRemoval}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={confirmRemoval}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Remove Institution
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md transition-all duration-300 hover:shadow-3xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Remove Institution
          </h2>
          <p className="text-orange-100 mt-1">
            Remove a college or school from the system
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6 md:p-8">
          {successMessage && (
            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700 font-medium">
                    {successMessage}
                  </p>
                </div>
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700 font-medium">
                    {errorMessage}
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Institution <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleCollegeSelect}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition appearance-none"
                  required
                >
                  <option value="">Select an institution...</option>
                  {colleges.map(college => (
                    <option key={college.id} value={college.name}>
                      {college.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {selectedCollege && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  College ID
                </label>
                <input
                  type="text"
                  name="collegeId"
                  value={selectedCollege.id}
                  readOnly
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50"
                />
              </div>
            )}

            {showPasswordField && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admin Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter admin password"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {showPasswordField && (
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center ${isSubmitting ? 'bg-red-400' : 'bg-red-500 hover:bg-red-600'} text-white font-medium`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Removing...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Remove Institution
                    </>
                  )}
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Footer Note */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 rounded-b-3xl">
          <p className="text-xs text-gray-500 text-center">
            Note: This action cannot be undone. Please verify the institution details before removal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RemoveCollegePage;