import React from "react";
import { Clock, CalendarDays } from "lucide-react";

const remainingDisbursements = [
  {
    id: 1,
    scheme: "Merit-Based Scholarship",
    remainingAmount: 5000,
    expectedDate: "2025-05-15",
    status: "Scheduled",
  },
  {
    id: 2,
    scheme: "State Education Grant",
    remainingAmount: 8000,
    expectedDate: "Not Announced",
    status: "Not Yet Released",
  },
];

const statusStyles = {
  "Scheduled": "bg-blue-100 text-blue-700",
  "Not Yet Released": "bg-yellow-100 text-yellow-700",
};

const RemainingDisStudent = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-800 mb-2">⏳ Remaining Disbursements</h2>
      <p className="text-gray-600 mb-6">
        Here are the financial disbursements you're still eligible for but haven’t been released yet.
      </p>

      <div className="space-y-4">
        {remainingDisbursements.map((item) => (
          <div
            key={item.id}
            className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.scheme}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  Expected Date: {item.expectedDate}
                </p>
              </div>
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${statusStyles[item.status]}`}
              >
                <Clock className="w-4 h-4" />
                {item.status}
              </div>
            </div>
            <div className="text-xl font-bold text-red-600">
              ₹{item.remainingAmount.toLocaleString()} Remaining
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemainingDisStudent;
