import React, { useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const LoginPage = () => {
  const navigate = useNavigate();
  let [wrongInfo, setWrongInfo] = useState(false);
  let [userData, setUserData] = useState({
    userIdLogin: "",
    passwordLogin: "",
    professionLogin: "student",
  });
  let [userDatabase, setUserDatabase] = useState({});
  let handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  let handleWrongInfoClick = () => {
    setWrongInfo(false);
    clearInterval();
  };
  let handleLoginSubmit = async (e) => {
    e.preventDefault();
    let currentUser = null;

    if (userData.professionLogin === "student") {
      try {
        const res = await axios.get(
          `https://newserversis.onrender.com/api/student/${userData.userIdLogin}`
        );
        // console.log(res.data)
        currentUser = res.data;
      } catch (error) {
        console.error("Student not found", error);
      }
    } else if (userData.professionLogin === "teacher") {
      try {
        const res = await axios.get(
          `https://newserversis.onrender.com/api/teacher/${userData.userIdLogin}`
        );
        // console.log(res.data)
        currentUser = res.data;
      } catch (error) {
        console.error("Teacher not found", error);
      }
    } else {
      try {
        const res = await axios.get(
          `https://newserversis.onrender.com/api/admin/${userData.userIdLogin}`
        );
        // console.log(res.data)
        currentUser = res.data;
      } catch (error) {
        console.error("Teacher not found", error);
      }
      // console.log(currentUser)
    }
    // console.log(currentUser.passwordLogin)|| currentUser.password!=userData.passwordLogin
    if (!currentUser || currentUser.password!=userData.passwordLogin) {
      setWrongInfo(true);
      setTimeout(() => {
        setWrongInfo(false);
      }, 3000);
      return;
    }
    setUserDatabase(currentUser);
    sessionStorage.setItem("user", JSON.stringify(currentUser));
    // console.log(currentUser.password)
    navigate(`/home/${userData.professionLogin}`);
  };

  return (
    <div className="bg-gradient-to-b from-orange-100 to-orange-300 lg:h-[100vh] grid lg:grid-cols-2 grid-cols-1 place-items-center">
      <div className="w-full h-[45vh] lg:h-[80vh] flex flex-col items-center justify-center">
        <h1 className="px-5 lg:px-0 text-4xl  font-extrabold font-serif">
          Welcome to Fantastic World.
        </h1>
        <h2 className="text-2xl py-4 text-gray-700 lg:pl-3 w-[80%] font-bold">
          We are working for you with you to make your life better.
        </h2>
      </div>
      <form
        action="#"
        onSubmit={handleLoginSubmit}
        className="w-full border-1 p-10 mb-5 rounded-xl md:w-[90%] lg:w-3/4 h-[30rem] bg-orange-100"
      >
        <div className="flex flex-col py-4 ">
          <label htmlFor="userIdLogin" className="py-2 font-bold">
            College ID:{" "}
          </label>
          <input
            type="number"
            name="userIdLogin"
            id="userIdLogin"
            placeholder="Enter Your College Id"
            className="py-2 no-spinner [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full md:w-[80%]  lg:w-[90%]  border-1 rounded-xl px-2 bg-white "
            onChange={handleChange}
            value={userData.userIdLogin}
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="passwordLogin" className="py-2 font-bold text-left">
            Password:{" "}
          </label>
          <input
            type="password"
            name="passwordLogin"
            id="passwordLogin"
            placeholder="Enter Your Password"
            className="py-2 w-full md:w-[80%]  lg:w-[90%] border-1 rounded-xl px-2 bg-white"
            onChange={handleChange}
            value={userData.passwordLogin}
          />
        </div>
        <div className="flex flex-col py-5">
          <label htmlFor="professionLogin" className="py-2 font-bold">
            Profession:{" "}
          </label>
          <select
            className="py-2 w-full md:w-[80%] lg:w-[90%] border-1 rounded-xl bg-white"
            onChange={handleChange}
            value={userData.professionLogin}
            id="professionLogin"
            name="professionLogin"
          >
            <option value="admin">Admin</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <Link to={`/user/forgotpassword`}>
          <p className="text-blue-600 text-right pb-4">forgot password?</p>
        </Link>
        <div className="flex  justify-center">
          <Button
            name="login"
            className="px-5 bg-orange-300 w-1/2 hover:bg-orange-500 active:bg-orange-500"
          />
        </div>
      </form>
      {wrongInfo && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-orange-100 rounded-2xl shadow-2xl p-6 w-[90%] max-w-md animate-fade-in">
            <h1 className="text-3xl font-extrabold text-orange-600 mb-3">
              Stay In School
            </h1>
            <p className="text-base font-medium text-gray-700 mb-6">
              Wrong user ID or password. Please try again.
            </p>
            <button
              onClick={handleWrongInfoClick}
              className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 text-white font-semibold px-6 py-2 rounded-full shadow-md"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
