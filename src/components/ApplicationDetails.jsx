import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FiArrowLeft, FiFileText, FiDollarSign, FiBook, FiCheckCircle, FiUser, FiCreditCard } from "react-icons/fi";

export default function ApplicationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("personal");

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await axios.get(`https://newserversis.onrender.com/api/finance/${id}`);
        setApplication(res.data);
      } catch (err) {
        console.error("Error fetching application:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchApplication();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-50 to-amber-100">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-amber-200 h-12 w-12"></div>
        </div>
        <p className="mt-4 text-lg font-medium text-amber-800">Loading application details...</p>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="h-screen bg-gradient-to-b from-orange-100 to-orange-300 flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
          <h1 className="text-3xl font-bold text-amber-700 mb-4">Application Not Found</h1>
          <p className="text-gray-600 mb-6">The application you're looking for doesn't exist or may have been removed.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const { academicInfo, financialInfo, bankAccount, documents, loanApplication, verification } = application;

  const renderDocLink = (label, filename) =>
    filename ? (
      <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
        <FiFileText className="text-amber-600 mr-3" />
        <a
          href={`https://newserversis.onrender.com/uploads/documents/${filename}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-700 hover:underline flex-1"
        >
          {label}
        </a>
        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
          View
        </span>
      </div>
    ) : null;

  const statusColor = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'approved': 'bg-green-100 text-green-800',
    'rejected': 'bg-red-100 text-red-800',
    'under review': 'bg-blue-100 text-blue-800'
  }[loanApplication?.status?.toLowerCase()] || 'bg-gray-100 text-gray-800';

  const TabButton = ({ name, icon }) => (
    <button
      onClick={() => setActiveTab(name)}
      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${activeTab === name ? 'bg-amber-500 text-white' : 'text-gray-600 hover:bg-amber-50'}`}
    >
      {icon}
      <span className="ml-2">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-amber-700 hover:text-amber-900 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Applications
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-white">{application.fullName}</h1>
                <p className="text-amber-100">{application.email}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}>
                  {loanApplication?.status}
                </span>
                <span className="mt-2 text-white text-sm">
                  ID: {loanApplication?.applicationId}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
              <TabButton name="personal" icon={<FiUser />} />
              <TabButton name="academic" icon={<FiBook />} />
              <TabButton name="financial" icon={<FiDollarSign />} />
              <TabButton name="loan" icon={<FiCreditCard />} />
              <TabButton name="verification" icon={<FiCheckCircle />} />
              <TabButton name="documents" icon={<FiFileText />} />
            </div>

            {activeTab === "personal" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">Basic Details</h3>
                  <div className="space-y-3">
                    <DetailItem label="Full Name" value={application.fullName} />
                    <DetailItem label="Email" value={application.email} />
                    <DetailItem label="Phone" value={application.phone} />
                    <DetailItem label="Gender" value={application.gender} />
                    <DetailItem label="Date of Birth" value={new Date(application.dateOfBirth).toLocaleDateString("en-IN")} />
                    <DetailItem label="Government ID" value={application.governmentId} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "academic" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">Education Details</h3>
                  <div className="space-y-3">
                    <DetailItem label="Institution" value={academicInfo.institution} />
                    <DetailItem label="Course" value={academicInfo.course} />
                    <DetailItem label="Year" value={academicInfo.year} />
                    <DetailItem label="Semester" value={academicInfo.semester} />
                    <DetailItem label="CGPA" value={academicInfo.cgpa} />
                    <DetailItem label="Admission Type" value={academicInfo.admissionType} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "financial" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">Financial Information</h3>
                  <div className="space-y-3">
                    <DetailItem label="Family Income" value={`₹${financialInfo.familyIncome} LPA`} />
                    <DetailItem label="Guardian Occupation" value={financialInfo.guardianOccupation} />
                    <DetailItem label="Loan Requested" value={`₹${financialInfo.loanRequested}`} />
                    <DetailItem label="Loan Purpose" value={financialInfo.loanPurpose} />
                    <DetailItem label="Repayment Capacity" value={`₹${financialInfo.repaymentCapacityEstimate}`} />
                    <DetailItem label="Previous Aid" value={financialInfo.previousAid} />
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">Bank Details</h3>
                  <div className="space-y-3">
                    <DetailItem label="Bank Name" value={financialInfo.bankAccount.bankName} />
                    <DetailItem label="Account Number" value={financialInfo.bankAccount.accountNumber} />
                    <DetailItem label="IFSC Code" value={financialInfo.bankAccount.ifsc} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "loan" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">Loan Application</h3>
                  <div className="space-y-3">
                    <DetailItem label="Applied On" value={new Date(loanApplication.dateOfApplication).toLocaleString("en-IN")} />
                    <DetailItem label="Status" value={loanApplication.status} />
                    <DetailItem label="Approved Amount" value={`₹${loanApplication.approvedAmount}`} />
                    <DetailItem label="Repayment Status" value={loanApplication.repaymentStatus} />
                    <DetailItem label="Admin Remarks" value={loanApplication.adminRemarks || "N/A"} />
                    <DetailItem label="Reviewed By" value={loanApplication.reviewedBy || "N/A"} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "verification" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">Verification Details</h3>
                  <div className="space-y-3">
                    <DetailItem label="Eligibility Score" value={verification.eligibilityScore} />
                    <DetailItem label="Status" value={verification.verificationStatus} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">Uploaded Documents</h3>
                  <div className="space-y-3">
                    {renderDocLink("Income Certificate", documents.incomeCertificate)}
                    {renderDocLink("Fee Structure", documents.feeStructure)}
                    {renderDocLink("Bonafide Certificate", documents.bonafide)}
                    {renderDocLink("Bank Passbook", documents.bankPassbook)}
                    {renderDocLink("Photo", documents.photo)}
                    {renderDocLink("Signature", documents.signature)}
                    {application.academicRecords?.map((doc, i) =>
                      renderDocLink(`Academic Record ${i + 1}`, doc)
                    )}
                    {renderDocLink("Annual Income Certificate", financialInfo.annualIncomeCertificate)}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const DetailItem = ({ label, value }) => (
  <div className="flex justify-between border-b border-gray-100 pb-2">
    <span className="text-gray-600 font-medium">{label}</span>
    <span className="text-gray-800 font-semibold">{value}</span>
  </div>
);