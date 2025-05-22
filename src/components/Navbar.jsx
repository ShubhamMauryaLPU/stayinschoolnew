import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import ToggleActive from "./ToggleActive";
import NavItem2 from "./NavItem2";
import navDataSimple from "../data/navbar/navItems";
import navDataAdmin from "../data/navbar/navDataAdmin";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  let [navData, setNavData] = useState([]);
  let [menu, setMenu] = useState(false);
  let [toggle, setToggle] = useState(false);
  let [child, setChild] = useState(null);
  let [user1, setUser1] = useState("");
  let [children1, setChildren1] = useState(false);
  let [indChild, setIndChild] = useState("");
  let [userProfileImage, setUserProfileImage] = useState("");
  let [notification,setNotification]=useState({});
  let navigate = useNavigate();
  let activeMenu = () => {
    setMenu((prev) => (prev = !prev));
    setToggle(false);
  };
  let checkState = (num) => {
    let childData = navData.find((item) => item.id === num);
    setChild((prev) => (prev = childData.children));
    setToggle(true);
    setMenu(false);
  };
  let checkState1 = () => {
    setToggle((prev) => !prev);
  };
  let logoHeadingMouseEnter = () => {
    setToggle(false);
  };
  const handleLogOut = () => {
    sessionStorage.clear();
    navigate("/");
  };

  let children1OnClick = (children, id) => {
    setIndChild({ children, id });
  };
  let disableIndItem = (id) => {
    indChild.id == id ? setChildren1(!children1) : setChildren1(true);
  };
  let disableMenuBar = () => {
    setMenu(false);
  };
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user")) || {};
    setUser1(userData);
    // console.log(userData)
    userData.notification&& setNotification(userData.notification)
    setUserProfileImage(userData.image || "/images/about/shubham1.png");
  }, [setUser1.image]);
  useEffect(() => {
    user1.professionLogin === "admin"
      ? setNavData(navDataAdmin)
      : setNavData(navDataSimple);
  }, [user1]);
  // console.log(userp);
  return (
    <>
      <div
        className="relative z-50 overflow-hidden py-8 lg:py-12 bg-gradient-to-br from-[#092224] via-[#0a2e32] to-[#021314] flex flex-col items-center"
        onMouseEnter={logoHeadingMouseEnter}
      >
        {/* Background elements simplified */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-overlay animate-pulse"></div>
          <div className="absolute top-1/3 right-0 w-28 h-28 bg-teal-300 rounded-full mix-blend-overlay animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-blue-300 rounded-full mix-blend-overlay animate-pulse"></div>
        </div>
        <div className="w-full max-w-7xl flex justify-between items-center px-4 relative z-10">
          {/* Left side */}
          <div className="flex-1 flex items-center">
            <div className="hidden md:flex items-center space-x-4">
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse"></div>
              <div className="h-1 w-12 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            </div>
          </div>

          {/* Center logo */}
          <div className="flex-1 flex justify-center z-50">
            <Link
              to={`/home/${user1.professionLogin}`}
              className="group relative"
            >
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl text-center font-bold font-serif tracking-wider transition-all duration-500 whitespace-nowrap group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-yellow-300 to-yellow-500">
                Stay In School
              </h1>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500 group-hover:w-full"></div>
            </Link>
          </div>

          {/* Right side Profile */}
          <div className="flex-1 flex justify-end items-center relative">
            <div className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-yellow-300 group-hover:text-white hidden md:flex lg:flex transition-colors duration-300 bell-animation"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {/* notefication */}
              <div className="fixed h-[98vh] z-1000 top-1 w-[50vh] transform right-0 bg-gradient-to-br from-[#021314] to-[#0a2e30] text-white p-4 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-teal-400/20">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-teal-400/30">
                  <h1 className="font-bold text-yellow-300 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Notifications
                  </h1>
                </div>
                <div className="space-y-3">
                  <div className="p-2 hover:bg-teal-900/30 rounded-lg transition-colors cursor-pointer">
                    <div className="flex items-start">
                      <div className="bg-yellow-400/10 p-1.5 rounded-full mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="font-semibold text-sm">
                          {notification.title}
                        </h2>
                        <p className="text-xs text-gray-300 mt-1">
                          {notification.desc}
                        </p>
                        <span className="text-xs text-teal-300 mt-1 block">
                          1 minutes ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-teal-400/30 text-center"></div>
                <div>
                <h1 className="font-bold text-blue-300 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Warning Notefication 
                  </h1>
                  <div className="space-y-3">
                  <div className="p-2 hover:bg-teal-900/30 rounded-lg transition-colors cursor-pointer">
                    <div className="flex items-start">
                      <div className="bg-yellow-400/10 p-1.5 rounded-full mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="font-semibold text-sm">
                          Attendance: {notification.warningType&&notification.warningType.attendance }
                          {/* {console.log(notification.warningType&&notification.warningType.attendance )} */}
                        </h2>
                        <h2 className="font-semibold text-sm">
                          GPA: {notification.warningType&&notification.warningType.gpa }
                          {/* {console.log(notification.warningType&&notification.warningType.attendance )} */}
                        </h2>
                        <h2 className="font-semibold text-sm">
                          Behavior: {notification.warningType&&notification.warningType.behavior }
                          {/* {console.log(notification.warningType&&notification.warningType.attendance )} */}
                        </h2>
                      
                        <span className="text-xs text-teal-300 mt-1 block">
                          1 minutes ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <Link
              to="/user/profile"
              className="flex items-center md:pl-2 lg:pl-5 group"
            >
              <div className="relative">
                {/* Notification badge */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold animate-pulse"></div>

                {/* Profile image */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-yellow-400 hover:border-white transition-all duration-300 shadow-lg group-hover:shadow-yellow-400/50 group-hover:scale-110 bg-gray-100">
                  {userProfileImage ? (
                    <img
                      src={userProfileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-700">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
      </div>

      <div className="py-3 z-10 bg-[#021314] text-white shadow-md">
        <ul className="flex pl-4 items-center space-x-6">
          <span
            className="text-2xl pl-2 cursor-pointer hover:text-yellow-400 transition"
            onClick={activeMenu}
          >
            {menu ? (
              <i className="fa-solid fa-xmark" />
            ) : (
              <i className="fa-solid fa-bars " />
            )}
          </span>
          <div className="hidden lg:flex grow space-x-4">
            {navData.map(
              (data, idx) =>
                idx < 5 && (
                  <NavItem
                    item={data}
                    key={data.id}
                    checkState={checkState}
                    checkState1={checkState1}
                  />
                )
            )}
          </div>
          <div className="hidden md:flex lg:hidden grow space-x-4">
            {navData.map(
              (data, idx) =>
                idx < 4 && (
                  <NavItem
                    item={data}
                    key={data.id}
                    checkState={checkState}
                    checkState1={checkState1}
                  />
                )
            )}
          </div>
          <div className="flex grow md:hidden lg:hidden space-x-4">
            {navData.map(
              (data, idx) =>
                idx < 2 && (
                  <NavItem
                    item={data}
                    key={data.id}
                    checkState={checkState}
                    checkState1={checkState1}
                  />
                )
            )}
          </div>
        </ul>
      </div>

      {menu && (
        <div className="py-5 bg-black w-full rounded-b-md text-white transition-all duration-300">
          <div className="flex flex-col space-y-2 md:hidden lg:hidden px-4">
            {navData.map(
              (data, idx) =>
                idx > 1 && (
                  <React.Fragment key={data.id}>
                    <Link
                      to={data.link && data.link}
                      onClick={() => data.link && setMenu(false)}
                    >
                      <NavItem2
                        item={data}
                        className="py-2 pl-2 hover:text-yellow-400 transition"
                      />
                    </Link>
                    {data.children &&
                      data.children.map((item) => (
                        <div key={item.id}>
                          <div
                            onClick={() => {
                              children1OnClick(item.children1, item.id);
                              disableIndItem(item.id);
                            }}
                          >
                            <NavItem2
                              item={item}
                              className="py-2 pl-6 font-medium hover:text-yellow-300 transition"
                            />
                          </div>
                          {children1 &&
                            indChild &&
                            indChild.id == item.id &&
                            indChild.children.map((child1) => (
                              <Link
                                key={child1.id}
                                onClick={disableMenuBar}
                                to={child1.link}
                              >
                                <NavItem2
                                  item={child1}
                                  className="py-2 pl-10 font-medium hover:text-yellow-200 transition"
                                />
                              </Link>
                            ))}
                        </div>
                      ))}
                  </React.Fragment>
                )
            )}
          </div>
          <div className="hidden flex-col md:flex lg:hidden space-y-2 px-4">
            {navData.map(
              (data, idx) =>
                idx > 3 && (
                  <React.Fragment key={data.id}>
                    <Link
                      to={data.link && data.link}
                      onClick={() => data.link && setMenu(false)}
                    >
                      <NavItem2
                        item={data}
                        className="py-2 pl-2 hover:text-yellow-400 transition"
                      />
                    </Link>
                    {data.children &&
                      data.children.map((item) => (
                        <div key={item.id}>
                          <div
                            onClick={() => {
                              children1OnClick(item.children1, item.id);
                              disableIndItem(item.id);
                            }}
                          >
                            <NavItem2
                              item={item}
                              className="py-2 pl-6 font-medium hover:text-yellow-300 transition"
                            />
                          </div>
                          {children1 &&
                            indChild &&
                            indChild.id == item.id &&
                            indChild.children.map((child1) => (
                              <Link
                                key={child1.id}
                                onClick={disableMenuBar}
                                to={child1.link}
                              >
                                <NavItem2
                                  item={child1}
                                  className="py-2 pl-10 font-medium hover:text-yellow-200 transition"
                                />
                              </Link>
                            ))}
                        </div>
                      ))}
                  </React.Fragment>
                )
            )}
          </div>

          <div className="hidden flex-col md:hidden lg:flex space-y-2 px-4">
            {navData.map(
              (data, idx) =>
                idx > 4 && (
                  <React.Fragment key={data.id}>
                    <Link to={data.link} onClick={() => setMenu(false)}>
                      <NavItem2
                        item={data}
                        className="py-2 pl-2 hover:text-yellow-400 transition"
                      />
                    </Link>
                    {data.children &&
                      data.children.map((item) => (
                        <NavItem2
                          key={item.id}
                          item={item}
                          className="py-2 pl-6 font-medium hover:text-yellow-300 transition"
                        />
                      ))}
                  </React.Fragment>
                )
            )}
          </div>

          <div className="mt-4 px-4 border-t border-gray-700 pt-4">
            <button
              onClick={handleLogOut}
              className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition duration-300 flex items-center justify-center space-x-2"
            >
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}

      {toggle && (
        <div onMouseLeave={() => setToggle(false)}>
          <ToggleActive
            setToggle={setToggle}
            child={child}
            navData={navData}
            user1={user1}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
