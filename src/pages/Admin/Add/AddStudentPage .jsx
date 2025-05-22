import React, { useState, useRef } from 'react';
import axios from 'axios';

const AddStudentPage = () => {
  const [student, setStudent] = useState({
    id: '',
    name: '',
    mobile: '',
    class: '',
    password: '',
    image: null,
    parent: {
      name: '',
      mobile: ''
    },
    children: []
  });

  const [newChild, setNewChild] = useState({
    class: '',
    course: '',
    school: '',
    behavior: 'Good',
    gpa: '',
    attendance: '',
    collegeName: ''
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const schools = [
    "Primary School",
    "Secondary School",
    "Higher Secondary School",
    "Inter Mediate",
    "College"
  ];

  const behaviors = ["Excellent", "Good", "Average", "Bad"];

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleParentChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({
      ...prev,
      parent: {
        ...prev.parent,
        [name]: value
      }
    }));
  };

  const handleChildChange = (e) => {
    const { name, value } = e.target;
    setNewChild(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setStudent(prev => ({ ...prev, image: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const addChild = () => {
    const isCollege = newChild.school === "College";
    const hasRequiredFields = isCollege ? newChild.course : newChild.class;
    
    if (hasRequiredFields) {
      setStudent(prev => ({
        ...prev,
        children: [...prev.children, {
          ...newChild,
          id: (prev.children.length + 1).toString() // Auto-increment ID
        }]
      }));
      setNewChild({
        class: '',
        course: '',
        school: '',
        behavior: 'Good',
        gpa: '',
        attendance: '',
        collegeName: ''
      });
    } else {
      alert(isCollege ? 'Please provide Course for College.' : 'Please provide Class for School.');
    }
  };

  const removeChild = (childId) => {
    setStudent(prev => ({
      ...prev,
      children: prev.children.filter(child => child.id !== childId)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const formData = new FormData();
    formData.append('id', student.id);
    formData.append('name', student.name);
    formData.append('mobile', student.mobile);
    formData.append('class', student.class);
    formData.append('password', student.password);
    formData.append('parentName', student.parent.name);
    formData.append('parentMobile', student.parent.mobile);
    if (student.image) {
      formData.append('image', student.image);
    }
    student.children.forEach((child, index) => {
      Object.keys(child).forEach(key => {
        formData.append(`children[${index}][${key}]`, child[key]);
      });
    });
  
    try {
      const response = await axios.post('localhost:3500/api/student/register/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('Server Response:', response.data);
      alert('Student registered successfully!');
  
      // Reset form
      setStudent({
        id: '',
        name: '',
        mobile: '',
        class: '',
        password: '',
        image: null,
        parent: {
          name: '',
          mobile: ''
        },
        children: []
      });
      setImagePreview(null);
    } catch (error) {
      console.error('Registration Error:', error.response?.data || error.message);
      alert('Failed to register student. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isCollege = newChild.school === "College";

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 flex flex-col justify-center items-center p-4 md:p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Add New Student
          </h1>
          <p className="text-orange-100 text-center mt-2">
            Fill in the student details below
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Student Information
            </h2>
            
            <div className="flex flex-col items-center mb-6">
              <div 
                className="relative w-32 h-32 rounded-full bg-gray-200 border-4 border-white shadow-md cursor-pointer overflow-hidden"
                onClick={triggerFileInput}
              >
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Profile Preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
              <button
                type="button"
                onClick={triggerFileInput}
                className="mt-3 px-4 py-2 bg-orange-100 text-orange-700 rounded-md hover:bg-orange-200 transition-colors text-sm font-medium"
              >
                {imagePreview ? 'Change Photo' : 'Upload Photo'}
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  <span className="text-orange-600">*</span> Student ID
                </label>
                <input
                  type="text"
                  name="id"
                  value={student.id}
                  onChange={handleStudentChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                  placeholder="PRT-001"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  <span className="text-orange-600">*</span> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={student.name}
                  onChange={handleStudentChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                  placeholder="David Wilson"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  <span className="text-orange-600">*</span> Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={student.mobile}
                  onChange={handleStudentChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                  placeholder="6543210987"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Section
                </label>
                <input
                  type="number"
                  name="class"
                  value={student.class}
                  onChange={handleStudentChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                  placeholder="9B"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  <span className="text-orange-600">*</span> Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={student.password}
                  onChange={handleStudentChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                  placeholder="Set a password"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Parent Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Parent Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={student.parent.name}
                  onChange={handleParentChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                  placeholder="Parent's full name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Parent Mobile
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={student.parent.mobile}
                  onChange={handleParentChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                  placeholder="Parent's mobile number"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Student Education Information
            </h2>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Add Degree</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">School</label>
                  <select
                    name="school"
                    value={newChild.school}
                    onChange={handleChildChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  >
                    <option value="">Select School</option>
                    {schools.map(school => (
                      <option key={school} value={school}>{school}</option>
                    ))}
                  </select>
                </div>

                {!isCollege ? (
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Class</label>
                    <input
                      type="text"
                      name="class"
                      value={newChild.class}
                      onChange={handleChildChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      placeholder="Class (1-12)"
                    />
                  </div>
                ) : (
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Course</label>
                    <input
                      type="text"
                      name="course"
                      value={newChild.course}
                      onChange={handleChildChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      placeholder="BCA, MCA, etc."
                    />
                  </div>
                )}

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Behavior</label>
                  <select
                    name="behavior"
                    value={newChild.behavior}
                    onChange={handleChildChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  >
                    {behaviors.map(behavior => (
                      <option key={behavior} value={behavior}>{behavior}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">GPA</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    name="gpa"
                    value={newChild.gpa}
                    onChange={handleChildChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    placeholder="0.0 - 10.0"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Attendance (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    name="attendance"
                    value={newChild.attendance}
                    onChange={handleChildChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    placeholder="0 - 100"
                  />
                </div>

                {isCollege && (
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">College Name</label>
                    <input
                      type="text"
                      name="collegeName"
                      value={newChild.collegeName}
                      onChange={handleChildChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      placeholder="Shiv Nadar University"
                    />
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={addChild}
                className="mt-3 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                Add Degree
              </button>
            </div>

            {student.children.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Added Degrees</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class/Course</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Behavior</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GPA</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {student.children.map((child, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2 whitespace-nowrap">{child.id}</td>
                          <td className="px-4 py-2 whitespace-nowrap">{child.class || child.course}</td>
                          <td className="px-4 py-2 whitespace-nowrap">{child.school}</td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${child.behavior === 'Excellent' ? 'bg-green-100 text-green-800' : 
                                child.behavior === 'Good' ? 'bg-blue-100 text-blue-800' :
                                child.behavior === 'Average' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'}`} >
                              {child.behavior}
                            </span>
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap">{child.gpa}</td>
                          <td className="px-4 py-2 whitespace-nowrap">{child.attendance}%</td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            <button
                              type="button"
                              onClick={() => removeChild(child.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 text-white text-lg font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                isSubmitting 
                  ? 'bg-orange-400 cursor-not-allowed' 
                  : 'bg-orange-600 hover:bg-orange-700'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </div>
              ) : (
                'Submit Student'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentPage;