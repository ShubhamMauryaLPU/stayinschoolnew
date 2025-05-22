import { useState } from 'react';
import { Link } from 'react-router-dom'; // 🧩 Import Link
import { FiBookOpen, FiPenTool, FiClipboard, FiLayers, FiBarChart2 } from 'react-icons/fi';

const HigherSchoolLessonsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const lessons = [
    {
      id: 1,
      title: "Advanced Algebra",
      category: "mathematics",
      level: "Advanced",
      duration: "3h 20m",
      students: 345,
      rating: 4.7,
      thumbnail: "https://images.unsplash.com/photo-1565372341-c6c1b030b170?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhY3J8NXx8bWF0aGVtYXRpY3N8ZW58MHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
      id: 2,
      title: "World History: 1900 to Present",
      category: "history",
      level: "Intermediate",
      duration: "4h 10m",
      students: 892,
      rating: 4.5,
      thumbnail: "https://images.unsplash.com/photo-1578996771477-f0f0e6b6f3c9?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhY3J8NHx8aGlzdG9yeXxlbnwwfHx8fA&ixid=rb-1.2.1&q=80&w=1080"
    },
    {
      id: 3,
      title: "Introduction to Chemistry",
      category: "science",
      level: "Beginner",
      duration: "2h 40m",
      students: 1000,
      rating: 4.6,
      thumbnail: "https://images.unsplash.com/photo-1533662507-d9e49e4f0e60?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhY3J8Mnx8Y2hlbWlzdHJ5fGVufDB8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
      id: 4,
      title: "Physics: Laws of Motion",
      category: "science",
      level: "Intermediate",
      duration: "4h 00m",
      students: 723,
      rating: 4.8,
      thumbnail: "https://images.unsplash.com/photo-1606761194718-b7d46f8de9ab?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhY3J8Mnx8cGh5c2ljfGVufDB8fHx8fA&ixid=rb-1.2.1&q=80&w=1080"
    },
    {
      id: 5,
      title: "Advanced English Literature",
      category: "literature",
      level: "Advanced",
      duration: "5h 30m",
      students: 654,
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1529499685731-8e1f285e7585?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhY3J8Nnx8bGl0ZXJhdHVyZXxlbl58MHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
      id: 6,
      title: "Geometric Theorems and Proofs",
      category: "mathematics",
      level: "Advanced",
      duration: "6h 00m",
      students: 432,
      rating: 4.7,
      thumbnail: "https://images.unsplash.com/photo-1565372325-c6e9dcb9e74c?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhY3J8Mnx8Y2hlbWlzdHJ5fGVufDB8fHx8fA&ixid=rb-1.2.1&q=80&w=1080"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Subjects', icon: <FiBarChart2 className="mr-2" /> },
    { id: 'mathematics', name: 'Mathematics', icon: <FiPenTool className="mr-2" /> },
    { id: 'history', name: 'History', icon: <FiBookOpen className="mr-2" /> },
    { id: 'science', name: 'Science', icon: <FiClipboard className="mr-2" /> },
    { id: 'literature', name: 'Literature', icon: <FiLayers className="mr-2" /> }
  ];

  const filteredLessons = lessons.filter(lesson => {
    const matchesCategory = activeCategory === 'all' || lesson.category === activeCategory;
    const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
            Higher School Lessons
          </h1>
          <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
            Explore in-depth courses for your higher studies across various subjects.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search subjects..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Filter by:</span>
              <select
                className="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLessons.map(lesson => (
            <div key={lesson.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={lesson.thumbnail}
                  alt={lesson.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    lesson.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    lesson.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {lesson.level}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{lesson.title}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-600">{lesson.rating} ({lesson.students}+ students)</span>
                  </div>
                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                </div>
                {/* Link to course page */}
                <Link
                  to={`/courses/${lesson.id}`}
                  className="block w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors duration-300"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredLessons.length === 0 && (
          <div className="text-center py-16">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No courses found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter.</p>
          </div>
        )}

        {/* Featured Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to excel in higher studies?</h2>
            <p className="text-lg mb-6">Join thousands of students who are mastering subjects at a higher level.</p>
            <Link
              to="/courses"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
            >
              Explore All Subjects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HigherSchoolLessonsPage;
