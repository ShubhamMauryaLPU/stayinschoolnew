import React from "react";
import { useNavigate } from "react-router-dom";

const TechTutorialHome = () => {
  const navigate = useNavigate();

  const tutorials = [
    { name: "JAVA", icon: "fa-brands fa-java", path: "/community/onlineclasses/technical/java", color: "bg-gradient-to-tr from-red-500 to-pink-500" },
    { name: "JAVASCRIPT", icon: "fa-brands fa-js", path: "/community/onlineclasses/technical/javascript", color: "bg-gradient-to-tr from-yellow-400 to-yellow-500" },
    { name: "C++", icon: "fa-solid fa-code", path: "/community/onlineclasses/technical/cplus", color: "bg-gradient-to-tr from-indigo-600 to-blue-800" },
    { name: "C#", icon: "fa-solid fa-c", path: "/community/onlineclasses/technical/csharp", color: "bg-gradient-to-tr from-blue-600 to-purple-700" },
    { name: "PYTHON", icon: "fa-brands fa-python", path: "/community/onlineclasses/technical/python", color: "bg-gradient-to-tr from-blue-300 to-green-300" },
    { name: "PHP", icon: "fa-brands fa-php", path: "/community/onlineclasses/technical/php", color: "bg-gradient-to-tr from-purple-400 to-indigo-500" },
    { name: "REACT", icon: "fa-brands fa-react", path: "/community/onlineclasses/technical/react", color: "bg-gradient-to-tr from-cyan-400 to-cyan-600" },
    { name: "ANGULAR", icon: "fa-brands fa-angular", path: "/community/onlineclasses/technical/angular", color: "bg-gradient-to-tr from-red-600 to-red-800" },
    { name: "GO", icon: "fa-brands fa-golang", path: "/community/onlineclasses/technical/go", color: "bg-gradient-to-tr from-teal-500 to-blue-500" },
  ];

  const handleTutorialClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-300 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-sky-700 mb-6 drop-shadow-md">Technical Online Classes</h1>
          <p className="text-xl text-sky-500 max-w-3xl mx-auto leading-relaxed">
            Dive into curated video lessons and build your expertise across multiple programming languages and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {tutorials.map((tutorial, index) => (
            <div 
              key={index}
              onClick={() => handleTutorialClick(tutorial.path)}
              className={`${tutorial.color} rounded-2xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-1 cursor-pointer flex flex-col items-center justify-center text-white hover:shadow-3xl`}
            >
              <i className={`${tutorial.icon} text-7xl mb-6 animate-bounce-slow`}></i>
              <h3 className="text-xl font-semibold tracking-wide">{tutorial.name}</h3>
              <div className="mt-4 px-6 py-2 text-black bg-white bg-opacity-30 hover:bg-opacity-40 rounded-full text-sm font-semibold backdrop-blur-sm">
                Watch Now
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-sky-600 font-medium">Select a topic to begin your learning journey!</p>
        </div>
      </div>
    </div>
  );
};

export default TechTutorialHome;
