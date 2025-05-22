import React from "react";
import Button from "../../components/Button";
const Hero = () => {
  return (
    <div className=" w-full flex flex-wrap bg-gradient-to-b from-orange-100 to-orange-300 ">
      <div className="  w-full md:w-full  lg:w-1/2  px-10 mt-10 ">
        <h1 className=" font-bold text-4xl font-serif text-gray-900">
          know more , Do better.
        </h1>
        <h4 className="text-lg lg:pl-2 font-serif py-4 text-gray-900">
          Don't give up early. We are very confident that we shall help to
          achieve every goal in your life and become successful.
        </h4>
        <p className="font-bold text-xl text-gray-800">
          Take Our Help to grow fastly and Better Way.
        </p>
        <span className="grid grid-cols-2 my-3">
            <Button name="Reading Material" className=" my-2 min-w-40 lg:min-w-50 " />
            <Button name="Online Classes" className=" m-2 min-w-40 lg:min-w-50 "/>
            <Button name="Quizzes" className=" my-2 min-w-40 lg:min-w-50 "/>
            <Button name="Academic goals" className=" m-2 min-w-40 lg:min-w-50 " />
        </span>
      </div>
      <div className=" w-full md:w-full lg:w-1/2">
        <video className="min-w-full min-h-full" autoPlay muted loop loading="lazy">
          <source src="/video/school.mp4" type="video/mp4" />
          <source src="video/school.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
