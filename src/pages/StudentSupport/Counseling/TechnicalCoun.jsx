import { FaCode, FaBook, FaVideo, FaLaptopCode, FaChalkboardTeacher, FaGithub, FaSearch, FaArrowRight } from 'react-icons/fa';
import { SiLeetcode, SiCoursera, SiUdemy } from 'react-icons/si';

const TechnicalResources = () => {
  const categories = [
    {
      title: "Programming Tutorials",
      icon: <FaLaptopCode className="text-4xl text-blue-600" />,
      resources: [
        { name: "FreeCodeCamp", url: "https://www.freecodecamp.org/" },
        { name: "The Odin Project", url: "https://www.theodinproject.com/" },
        { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
      ]
    },
    {
      title: "Video Courses",
      icon: <FaVideo className="text-4xl text-red-600" />,
      resources: [
        { name: "Coursera", url: "https://www.coursera.org/", icon: <SiCoursera className="text-blue-600" /> },
        { name: "Udemy Free Courses", url: "https://www.udemy.com/courses/free/", icon: <SiUdemy className="text-red-500" /> },
        { name: "YouTube CS50", url: "https://www.youtube.com/c/cs50" },
      ]
    },
    {
      title: "Coding Practice",
      icon: <FaCode className="text-4xl text-emerald-600" />,
      resources: [
        { name: "LeetCode", url: "https://leetcode.com/", icon: <SiLeetcode className="text-orange-500" /> },
        { name: "HackerRank", url: "https://www.hackerrank.com/" },
        { name: "CodeWars", url: "https://www.codewars.com/" },
      ]
    },
    {
      title: "Open Source",
      icon: <FaGithub className="text-4xl text-gray-800" />,
      resources: [
        { name: "GitHub Education", url: "https://education.github.com/" },
        { name: "First Timers Only", url: "https://www.firsttimersonly.com/" },
        { name: "Good First Issues", url: "https://goodfirstissues.com/" },
      ]
    },
    {
      title: "Reference Books",
      icon: <FaBook className="text-4xl text-amber-600" />,
      resources: [
        { name: "O'Reilly Free Books", url: "https://www.oreilly.com/free/" },
        { name: "PDF Drive", url: "https://www.pdfdrive.com/" },
        { name: "Open Library", url: "https://openlibrary.org/" },
      ]
    },
    {
      title: "Online Learning",
      icon: <FaChalkboardTeacher className="text-4xl text-indigo-600" />,
      resources: [
        { name: "edX", url: "https://www.edx.org/" },
        { name: "Khan Academy CS", url: "https://www.khanacademy.org/computing" },
        { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
              Technical Resources Hub
            </span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-700">
            Curated collection of free resources to boost your tech skills
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg text-gray-700 placeholder-gray-400"
            />
            <button className="absolute right-2 bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 transition duration-200 shadow-md">
              <FaSearch className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-white hover:border-orange-200"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-orange-50">
                    {category.icon}
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-gray-800">{category.title}</h2>
                </div>
                <ul className="space-y-3">
                  {category.resources.map((resource, idx) => (
                    <li key={idx}>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-orange-600 hover:underline group"
                      >
                        {resource.icon && <span className="mr-3 group-hover:scale-110 transition-transform">{resource.icon}</span>}
                        <span className="group-hover:font-medium">{resource.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-orange-50 border-t border-orange-100">
                <a
                  href="#"
                  className="flex items-center text-sm font-medium text-orange-600 hover:text-orange-700"
                >
                  View more resources <FaArrowRight className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-12 sm:p-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Have a resource to suggest?
              </h2>
              <p className="mt-4 text-lg text-orange-100">
                Help us grow this collection by submitting your favorite learning resources.
              </p>
              <div className="mt-8">
                <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-orange-700 bg-white hover:bg-orange-50 transition duration-200 shadow-lg hover:shadow-xl">
                  Suggest a Resource
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-600">
          <p>Updated daily with the best free technical resources</p>
          <p className="mt-2 text-sm">© {new Date().getFullYear()} Tech Resources Hub</p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalResources;