import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const statusOptions = [
  {
    value: "Under Review",
    label: "Under Review",
    color: "bg-blue-100 text-blue-800",
  },
  {
    value: "Approved",
    label: "Approved",
    color: "bg-green-100 text-green-800",
  },
  {
    value: "Pending Docs",
    label: "Pending Documents",
    color: "bg-yellow-100 text-yellow-800",
  },
  { value: "Rejected", label: "Rejected", color: "bg-red-100 text-red-800" },
];

export default function UpdateApplication() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);
  const [status, setStatus] = useState("");
  const [adminRemarks, setAdminRemarks] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://newserversis.onrender.com/api/finance/${id}`);
        setApplication(res.data);
        setStatus(res.data.loanApplication?.status || "");
        setAdminRemarks(res.data.loanApplication?.adminRemarks || "");
      } catch (err) {
        console.error("Failed to fetch application:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      let res = await axios.put(`https://newserversis.onrender.com/api/finance/${id}`, {
        loanApplication: {
          status,
          adminRemarks,
        },
      });
      // console.log(res.data);
      navigate("/financial/tracking/status");
    } catch (err) {
      console.error("Failed to update application:", err);
      setIsUpdating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <p className="text-amber-700 font-medium">
            Loading application details...
          </p>
        </div>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold">
            !
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Application Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The requested application could not be loaded.
          </p>
          <button
            onClick={() => navigate("/financial/tracking/admin")}
            className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            Back to Applications
          </button>
        </div>
      </div>
    );
  }

  const currentStatus = statusOptions.find(
    (opt) => opt.value === application.loanApplication?.status
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Update Application
                </h1>
                <p className="text-amber-100 mt-1">{application.fullName}</p>
              </div>
              {currentStatus && (
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${currentStatus.color}`}
                >
                  {currentStatus.label}
                </span>
              )}
            </div>
          </div>

          {/* Form */}
          <div className="p-6">
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Application ID
                  </label>
                  <div className="bg-gray-50 p-2 rounded text-gray-800 font-medium">
                    {application.id}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Status
                  </label>
                  <div className="bg-gray-50 p-2 rounded text-gray-800 font-medium">
                    {application.loanApplication?.status || "N/A"}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Update Status
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {statusOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setStatus(option.value)}
                      className={`p-3 rounded-lg border transition-all ${
                        status === option.value
                          ? `border-2 border-amber-500 ${option.color.replace(
                              "bg-",
                              "bg-opacity-30 "
                            )}`
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Remarks
                </label>
                <textarea
                  value={adminRemarks}
                  onChange={(e) => setAdminRemarks(e.target.value)}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  placeholder="Enter remarks (optional)"
                />
                <p className="text-xs text-gray-500 mt-1">
                  This will be visible to the applicant.
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => navigate("/financial/tracking/admin")}
                className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                disabled={isUpdating || !status}
                className={`px-5 py-2.5 rounded-lg text-white transition-colors ${
                  isUpdating || !status
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-amber-500 hover:bg-amber-600"
                }`}
              >
                {isUpdating ? (
                  <>
                    <span className="inline-flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Saving...
                    </span>
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
