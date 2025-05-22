export default function FeaturesGrid() {
    const features = [
      {
        icon: "📊",
        title: "Early Warning System",
        desc: "Machine learning identifies at-risk students 6 months before dropout.",
      },
      {
        icon: "👨‍👩‍👧‍👦",
        title: "Parent Engagement",
        desc: "Real-time notifications and progress tracking for families.",
      },
      {
        icon: "🏫",
        title: "Community Hubs",
        desc: "Virtual classrooms with localized content in 12 Indian languages.",
      },
    ];
  
    return (
      <section className="max-w-7xl mx-auto px-6 py-20 bg-orange-50 rounded-2xl ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools addressing every stage of student retention
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-orange-400"
            >
              <span className="text-5xl mb-6 block">{feature.icon}</span>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
              <button className="mt-6 text-orange-500 font-semibold flex items-center hover:text-orange-600">
                Learn more <span className="ml-2">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }