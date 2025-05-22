import React, { useState } from "react";
import { BadgeCheck, Clock, Loader2 } from "lucide-react";

const disbursements = [
  {
    id: 1,
    student: "Anjali Verma",
    scheme: "Merit-Based Scholarship",
    amount: 15000,
    status: "Processing",
    date: "2025-04-18",
  },
  {
    id: 2,
    student: "Mohit Raj",
    scheme: "Financial Aid",
    amount: 10000,
    status: "Approved",
    date: "2025-04-16",
  },
  {
    id: 3,
    student: "Sana Khan",
    scheme: "ST Grant",
    amount: 8000,
    status: "Pending",
    date: "2025-04-20",
  },
];

const statusStyles = {
  Approved: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Processing: "bg-blue-100 text-blue-700",
};

const statusIcons = {
  Approved: <BadgeCheck className="w-4 h-4 mr-1 text-green-600" />,
  Pending: <Clock className="w-4 h-4 mr-1 text-yellow-600" />,
  Processing: <Loader2 className="w-4 h-4 mr-1 text-blue-600 animate-spin" />,
};

const CurrentDisbAdmin = () => {
  const [search, setSearch] = useState("");

  const filtered = disbursements.filter((item) =>
    item.student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-blue-800">
        💼 Current Disbursements (Admin)
      </h2>
      <p className="text-gray-600 mb-6">
        Manage and track all ongoing disbursement processes for students.
      </p>

      <input
        type="text"
        placeholder="Search by student name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md p-2 border rounded-lg mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="overflow-x-auto rounded-xl shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Student
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Scheme
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filtered.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{item.student}</td>
                <td className="px-6 py-4">{item.scheme}</td>
                <td className="px-6 py-4">₹{item.amount.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusStyles[item.status]}`}
                  >
                    {statusIcons[item.status]} {item.status}
                  </span>
                </td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
                    Mark as Paid
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentDisbAdmin;
