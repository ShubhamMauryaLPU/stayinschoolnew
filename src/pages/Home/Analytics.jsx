import React from "react";
import stateData from "../../data/stateData";

const Analytics = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100 flex justify-center items-center flex-col py-16 lg:py-24 min-h-[40vh] lg:min-h-[50vh] text-center px-4">
        {/* Animated background elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-blue-600 text-4xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                You are Unique.
              </span>
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Just like your distinctive qualities, our approach is tailored,
            innovative, and one-of-a-kind to meet your specific needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Discover Our Uniqueness
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1">
              Share Your Story
            </button>
          </div>
        </div>

        {/* Floating shapes animation */}
        <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                background: `rgba(251, 146, 60, ${Math.random() * 0.4 + 0.1})`,
                borderRadius: ["50%", "30%", "20%"][
                  Math.floor(Math.random() * 3)
                ],
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full bg-orange-50 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-gray-800 text-2xl lg:text-4xl font-bold font-serif mb-4 text-center lg:text-left">
              How Many Connected With Us Across India
            </h1>
            <p className="text-lg text-gray-700 mb-6 text-center lg:text-left">
              Many colleges and schools across various states in India have
              joined hands with us to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-semibold space-y-2">
              <li>Enhance student skills</li>
              <li>Reduce dropout rates</li>
              <li>Support financial stability</li>
            </ul>
          </div>

          {/* Right Table Section */}
          <div className="w-full lg:w-1/2 max-h-[60vh] overflow-y-auto bg-white rounded-lg shadow">
            <table className="w-full text-sm text-gray-700">
              <thead className="bg-blue-100 sticky top-0 z-10 text-sm">
                <tr>
                  <th
                    colSpan={4}
                    className="text-center text-lg font-bold py-3 text-blue-700 border-b border-gray-300"
                  >
                    State-wise Educational Connections
                  </th>
                </tr>
                <tr className="bg-blue-50 font-semibold border-b border-gray-300 text-center">
                  <th className="py-2 px-3 text-left">State</th>
                  <th className="py-2 px-3">Colleges</th>
                  <th className="py-2 px-3">Schools</th>
                  <th className="py-2 px-3">Students</th>
                </tr>
              </thead>
              <tbody>
                {stateData.map((data) => (
                  <tr key={data.id} className="hover:bg-blue-50 transition">
                    <td className="py-2 px-3 text-left">{data.state}</td>
                    <td className="py-2 px-3 text-center">{data.colleges}</td>
                    <td className="py-2 px-3 text-center">{data.school}</td>
                    <td className="py-2 px-3 text-center">{data.students}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
