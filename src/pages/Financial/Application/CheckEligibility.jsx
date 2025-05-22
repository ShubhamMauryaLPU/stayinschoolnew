import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CheckEligibility() {
  const navigate = useNavigate();
  const [currAttendence, setCurrAttendence] = useState(null);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const checkEligibilityClick = async () => {
    setIsLoading(true);
    try {
      if (user.currentIncome && user.currentCourse && currAttendence !== null && currAttendence !== undefined) {
        if (user.currentIncome < 4 && currAttendence > 75) {
          const res=await axios.put(`https://newserversis.onrender.com/api/student/${user.id}`, { loanEligible: true });
          sessionStorage.clear();
          sessionStorage.setItem("user", JSON.stringify(res.data.student));
          setUser(res.data.student)
          navigate(`/financial/application/fillfrm`);
        } else {
          setAnimationComplete(false);
          setTimeout(() => setAnimationComplete(true), 1000);
        }
      } else {
        alert("Please fill in all the required fields.");
      }
    } catch (error) {
      console.error("Error updating eligibility:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user")) || {};
    setUser(userData);
    if (userData.children && userData.children.length > 0) {
      setCurrAttendence(userData.children[userData.children.length - 1].attendance);
    }
  }, []);

  if (user.loanEligible === true) {
    return (
      <div className="bg-gradient-to-b from-orange-100 to-orange-300 min-h-screen flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
        >
          <div className="mb-6">
            <svg className="w-20 h-20 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-orange-600 mb-3">
            Congratulations!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            You are eligible for financial support. Proceed to fill out the application form.
          </p>
          <Link to={`/financial/application/fillfrm`}>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Continue to Application
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  if (user.professionLogin === "teacher" || user.professionLogin === "admin") {
    return (
      <div className="bg-gradient-to-b from-orange-100 to-orange-300 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-md text-center">
          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Access Restricted</h1>
          <p className="text-gray-600 mb-6">
            This page is only accessible to students. Please login with a student account to check eligibility.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-lg transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  // Calculate eligibility status for each criterion
  const incomeEligible = user.currentIncome && user.currentIncome < 4;
  const courseEligible = user.currentCourse;
  const attendanceEligible = currAttendence && currAttendence > 75;
  const allEligible = incomeEligible && courseEligible && attendanceEligible;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-200 p-4 md:p-8">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden"
      >
        {/* Header with decorative element */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Eligibility Check</h1>
          <p className="text-orange-100">
            Let's verify your qualifications for financial support, {user && user.name}
          </p>
        </div>

        <div className="p-6 md:p-8">
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">Eligibility Progress</span>
              <span className="text-sm font-bold text-orange-600">
                {[incomeEligible, courseEligible, attendanceEligible].filter(Boolean).length}/3
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-orange-600 h-2.5 rounded-full transition-all duration-500" 
                style={{ 
                  width: `${([incomeEligible, courseEligible, attendanceEligible].filter(Boolean).length / 3) * 100}%` 
                }}
              ></div>
            </div>
          </div>

          {/* Criteria cards */}
          <div className="grid gap-6 mb-10">
            <div className={`p-5 rounded-xl border-2 ${incomeEligible ? 'border-green-300 bg-green-50' : 'border-gray-200'} transition-all`}>
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${incomeEligible ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                  {incomeEligible ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Income Requirement</h3>
                  <p className="text-gray-600">Annual family income below ₹3 lakhs</p>
                  {user.currentIncome && (
                    <p className={`mt-2 text-sm ${incomeEligible ? 'text-green-600' : 'text-red-600'}`}>
                      Your income: ₹{user.currentIncome} lakhs/year - {incomeEligible ? 'Eligible' : 'Not Eligible'}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className={`p-5 rounded-xl border-2 ${courseEligible ? 'border-green-300 bg-green-50' : 'border-gray-200'} transition-all`}>
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${courseEligible ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                  {courseEligible ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Enrollment Status</h3>
                  <p className="text-gray-600">Enrolled in a recognized educational institution</p>
                  {user.currentCourse ? (
                    <p className="mt-2 text-sm text-green-600">Your course: {user.currentCourse} - Eligible</p>
                  ) : (
                    <p className="mt-2 text-sm text-red-600">No course information available</p>
                  )}
                </div>
              </div>
            </div>

            <div className={`p-5 rounded-xl border-2 ${attendanceEligible ? 'border-green-300 bg-green-50' : 'border-gray-200'} transition-all`}>
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${attendanceEligible ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                  {attendanceEligible ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Attendance Requirement</h3>
                  <p className="text-gray-600">Minimum attendance of 75%</p>
                  {currAttendence ? (
                    <p className={`mt-2 text-sm ${attendanceEligible ? 'text-green-600' : 'text-red-600'}`}>
                      Your attendance: {currAttendence}% - {attendanceEligible ? 'Eligible' : 'Not Eligible'}
                    </p>
                  ) : (
                    <p className="mt-2 text-sm text-gray-600">Attendance data not available</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action button with animation */}
          <motion.div 
            animate={!animationComplete && !allEligible ? {
              x: [0, -10, 10, -10, 10, 0],
            } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <button
              onClick={checkEligibilityClick}
              disabled={isLoading}
              className={`relative overflow-hidden px-8 py-3 rounded-full font-bold text-white shadow-lg transition-all duration-300 ${
                allEligible 
                  ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                  : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
              } ${isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-xl'}`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="relative z-10">
                  {allEligible ? 'Submit Eligibility Check' : 'Check Eligibility'}
                </span>
              )}
              {allEligible && (
                <span className="absolute top-0 right-0 -mt-2 -mr-2 px-2 py-1 bg-yellow-400 text-xs font-bold text-yellow-900 rounded-full animate-pulse">
                  Ready!
                </span>
              )}
            </button>
          </motion.div>

          {!allEligible && (
            <p className="mt-4 text-center text-gray-500 text-sm">
              Make sure you meet all requirements before submitting
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}