import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-white">
      {/* 1. Welcome Hero */}
      <section className="min-h-screen flex items-center justify-center bg-teal-500 text-white px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Learn. Grow. Thrive.</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-lg mx-auto">
            Free lessons and quizzes to help every student succeed.
          </p>
          <Link
            to="/lessons"
            className="bg-orange-500 text-white py-3 px-8 rounded-lg hover:bg-orange-600 transition duration-300 text-lg font-semibold"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* 2. Quick Access Tiles */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/lessons"
            className="bg-teal-100 p-8 rounded-xl text-center hover:bg-teal-200 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-teal-800 mb-2">Explore Lessons</h3>
            <p className="text-teal-600">Start learning with fun, interactive content.</p>
          </Link>
          <Link
            to="/quiz/1"
            className="bg-orange-100 p-8 rounded-xl text-center hover:bg-orange-200 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-orange-800 mb-2">Take a Quiz</h3>
            <p className="text-orange-600">Test your knowledge and earn rewards.</p>
          </Link>
        </div>
      </section>

      {/* 3. Why Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Why Choose Our Platform?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-teal-500 text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Free Lessons</h3>
            <p className="text-gray-600">Access quality education anytime, anywhere.</p>
          </div>
          <div className="text-center">
            <div className="text-orange-500 text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Learning</h3>
            <p className="text-gray-600">Content tailored to your pace and needs.</p>
          </div>
          <div className="text-center">
            <div className="text-green-500 text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Stay Motivated</h3>
            <p className="text-gray-600">Track progress and celebrate achievements.</p>
          </div>
        </div>
      </section>

      {/* 4. Student Spotlight */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-teal-50 p-8 rounded-xl text-center">
          <p className="text-lg text-gray-700 italic mb-4">
            "This platform made learning fun and helped me stay in school!"
          </p>
          <p className="text-gray-800 font-semibold">— Meena R., Student</p>
        </div>
      </section>

      {/* 5. Progress Snapshot */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Your Progress
        </h2>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">Lessons Completed: 3/10</p>
            <div className="w-1/2 bg-gray-200 rounded-full h-3">
              <div className="bg-teal-500 h-3 rounded-full w-1/3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Lesson Preview Card */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Try a Lesson
        </h2>
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Basics of Science
            </h3>
            <p className="text-gray-600 mb-4">
              Learn about the world around you in this exciting lesson!
            </p>
            <Link
              to="/lessons"
              className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
            >
              Start Now
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Quiz Teaser */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Test Your Knowledge
        </h2>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-sm text-center">
          <p className="text-lg text-gray-700 mb-4">
            What is the capital of India?
          </p>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-orange-100 py-2 rounded-lg hover:bg-orange-200">
              Mumbai
            </button>
            <button className="bg-orange-100 py-2 rounded-lg hover:bg-orange-200">
              New Delhi
            </button>
          </div>
          <Link
            to="/quiz/1"
            className="mt-4 inline-block text-teal-600 hover:text-teal-800"
          >
            Try the Full Quiz
          </Link>
        </div>
      </section>

      {/* 8. Impact Numbers */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Impact
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-teal-600">500+</p>
            <p className="text-gray-600">Lessons</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-600">1000+</p>
            <p className="text-gray-600">Students</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-600">200+</p>
            <p className="text-gray-600">Quizzes</p>
          </div>
        </div>
      </section>

      {/* 9. Motivational Banner */}
      <section className="py-16 px-4 bg-orange-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Keep Learning, Keep Growing!
        </h2>
        <Link
          to="/lessons"
          className="bg-white text-orange-500 py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Explore More
        </Link>
      </section>

      {/* 10. Community Connect */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Connect With Us
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-teal-50 p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              Learning Hubs
            </h3>
            <p className="text-teal-600">Find support in your community.</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">
              Mentors
            </h3>
            <p className="text-orange-600">Get guidance to succeed.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;