import React from "react";
import { useNavigate } from "react-router-dom";

const NonTechQuizz = () => {
  let navigate = useNavigate();
  
  const navigateToQuiz = (subject) => {
    navigate(`/learning/quizzes/nontechnical/${subject}`);
  };

  const quizSubjects = [
    {
      name: "Geography",
      icon: "fa-book-atlas",
      subject: "geo",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "History",
      icon: "fa-landmark-dome",
      subject: "his",
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "General Science",
      icon: "fa-flask",
      subject: "gs",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      name: "General Knowledge",
      icon: "fa-globe",
      subject: "gk",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-orange-100 to-orange-300 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-bold py-8 mb-8 text-orange-800 drop-shadow-md">
          Choose Your Quiz Subject
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {quizSubjects.map((subject, index) => (
            <div 
              key={index}
              onClick={() => navigateToQuiz(subject.subject)}
              className={`bg-white rounded-2xl p-6 text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white hover:border-orange-500`}
            >
              <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${subject.color} text-white shadow-lg`}>
                <i className={`fa-solid ${subject.icon} text-4xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{subject.name}</h3>
              <p className="text-orange-600 font-medium">Start Quiz →</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-orange-700 italic font-medium">
            Test your knowledge and learn something new!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NonTechQuizz;