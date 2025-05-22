import React from "react";
import { useNavigate } from "react-router-dom";

const TechQuizz = () => {
  const navigate = useNavigate();
  
  const languages = [
    { name: "JAVA", icon: "fa-brands fa-java", path: "/learning/quizzes/technical/java", color: "bg-gradient-to-tr from-red-500 to-pink-500" },
    { name: "JAVASCRIPT", icon: "fa-brands fa-js", path: "/learning/quizzes/technical/js", color: "bg-gradient-to-tr from-yellow-400 to-yellow-500" },
    { name: "C", icon: "fa-solid fa-c", path: "/learning/quizzes/technical/c", color: "bg-gradient-to-tr from-blue-500 to-blue-700" },
    { name: "PYTHON", icon: "fa-brands fa-python", path: "/learning/quizzes/technical/python", color: "bg-gradient-to-tr from-blue-300 to-green-300" },
    { name: "PHP", icon: "fa-brands fa-php", path: "/learning/quizzes/technical/php", color: "bg-gradient-to-tr from-purple-400 to-indigo-500" },
    { name: "C++", icon: "fa-solid fa-code", path: "/learning/quizzes/technical/cpp", color: "bg-gradient-to-tr from-indigo-600 to-blue-800" },
    { name: "REACT JS", icon: "fa-brands fa-react", path: "/learning/quizzes/technical/react", color: "bg-gradient-to-tr from-cyan-400 to-cyan-600" },
    { name: "NODE JS", icon: "fa-brands fa-node", path: "/learning/quizzes/technical/node", color: "bg-gradient-to-tr from-green-400 to-green-600" },
    { name: "SQL", icon: "fa-solid fa-database", path: "/learning/quizzes/technical/sql", color: "bg-gradient-to-tr from-indigo-400 to-purple-500" },
  ];

  const handleLanguageClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-orange-700 mb-6 drop-shadow-md">Technical Quizzes</h1>
          <p className="text-xl text-orange-500 max-w-3xl mx-auto leading-relaxed">
            Boost your coding skills! Choose a language and challenge yourself with exciting quizzes.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {languages.map((language, index) => (
            <div 
              key={index}
              onClick={() => handleLanguageClick(language.path)}
              className={`${language.color} rounded-2xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-1 cursor-pointer flex flex-col items-center justify-center text-white hover:shadow-3xl`}
            >
              <i className={`${language.icon} text-7xl mb-6 animate-bounce-slow`}></i>
              <h3 className="text-xl font-semibold tracking-wide">{language.name}</h3>
              <div className="mt-4 px-6 py-2 text-black bg-white bg-opacity-30 hover:bg-opacity-40 rounded-full text-sm font-semibold backdrop-blur-sm">
                Start Quiz
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-orange-600 font-medium">Pick a technology and dive into the challenge!</p>
        </div>
      </div>
    </div>
  );
};

export default TechQuizz;
