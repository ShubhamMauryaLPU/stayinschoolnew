import React from "react";
import { CsharpVideos } from "./dataSets"; // Import C# video data
import { Link } from "react-router-dom";

const CSharpTut = () => {
  const csharpImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Csharp_Logo.png/640px-Csharp_Logo.png";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
      {CsharpVideos.map((item, idx) => (
        <Link
          to={item.url}
          key={idx}
          className="bg-gradient-to-b  from-orange-300  to-orange-100 text-yellow-900 w-full max-w-[18rem] 
                     border-2 border-yellow-900 rounded-2xl flex flex-col 
                     items-center justify-start overflow-hidden shadow-md 
                     hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
        >
          <img
            src={csharpImage} 
            alt="C# Logo"
            className="w-full h-40 object-contain p-4 bg-white"
          />
          <div className="flex items-center justify-center h-16">
            <p className="text-lg font-extrabold text-center">{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CSharpTut;
