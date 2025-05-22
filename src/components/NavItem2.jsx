import React from 'react'

const NavItem2 = ({item, className=""  }) => {
  return (
    <li
      className={`list-none hover:text-yellow-400 font-bold flex-1 cursor-pointer transition duration-500 ${className}`}
    >
      {item.name} {item.children&&<i className="fa-solid fa-chevron-down"></i>}
    </li>
  );
}

export default NavItem2