import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const HighSchoolVirtual = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

 

  const categories = [
    {
      title: "STEM Resources",
      icon: "🔬",
      resources: [
        { name: "Khan Academy", link: "https://www.khanacademy.org/", description: "Free online courses in math, science, and more." },
        { name: "Coursera", link: "https://www.coursera.org/", description: "Online courses from top universities and organizations." },
        { name: "edX", link: "https://www.edx.org/", description: "Free online courses and certifications in STEM." },
      ],
    },
    {
      title: "Humanities",
      icon: "📚",
      resources: [
        { name: "Project Gutenberg", link: "https://www.gutenberg.org/", description: "Free eBooks from the public domain, covering literature, history, and philosophy." },
        { name: "MIT OpenCourseWare", link: "https://ocw.mit.edu/", description: "Open access to course materials from MIT's humanities courses." },
        { name: "LitCharts", link: "https://www.litcharts.com/", description: "Literary analysis and summaries of books." },
      ],
    },
    {
      title: "College Preparation",
      icon: "🎓",
      resources: [
        { name: "College Board", link: "https://www.collegeboard.org/", description: "Resources for SAT prep, college search, and more." },
        { name: "ACT", link: "https://www.act.org/", description: "Official site for ACT test prep and college admissions." },
        { name: "The Princeton Review", link: "https://www.princetonreview.com/", description: "Test prep, college admissions advice, and scholarships." },
      ],
    },
    {
      title: "Study Tools",
      icon: "📝",
      resources: [
        { name: "Quizlet", link: "https://quizlet.com/", description: "Flashcards and study tools for various subjects." },
        { name: "Chegg Study", link: "https://www.chegg.com/study", description: "Homework help, textbook solutions, and tutoring." },
        { name: "Wolfram Alpha", link: "https://www.wolframalpha.com/", description: "Computational knowledge engine to solve math problems and more." },
      ],
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const highSchoolSuggesstion =()=>{
    navigate('/highSchoolVirtual/suggestResource')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 py-10 px-6 font-sans">
      <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-2">High School Learning Resources</h1>
      <p className="text-center text-gray-700 text-lg mb-6">A curated collection of educational resources for high school students</p>

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

          return (
            filteredResources.length > 0 && (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-xl shadow hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center mb-3 space-x-3">
                    <div className="text-2xl bg-orange-50 p-2 rounded">{category.icon}</div>
                    <h3 className="text-xl text-gray-800 font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {filteredResources.map((res, i) => (
                      <li key={i}>
                        <a
                          href={res.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 font-semibold text-sm cursor-pointer hover:text-orange-600 hover:underline"
                        >
                          {res.name}
                        </a>
                        <p className="text-gray-600 text-xs mt-1">{res.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          );
        })}
      </div>

      
      <div className="mt-16 bg-orange-500 py-10 px-6 rounded-xl text-center max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-white">Have a resource to suggest?</h2>
        <p className="mb-4 text-white">Help us grow this collection by submitting your favorite learning resources for high school students.</p>
        <button  onClick={highSchoolSuggesstion} className="inline-block bg-white  text-orange-500 px-6 py-2 rounded-full font-semibold  transition">
          Suggest a Resource →
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 mt-10">© 2025 High School Virtual Resources</p>
      
    </div>
  );
};
