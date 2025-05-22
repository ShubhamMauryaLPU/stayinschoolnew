import React from 'react';
import { useNavigate } from 'react-router-dom';

const HighQuizz = () => {
  const navigate = useNavigate();
  
  const quizSubjects = [
    {
      name: "Hindi",
      icon: "fa-language",
      path: "hindi",
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "English",
      icon: "fa-book-open-reader",
      path: "english",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Science",
      icon: "fa-flask",
      path: "science",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Social Science",
      icon: "fa-globe-asia",
      path: "social",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Computer Science",
      icon: "fa-laptop-code",
      path: "computer",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-[90vh] bg-gradient-to-b from-orange-100 to-orange-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-12 text-orange-800 drop-shadow-md">
          High School Quiz Subjects
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {quizSubjects.map((subject, index) => (
            <div 
              key={index}
              onClick={() => navigate(`/learning/quizzes/highschool/${subject.path}`)}
              className="bg-white rounded-xl p-6 text-center cursor-pointer transition-all duration-300 
              hover:scale-105 hover:shadow-xl border-2 border-white hover:border-orange-400"
            >
              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 
                bg-gradient-to-br ${subject.color} text-white shadow-md`}>
                <i className={`fa-solid ${subject.icon} text-3xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{subject.name}</h3>
              <p className="text-sm text-orange-600 font-medium">Start Quiz →</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-orange-700 italic font-medium">
            Challenge yourself with these high school subjects!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighQuizz;