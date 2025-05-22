import React from 'react';

const Primarygoals = () => {
    const primarySchoolGoals = [
        { title: 'Develop Good Study Habits', description: 'Create a consistent study schedule, stay organized, and focus on building positive habits that will help throughout school life.', image: 'https://images.unsplash.com/photo-1581091012189-bd1a437b5861?auto=format&fit=crop&w=800&q=60' },
        { title: 'Learn Basic Math and Reading Skills', description: 'Strengthen foundational skills such as counting, addition, subtraction, and reading comprehension to support future learning.', image: 'https://images.unsplash.com/photo-1572390571626-b875388b9889?auto=format&fit=crop&w=800&q=60' },
        { title: 'Explore Creativity through Art', description: 'Engage in drawing, painting, and other arts to express ideas and develop imagination, problem-solving, and fine motor skills.', image: 'https://images.unsplash.com/photo-1595336956583-1a9de3f2cf6d?auto=format&fit=crop&w=800&q=60' },
        { title: 'Learn Basic Computer Skills', description: 'Begin learning how to use computers for educational purposes, including basic typing, internet research, and word processing.', image: 'https://images.unsplash.com/photo-1584697964327-c7d2b8d56558?auto=format&fit=crop&w=800&q=60' },
        { title: 'Develop Social Skills', description: 'Participate in group activities and learn how to share, work with others, and communicate effectively with peers and teachers.', image: 'https://images.unsplash.com/photo-1605791660201-510f54a2b929?auto=format&fit=crop&w=800&q=60' },
        { title: 'Engage in Physical Activities', description: 'Participate in regular physical activities such as sports, games, or outdoor activities to build strength, coordination, and teamwork skills.', image: 'https://images.unsplash.com/photo-1596523352418-01d9d84b739b?auto=format&fit=crop&w=800&q=60' },
        { title: 'Learn to Tell Time', description: 'Learn how to read both digital and analog clocks to develop an essential life skill.', image: 'https://images.unsplash.com/photo-1534298982354-d5b8311a0b3f?auto=format&fit=crop&w=800&q=60' },
        { title: 'Practice Hygiene and Self-Care', description: 'Develop good habits related to hygiene and self-care, such as brushing teeth, washing hands, and eating healthy.', image: 'https://images.unsplash.com/photo-1574244947470-0ba7b9d55a3b?auto=format&fit=crop&w=800&q=60' },
        { title: 'Learn Basic Geography', description: 'Understand the basics of the world’s geography, including countries, continents, and oceans.', image: 'https://images.unsplash.com/photo-1531256023350-5d06bece6c1d?auto=format&fit=crop&w=800&q=60' },
        { title: 'Start Reading for Pleasure', description: 'Read stories and books that interest you to develop a love for reading and build vocabulary.', image: 'https://images.unsplash.com/photo-1577762041865-89ac8be7c755?auto=format&fit=crop&w=800&q=60' },
        { title: 'Learn to Work Independently', description: 'Build confidence and independence by completing tasks without relying on others, such as school projects or homework.', image: 'https://images.unsplash.com/photo-1534708925383-c8cfe8f376f2?auto=format&fit=crop&w=800&q=60' },
        { title: 'Develop Empathy and Kindness', description: 'Practice empathy and kindness by helping others, sharing, and resolving conflicts peacefully with friends and classmates.', image: 'https://images.unsplash.com/photo-1573504166507-74bcff61b15d?auto=format&fit=crop&w=800&q=60' },
        { title: 'Practice Mindfulness and Relaxation', description: 'Learn simple relaxation and mindfulness techniques, such as deep breathing, to manage stress and emotions.', image: 'https://images.unsplash.com/photo-1562573663-e61728264e8a?auto=format&fit=crop&w=800&q=60' },
        { title: 'Learn about Different Cultures', description: 'Explore the different cultures of the world, including their food, music, and customs, to build cultural awareness.', image: 'https://images.unsplash.com/photo-1582106745249-1de774de577d?auto=format&fit=crop&w=800&q=60' },
    ];

    return (
        <div className="bg-gradient-to-b from-orange-300 to-orange-100 p-6 min-h-screen">
            <h2 className="text-3xl font-bold text-blue-700 text-center">Primary School Students' Academic Goals</h2>
            <p className="mt-4 text-gray-600 text-center">
                At this stage, focus on building foundational skills for learning, social interaction, and creativity that will carry you through school life.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {primarySchoolGoals.map((goal, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
                        <img src={goal.image} alt={goal.title} className="w-full h-40 object-cover" />
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

export default Primarygoals;
