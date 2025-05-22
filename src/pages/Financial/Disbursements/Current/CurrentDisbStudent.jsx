import React from "react";
import { BadgeCheck, Clock, Loader2 } from "lucide-react";

const currentDisbursements = [
  {
    id: 1,
    scheme: "Merit-Based Scholarship",
    amount: 15000,
    status: "Approved",
    date: "2025-04-18",
  },
  {
    id: 2,
    scheme: "Financial Aid",
    amount: 10000,
    status: "Processing",
    date: "2025-04-20",
  },
];

const statusStyles = {
  Approved: "bg-green-100 text-green-700",
  Processing: "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

const statusIcons = {
  Approved: <BadgeCheck className="w-5 h-5 text-green-600" />,
  Processing: <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />,
  Pending: <Clock className="w-5 h-5 text-yellow-600" />,
};

const CurrentDisbStudent = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-800 mb-2">🎓 Your Disbursements</h2>
      <p className="text-gray-600 mb-6">
        View the status of your currently approved or in-process financial disbursements.
      </p>
      <div className="space-y-4">
        {currentDisbursements.map((item) => (
          <div
            key={item.id}
            className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.scheme}</h3>
                <p className="text-sm text-gray-500">Disbursement Date: {item.date}</p>
              </div>
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${statusStyles[item.status]}`}
              >
                {statusIcons[item.status]}
                {item.status}
              </div>
            </div>
            <div className="text-xl font-bold text-green-700">
              ₹{item.amount.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentDisbStudent;
 