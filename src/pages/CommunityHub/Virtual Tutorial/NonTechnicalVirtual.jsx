import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NonTechnicalVirtual = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const navigate = useNavigate();

  const categories = [
    {
      title: "Language Learning",
      icon: "🗣️",
      resources: [
        { name: "Duolingo", link: "https://www.duolingo.com/" },
        { name: "Memrise", link: "https://www.memrise.com/" },
        { name: "BBC Learning English", link: "https://www.bbc.co.uk/learningenglish" },
      ],
    },
    {
      title: "Creative & Skills Development",
      icon: "🎨",
      resources: [
        { name: "Skillshare", link: "https://www.skillshare.com/" },
        { name: "CreativeLive", link: "https://www.creativelive.com/" },
        { name: "MasterClass", link: "https://www.masterclass.com/" },
      ],
    },
    {
      title: "Academic & General Courses",
      icon: "📘",
      resources: [
        { name: "FutureLearn", link: "https://www.futurelearn.com/" },
        { name: "The Great Courses", link: "https://www.thegreatcourses.com/" },
        { name: "OpenLearn", link: "https://www.open.edu/openlearn/" },
        { name: "Alison", link: "https://alison.com/" },
      ],
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const toggleExpand = (idx) => {
    setExpandedCategories((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const nonTechSuggestion = () => {
    navigate('/nonTechnicalVirtual/suggestResource');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 py-10 px-6 font-sans">
      <h1 className="text-4xl font-extrabold text-center text-orange-700 mb-2">Non-Technical Resources Hub</h1>
      <p className="text-center text-gray-700 text-lg mb-6">Explore creative, language, and personal growth learning platforms</p>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full max-w-lg px-4 py-2 rounded-full border border-gray-300 shadow-md focus:outline-none"
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
        <h2 className="text-2xl font-bold mb-2">Have a non-tech resource to suggest?</h2>
        <p className="mb-4">Help others discover new skills by sharing your favorite platforms.</p>
        <button
          onClick={nonTechSuggestion}
          className="inline-block bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Suggest a Resource →
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 mt-10">© 2025 Non-Tech Resources Hub</p>
    </div>
  );
};
