import React from 'react';
import { useNavigate } from 'react-router-dom';

const resources = {
  "Programming PDFs & eBooks": [
    {
      title: "Python Programming",
      description: "Complete Python guide with libraries like NumPy and Pandas.",
      link: "https://docs.python-guide.org/",
      iconClass: "fa-solid fa-book"
    },
    {
      title: "Java OOP eBook",
      description: "Understand Java with object-oriented programming examples.",
      link: "https://www.tutorialspoint.com/java/pdf/java_tutorial.pdf",
      iconClass: "fa-solid fa-book"
    },
  ],
  "Documentation & Tutorials": [
    {
      title: "MDN HTML Docs",
      description: "HTML reference and tutorials from Mozilla.",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      iconClass: "fa-solid fa-file-code"
    },
    {
      title: "React Official Docs",
      description: "Build powerful UIs with React.",
      link: "https://reactjs.org/docs/getting-started.html",
      iconClass: "fa-brands fa-react"
    },
    {
      title: "MongoDB Docs",
      description: "Build scalable databases with MongoDB.",
      link: "https://www.mongodb.com/docs/",
      iconClass: "fa-solid fa-database"
    },
  ],
  "Cheat Sheets & References": [
    {
      title: "JavaScript Cheat Sheet",
      description: "Quick reference for JS syntax and functions.",
      link: "https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1206/handouts/07-JavaScriptCheatSheet.pdf",
      iconClass: "fa-solid fa-code"
    },
    {
      title: "Git Cheat Sheet",
      description: "All Git commands at a glance.",
      link: "https://education.github.com/git-cheat-sheet-education.pdf",
      iconClass: "fa-brands fa-git-alt"
    },
  ],
  "Technical Blogs & Articles": [
    {
      title: "CSS Tricks",
      description: "Popular blog for advanced CSS layouts and animations.",
      link: "https://css-tricks.com/",
      iconClass: "fa-brands fa-css3-alt"
    },
    {
      title: "FreeCodeCamp Articles",
      description: "Wide range of tutorials and tech blogs.",
      link: "https://www.freecodecamp.org/news/",
      iconClass: "fa-brands fa-free-code-camp"
    },
  ]
};

const ResourceCard = ({ title, description, link, iconClass }) => (
  <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-64">
    <div>
      <div className="flex items-center gap-3 mb-3">
        <i className={`${iconClass} text-orange-500 text-2xl bg-orange-50 p-4`}></i>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-center mt-4 text-orange-600 font-medium hover:underline">
      View Resource
    </a>
  </div>
);

export const TechnicalRead = () => {
  const navigate = useNavigate();
  const technicalReadSuggestion =()=>{
    navigate('/technicalRead/suggestResource')
  }
  return (
    <div className="bg-gradient-to-br from-orange-100 to-orange-300 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-10">📘 Technical Resources</h2>
        {Object.entries(resources).map(([category, items], i) => (
          <section key={i} className="mb-12 p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-5">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <ResourceCard key={index} {...item} />
              ))}
            </div>
          </section>
        ))}
        
      </div>
      <div className="mt-16 bg-orange-500 text-white py-10 px-6 rounded-xl text-center max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Have a resource to suggest?</h2>
        <p className="mb-4">Help us grow this collection by submitting your favorite learning resources.</p>
        <button onClick={technicalReadSuggestion}  className="inline-block bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          Suggest a Resource →
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 mt-10">© 2025 Tech Resources Hub</p>
      
    </div>
  );
};
