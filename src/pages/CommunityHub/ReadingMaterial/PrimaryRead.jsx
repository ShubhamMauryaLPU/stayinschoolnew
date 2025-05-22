import React from 'react'

export const PrimaryRead = () => {
  const resources = [
    {
      title: "Science (Class 9)",
      description: "Learn concepts in Physics, Chemistry, and Biology like Matter, Motion, and Tissues.",
      link: "https://www.khanacademy.org/science/class-9-science-india"
    },
    {
      title: "Mathematics (Class 9)",
      description: "Master topics like Number Systems, Polynomials, Geometry, and Statistics.",
      link: "https://ncert.nic.in/textbook.php?iemo1=0-15"
    },
    {
      title: "Social Science (Class 9)",
      description: "Study History, Geography, Political Science, and Economics in depth.",
      link: "https://ncert.nic.in/textbook.php?iess1=0-7"
    },
    {
      title: "English (Class 9)",
      description: "Improve your reading, writing, grammar, and literature skills with NCERT English books.",
      link: "https://ncert.nic.in/textbook.php?ieen1=0-9"
    },
    {
      title: "Hindi (Class 9)",
      description: "Learn Hindi grammar, prose, and poetry as per Class 9 curriculum.",
      link: "https://ncert.nic.in/textbook.php?iemo1=0-15"
    },
    {
      title: "Information Technology (Class 9)",
      description: "Introduction to computers, cyber safety, and basics of programming.",
      link: "https://cbseacademic.nic.in/curriculum_2024.html"
    },
    {
      title: "Sanskrit (Class 9)",
      description: "Learn the basics of Sanskrit language including grammar and literature.",
      link: "https://ncert.nic.in/textbook.php?iesk1=0-11"
    },
    {
      title: "Health and Physical Education (Class 9)",
      description: "Understand fitness, health education, and sportsmanship concepts.",
      link: "https://ncert.nic.in/textbook.php?ihep1=0-6"
    },
    {
      title: "Artificial Intelligence (Class 9 Optional)",
      description: "Explore basics of AI, machine learning concepts and real-world applications.",
      link: "https://cbseacademic.nic.in/"
    },
    {
      title: "Environmental Science (EVS)",
      description: "Learn about ecosystems, environmental problems, and sustainability.",
      link: "https://ncert.nic.in/textbook.php"
    },
    {
      title: "Science (Class 10)",
      description: "Learn important concepts in Physics, Chemistry, and Biology like Light, Chemical Reactions, and Heredity.",
      link: "https://www.khanacademy.org/science/class-10-science-india"
    },
    {
      title: "Mathematics (Class 10)",
      description: "Master Real Numbers, Polynomials, Trigonometry, Statistics, and Probability.",
      link: "https://ncert.nic.in/textbook.php/jemh1=0-16"
    },
    {
      title: "Social Science (Class 10)",
      description: "Study History, Geography, Civics, and Economics for Class 10 Board Exams.",
      link: "https://ncert.nic.in/textbook.php/jess1=0-7"
    },
    {
      title: "English (Class 10)",
      description: "Enhance your Literature, Grammar, and Writing skills for exams and communication.",
      link: "https://ncert.nic.in/textbook.php/jeen1=0-9"
    },
    {
      title: "Hindi (Class 10)",
      description: "Improve your understanding of Hindi prose, poetry, and grammar.",
      link: "https://ncert.nic.in/textbook.php/jhhn1=0-7"
    },
    {
      title: "Computer Applications (Class 10)",
      description: "Basics of coding, HTML, Internet Technology, and Cyber Safety for beginners.",
      link: "https://cbseacademic.nic.in/curriculum_2024.html"
    },
    {
      title: "Sanskrit (Class 10)",
      description: "Study Sanskrit grammar, compositions, and classic literature.",
      link: "https://ncert.nic.in/textbook.php/jesk1=0-8"
    },
    {
      title: "Health and Physical Education (Class 10)",
      description: "Understand fitness, mental health, and sports education fundamentals.",
      link: "https://ncert.nic.in/textbook.php/jhep1=0-6"
    },
    {
      title: "Artificial Intelligence (Class 10 Optional)",
      description: "Introduction to AI concepts, real-world applications, and ethical use of technology.",
      link: "https://cbseacademic.nic.in/"
    },
    {
      title: "Environmental Studies (EVS)",
      description: "Learn about sustainable development, conservation, and environmental awareness.",
      link: "https://ncert.nic.in/textbook.php"
    }
  ];

  const ResourceCard = ({ title, description, link }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow flex flex-col justify-between h-72">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 block hover:underline text-center">
            Learn More
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen py-10">
      <main className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Class 9 & 10 Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </main>
    </div>
  );
}
