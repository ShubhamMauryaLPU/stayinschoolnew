import React, { useState } from "react";
import Button from "./Button";

const ContactUs = () => {
    let [contact,setContact]=useState({
      contactEmail:"",
      contactDescription:""
    });
    let handleContactChange=(e)=>{
      setContact((prev)=>(
        {...prev,[e.target.name]:e.target.value}
      ))
    }
  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(contact);
    setContact({
      contactEmail:"",
      contactDescription:""
    })
  };
  return (
    <div className="bg-gradient-to-b from-orange-100 to-orange-300 min-h-[100vh] flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-7xl text-black ">Contact Us </h1>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
        Hope, you found yourself well. If you have any question related to me
        which find me helpful or do you kindlly share with me via email
      </p>
      <div className="mt-3 w-[45%]">
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="contactEmail"
            name="contactEmail"
            id="contactEmail"
            onChange={handleContactChange}
            value={contact.contactEmail}
            placeholder="Enter Your Email"
            className="py-2 px-2 bg-black w-full text-white rounded"
          />
          <textarea
            name="contactDescription"
            id="contactDescription"
            className=" w-full border px-2 bg-black mt-3 rounded text-white"
            rows={7}
            onChange={handleContactChange}
            value={contact.contactDescription}
            placeholder="Enter Your Query"
          ></textarea>

          <div className="text-center">
            <Button
              name={"Submit"}
              className="px-4 my-3 w-1/2 bg-orange-400 hover:bg-orange-600 "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
