import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Hourglass } from "lucide-react";

export default function LoanApplicationForm() {
  const [user, setUser] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    id:"",
    fullName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    governmentId: "",
    institution: "",
    course: "",
    year: "",
    semester: "",
    cgpa: "",
    admissionType: "",
    familyIncome: "",
    guardianOccupation: "",
    accountNumber: "",
    bankName: "",
    ifsc: "",
    loanRequested: "",
    loanPurpose: "",
    incomeCertificate: null,
    annualIncomeCertificate: null,
    feeStructure: null,
    bankPassbook: null,
    photo: null,
    signature: null,
    academicRecords: [],
  });

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user")) || {};
    setUser(storedUser);

    if (storedUser) {
      setFormData((prev) => ({
        ...prev,
        id:storedUser.id,
        fullName: storedUser.name || "",
        email: storedUser.email || "",
        gender: storedUser.gender || "",
        phone: storedUser.mobile || "",
        institution: storedUser.currentCollege || "",
        course: storedUser.currentCourse || "",
        familyIncome: storedUser.currentIncome || "",
      }));
    }
  }, []);

  useEffect(() => {
    const checkExistingApplication = async () => {
      const storedUser = JSON.parse(sessionStorage.getItem("user"));
      if (storedUser?.id) {
        try {
          const response = await axios.get(
            `https://newserversis.onrender.com/api/finance/${storedUser.id}`
          );
          if (response.status === 200 && response.data) {
            setSubmitted(true);
          }
        } catch (error) {
          if (error.response && error.response.status === 404) {
            return;
          } else {
            console.error("Error checking existing application:", error);
          }
        }
      }
    };

    checkExistingApplication();
  }, []);

  const readonlyFields = [
    "fullName",
    "email",
    "gender",
    "phone",
    "institution",
    "course",
    "familyIncome",
  ];

  const isReadOnly = (fieldName) => {
    return readonlyFields.includes(fieldName) && user && user[fieldName];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isReadOnly(name)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "academicRecords" ? [...files] : files[0],
    }));
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const apId = uuidv4();
      const formPayload = new FormData();

      const dobDate = new Date(formData.dateOfBirth);
      formPayload.append("id", formData.id);
      formPayload.append("fullName", formData.fullName);
      formPayload.append("dateOfBirth", dobDate.toISOString());
      formPayload.append("gender", formData.gender);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("governmentId", formData.governmentId);

      formPayload.append("academicInfo.institution", formData.institution);
      formPayload.append("academicInfo.course", formData.course);
      formPayload.append("academicInfo.year", formData.year);
      formPayload.append("academicInfo.semester", formData.semester);
      formPayload.append("academicInfo.cgpa", formData.cgpa);
      formPayload.append("academicInfo.admissionType", formData.admissionType);

      formPayload.append("financialInfo.familyIncome", formData.familyIncome);
      formPayload.append("financialInfo.guardianOccupation", formData.guardianOccupation);
      formPayload.append("financialInfo.bankAccount.accountNumber", formData.accountNumber);
      formPayload.append("financialInfo.bankAccount.bankName", formData.bankName);
      formPayload.append("financialInfo.bankAccount.ifsc", formData.ifsc);
      formPayload.append("financialInfo.loanRequested", formData.loanRequested);
      formPayload.append("financialInfo.loanPurpose", formData.loanPurpose);

      formPayload.append("loanApplication.applicationId", apId);
      formPayload.append("loanApplication.status", "Pending");
      formPayload.append("loanApplication.dateOfApplication", new Date().toISOString());
      formPayload.append("loanApplication.approvedAmount", 0);
      formPayload.append("loanApplication.repaymentStatus", "Not Started");
      formPayload.append("loanApplication.adminRemarks", "");
      formPayload.append("loanApplication.reviewedBy", "");

      const fileFields = {
        incomeCertificate: formData.incomeCertificate,
        annualIncomeCertificate: formData.annualIncomeCertificate,
        feeStructure: formData.feeStructure,
        bankPassbook: formData.bankPassbook,
        photo: formData.photo,
        signature: formData.signature,
      };

      for (const [key, file] of Object.entries(fileFields)) {
        if (file) formPayload.append(key, file);
      }

      if (formData.academicRecords?.length > 0) {
        formData.academicRecords.forEach((file) => {
          formPayload.append("academicRecords", file);
        });
      }

      const res = await axios.post("https://newserversis.onrender.com/api/finance/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201) {
        alert("Application submitted successfully!");
        setSubmitted(true);
      } else {
        alert(`Submission failed: ${res.data.message}`);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert(
        `Submission error: ${error.response?.data?.message || error.message || "Unknown error"}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  const sections = [
    {
      title: "Personal Information",
      fields: [
        ["Full Name", "fullName", "text"],
        ["Email", "email", "email"],
        ["Date of Birth", "dateOfBirth", "date"],
        ["Gender", "gender", "select", ["Male", "Female", "Other"]],
        ["Phone Number", "phone", "tel"],
        ["Government ID", "governmentId", "text"],
      ],
    },
    {
      title: "Academic Details",
      fields: [
        ["Institution Name", "institution", "text"],
        ["Course", "course", "text"],
        ["Current Year", "year", "number"],
        ["Semester", "semester", "number"],
        ["CGPA", "cgpa", "number", null, "0.0-10.0"],
        ["Admission Type", "admissionType", "text"],
      ],
    },
    {
      title: "Financial Information",
      fields: [
        ["Family Income (₹)", "familyIncome", "number"],
        ["Guardian Occupation", "guardianOccupation", "text"],
        ["Bank Account Number", "accountNumber", "text"],
        ["Bank Name", "bankName", "text"],
        ["IFSC Code", "ifsc", "text"],
        ["Loan Amount Requested (₹)", "loanRequested", "number"],
        ["Loan Purpose", "loanPurpose", "textarea"],
      ],
    },
    {
      title: "Document Upload",
      fields: [
        ["Income Certificate", "incomeCertificate", "file"],
        ["Annual Income Certificate", "annualIncomeCertificate", "file"],
        ["Fee Structure", "feeStructure", "file"],
        ["Bank Passbook", "bankPassbook", "file"],
        ["Passport Photo", "photo", "file"],
        ["Signature", "signature", "file"],
        [
          "Academic Records (Upload all semesters)",
          "academicRecords",
          "file",
          true,
        ],
      ],
    },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 flex items-center justify-center p-5">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-2xl w-full">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Application Submitted Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for submitting your loan application. We've received your
            information and will process your request shortly. You'll receive a
            confirmation email with further details.
          </p>
          <Link to="/financial/tracking/status">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition duration-300">
              Application Already Submitted Check Status
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Student Loan Application
          </h2>
          <p className="text-gray-600">
            Please fill out the form below to apply for an educational loan
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`text-sm font-medium ${
                  index <= currentSection ? "text-orange-600" : "text-gray-500"
                }`}
              >
                {section.title}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-orange-600 h-2.5 rounded-full transition-all duration-500"
              style={{
                width: `${((currentSection + 1) / sections.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              {sections[currentSection].title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections[currentSection].fields.map(
                ([label, name, type, options, placeholder], index) => (
                  <div key={index} className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      {label}
                    </label>
                    {type === "select" ? (
                      <select
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 ${
                          isReadOnly(name)
                            ? "bg-gray-100 cursor-not-allowed"
                            : ""
                        }`}
                        required
                        disabled={isReadOnly(name)}
                      >
                        <option value={formData.gender}>
                          {formData.gender}
                        </option>
                      </select>
                    ) : type === "textarea" ? (
                      <textarea
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        rows={3}
                        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 ${
                          isReadOnly(name)
                            ? "bg-gray-100 cursor-not-allowed"
                            : ""
                        }`}
                        required
                        disabled={isReadOnly(name)}
                      />
                    ) : type === "file" ? (
                      <div className="relative">
                        <input
                          type="file"
                          name={name}
                          onChange={handleFileChange}
                          accept={
                            name === "academicRecords"
                              ? "application/pdf"
                              : "application/pdf,image/*"
                          }
                          multiple={options}
                          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                          required={currentSection === sections.length - 1}
                        />
                        {formData[name] && (
                          <span className="text-xs text-green-600 mt-1">
                            {name === "academicRecords"
                              ? `${formData[name].length} files selected`
                              : "File selected"}
                          </span>
                        )}
                      </div>
                    ) : (
                      <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 ${
                          isReadOnly(name)
                            ? "bg-gray-100 cursor-not-allowed"
                            : ""
                        }`}
                        required
                        disabled={isReadOnly(name)}
                        placeholder={placeholder}
                        min={type === "number" ? "0" : undefined}
                        step={name === "cgpa" ? "0.1" : undefined}
                      />
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex justify-between">
            {currentSection > 0 ? (
              <button
                type="button"
                onClick={prevSection}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300 flex items-center"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Previous
              </button>
            ) : (
              <div></div>
            )}

            {currentSection < sections.length - 1 ? (
              <button
                type="button"
                onClick={nextSection}
                className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300 flex items-center ml-auto"
              >
                Next
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 flex items-center ml-auto ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                } text-white rounded-lg transition duration-300`}
              >
                {isSubmitting ? (
                  <>
                    <Hourglass className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Check className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}