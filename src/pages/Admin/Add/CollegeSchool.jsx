import React, { useState } from 'react';
import colleges from '../../../data/colleges';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const statesAndUTs = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 
  'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 
  'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 
  'Delhi', 'Puducherry', 'Ladakh', 'Lakshadweep', 'Jammu and Kashmir'
];

const CollegeSchool = () => {
    const navigate=useNavigate();
  const [institution, setInstitution] = useState({
    id: '',
    name: '',
    state: '',
    type: 'college'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInstitution(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Institution data:', institution);
    // // Add your submission logic here (API call, etc.)
    // alert(`Submitted: ${JSON.stringify(institution, null, 2)}`);
    colleges.push(institution);
    // Reset form
    setInstitution({
      id: '',
      name: '',
      state: '',
      type: 'college'
    });
    navigate("/admindashboard/allcolleges/gradutation");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 py-16 px-6">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Add Educational Institution
          </h1>
          <p className="text-md text-gray-600 mb-6 text-center">
            Please enter the details of the institution you're adding (College, University, or School).
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ID Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution ID
              </label>
              <input
                type="text"
                name="id"
                value={institution.id}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                placeholder="Enter ID"
              />
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution Name
              </label>
              <input
                type="text"
                name="name"
                value={institution.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                placeholder="e.g. Vellore Institute of Technology"
              />
            </div>

            {/* State Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select
                name="state"
                value={institution.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
              >
                <option value="">Select State/UT</option>
                {statesAndUTs.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* Institution Type Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution Type
              </label>
              <select
                name="type"
                value={institution.type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
              >
                <option value="college">College</option>
                <option value="university">University</option>
                <option value="school">School</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add Institution
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CollegeSchool;
