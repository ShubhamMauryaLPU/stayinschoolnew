import React from "react";

const StatsBanner = () => {
  const stats = [
    { 
      value: "30%", 
      label: "Reduction in dropout rates", 
      icon: "📉",
      description: "Through early intervention systems",
      color: "from-orange-400 to-amber-400"
    },
    { 
      value: "10K+", 
      label: "At-risk students identified", 
      icon: "👨‍🎓",
      description: "Using predictive analytics",
      color: "from-blue-400 to-cyan-400"
    },
    { 
      value: "95%", 
      label: "Teacher satisfaction", 
      icon: "💯",
      description: "With our classroom tools",
      color: "from-emerald-400 to-teal-400"
    },
  ];

  return (
    <section className="max-w-7xl bg-gradient-to-b from-orange-100 to-orange-200 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Proven Impact in Education
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Data-driven results that transform student outcomes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
          >
            {/* Gradient accent */}
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${stat.color}`}></div>
            
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{stat.icon}</span>
                <p className="text-5xl font-bold text-gray-900">{stat.value}</p>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{stat.label}</h3>
              <p className="text-gray-600 mb-6">{stat.description}</p>
              
              <div className="mt-auto">
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${stat.color}`} 
                    style={{ 
                      width: `${index === 0 ? 30 : index === 1 ? 100 : 95}%`,
                      transition: 'width 1s ease-in-out'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all">
          See Case Studies
          <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default StatsBanner;