import React from "react";
import { useNavigate } from "react-router-dom";
const NonTechTutorial = () => {
  let navigate = useNavigate();
  const subjects = [
    { name: "ENGLISH", icon: "fa-solid fa-book-open", path: "/community/onlineclasses/nontechnical/english", color: "bg-gradient-to-tr from-pink-400 to-pink-600" },
    { name: "HINDI", icon: "fa-solid fa-language", path: "/community/onlineclasses/nontechnical/hindi", color: "bg-gradient-to-tr from-yellow-400 to-yellow-600" },
    { name: "MATHS", icon: "fa-solid fa-square-root-variable", path: "/community/onlineclasses/nontechnical/maths", color: "bg-gradient-to-tr from-blue-500 to-indigo-600" },
    { name: "SOCIAL SCIENCE", icon: "fa-solid fa-landmark", path: "/community/onlineclasses/nontechnical/socialscience", color: "bg-gradient-to-tr from-green-400 to-green-600" },
    { name: "FASHION DESIGN", icon: "fa-solid fa-scissors", path: "/community/onlineclasses/nontechnical/fashiondesign", color: "bg-gradient-to-tr from-purple-400 to-purple-600" },
    { name: "LAW", icon: "fa-solid fa-scale-balanced", path: "/community/onlineclasses/nontechnical/law", color: "bg-gradient-to-tr from-red-500 to-red-700" },
    { name: "BBA", icon: "fa-solid fa-briefcase", path: "/community/onlineclasses/nontechnical/bba", color: "bg-gradient-to-tr from-teal-400 to-teal-600" },
  ];

  const handleSubjectClick = (path) => {
    navigate(path);
  };
  return (<div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-300 py-10 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-5xl font-extrabold text-purple-700 mb-6 drop-shadow-md">Non-Technical Online Classes</h1>
      <p className="text-xl text-purple-500 max-w-3xl mx-auto leading-relaxed">
        Sharpen your academic knowledge! Choose a subject and take a quiz to test your understanding.
      </p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {subjects.map((subject, index) => (
        <div 
          key={index}
          onClick={() => handleSubjectClick(subject.path)}
          className={`${subject.color} rounded-2xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-1 cursor-pointer flex flex-col items-center justify-center text-white hover:shadow-3xl`}
        >
          <i className={`${subject.icon} text-7xl mb-6 animate-bounce-slow`}></i>
          <h3 className="text-xl font-semibold tracking-wide">{subject.name}</h3>
          <div className="mt-4 px-6 py-2 text-black bg-white bg-opacity-30 hover:bg-opacity-40 rounded-full text-sm font-semibold backdrop-blur-sm">
            Start Tutorial
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 text-center">
      <p className="text-lg text-purple-600 font-medium">Pick a subject and Transform your Study!</p>
    </div>
  </div>
</div>);
};

export default NonTechTutorial;
