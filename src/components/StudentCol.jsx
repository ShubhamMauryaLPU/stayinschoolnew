import React from "react";
import { useNavigate } from "react-router-dom";

const StudentCol = ({ studentList }) => {
  const navigate = useNavigate();

  const StudentColOnClick = () => {
    if (studentList?.id) {
      navigate(`/indistudentdata/${studentList.id}`);
    }
  };
  return (
    <tr
      className="hover:bg-orange-400 hover:cursor-pointer"
      onClick={StudentColOnClick}
      key={studentList.id}
    >
      <td className="border-1 py-1">{studentList.id}</td>
      <td className="border-1 py-1">{studentList.name}</td>
      <td className="border-1 py-1">{studentList.mobile}</td>
      <td className="border-1 py-1">{studentList.class}</td>
    </tr>
  );
};

export default StudentCol;
