import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HighSchoolRead = () => {
  const navigate = useNavigate();
  
  const highSchoolReadSuggestion = () => {
    navigate('/highSchoolRead/suggestResource');
  };

  const resources = [
    {
      title: "Mathematics NCERT Class 10",
      description: "Download the full NCERT Mathematics textbook for Class 10 in PDF format.",
      link: "https://ncert.nic.in/textbook/pdf/jemh1dd.zip",
      icon: "fas fa-square-root-alt",
      color: "bg-blue-100"
    },
    {
      title: "Science NCERT Class 10",
      description: "Get the complete Science Class 10 textbook with chapters on Physics, Chemistry, and Biology.",
      link: "https://ncert.nic.in/textbook/pdf/jesc1dd.zip",
      icon: "fas fa-flask",
      color: "bg-green-100"
    },
    {
      title: "English Literature Reader",
      description: "Download the English Literature Reader for CBSE Class 10.",
      link: "https://ncert.nic.in/textbook/pdf/jeen1dd.zip",
      icon: "fas fa-book",
      color: "bg-purple-100"
    },
    {
      title: "Computer Applications (CBSE)",
      description: "Class 10 Computer Applications PDF covering HTML, Scratch, and Python basics.",
      link: "https://cbseacademic.nic.in/web_material/doc/syllabus2023/Sec/Computer%20Applications.pdf",
      icon: "fas fa-laptop-code",
      color: "bg-red-100"
    },
    {
      title: "Social Science NCERT Class 10",
      description: "History, Civics, Geography, and Economics in one combined resource.",
      link: "https://ncert.nic.in/textbook/pdf/jess1dd.zip",
      icon: "fas fa-globe",
      color: "bg-yellow-100"
    },
    {
      title: "Physics Notes for Class 10",
      description: "Revision notes covering key Physics topics for Class 10 boards.",
      link: "https://www.learncbse.in/wp-content/uploads/2019/07/Class-10-Physics-Notes.pdf",
      icon: "fas fa-atom",
      color: "bg-indigo-100"
    },
    {
      title: "Class 10 Mathematics Formula Booklet",
      description: "Quick-reference booklet of all important formulas in PDF format.",
      link: "https://www.tiwariacademy.com/wp-content/uploads/2021/03/Formula-Class-10-Maths.pdf",
      icon: "fas fa-calculator",
      color: "bg-pink-100"
    },
    {
      title: "English Grammar Book for High School",
      description: "Comprehensive English grammar book for high school students.",
      link: "https://www.englishgrammar.org/wp-content/uploads/2011/12/grammarbook.pdf",
      icon: "fas fa-pen",
      color: "bg-teal-100"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const ResourceCard = ({ title, description, link, icon, color }) => (
    <motion.div 
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col justify-between h-72 border-2 border-white ${color} hover:border-orange-300`}
    >
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className={`text-orange-600 ${color.replace('100', '200')} p-3 rounded-full`}>
            <i className={`${icon} text-xl`}></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-700 mb-6">{description}</p>
      </div>
      <motion.a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-auto w-full py-3 px-4 bg-white text-orange-600 font-semibold rounded-lg shadow-md hover:bg-gray-50 text-center transition-colors border border-orange-200"
      >
        Download PDF <i className="fas fa-arrow-down ml-2"></i>
      </motion.a>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
            <span className="inline-block bg-orange-200 px-4 py-2 rounded-lg">📚 High School Resources</span>
          </h1>
          <p className="text-xl text-orange-700 max-w-3xl mx-auto">
            Curated collection of premium study materials for Class 10 students
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {resources.map((res, index) => (
            <ResourceCard key={index} {...res} />
          ))}
        </motion.div>
      </main>
    </div>
  );
};