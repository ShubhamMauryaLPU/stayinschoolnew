import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const mockApplications = [
  {
    id: "FA2025-0029",
    name: "Anjali Mehta",
    status: "Under Review",
    submittedOn: "2025-04-05",
  },
  {
    id: "FA2025-0032",
    name: "Ravi Kumar",
    status: "Approved",
    submittedOn: "2025-03-28",
  },
  {
    id: "FA2025-0035",
    name: "Sara Sheikh",
    status: "Pending Docs",
    submittedOn: "2025-04-07",
  },
];

const statusColors = {
  "Under Review": "bg-yellow-100 text-yellow-700",
  Approved: "bg-green-100 text-green-700",
  Pending: "bg-red-100 text-red-700",
};

export default function TrackAdmin() {
  const [applications, setApplications] = useState(mockApplications);

  useEffect(() => {
    let fetchFinanceData = async () => {
      let fi = await axios.get(`https://newserversis.onrender.com/api/finance`);
      // console.log(fi.data);
      setApplications(fi.data);
    };
    fetchFinanceData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-orange-200">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 font-serif">
          Financial Aid Applications
        </h1>
        <p className="text-gray-600 mb-8">
          Review submitted applications, track status, and manage student
          financial aid requests.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-700 border-t border-gray-200">
            <thead className="bg-orange-100 rounded">
              <tr>
                <th className="py-3 px-4 font-semibold">Student ID</th>
                <th className="py-3 px-4 font-semibold">Student Name</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold">Submitted On</th>
                <th className="py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr
                  key={app.id}
                  className="border-b border-gray-200 hover:bg-orange-50 transition"
                >
                  <td className="py-3 px-4 font-mono">{app.id}</td>
                  <td className="py-3 px-4">{app.fullName}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        statusColors[
                          app.loanApplication && app.loanApplication.status
                        ]
                      }`}
                    >
                      {app.loanApplication && app.loanApplication.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {app.loanApplication &&
                      new Date(
                        app.loanApplication.dateOfApplication
                      ).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                  </td>
                  <td className="py-3 flex px-4 space-x-2">
                    <Link to={`/financial/tracking/status/veiw/${app.id}`}>
                      <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition">
                        View
                      </button>
                    </Link>
                    <Link to={`/financial/tracking/status/update/${app.id}`}>
                      <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition">
                        Update
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
              {applications.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
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
