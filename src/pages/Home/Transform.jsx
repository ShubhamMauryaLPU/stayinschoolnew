import React from "react";
import Button from "../../components/Button";

const Transform = () => {
  return (
    <div className="bg-gradient-to-b from-orange-100 to-orange-300 flex justify-center py-16 px-4">
      <div className="w-full max-w-7xl bg-gray-100 rounded-3xl shadow-lg p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-700 leading-snug">
            Transform your study
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-500 mt-4 mb-6">
            with our experience management.
          </h2>
          <Button
            name={"Online Classes"}
            className="bg-yellow-200 hover:bg-yellow-400 active:bg-yellow-500 px-10 py-3 mt-4 rounded-xl text-lg transition duration-300"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center gap-8 px-4">
          <div className="flex items-start gap-6">
            <i className="fa-solid fa-arrow-up-right-dots text-4xl text-black"></i>
            <p className="text-lg text-gray-700">
              A suite of experience management tools tailored for every study
              field — catalyzing real growth.
            </p>
          </div>
          <div className="flex items-start gap-6">
            <i className="fa-solid fa-people-group text-4xl text-black"></i>
            <p className="text-lg text-gray-700">
              A dedicated team of research, design, and analytics experts,
              supporting you at every step.
            </p>
          </div>
          <div className="flex items-start gap-6">
            <i className="fa-solid fa-shield-halved text-4xl text-black"></i>
            <p className="text-lg text-gray-700">
              Industry-leading security standards to ensure data privacy and
              confidentiality as you gain insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transform;
