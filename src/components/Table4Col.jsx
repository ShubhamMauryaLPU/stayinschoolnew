import React, { useState } from "react";
import { schoolSubjects, collegeSubjects } from "../data/subjectData";
const Table4Col = ({
  studentData,
  behavior,
  gpa,
  attendence,
  mobile,
  name,
  school,
  aper,
}) => {
  let [subject, setSubject] = useState(null);
  let [active,setActive]=useState(false);
  let handleTableClick = (student,id) => {
    setSubject((prev)=>prev=student);
  };
  let handleDoubleClick=()=>{
    setSubject(null);
  }
  return (
    <>
      <tr
        className={`${
          (attendence && studentData.attendance < "40%") ||
          aper < "40%" ||
          (gpa && studentData.gpa < 6) ||
          (behavior && studentData.behavior != "Good")
            ? "bg-red-500"
            : ""
        }`}
        onClick={() => handleTableClick(studentData.school,studentData.id)}
        onDoubleClick={handleDoubleClick}
      >
        <td className="border-1 py-1">{studentData.id}.</td>
        <td className="border-1">
          {studentData.class ? (
            <span>class {studentData.class}</span>
          ) : (
            studentData.course
          )}
        </td>
        {school && (
          <td className="border-1">
            {studentData.school ? studentData.school : studentData.college}
          </td>
        )}
        {behavior && <td className="border-1">{studentData.behavior}</td>}
        {gpa && <td className="border-1">{studentData.gpa}</td>}
        {attendence && <td className="border-1">{studentData.attendance}</td>}
        {name && <td className="border-1">{studentData.name}</td>}
        {mobile && <td className="border-1">{studentData.mobile}</td>}
        {aper && <td className="border-1">{aper}</td>}
      </tr>
      { 
        subject &&attendence&&
        
        (subject=="College"?

        collegeSubjects.map((item)=>(
          <tr>
              <td>{item.id}</td>
              <td></td>
              <td>{item.subject}</td>
              <td>{item.marks}</td>
          </tr>
        )):
        schoolSubjects.map((item)=>(
          <tr>
              <td>{item.id}</td>
              <td></td>
              <td>{item.subject}</td>
              <td>{item.marks}</td>
          </tr>
        ))
        )
      }
    </>
  );
};

export default Table4Col;
