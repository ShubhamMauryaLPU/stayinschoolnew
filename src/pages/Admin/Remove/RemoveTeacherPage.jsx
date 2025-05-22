import { useState } from 'react';
import axios from 'axios';

const RemoveTeacherPage = () => {
  const [teacherId, setTeacherId] = useState("");
  const [teacherData, setTeacherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [removed, setRemoved] = useState(false);

  const fetchTeacherData = async () => {
    if (!teacherId) {
      setError("Please enter a teacher ID");
      return;
    }
    setIsLoading(true);
    setError("");
    setRemoved(false);

    try {
      const response = await axios.get(`https://newserversis.onrender.com/api/teacher/${teacherId}`);
      if (response.data) {
        setTeacherData(response.data);
      } else {
        setError("Teacher not found");
      }
    } catch (err) {
      setError("Failed to fetch teacher data");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveTeacher = async () => {
    // Check admin password from session storage
    const userData = JSON.parse(sessionStorage.getItem('user'));
    if (adminPassword !== userData.password) {
      setPasswordError("Incorrect admin password");
      return;
    }

    try {
      await axios.delete(`http://localhost:3500/api/teacher/${teacherId}`);
      setRemoved(true);
      setTeacherId("");
      setTeacherData(null);
      setShowConfirmation(false);
      setAdminPassword("");
      setPasswordError("");
    } catch (err) {
      setPasswordError("Failed to remove teacher");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            Teacher Removal Portal
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Manage teacher records with administrative control
          </p>
          <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
        </div>

        {/* Success message */}
        {removed && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-200">
            Teacher successfully removed!
          </div>
        )}

        {/* Search Form */}
        <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-xl p-8 mb-10 border border-orange-100">
          <div className="space-y-6">
            <div>
              <label htmlFor="teacherId" className="block text-sm font-medium text-gray-700 mb-1">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Teacher ID
                </span>
              </label>
              <div className="mt-1 flex rounded-lg shadow-sm">
                <input
                  type="text"
                  name="teacherId"
                  id="teacherId"
                  value={teacherId}
                  onChange={(e) => setTeacherId(e.target.value)}
                  className="focus:ring-orange-500 focus:border-orange-500 flex-1 block w-full rounded-lg sm:text-sm border-orange-300 border p-3 bg-white/50"
                  placeholder="Enter teacher ID"
                />
              </div>
            </div>

            <div>
              <button
                onClick={fetchTeacherData}
                disabled={!teacherId || isLoading}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 ${
                  !teacherId || isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Searching...
                  </>
                ) : (
                  <>
                    <svg className="-ml-1 mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search Teacher
                  </>
                )}
              </button>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 p-4 border border-red-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{error}</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Teacher Data Display */}
        {teacherData && (
          <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-xl overflow-hidden border border-orange-100">
            <div className="px-8 py-6 border-b border-orange-200 bg-gradient-to-r from-orange-500 to-red-500">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full border-2 border-white"
                  src={teacherData.image || "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"}
                  alt="Teacher"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold leading-6 text-white">
                    {teacherData.fullName}
                  </h3>
                  <p className="mt-1 text-orange-100">ID: {teacherData.id}</p>
                </div>
              </div>
            </div>
            <div className="px-8 py-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <div className="bg-orange-50/50 p-4 rounded-lg">
                  <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Email</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">{teacherData.email}</p>
                </div>
                <div className="bg-orange-50/50 p-4 rounded-lg">
                  <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Mobile</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">{teacherData.mobileNumber}</p>
                </div>
                <div className="bg-orange-50/50 p-4 rounded-lg">
                  <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Subject</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">{teacherData.subject || teacherData.areaOfTeaching}</p>
                </div>
                <div className="bg-orange-50/50 p-4 rounded-lg">
                  <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">College</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">{teacherData.college}</p>
                </div>
              </div>

              {/* Classes/Subjects Section */}
              {teacherData.classes && (
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Classes Teaching</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacherData.classes.map((cls, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                        {cls}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="px-8 py-5 bg-orange-50/30 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setTeacherData(null);
                  setTeacherId("");
                }}
                className="inline-flex justify-center py-2 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowConfirmation(true)}
                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Remove Teacher
              </button>
            </div>
          </div>
        )}

        {/* Confirmation Modal with Password */}
        {showConfirmation && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-6 pt-6 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Remove teacher record
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to permanently remove {teacherData?.name} (ID: {teacherData?.id})?
                        </p>
                      </div>
                      <div className="mt-4">
                        <label htmlFor="adminPassword" className="block text-sm font-medium text-gray-700">
                          Admin Password
                        </label>
                        <div className="mt-1">
                          <input
                            type="password"
                            id="adminPassword"
                            value={adminPassword}
                            onChange={(e) => {
                              setAdminPassword(e.target.value);
                              setPasswordError("");
                            }}
                            className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                            placeholder="Enter admin password"
                          />
                        </div>
                        {passwordError && (
                          <p className="mt-2 text-sm text-red-600">{passwordError}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={handleRemoveTeacher}
                    className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-base font-medium text-white hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Confirm Removal
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowConfirmation(false);
                      setPasswordError("");
                      setAdminPassword("");
                    }}
                    className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-6 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoveTeacherPage;