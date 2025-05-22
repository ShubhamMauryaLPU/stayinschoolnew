import { FaGraduationCap, FaFlask, FaCalculator, FaBook, FaGlobeAmericas, FaPencilAlt, FaSearch, FaArrowRight } from 'react-icons/fa';
import { SiKhanacademy, SiCoursera, SiEdx } from 'react-icons/si';

const HigherSchoolResources = () => {
  const categories = [
    {
      title: "Mathematics",
      icon: <FaCalculator className="text-4xl text-orange-600" />,
      resources: [
        { name: "Khan Academy Math", url: "https://www.khanacademy.org/math", icon: <SiKhanacademy className="text-blue-500" /> },
        { name: "Wolfram Alpha", url: "https://www.wolframalpha.com/" },
        { name: "Paul's Online Math Notes", url: "https://tutorial.math.lamar.edu/" },
      ]
    },
    {
      title: "Science",
      icon: <FaFlask className="text-4xl text-emerald-600" />,
      resources: [
        { name: "PhET Simulations", url: "https://phet.colorado.edu/" },
        { name: "Khan Academy Science", url: "https://www.khanacademy.org/science", icon: <SiKhanacademy className="text-blue-500" /> },
        { name: "NASA STEM", url: "https://www.nasa.gov/stem" },
      ]
    },
    {
      title: "Literature",
      icon: <FaBook className="text-4xl text-amber-600" />,
      resources: [
        { name: "Project Gutenberg", url: "https://www.gutenberg.org/" },
        { name: "Shakespeare Online", url: "http://www.shakespeare-online.com/" },
        { name: "Poetry Foundation", url: "https://www.poetryfoundation.org/" },
      ]
    },
    {
      title: "History & Social Studies",
      icon: <FaGlobeAmericas className="text-4xl text-blue-600" />,
      resources: [
        { name: "Crash Course History", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s" },
        { name: "Digital History", url: "http://www.digitalhistory.uh.edu/" },
        { name: "National Archives", url: "https://www.archives.gov/education" },
      ]
    },
    {
      title: "Writing & Composition",
      icon: <FaPencilAlt className="text-4xl text-purple-600" />,
      resources: [
        { name: "Purdue OWL", url: "https://owl.purdue.edu/" },
        { name: "Grammarly", url: "https://www.grammarly.com/" },
        { name: "Hemingway Editor", url: "https://hemingwayapp.com/" },
      ]
    },
    {
      title: "College Prep",
      icon: <FaGraduationCap className="text-4xl text-red-600" />,
      resources: [
        { name: "College Board", url: "https://www.collegeboard.org/" },
        { name: "Coursera College Prep", url: "https://www.coursera.org/", icon: <SiCoursera className="text-blue-600" /> },
        { name: "edX High School", url: "https://www.edx.org/", icon: <SiEdx className="text-indigo-600" /> },
      ]
    },
    {
      title: "Foreign Languages",
      icon: <FaGlobeAmericas className="text-4xl text-teal-600" />,
      resources: [
        { name: "Duolingo", url: "https://www.duolingo.com/" },
        { name: "BBC Languages", url: "https://www.bbc.co.uk/languages/" },
        { name: "Memrise", url: "https://www.memrise.com/" },
      ]
    },
    {
      title: "Study Tools",
      icon: <FaBook className="text-4xl text-indigo-600" />,
      resources: [
        { name: "Quizlet", url: "https://quizlet.com/" },
        { name: "Anki", url: "https://apps.ankiweb.net/" },
        { name: "Zotero", url: "https://www.zotero.org/" },
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
              Higher School Resources Hub
            </span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-700">
            Essential academic resources for high school and college success
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search academic resources..."
              className="w-full px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg text-gray-700 placeholder-gray-400"
            />
            <button className="absolute right-2 bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 transition duration-200 shadow-md">
              <FaSearch className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-white hover:border-orange-200"
            >
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-orange-50">
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
                        className="flex items-center text-gray-700 hover:text-orange-600 hover:underline group text-sm"
                      >
                        {resource.icon && <span className="mr-2 group-hover:scale-110 transition-transform">{resource.icon}</span>}
                        <span className="group-hover:font-medium">{resource.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-5 py-3 bg-orange-50 border-t border-orange-100">
                <a
                  href="#"
                  className="flex items-center text-xs font-medium text-orange-600 hover:text-orange-700"
                >
                  View more <FaArrowRight className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:p-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Have an academic resource to share?
              </h2>
              <p className="mt-4 text-lg text-orange-100">
                Help students succeed by suggesting quality educational materials.
              </p>
              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-orange-700 bg-white hover:bg-orange-50 transition duration-200 shadow-md hover:shadow-lg">
                  Suggest a Resource
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Supporting academic excellence from middle school through college</p>
          <p className="mt-1">© {new Date().getFullYear()} Academic Resources Hub</p>
        </div>
      </div>
    </div>
  );
};

export default HigherSchoolResources;