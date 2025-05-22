import React, {useEffect, useState } from "react";
import Students from "./Students";
import IndiStudentData from "../EarlyWarning/IndiStudentData";
import { useParams } from "react-router-dom";
const EarlyWarning = () => {
  let params=useParams();
  let [check, setCheck] = useState("student");
  useEffect(()=>{
    let profession=params.professionLogin;
    // console.log(params);
    setCheck((prev)=>prev=profession);
  },[])
  return check == "teacher" ? <Students /> : <IndiStudentData />;
};

export default EarlyWarning;
