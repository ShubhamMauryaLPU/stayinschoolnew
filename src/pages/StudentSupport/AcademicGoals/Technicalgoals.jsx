import React from 'react';

const Technicalgoals = () => {
    const academicGoals = [
        {
            title: 'Master Data Structures and Algorithms',
            description: 'Strengthen problem-solving skills and prepare for technical interviews.',
            image: 'https://images.unsplash.com/photo-1584697964327-c7d2b8d56558?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Build Software Development Skills',
            description: 'Work on real-world projects, contribute to open source, and learn version control.',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Participate in Hackathons',
            description: 'Enhance creativity, coding speed, and collaboration skills.',
            image: 'https://images.unsplash.com/photo-1573497161733-006929c7b7a0?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Maintain a High GPA',
            description: 'Keep strong academic records for scholarships and higher studies.',
            image: 'https://images.unsplash.com/photo-1603574670812-d24560880210?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Complete Certification Courses',
            description: 'Certify in fields like Cloud, Cybersecurity, AI, and Web Development.',
            image: 'https://images.unsplash.com/photo-1610484826928-29d6a962f6b5?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Learn System Design',
            description: 'Understand architecture, scalability, and designing large systems.',
            image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Publish Research Papers',
            description: 'Collaborate with professors and contribute to the academic community.',
            image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Develop a Strong Portfolio',
            description: 'Showcase coding projects, contributions, and real-world solutions on GitHub.',
            image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Improve Communication Skills',
            description: 'Practice public speaking, presentations, and effective email writing.',
            image: 'https://images.unsplash.com/photo-1584697964228-83e5dcd95c51?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Intern with Top Tech Companies',
            description: 'Gain industry experience through internships during summer breaks.',
            image: 'https://images.unsplash.com/photo-1581090700227-1c7c67f8e97d?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Learn UI/UX Design Basics',
            description: 'Understand user-centered design principles and wireframing tools.',
            image: 'https://images.unsplash.com/photo-1612831661463-5b8b807ac08c?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Create a Personal Website',
            description: 'Build a website to highlight your portfolio, resume, and achievements.',
            image: 'https://images.unsplash.com/photo-1616401784215-31c3b9e0b3a1?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Join Technical Clubs',
            description: 'Be active in coding clubs, robotics clubs, or AI societies.',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Win Coding Contests',
            description: 'Participate in LeetCode, Codeforces, and CodeChef competitions.',
            image: 'https://images.unsplash.com/photo-1518081461904-9bbe09c7e520?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Master a Backend Language',
            description: 'Focus on Java, Node.js, Python, or Ruby on Rails.',
            image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Learn Frontend Frameworks',
            description: 'Master React.js, Angular, or Vue.js for web development.',
            image: 'https://images.unsplash.com/photo-1573164574231-8b31aa1a2274?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Get AWS Certified',
            description: 'Achieve AWS Cloud Practitioner or Solution Architect certification.',
            image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Understand DevOps Basics',
            description: 'Learn about CI/CD pipelines, Docker, and Kubernetes.',
            image: 'https://images.unsplash.com/photo-1558898479-33c0051c90f8?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Learn Mobile App Development',
            description: 'Develop Android/iOS apps using Flutter, Kotlin, or Swift.',
            image: 'https://images.unsplash.com/photo-1611931903365-d5ce28d94197?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Contribute to Open Source',
            description: 'Collaborate on open projects and make meaningful contributions.',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Read Technical Books',
            description: 'Complete classics like "Clean Code" and "Design Patterns".',
            image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Practice Competitive Programming',
            description: 'Daily solve problems on platforms like HackerRank and GeeksforGeeks.',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee9819?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Attend Tech Conferences',
            description: 'Network, learn new trends, and meet industry leaders at conferences.',
            image: 'https://images.unsplash.com/photo-1568043210943-6f1c2432f3ea?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Develop AI/ML Models',
            description: 'Start with basics of Machine Learning and build small models.',
            image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-300 to-orange-100 flex flex-col">
            <header className="text-center p-8">
                <h1 className="text-4xl font-bold text-blue-700">Technical Goals for College Students</h1>
                <p className="mt-2 text-gray-700 text-lg">Focus area: Academic Goals</p>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                    Achieving technical goals can shape your academic and professional career. Start early, aim high, and track your progress!
                </p>
            </header>

            <main className="flex-grow px-6 pb-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {academicGoals.map((goal, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
                            <img src={goal.image} alt={goal.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-blue-600 mb-2">{goal.title}</h2>
                                <p className="text-gray-700">{goal.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Technicalgoals;
