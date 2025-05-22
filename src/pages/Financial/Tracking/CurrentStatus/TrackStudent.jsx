import axios from "axios";
import React, { useEffect, useState } from "react";

const TrackStudent = () => {
  let [userFinance, setUserFinance] = useState({});

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    // console.log(userData)
    let fetchFinanceData = async () => {
      let fi = await axios.get(
        `https://newserversis.onrender.com/api/finance/${userData.id}`
      );
      console.log(fi.data);
      setUserFinance(fi.data);
    };
    fetchFinanceData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 flex items-center justify-center px-6 py-10">
      <div className="bg-white max-w-3xl w-full p-8 rounded-2xl shadow-xl border border-orange-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 font-serif">
          Application Status
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Track the real-time progress of your financial support application.
        </p>

        <div className="border-t border-gray-200 pt-4 space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-700">Current Status:</span>
            <span className="bg-green-100 text-green-700 font-medium px-3 py-1 rounded-full text-sm">
              {userFinance.loanApplication &&
                userFinance.loanApplication.status}
              {/* {userFinance.loanApplication&& console.log(userFinance.loanApplication.status)} */}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-y-4 text-gray-800 text-md">
            <div className="font-semibold">Student ID:</div>
            <div className="font-mono">
              {userFinance.id}
            </div>
            <div className="font-semibold">Submitted On:</div>
            <div>
              {userFinance.loanApplication &&
                new Date(
                  userFinance.loanApplication.dateOfApplication
                ).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
            </div>

            <div className="font-semibold">Expected Update:</div>
            <div>
              {userFinance.loanApplication &&
                new Date(
                  new Date(
                    userFinance.loanApplication.dateOfApplication
                  ).getTime() +
                    7 * 24 * 60 * 60 * 1000
                ).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
            </div>
          </div>

          <hr className="my-4" />

          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h3 className="font-semibold text-orange-700 text-lg mb-2">
              Next Steps
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>
                Your application is being verified by the school authority.
              </li>
              <li>
                You will receive an SMS/email once verification is complete.
              </li>
              <li>Disbursement details will be available post-approval.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackStudent;
