import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ToggleActive = ({ child, setToggle, user1 }) => {
  const [individual, setIndividual] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [ripple, setRipple] = useState({ x: 0, y: 0, active: false });
  // console.log(user1.professionLogin)
  useEffect(() => {
    if (child.length > 0) {
      setIndividual(child[0].children1);
      setActiveCategory(child[0].id);
    }
  }, [child]);

  const handleCategoryHover = (item, e) => {
    setIndividual(item.children1);
    setActiveCategory(item.id);

    // Ripple effect position
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
    setTimeout(() => setRipple((prev) => ({ ...prev, active: false })), 500);
  };

  return (
    <div className="rounded-2xl overflow-hidden w-full flex h-[50vh] relative">
      {/* Animated background element */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="w-full h-full pattern-dots pattern-orange-500 pattern-bg-transparent 
                        pattern-opacity-20 pattern-size-4"
        ></div>
      </div>

      {/* Left Navigation Panel */}
      <div className="w-1/2 lg:w-1/4 bg-[rgb(237,197,164)] flex flex-col relative z-10">
        {child.map((item) => (
          <div
            key={item.id}
            onMouseEnter={(e) => handleCategoryHover(item, e)}
            className={`px-6 py-4 cursor-pointer relative overflow-hidden
              transition-all duration-300 ${
                activeCategory === item.id
                  ? "text-orange-900 scale-[1.02]"
                  : "text-gray-800"
              }`}
          >
            {/* Ripple effect */}
            {ripple.active && (
              <span
                className="absolute bg-white rounded-full w-20 h-20 -translate-x-1/2 -translate-y-1/2 opacity-30 animate-ripple"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                }}
              />
            )}

            {/* Animated underline */}
            <div
              className={`absolute bottom-0 left-6 right-6 h-0.5 bg-orange-700 
                            transition-all duration-500 ${
                              activeCategory === item.id
                                ? "opacity-100"
                                : "opacity-0 scale-x-0"
                            }`}
            ></div>

            {[14, 24, 34, 44, 55].includes(item.id) ? (
              user1.professionLogin == "student" && (
                // console.log(user1.id);
                <Link
                  to={`/indistudentdata/${user1.id}`}
                  className="block w-full font-medium relative z-10"
                  onClick={() => setToggle(false)}
                >
                  {item.name}
                </Link>
              )
            ) : (
              <span className="block w-full font-medium relative z-10">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Content Panel */}
      <div
        className="w-1/2 bg-[rgb(249,234,221)] p-6 grid grid-cols-1 lg:grid-cols-2 gap-4 
                     overflow-y-auto relative z-10"
      >
        {individual ? (
          individual.map((item) => (
            <Link
              to={item.link}
              key={item.name}
              onClick={() => setToggle(false)}
              className="group relative"
            >
              <div
                className="px-4 py-3 rounded-lg transition-all duration-300
                            hover:shadow-md hover:translate-x-1 hover:bg-white/50"
              >
                <span
                  className="font-medium text-gray-800 group-hover:text-orange-700 
                               transition-colors flex items-center"
                >
                  {item.name}
                  <svg
                    className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 
                             group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <div
                  className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r 
                               from-transparent via-orange-400 to-transparent opacity-0 
                               group-hover:opacity-100 transition-opacity"
                ></div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-2 flex items-center justify-center h-full">
            <p className="text-gray-500 italic animate-pulse">
              Select a category to begin
            </p>
          </div>
        )}
      </div>

      {/* Decorative Panel */}
      <div
        className="w-1/4 bg-[rgb(254,205,165)] hidden lg:flex items-center justify-center 
                      relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pattern-wavy pattern-orange-600 pattern-bg-transparent 
                        pattern-opacity-10 pattern-size-8"
        ></div>
        <div className="text-7xl opacity-10 text-black z-10 transform rotate-12">
          <i className="fas fa-compass"></i>
        </div>
      </div>
    </div>
  );
};

export default ToggleActive;
