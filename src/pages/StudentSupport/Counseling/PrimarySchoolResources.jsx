import { FaBookOpen, FaPuzzlePiece, FaRobot, FaPaintBrush, FaMusic, FaRunning, FaSearch, FaArrowRight, FaFeatherAlt } from 'react-icons/fa';
import { SiKhanacademy, SiScratch } from 'react-icons/si';

const PrimarySchoolResources = () => {
  const categories = [
    {
      title: "Reading & Literacy",
      icon: <FaBookOpen className="text-4xl text-blue-600" />,
      resources: [
        { name: "Starfall", url: "https://www.starfall.com/" },
        { name: "Storyline Online", url: "https://storylineonline.net/" },
        { name: "Storybird", url: "https://storybird.com/", icon: <FaFeatherAlt className="text-pink-500" /> },
      ]
    },
    {
      title: "Math Fun",
      icon: <FaPuzzlePiece className="text-4xl text-green-600" />,
      resources: [
        { name: "Prodigy Math", url: "https://www.prodigygame.com/" },
        { name: "Cool Math Games", url: "https://www.coolmathgames.com/" },
        { name: "Khan Academy Kids", url: "https://www.khanacademy.org/kids", icon: <SiKhanacademy className="text-blue-500" /> },
      ]
    },
    {
      title: "Science Exploration",
      icon: <FaRobot className="text-4xl text-purple-600" />,
      resources: [
        { name: "NASA Kids' Club", url: "https://www.nasa.gov/kidsclub/index.html" },
        { name: "National Geographic Kids", url: "https://kids.nationalgeographic.com/" },
        { name: "Mystery Science", url: "https://mysteryscience.com/" },
      ]
    },
    {
      title: "Creative Arts",
      icon: <FaPaintBrush className="text-4xl text-red-600" />,
      resources: [
        { name: "Crayola Create & Play", url: "https://www.crayola.com/create-play-app/" },
        { name: "Bomomo", url: "https://bomomo.com/" },
        { name: "Toy Theater Art", url: "https://toytheater.com/category/art/" },
      ]
    },
    {
      title: "Coding for Kids",
      icon: <FaRobot className="text-4xl text-indigo-600" />,
      resources: [
        { name: "Scratch", url: "https://scratch.mit.edu/", icon: <SiScratch className="text-orange-500" /> },
        { name: "Code.org", url: "https://code.org/" },
        { name: "Tynker", url: "https://www.tynker.com/" },
      ]
    },
    {
      title: "Music & Movement",
      icon: <FaMusic className="text-4xl text-yellow-600" />,
      resources: [
        { name: "Chrome Music Lab", url: "https://musiclab.chromeexperiments.com/" },
        { name: "GoNoodle", url: "https://www.gonoodle.com/" },
        { name: "Classics for Kids", url: "https://www.classicsforkids.com/" },
      ]
    },
    {
      title: "Learning Games",
      icon: <FaPuzzlePiece className="text-4xl text-amber-600" />,
      resources: [
        { name: "PBS Kids Games", url: "https://pbskids.org/games/" },
        { name: "ABCya!", url: "https://www.abcya.com/" },
        { name: "Funbrain", url: "https://www.funbrain.com/" },
      ]
    },
    {
      title: "Health & PE",
      icon: <FaRunning className="text-4xl text-teal-600" />,
      resources: [
        { name: "Cosmic Kids Yoga", url: "https://www.cosmickids.com/" },
        { name: "EatMoveSave", url: "https://www.eatmovesave.org/" },
        { name: "Nourish Interactive", url: "https://www.nourishinteractive.com/" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
              Primary School Resources Hub
            </span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-700">
            Fun learning resources for young students (K-8)
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search kids' learning resources..."
              className="w-full px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-lg text-gray-700 placeholder-gray-400"
            />
            <button className="absolute right-2 bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition duration-200 shadow-md">
              <FaSearch className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-white hover:border-green-200"
            >
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-green-50">
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
                        className="flex items-center text-gray-700 hover:text-green-600 hover:underline group text-sm"
                      >
                        {resource.icon && <span className="mr-2 group-hover:scale-110 transition-transform">{resource.icon}</span>}
                        <span className="group-hover:font-medium">{resource.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-5 py-3 bg-green-50 border-t border-green-100">
                <a
                  href="#"
                  className="flex items-center text-xs font-medium text-green-600 hover:text-green-700"
                >
                  View more <FaArrowRight className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:p-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Know great resources for kids?
              </h2>
              <p className="mt-4 text-lg text-green-100">
                Help build this collection of child-friendly learning materials.
              </p>
              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-green-700 bg-white hover:bg-green-50 transition duration-200 shadow-md hover:shadow-lg">
                  Suggest a Resource
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Making learning fun and engaging for young minds</p>
          <p className="mt-1">© {new Date().getFullYear()} Kids Learning Hub</p>
        </div>
      </div>
    </div>
  );
};

export default PrimarySchoolResources;