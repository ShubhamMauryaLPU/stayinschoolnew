import React from 'react';

const Motivational = () => {
    const motivationalContent = [
        {
            title: "Believe in Yourself 🌟",
            description: "Self-belief is the foundation of all achievements. It doesn't matter how many times you fail; what matters is your unwavering faith in your ability to rise again."
        },
        {
            title: "Embrace Challenges 💪",
            description: "Challenges aren't roadblocks—they're stepping stones to greatness. Every obstacle is an opportunity to grow stronger and more resilient."
        },
        {
            title: "Stay Consistent 🕰️",
            description: "Consistency beats intensity. While bursts of inspiration may get you started, it is steady effort that brings dreams to life."
        },
        {
            title: "Dream Big 🚀",
            description: "Don't limit yourself based on current circumstances. Your dreams should scare you and excite you at the same time."
        },
        {
            title: "Never Settle 🔥",
            description: "Comfort is the enemy of greatness. Push beyond your limits every single day."
        },
        {
            title: "Hard Work Pays Off 🎓",
            description: "Success is earned through relentless hard work, discipline, and perseverance."
        },
        {
            title: "Failure is a Lesson 📚",
            description: "Failure is not the end—it's a beginning. Embrace mistakes as priceless lessons."
        },
        {
            title: "The Power of Persistence 🎯",
            description: "Persistence is what separates winners from quitters. Talent can get you started, but persistence keeps you going."
        },
        {
            title: "Your Mind is a Weapon 🧠",
            description: "The strongest tool you possess is your mind. Feed it with positivity and knowledge."
        },
        {
            title: "Create Opportunities 🚪",
            description: "Waiting for the perfect opportunity will delay progress. Create your own doors."
        },
        {
            title: "Quote",
            description: "“Success is not final, failure is not fatal: it is the courage to continue that counts.” – Winston Churchill"
        },
        {
            title: "Quote",
            description: "“The future belongs to those who believe in their dreams.” – Eleanor Roosevelt"
        },
        {
            title: "Quote",
            description: "“It always seems impossible until it's done.” – Nelson Mandela"
        },
        {
            title: "Quote",
            description: "“Don't watch the clock; do what it does. Keep going.” – Sam Levenson"
        },
        {
            title: "Quote",
            description: "“Opportunities don't happen, you create them.” – Chris Grosser"
        }
    ];

    // Get a random gradient for each card
    const getRandomGradient = () => {
        const gradients = [
            'bg-gradient-to-br from-amber-100 to-amber-50',
            'bg-gradient-to-br from-blue-100 to-blue-50',
            'bg-gradient-to-br from-rose-100 to-rose-50',
            'bg-gradient-to-br from-emerald-100 to-emerald-50',
            'bg-gradient-to-br from-purple-100 to-purple-50',
            'bg-gradient-to-br from-cyan-100 to-cyan-50'
        ];
        return gradients[Math.floor(Math.random() * gradients.length)];
    };

    // Get random subtle rotation
    const getRandomRotation = () => {
        const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-0'];
        return rotations[Math.floor(Math.random() * rotations.length)];
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 p-4 sm:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Animated Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-bold text-amber-800 mb-2">
                        Daily Motivation
                    </h1>
                    <p className="text-lg text-amber-600">
                        Fuel for your ambition • Spark for your creativity
                    </p>
                    <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-amber-400 to-transparent"></div>
                </div>

                {/* Motivational Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {motivationalContent.map((item, index) => (
                        <div
                            key={index}
                            className={`${getRandomGradient()} ${getRandomRotation()} rounded-xl shadow-md p-6 h-48 flex flex-col justify-between transform transition-all hover:scale-105 hover:shadow-lg hover:rotate-0 hover:z-10`}
                        >
                            <h2 className={`text-xl font-semibold mb-3 ${
                                item.title.includes('Quote') ? 'text-gray-700' : 'text-amber-700'
                            }`}>
                                {item.title}
                            </h2>
                            <p className="text-gray-700 text-sm sm:text-base">
                                {item.description}
                            </p>
                            <div className="mt-3 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
                        </div>
                    ))}
                </div>

                {/* Floating Action Button */}
                <div className="fixed bottom-6 right-6">
                    <button 
                        className="bg-amber-500 hover:bg-amber-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
                        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    >
                        ↑
                    </button>
                </div>

                {/* Footer */}
                <footer className="mt-16 text-center text-sm text-amber-700 opacity-80">
                    <p>Made with ❤️ to inspire your journey</p>
                    <p className="mt-1">Refresh page for new card arrangements</p>
                </footer>
            </div>
        </div>
    );
};

export default Motivational;