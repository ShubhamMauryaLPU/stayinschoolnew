import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FormStudent() {
  let [form, setForm] = useState({
    id: "",
    submittedOn: "",
    status: "",
    documentStatus: "",
    remarks: "",
  });

  useEffect(() => {
    let userData = JSON.parse(sessionStorage.getItem("user"));
    let finData = async () => {
      let st = await axios.get(
        `https://newserversis.onrender.com/api/finance/${userData.id}`
      );
      const { id, loanApplication, verification } = st.data;
      setForm({
        id: id,
        submittedOn: loanApplication.dateOfApplication,
        status: loanApplication.status,
        documentStatus: verification.verificationStatus,
        remarks: loanApplication.adminRemarks,
      });
    };
    finData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Your Form Details
        </h2>
        <p className="text-gray-600 mb-6">
          Review your application information below:
        </p>

        <div className="space-y-4 text-gray-700 text-base">
          <div>
            <strong>Application ID:</strong> {form.id}
          </div>
          <div>
            <strong>Submitted On:</strong> {form.submittedOn}
          </div>
          <div>
            <strong>Status:</strong>{" "}
            <span className="text-green-600 font-semibold">{form.status}</span>
          </div>
          <div>
            <strong>Document Verification:</strong> {form.documentStatus}
          </div>
          <div>
            <strong>Remarks:</strong>
            <p className="mt-1 p-3 rounded-md bg-orange-50 border border-orange-200">
              {form.remarks}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
