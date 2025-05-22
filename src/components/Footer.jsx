import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-400 py-12 z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div >
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            At <strong>Stay in school</strong>, we develop innovative software tools to
            reduce student dropout rates. Our technology identifies at-risk
            students, provides personalized support, and engages communities,
            aligning with NEP 2020 goals. By leveraging data-driven insights, we
            take a holistic approach to student retention, ensuring every
            learner gets the support they need to succeed.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="grid grid-cols-2 lg:grid-cols-1">
            <li>
              <Link
                to={"/home"}
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/warning"}
                className="hover:text-white transition-colors duration-300"
              >
                Early Warning
              </Link>
            </li>
            <li>
              <Link
                to={"/community"}
                className="hover:text-white transition-colors duration-300"
              >
                Community Hub
              </Link>
            </li>
            <li>
              <Link
                to={"/learning"}
                className="hover:text-white transition-colors duration-300"
              >
                Web Learning
              </Link>
            </li>
            <li>
              <Link
                to={"/financial"}
                className="hover:text-white transition-colors duration-300"
              >
                Financial Support
              </Link>
            </li>
            <li>
              <Link
                to={"/student"}
                className="hover:text-white transition-colors duration-300"
              >
                Student Support
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="hover:text-white transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="hover:text-white transition-colors duration-300"
              >
               Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex  space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Punjab, India</p>
          <p>Jalandhar 144411</p>
          <p>Email: stayinschool@gmail.com</p>
          <p>Phone: (+91) 1400010010</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
