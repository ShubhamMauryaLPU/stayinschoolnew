import React, { useState } from "react";
import { Clock, CalendarDays, CheckCircle } from "lucide-react";

const pendingDisbursements = [
  {
    id: 1,
    student: "Priya Kumari",
    scheme: "Merit Scholarship",
    amount: 5000,
    expected: "2025-05-10",
    status: "Scheduled",
  },
  {
    id: 2,
    student: "Rahul Verma",
    scheme: "State Grant",
    amount: 7000,
    expected: "Not Announced",
    status: "Not Yet Released",
  },
];

const statusStyles = {
  "Scheduled": "bg-blue-100 text-blue-700",
  "Not Yet Released": "bg-yellow-100 text-yellow-700",
};

const RemainingDisAdmin = () => {
  const [search, setSearch] = useState("");
  const [approvedIds, setApprovedIds] = useState([]);
  const [rows, setRows] = useState(pendingDisbursements);

  const handleApprove = (id) => {
    if (!approvedIds.includes(id)) {
      // Mark as approved
      setApprovedIds((prev) => [...prev, id]);

      // Automatically remove the row after 5 seconds
      setTimeout(() => {
        setRows((prev) => prev.filter((row) => row.id !== id));
      }, 5000);
    }
  };

  const filtered = rows.filter((item) =>
    item.student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-800 mb-2">
        🧾 Remaining Disbursements (Admin)
      </h2>
      <p className="text-gray-600 mb-6">
        Track and approve pending disbursements for all eligible students.
      </p>

      <input
        type="text"
        placeholder="Search by student name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md p-2 border rounded-lg mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <div className="overflow-x-auto rounded-xl shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-purple-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Sr. No.</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Student</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Scheme</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Remaining Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Expected Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Approve</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filtered.map((item, index) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{index + 1}</td> {/* Serial Number */}
                <td className="px-6 py-4">{item.student}</td>
                <td className="px-6 py-4">{item.scheme}</td>
                <td className="px-6 py-4">₹{item.amount.toLocaleString()}</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-gray-500" />
                  {item.expected}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${statusStyles[item.status]}`}
                  >
                    <Clock className="w-4 h-4" />
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {approvedIds.includes(item.id) ? (
                    <span className="inline-flex items-center text-green-600 font-medium gap-1">
                      <CheckCircle className="w-4 h-4" /> Approved
                    </span>
                  ) : (
                    <button
                      onClick={() => handleApprove(item.id)}
                      className="bg-green-500 text-white px-3 py-1 text-sm rounded-md hover:bg-green-600 transition"
                    >
                      Approve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RemainingDisAdmin;
