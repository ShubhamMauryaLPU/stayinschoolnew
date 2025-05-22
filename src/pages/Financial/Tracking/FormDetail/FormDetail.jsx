import React from "react";
import { useEffect, useState } from "react";
import FormStudent from "./FormStudent";
import FormAdmin from "./FormAdmin";
const FormDetail = () => {
  let [user, setUser] = useState(null);
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user")) || {};
    // console.log(userData);
    setUser(userData.professionLogin);
  }, []);
  return user === "teacher" ? (
    <div className="h-[80vh] flex items-center justify-center text-red-600 text-xl font-semibold">
      Unauthorised Access
    </div>
  ) : user === "student" ? (
    <FormStudent />
  ) : (
    <FormAdmin />
  );
};

export default FormDetail;
