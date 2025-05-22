import React from "react";
import { useState, useEffect } from "react";
import TrackStudent from "./TrackStudent";
import TrackAdmin from "./TrackAdmin";
const CurrentStatus = () => {
  let [user, setUser] = useState(null);
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user")) || {};
    // console.log(userData)
    setUser(userData.professionLogin);
  }, []);
  return (
    user === "teacher" ? (
      <div className="h-[80vh] flex items-center justify-center text-red-600 text-xl font-semibold">
        Unauthorised Access
      </div>
    ) : user === "student" ? (
      <TrackStudent />
    ) : (
      <TrackAdmin />
    )
  );
  
};

export default CurrentStatus;
