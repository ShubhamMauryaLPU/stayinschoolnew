import React from "react";
import { NonTechSubjects } from "./nontechVideoesData"; // Importing the NonTechSubjects data
import { Link } from "react-router-dom";

const EnglishTut = () => {
  const englishImage = "https://upload.wikimedia.org/wikipedia/commons/4/46/English_language_logo.svg"; // English logo

  return (
    <div>
      {NonTechSubjects.filter(subject => subject.subject === "अंग्रेज़ी").map((subject, idx) => (
        <div key={idx}>
          <h2 className="text-2xl font-bold text-center my-4">{subject.subject}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
            {subject.tutorials.map((item, idx) => (
              <Link
                to={item.url}
                key={idx}
                className="bg-gradient-to-b from-orange-300 text-yellow-900 w-full max-w-[18rem] 
                           border-2 border-yellow-900 rounded-2xl flex flex-col 
                           items-center justify-start overflow-hidden shadow-md 
                           hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={englishImage}
                  alt="English Logo"
                  className="w-full h-40 object-contain p-4 bg-white"
                  loading="lazy"
                />
                <div className="flex items-center justify-center h-16">
                  <p className="text-lg font-extrabold text-center">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnglishTut;
