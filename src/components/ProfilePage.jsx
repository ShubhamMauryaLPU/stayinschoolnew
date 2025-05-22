import React, { useState, useEffect } from "react";
import StudentProfilePage from "./StudentProfilePage";
import TeacherProfilePage from "./TeacherProfilePage";
import AdminProfilePage from "./AdminProfilePage";

const ProfilePage = () => {
  let [user, setUser] = useState({});
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user")) || {};
    // console.log(userData)
    setUser(userData);
  }, []);
  if(user.professionLogin=="student"){
    return(<StudentProfilePage />)
  }
  if(user.professionLogin=="teacher"){
    return(<TeacherProfilePage/>)
  }
  return <AdminProfilePage />;
};
export default ProfilePage;