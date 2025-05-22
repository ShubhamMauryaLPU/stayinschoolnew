import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const PrimaryVirtual = () => {
    const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});

  const categories = [
    {
      title: "Early Learning",
      icon: "🧒",
      resources: [
        { name: "ABCmouse", link: "https://www.abcmouse.com/", description: "Early learning activities covering reading, math, science, and art for young children." },
        { name: "PBS Kids", link: "https://pbskids.org/", description: "Educational games and videos featuring popular characters like Arthur, Curious George, and more." },
        { name: "Starfall", link: "https://www.starfall.com/", description: "Interactive reading, writing, and math activities for young learners." },
      ],
    },
    {
      title: "Science and Nature",
      icon: "🌍",
      resources: [
        { name: "National Geographic Kids", link: "https://kids.nationalgeographic.com/", description: "Fun educational videos, games, and articles about animals, science, and nature." },
        { name: "Storyline Online", link: "https://storylineonline.net/", description: "Famous actors reading children's books aloud — perfect for improving listening and reading skills." },
        { name: "Ducksters", link: "https://www.ducksters.com/", description: "Kid-friendly educational site with history, geography, science, and biographies." },
      ],
    },
    {
      title: "Math and Literacy",
      icon: "🔢",
      resources: [
        { name: "Funbrain", link: "https://www.funbrain.com/", description: "Games, books, and videos that make learning fun in math, reading, and literacy." },
        { name: "Cool Math 4 Kids", link: "https://www.coolmath4kids.com/", description: "Fun math games, quizzes, and lessons designed just for kids." },
        { name: "Oxford Owl", link: "https://www.oxfordowl.co.uk/", description: "Free eBooks and educational activities from Oxford for children aged 3–11." },
      ],
    },
    {
      title: "Popular Educational Sites",
      icon: "⭐",
      resources: [
        { name: "Sesame Street", link: "https://www.sesamestreet.org/", description: "Educational videos, games, and activities with everyone's favorite Sesame Street characters." },
      ],
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const toggleExpand = (idx) => {
    setExpandedCategories((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };
  const primarySchoolSuggestion =()=>{
    navigate('/primarySchoolVirtual/suggestResource')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 py-10 px-6 font-sans">
      <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-2">Primary School Learning Resources</h1>
      <p className="text-center text-gray-700 text-lg mb-6">A curated collection of fun and educational websites for kids</p>

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
                    <h3 className="text-xl text-gray-800 font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {visibleResources.map((res, i) => (
                      <li key={i}>
                        <a
                          href={res.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 font-semibold text-sm cursor-pointer hover:text-pink-600 hover:underline"
                        >
                          {res.name}
                        </a>
                        <p className="text-gray-600 text-xs mt-1">{res.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                {filteredResources.length > 3 && (
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="text-pink-600 text-sm font-medium mt-4 inline-block hover:underline hover:text-pink-700"
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
        <p className="mb-4">Help us grow this collection by submitting your favorite learning resources for kids.</p>
        <button onClick={primarySchoolSuggestion} className="inline-block bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          Suggest a Resource → 
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 mt-10">© 2025 Primary Virtual Resources</p>
    </div>
  );
};
