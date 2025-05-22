import React from 'react';

const NonTechnicalGoals = [
    {
        title: 'Improve Public Speaking',
        description: 'Practice speaking skills for presentations, debates, and speeches to enhance communication abilities.',
        image: 'https://images.unsplash.com/photo-1518139871370-e6d9e30c4665?auto=format&fit=crop&w=800&q=60',
    },
    {
        title: 'Participate in Clubs & Societies',
        description: 'Join humanities, arts, or social clubs to develop leadership, team-building, and networking skills.',
        image: 'https://images.unsplash.com/photo-1500917298773-b63ea1cbe72d?auto=format&fit=crop&w=800&q=60',
    },
    {
        title: 'Develop Writing Skills',
        description: 'Focus on essays, creative writing, and formal writing to improve your ability to express ideas clearly and persuasively.',
        image: 'https://images.unsplash.com/photo-1517189700619-66c13b76a7ae?auto=format&fit=crop&w=800&q=60',
    },
    {
        title: 'Learn Research Methodology',
        description: 'Master the techniques of academic research, literature review, and data collection for better projects and papers.',
        image: 'https://images.unsplash.com/photo-1573164574231-8b31aa1a2274?auto=format&fit=crop&w=800&q=60',
    },
    {
        title: 'Get Involved in Community Service',
        description: 'Contribute to your local community through volunteer work, fostering empathy and social responsibility.',
        image: 'https://images.unsplash.com/photo-1578873651132-1a98b1e1c7d2?auto=format&fit=crop&w=800&q=60',
    },
    {
        title: 'Enhance Critical Thinking Skills',
        description: 'Engage in activities that challenge your thinking and improve your ability to analyze complex issues logically.',
        image: 'https://images.unsplash.com/photo-1571880637974-4c6a8d58fce6?auto=format&fit=crop&w=800&q=60',
    },
    {
        title: 'Learn Foreign Languages',
        description: 'Start learning a new language to enhance cultural awareness and improve cognitive abilities.',
        image: 'https://images.unsplash.com/photo-1500672144000-7d57709b00ea?auto=format&fit=crop&w=800&q=60',
    },
    {
        title: 'Build a Strong Professional Network',
        description: 'Attend career fairs, join LinkedIn groups, and network with professionals in your field to create valuable connections.',
        image: 'https://images.unsplash.com/photo-1542224154-29f8d8cb4e6b?auto=format&fit=crop&w=800&q=60',
    },
    {
        title: 'Attend Academic Conferences',
        description: 'Participate in academic conferences and seminars to broaden your knowledge and keep up with trends in your field.',
        image: 'https://images.unsplash.com/photo-1531419263942-bf694e6db6b4?auto=format&fit=crop&w=800&q=60',
    },
    {
        title: 'Publish Articles or Blogs',
        description: 'Start a blog or write articles to share your insights on specific topics, and build a personal online presence.',
        image: 'https://images.unsplash.com/photo-1513775245371-52fcd2f3d26d?auto=format&fit=crop&w=800&q=60',
    },
    {
        title: 'Master Conflict Resolution',
        description: 'Learn the techniques to resolve conflicts effectively, especially in group settings and academic collaborations.',
        image: 'https://images.unsplash.com/photo-1573497151151-b68d49a6bcf6?auto=format&fit=crop&w=800&q=60',
    },
    {
        title: 'Take on Leadership Roles',
        description: 'Engage in student government or other leadership positions to develop organizational and management skills.',
        image: 'https://images.unsplash.com/photo-1551316988-42bba2ea173e?auto=format&fit=crop&w=800&q=60',
    },
    {
        title: 'Master Time Management',
        description: 'Learn to balance studies, extracurricular activities, and personal life effectively through time management techniques.',
        image: 'https://images.unsplash.com/photo-1563899894-e3ee7b0d51cf?auto=format&fit=crop&w=800&q=60',
    },
    {
        title: 'Create and Maintain a Personal Brand',
        description: 'Develop a personal brand through consistent professional activity, online presence, and work quality.',
        image: 'https://images.unsplash.com/photo-1583519890919-6977f670e73a?auto=format&fit=crop&w=800&q=60',
    },
    {
        title: 'Learn Digital Marketing Basics',
        description: 'Explore the basics of digital marketing including SEO, social media, and email campaigns to boost personal or organizational projects.',
        image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=60',
    },
];

const NonTechnicalgoals = () => {
    return (
        <div className="bg-gradient-to-b from-orange-300 to-orange-100 py-8 min-h-screen">
            <h2 className="text-3xl font-bold text-blue-700 text-center">Non-Technical College Students' Academic Goals</h2>
            <p className="mt-4 text-gray-600 text-center">
                For students focused on humanities, arts, and social sciences, developing communication, leadership, and critical thinking skills is crucial.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6">
                {NonTechnicalGoals.map((goal, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
                    >
                        <img
                            src={goal.image}
                            alt={goal.title}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">{goal.title}</h3>
                            <p className="text-gray-700">{goal.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NonTechnicalgoals;
