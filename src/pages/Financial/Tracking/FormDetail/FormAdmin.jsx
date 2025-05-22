import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FormAdmin() {
  const [search, setSearch] = useState("");
  let [dummyForms, setDummyForms] = useState([
    {
      id: "FA2025-0011",
      name: "Neha Sharma",
      district: "Bhopal",
      status: "Approved",
      submittedOn: "April 1, 2025",
    },
    {
      id: "FA2025-0012",
      name: "Ravi Meena",
      district: "Gwalior",
      status: "Under Review",
      submittedOn: "April 3, 2025",
    },
    {
      id: "FA2025-0013",
      name: "Aarti Yadav",
      district: "Indore",
      status: "Rejected",
      submittedOn: "April 5, 2025",
    },
    // ...more records
  ]);
  const filtered = dummyForms;
  useEffect(() => {
    let fetchStuent = async () => {
      let st = await axios.get(`https://newserversis.onrender.com/api/finance`);
      // console.log(st.data);
      setDummyForms(st.data);
    };
    fetchStuent();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 px-6 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Student Applications
        </h2>

        <input
          type="text"
          placeholder="Search by Name or Application ID..."
          className="w-full border border-gray-300 px-4 py-2 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-orange-200 text-gray-800">
                <th className="p-3">Student. ID</th>
                <th className="p-3">Name</th>
                {/* <th className="p-3">District</th> */}
                <th className="p-3">Status</th>
                <th className="p-3">Submitted</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((form, index) => (
                <tr key={index} className="border-t hover:bg-orange-50">
                  <td className="p-3 font-mono">{form.id}</td>
                  <td className="p-3">{form.fullName}</td>
                  {/* <td className="p-3">{form.district}</td> */}
                  <td className="p-3 font-semibold text-green-600">
                    {form.loanApplication &&form.loanApplication.status}
                  </td>
                  <td className="p-3">
                    {" "}
                    {form.loanApplication &&
                      new Date(
                        form.loanApplication.dateOfApplication
                      ).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                  </td>
                  <td className="p-3">
                    <Link to={`/financial/tracking/status/veiw/${form.id}`}>
                      <button
                      className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-1 rounded-lg"
                    >
                      View Detail
                    </button>
                    </Link>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td className="p-3 text-gray-500 italic" colSpan={6}>
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
