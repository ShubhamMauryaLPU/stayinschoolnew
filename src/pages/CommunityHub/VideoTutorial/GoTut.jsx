import React from "react";
import { GoVideos } from "./dataSets"; // Import Go video data
import { Link } from "react-router-dom";

const GoTut = () => {
    const goImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Go_Logo_LightBlue.svg/640px-Go_Logo_LightBlue.svg.png";

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
            {GoVideos.map((item, idx) => (
                <Link
                    to={item.url}
                    key={idx}
                    className="bg-gradient-to-b  from-orange-300  to-orange-100 text-orange-900 w-full max-w-[18rem] 
                     border-2 border-yellow-900 rounded-2xl flex flex-col 
                     items-center justify-start overflow-hidden shadow-md 
                     hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                >
                    <img
                        src={goImage}
                        alt="Go Logo"
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

export default GoTut;
