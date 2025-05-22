import React from 'react';

const HighSchoolgoals = () => {
    const highSchoolGoals = [
        { title: 'Prepare for College Admissions', description: 'Focus on excelling in academics and extracurriculars, including volunteer work, leadership roles, and standardized test preparation.', image: 'https://images.unsplash.com/photo-1530877509054-4f6f338f2db5?auto=format&fit=crop&w=800&q=60' },
        { title: 'Improve Time Management', description: 'Learn to balance schoolwork, activities, and personal life. Master scheduling and prioritizing tasks effectively.', image: 'https://images.unsplash.com/photo-1512058577033-3f1374013e77?auto=format&fit=crop&w=800&q=60' },
        { title: 'Develop Strong Study Habits', description: 'Create a study routine that includes active learning methods such as summarization, self-quizzing, and spaced repetition.', image: 'https://images.unsplash.com/photo-1510051391947-72022d059ef5?auto=format&fit=crop&w=800&q=60' },
        { title: 'Explore Career Paths', description: 'Start exploring different career paths through job shadowing, internships, or career counseling to make an informed decision about your future.', image: 'https://images.unsplash.com/photo-1575505975413-bce5e8b8c8f5?auto=format&fit=crop&w=800&q=60' },
        { title: 'Join School Clubs and Teams', description: 'Participate in clubs like debate, theater, or sports to build social skills, teamwork, and leadership experience.', image: 'https://images.unsplash.com/photo-1587620954905-e129820b9774?auto=format&fit=crop&w=800&q=60' },
        { title: 'Take Advanced Placement (AP) Courses', description: 'Challenge yourself with AP or honors courses to gain college credit and improve your college application profile.', image: 'https://images.unsplash.com/photo-1533748014817-b8131b59481e?auto=format&fit=crop&w=800&q=60' },
        { title: 'Learn Financial Literacy', description: 'Understand personal finance, budgeting, and saving to build a strong financial foundation for the future.', image: 'https://images.unsplash.com/photo-1574287382124-b5fc5104c804?auto=format&fit=crop&w=800&q=60' },
        { title: 'Build a Strong Portfolio for College', description: 'Create a portfolio with academic achievements, volunteer work, and extracurricular activities to showcase during college applications.', image: 'https://images.unsplash.com/photo-1508919209987-82ea8714f6cf?auto=format&fit=crop&w=800&q=60' },
        { title: 'Participate in Mock Interviews', description: 'Prepare for future job interviews or college admissions interviews by practicing with mock interviews and feedback sessions.', image: 'https://images.unsplash.com/photo-1519608487957-fddc4bc24d80?auto=format&fit=crop&w=800&q=60' },
        { title: 'Engage in Volunteer Activities', description: 'Get involved in community service or volunteer work to give back, build character, and enhance your college applications.', image: 'https://images.unsplash.com/photo-1500910924586-cff57f59f6ea?auto=format&fit=crop&w=800&q=60' },
        { title: 'Learn Public Speaking Skills', description: 'Develop confidence in public speaking by practicing speeches and presentations in front of others to improve your communication abilities.', image: 'https://images.unsplash.com/photo-1575249992189-28d57406312b?auto=format&fit=crop&w=800&q=60' },
        { title: 'Join a Student Government', description: 'Gain leadership experience and make a positive impact on school policies by running for student government positions.', image: 'https://images.unsplash.com/photo-1516901689182-7b88a31be23a?auto=format&fit=crop&w=800&q=60' },
        { title: 'Prepare for SAT/ACT Tests', description: 'Set a study schedule and prepare thoroughly for standardized tests such as SAT or ACT for college admissions.', image: 'https://images.unsplash.com/photo-1507655442129-e6b8e1a27be1?auto=format&fit=crop&w=800&q=60' },
        { title: 'Stay Active and Healthy', description: 'Engage in regular physical activities to maintain a healthy body and mind, which is essential for academic success.', image: 'https://images.unsplash.com/photo-1572295862348-9185873fd8be?auto=format&fit=crop&w=800&q=60' },
        { title: 'Cultivate Resilience and Grit', description: 'Develop a mindset that embraces challenges, learns from failures, and continues to strive toward long-term goals.', image: 'https://images.unsplash.com/photo-1572297496211-c9836b660a2c?auto=format&fit=crop&w=800&q=60' },
    ];

    return (
        <div className="bg-gradient-to-b from-orange-300 to-orange-100 p-6 min-h-screen">
            <h2 className="text-3xl font-bold text-blue-700 text-center">High School Students' Academic Goals</h2>
            <p className="mt-4 text-gray-600 text-center">
                High school is a time for laying the foundation for college and career success. 
                These goals focus on both academic growth and extracurricular involvement.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {highSchoolGoals.map((goal, index) => (
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

export default HighSchoolgoals;
