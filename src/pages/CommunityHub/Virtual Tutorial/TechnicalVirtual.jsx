import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const TechnicalVirtual = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const navigate = useNavigate();

  const categories = [
    {
      title: "Programming Tutorials",
      icon: "💻",
      resources: [
        { name: "FreeCodeCamp", link: "https://www.freecodecamp.org/" },
        { name: "The Odin Project", link: "https://www.theodinproject.com/" },
        { name: "MDN Web Docs", link: "https://developer.mozilla.org/" },
        { name: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/" },
      ],
    },
    {
      title: "Video Courses",
      icon: "🎥",
      resources: [
        { name: "Coursera", link: "https://www.coursera.org/" },
        { name: "Udemy Free Courses", link: "https://www.udemy.com/" },
        { name: "YouTube CS50", link: "https://www.youtube.com/user/cs50tv" },
        { name: "Pluralsight Free Weekends", link: "https://www.pluralsight.com/" },
      ],
    },
    {
      title: "Coding Practice",
      icon: "🧠",
      resources: [
        { name: "LeetCode", link: "https://leetcode.com/" },
        { name: "HackerRank", link: "https://www.hackerrank.com/" },
        { name: "CodeWars", link: "https://www.codewars.com/" },
        { name: "Codeforces", link: "https://codeforces.com/" },
      ],
    },
    {
      title: "Open Source",
      icon: "🐙",
      resources: [
        { name: "GitHub Education", link: "https://education.github.com/" },
        { name: "First Timers Only", link: "https://www.firsttimersonly.com/" },
        { name: "Good First Issues", link: "https://goodfirstissue.dev/" },
        { name: "Up For Grabs", link: "https://up-for-grabs.net/" },
      ],
    },
    {
      title: "Reference Books",
      icon: "📚",
      resources: [
        { name: "O'Reilly Free Books", link: "https://www.oreilly.com/library/view/temporary-access/" },
        { name: "PDF Drive", link: "https://www.pdfdrive.com/" },
        { name: "Open Library", link: "https://openlibrary.org/" },
        { name: "Google Books", link: "https://books.google.com/" },
      ],
    },
    {
      title: "Online Learning",
      icon: "🌐",
      resources: [
        { name: "edX", link: "https://www.edx.org/" },
        { name: "Khan Academy CS", link: "https://www.khanacademy.org/computing" },
        { name: "MIT OpenCourseWare", link: "https://ocw.mit.edu/" },
        { name: "Saylor Academy", link: "https://learn.saylor.org/" },
      ],
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const toggleExpand = (idx) => {
    setExpandedCategories((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };
  const technicalVirtualSuggestion=()=>{
    navigate('/technicalVirtual/suggestResource')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 py-10 px-6 font-sans">
      <h1 className="text-4xl font-extrabold text-center text-orange-700 mb-2">Technical Resources Hub</h1>
      <p className="text-center text-gray-700 text-lg mb-6">Curated collection of free resources to boost your tech skills</p>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full max-w-lg px-4 py-2 rounded-full border border-gray-300 bg-white shadow-md focus:outline-none"
        />
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category, idx) => {
          const filteredResources = category.resources.filter((res) =>
            res.name.toLowerCase().includes(searchTerm)
          );
          const showAll = expandedCategories[idx];
          const visibleResources = showAll ? filteredResources : filteredResources.slice(0, 3);

          return (
            filteredResources.length > 0 && (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center mb-3 space-x-3">
                    <div className="text-2xl bg-orange-50 p-2 rounded">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {visibleResources.map((res, i) => (
                      <li key={i}>
                        <a
                          href={res.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 text-sm cursor-pointer hover:text-orange-600 hover:underline"
                        >
                          {res.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {filteredResources.length > 3 && (
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="text-orange-600 text-sm font-medium mt-4 inline-block hover:underline hover:text-orange-700"
                  >
                    {showAll ? 'Show less resources ←' : 'View more resources →'}
                  </button>
                )}
              </div>
            )
          );
        })}
      </div>

      <div className="mt-16 bg-orange-500 text-white py-10 px-6 rounded-xl text-center max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Have a resource to suggest?</h2>
        <p className="mb-4">Help us grow this collection by submitting your favorite learning resources.</p>
        <button onClick={technicalVirtualSuggestion} className="inline-block bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          Suggest a Resource →
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 mt-10">© 2025 Tech Resources Hub</p>
    </div>
  );
};