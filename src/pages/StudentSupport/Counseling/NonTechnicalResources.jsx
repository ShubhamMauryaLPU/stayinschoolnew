import { FaPenFancy, FaBrain, FaChartLine, FaLanguage, FaBookOpen, FaLightbulb, FaMicrophone, FaSearch, FaArrowRight } from 'react-icons/fa';
import { SiCoursera, SiUdemy, SiTed } from 'react-icons/si';

const NonTechnicalResources = () => {
  const categories = [
    {
      title: "Writing & Communication",
      icon: <FaPenFancy className="text-4xl text-indigo-600" />,
      resources: [
        { name: "Grammarly Blog", url: "https://www.grammarly.com/blog/" },
        { name: "Purdue OWL", url: "https://owl.purdue.edu/" },
        { name: "Hemingway Editor", url: "https://hemingwayapp.com/" },
      ]
    },
    {
      title: "Critical Thinking",
      icon: <FaBrain className="text-4xl text-amber-600" />,
      resources: [
        { name: "Critical Thinking Web", url: "https://philosophy.hku.hk/think/" },
        { name: "The Foundation for Critical Thinking", url: "https://www.criticalthinking.org/" },
        { name: "MindTools", url: "https://www.mindtools.com/" },
      ]
    },
    {
      title: "Productivity & Time Management",
      icon: <FaChartLine className="text-4xl text-emerald-600" />,
      resources: [
        { name: "Todoist Blog", url: "https://todoist.com/blog" },
        { name: "Getting Things Done", url: "https://gettingthingsdone.com/" },
        { name: "Focus@Will", url: "https://www.focusatwill.com/" },
      ]
    },
    {
      title: "Language Learning",
      icon: <FaLanguage className="text-4xl text-blue-600" />,
      resources: [
        { name: "Duolingo", url: "https://www.duolingo.com/" },
        { name: "BBC Languages", url: "https://www.bbc.co.uk/languages/" },
        { name: "Memrise", url: "https://www.memrise.com/" },
      ]
    },
    {
      title: "Creativity & Design",
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      resources: [
        { name: "Canva Design School", url: "https://www.canva.com/learn/" },
        { name: "Adobe Creative Cloud Tutorials", url: "https://helpx.adobe.com/creative-cloud/tutorials-explore.html" },
        { name: "CreativeLive", url: "https://www.creativelive.com/" },
      ]
    },
    {
      title: "Public Speaking",
      icon: <FaMicrophone className="text-4xl text-red-600" />,
      resources: [
        { name: "TED Talks", url: "https://www.ted.com/", icon: <SiTed className="text-red-500" /> },
        { name: "Toastmasters", url: "https://www.toastmasters.org/" },
        { name: "SpeakerHub", url: "https://speakerhub.com/" },
      ]
    },
    {
      title: "Personal Development",
      icon: <FaBookOpen className="text-4xl text-purple-600" />,
      resources: [
        { name: "Coursera Soft Skills", url: "https://www.coursera.org/", icon: <SiCoursera className="text-blue-600" /> },
        { name: "Udemy Personal Growth", url: "https://www.udemy.com/", icon: <SiUdemy className="text-purple-500" /> },
        { name: "Tiny Habits", url: "https://tinyhabits.com/" },
      ]
    },
    {
      title: "Mental Wellness",
      icon: <FaBrain className="text-4xl text-teal-600" />,
      resources: [
        { name: "Headspace", url: "https://www.headspace.com/" },
        { name: "Calm", url: "https://www.calm.com/" },
        { name: "Mindful.org", url: "https://www.mindful.org/" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Non-Technical Resources Hub
            </span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-700">
            Essential resources for personal and professional growth beyond coding
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search soft skills resources..."
              className="w-full px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-gray-700 placeholder-gray-400"
            />
            <button className="absolute right-2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-200 shadow-md">
              <FaSearch className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-white hover:border-blue-200"
            >
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-blue-50">
                    {category.icon}
                  </div>
                  <h2 className="ml-3 text-xl font-bold text-gray-800">{category.title}</h2>
                </div>
                <ul className="space-y-2">
                  {category.resources.map((resource, idx) => (
                    <li key={idx}>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-600 hover:underline group text-sm"
                      >
                        {resource.icon && <span className="mr-2 group-hover:scale-110 transition-transform">{resource.icon}</span>}
                        <span className="group-hover:font-medium">{resource.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-5 py-3 bg-blue-50 border-t border-blue-100">
                <a
                  href="#"
                  className="flex items-center text-xs font-medium text-blue-600 hover:text-blue-700"
                >
                  View more <FaArrowRight className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:p-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Want to suggest a resource?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Help us expand this collection of essential non-technical learning materials.
              </p>
              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-white hover:bg-blue-50 transition duration-200 shadow-md hover:shadow-lg">
                  Contribute a Resource
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Developing well-rounded skills for the modern professional</p>
          <p className="mt-1">© {new Date().getFullYear()} Skills Development Hub</p>
        </div>
      </div>
    </div>
  );
};

export default NonTechnicalResources;