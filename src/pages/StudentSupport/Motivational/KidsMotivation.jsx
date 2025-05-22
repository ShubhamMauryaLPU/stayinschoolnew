import React from 'react';

const KidsMotivation = () => {
    const kidFriendlyContent = [
        {
            emoji: "🌈",
            title: "You Are Special!",
            description: "There's nobody else in the whole world exactly like you! That makes you extra special!"
        },
        {
            emoji: "🚀",
            title: "Dream Big!",
            description: "You can be anything you want to be when you grow up! Astronaut, artist, scientist - the sky's the limit!"
        },
        {
            emoji: "🧩",
            title: "Keep Trying!",
            description: "If something is hard, that means your brain is growing! Keep trying - you'll get it!"
        },
        {
            emoji: "🦸",
            title: "Be a Hero!",
            description: "Heroes help others. Share your toys, say kind words, and be someone's hero today!"
        },
        {
            emoji: "📚",
            title: "Learning is Fun!",
            description: "Every new thing you learn makes your brain stronger! What will you discover today?"
        },
        {
            emoji: "🎨",
            title: "Create Something!",
            description: "Use your imagination to make something new! Draw, build, sing - the world needs your creativity!"
        },
        {
            emoji: "🦋",
            title: "You're Growing!",
            description: "Just like caterpillars become butterflies, you're growing smarter every day!"
        },
        {
            emoji: "🤗",
            title: "Be Kind!",
            description: "Kindness is like magic - it makes you and others happy! Give someone a smile today!"
        },
        {
            emoji: "🏆",
            title: "You Can Do It!",
            description: "Believe in yourself! Even when things are tricky, you have what it takes to succeed!"
        },
        {
            emoji: "🌱",
            title: "Keep Growing!",
            description: "Plants need water and sun to grow. You need love, learning, and trying new things!"
        },
        {
            emoji: "🦁",
            title: "Be Brave!",
            description: "Courage doesn't mean not being scared - it means trying even when you're a little nervous!"
        },
        {
            emoji: "🧠",
            title: "Smart Choices!",
            description: "Your brain helps you make good decisions. Listen to that smart voice inside you!"
        }
    ];

    // Fun background colors for cards
    const getRandomColor = () => {
        const colors = [
            'bg-blue-100 border-blue-300',
            'bg-green-100 border-green-300',
            'bg-yellow-100 border-yellow-300',
            'bg-pink-100 border-pink-300',
            'bg-purple-100 border-purple-300',
            'bg-red-100 border-red-300',
            'bg-indigo-100 border-indigo-300'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4 sm:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header with fun animation */}
                <header className="text-center mb-8 animate-bounce">
                    <h1 className="text-4xl sm:text-5xl font-bold text-purple-600 mb-2">
                        Super Kid Powers! ✨
                    </h1>
                    <p className="text-lg text-blue-500">
                        Discover your amazing abilities!
                    </p>
                    <div className="mt-4 mx-auto w-24 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                </header>

                {/* Motivational Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {kidFriendlyContent.map((item, index) => (
                        <div 
                            key={index}
                            className={`${getRandomColor()} border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105`}
                        >
                            <div className="text-5xl mb-3">{item.emoji}</div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
                            <p className="text-gray-700 text-lg">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Interactive Footer */}
                <footer className="mt-12 text-center">
                    <div className="inline-block px-6 py-3 bg-white rounded-full shadow-md">
                        <p className="text-purple-600 font-medium">
                            Remember: You're <span className="text-pink-500">AWESOME</span> just the way you are!
                        </p>
                    </div>
                    <div className="mt-6 animate-pulse">
                        <button 
                            className="px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                            onClick={() => window.location.reload()}
                        >
                            Show Me More Encouragement!
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default KidsMotivation;