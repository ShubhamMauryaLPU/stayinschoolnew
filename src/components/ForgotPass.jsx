import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPass = () => {
  let navigate=useNavigate();
  const [forgetData, setForgetData] = useState({
    userIdForgot: "",
    oldPassword: "",
    newPassword: "",
    cnewPassword: "",
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleForgetChange = (e) => {
    setForgetData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if(!forgetData.userIdForgot){
      setUser(false)
    }
    const verifyUser = async () => {
      if (forgetData.userIdForgot) {
        try {
          setLoading(true);
          const response = await axios.get(
            `https://newserversis.onrender.com/api/student/${forgetData.userIdForgot}`
          );
          setUser(response.data);
          setError("");
        } catch (err) {
          setUser(null);
          setError("User not found");
        } finally {
          setLoading(false);
        }
      }
    };

    const timer = setTimeout(() => {
      verifyUser();
    }, 500);

    return () => clearTimeout(timer);
  }, [forgetData.userIdForgot]);

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate passwords match
    if (forgetData.newPassword !== forgetData.cnewPassword) {
      setError("New passwords do not match");
      return;
    }

    // Check if user exists
    if (!user) {
      setError("Please verify your user ID first");
      return;
    }

    try {
      setLoading(true);
      // Make API call to update password
      await axios.put(`https://newserversis.onrender.com/api/student/${forgetData.userIdForgot}`, {
        password: forgetData.newPassword
      });
      
      setSuccess("Password updated successfully!");
      setForgetData({
        userIdForgot: "",
        oldPassword: "",
        newPassword: "",
        cnewPassword: "",
      });
      setUser(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update password");
    } finally {
      setLoading(false);
    }
    setTimeout(()=>{
      navigate("/");
    },2000)
    
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 flex flex-col justify-center items-center">
      <form
        action="#"
        className="w-[90%] md:w-[60%] lg:w-[40%] border rounded-xl p-6 my-10 bg-orange-100 grid grid-cols-1 lg:grid-cols-2 gap-4"
        onSubmit={handleForgotSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="userIdForgot" className="py-2 font-bold">
            College ID:
          </label>
          <input
            type="number"
            name="userIdForgot"
            id="userIdForgot"
            placeholder="Enter Your College Id"
            className="py-2 w-full border rounded-xl px-2 bg-white"
            onChange={handleForgetChange}
            value={forgetData.userIdForgot}
            required
          />
          {loading && <p className="text-blue-600">Checking user...</p>}
          {user && !loading && (
            <p className="text-green-600">
              <i className="fa-solid fa-user-check"></i> User found
            </p>
          )}
          {error && !user && !loading && (
            <p className="text-red-600">
              <i className="fa-solid fa-circle-exclamation"></i> {error}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="oldPassword" className="py-2 font-bold">
            Old Password:
          </label>
          <input
            type="password"
            name="oldPassword"
            id="oldPassword"
            className="py-2 w-full border rounded-xl px-2 bg-white"
            placeholder="Enter Old Password"
            required
            onChange={handleForgetChange}
            value={forgetData.oldPassword}
            disabled={!user}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="newPassword" className="py-2 font-bold">
            New Password:
          </label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            className="py-2 w-full border rounded-xl px-2 bg-white"
            required
            onChange={handleForgetChange}
            value={forgetData.newPassword}
            placeholder="Enter New Password"
            disabled={!user}
          />
          {forgetData.newPassword && (
            <p className="text-green-600">
              <i className="fa-solid fa-check"></i>
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="cnewPassword" className="py-2 font-bold">
            Confirm New Password:
          </label>
          <input
            type="password"
            name="cnewPassword"
            id="cnewPassword"
            className="py-2 w-full border rounded-xl px-2 bg-white"
            required
            placeholder="Confirm New Password"
            onChange={handleForgetChange}
            value={forgetData.cnewPassword}
            disabled={!user}
          />
          {forgetData.newPassword &&
            forgetData.cnewPassword &&
            (forgetData.newPassword === forgetData.cnewPassword ? (
              <p className="text-green-600">
                <i className="fa-solid fa-check-double"></i> Password Matched
              </p>
            ) : (
              <p className="text-red-600">
                <i className="fa-solid fa-xmark"></i> Password Not Matched
              </p>
            ))}
        </div>
        
        <Link to={"/"} className="self-center">
          <span className="text-blue-800 hover:underline">No need to change go back?</span>
        </Link>
        
        <div className="flex justify-center col-span-1 lg:col-span-2">
          <button
            type="submit"
            className="px-5 mt-5 py-2 bg-orange-300 w-1/2 hover:bg-orange-500 active:bg-orange-600 rounded-xl text-white font-bold disabled:opacity-50"
            disabled={loading || !user}
          >
            {loading ? "Processing..." : "Submit"}
          </button>
        </div>
        
        {error && (
          <div className="col-span-1 lg:col-span-2 text-center text-red-600">
            {error}
          </div>
        )}
        
        {success && (
          <div className="col-span-1 lg:col-span-2 text-center text-green-600">
            {success}
          </div>
        )}
      </form>
    </div>
  );
};

export default ForgotPass;