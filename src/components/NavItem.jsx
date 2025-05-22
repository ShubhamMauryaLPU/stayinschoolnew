import React from "react";

const NavItem = ({ item, className = "", checkState, checkState1 }) => {
  return (
    <li
      className={`group relative list-none font-bold flex-1 cursor-pointer transition-all duration-300 ${className} z-10`}
      onMouseEnter={() => checkState(item.id)}
      onClick={() => checkState1()}
    >
      <div className="flex items-center justify-center gap-1 px-4 ">
        <span className="relative inline-block">
          <span className="block group-hover:text-yellow-400 transition-colors duration-300">
            {item.name}
          </span>
        </span>
        {item.children && (
          <i className="fa-solid fa-chevron-down text-xs ml-1 transform group-hover:rotate-180 transition-transform duration-300"></i>
        )}
      </div>
    </li>
  );
};

export default NavItem;