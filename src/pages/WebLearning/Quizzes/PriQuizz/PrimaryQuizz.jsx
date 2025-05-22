import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrimaryQuizz = () => {
  const navigate = useNavigate();

  const subjects = [
    { name: 'Hindi', icon: 'fa-language', path: 'hindi' },
    { name: 'English', icon: 'fa-book', path: 'english' },
    { name: 'Science', icon: 'fa-flask', path: 'science' },
    { name: 'Social Science', icon: 'fa-earth-asia', path: 'social' },
    { name: 'Computer Science', icon: 'fa-laptop-code', path: 'computer' },
    { name: 'General Knowledge', icon: 'fa-lightbulb', path: 'gk' },
  ];

  const handleNavigate = (path) => {
    navigate(`/learning/quizzes/primschool/${path}`);
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-b from-orange-100 to-orange-300 p-6">
      <h1 className="text-center text-4xl font-extrabold text-orange-700 py-8 drop-shadow-md">
        Choose Subject for Primary School Quiz
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {subjects.map((subject, index) => (
          <div
            key={index}
            onClick={() => handleNavigate(subject.path)}
            className="w-44 h-44 bg-white rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-center items-center cursor-pointer group"
          >
            <i className={`fa-solid ${subject.icon} text-6xl text-orange-500 group-hover:text-orange-600 mb-4 transition-colors duration-300`}></i>
            <p className="font-bold text-orange-700 text-center group-hover:text-orange-800">{subject.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrimaryQuizz;
