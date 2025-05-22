import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NonTechnicalRead = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const nonTechResources = {
    "⏳ Time Management": [
      {
        title: "Time Management Worksheet",
        description: "A practical worksheet to help you plan and manage your time effectively.",
        link: "https://uiu.edu/wp-content/uploads/Time-Management-Worksheet.pdf",
        iconClass: "fa-solid fa-clock",
        color: "bg-blue-100"
      },
      {
        title: "20 Time Management Tips",
        description: "Essential tips to enhance your productivity and manage time efficiently.",
        link: "https://www.american.edu/student-affairs/counseling/upload/20-time-management-tips.pdf",
        iconClass: "fa-solid fa-hourglass-half",
        color: "bg-blue-50"
      },
      {
        title: "The Successful Person's Guide to Time Management",
        description: "Comprehensive guide to developing effective time management habits.",
        link: "https://publications.ca.uky.edu/sites/publications.ca.uky.edu/files/fcs7101.pdf",
        iconClass: "fa-solid fa-calendar-check",
        color: "bg-blue-100"
      },
    ],
    "🤝 Soft Skills": [
      {
        title: "Soft Skills Training Material",
        description: "Develop essential soft skills for personal and professional growth.",
        link: "https://www.giz.de/en/downloads/giz2022-en-soft-skill-training-material.pdf",
        iconClass: "fa-solid fa-users",
        color: "bg-green-100"
      },
      {
        title: "Soft Skills for Work Workbook",
        description: "A workbook to enhance your soft skills for workplace success.",
        link: "https://www.nwtliteracy.ca/sites/default/files/resources/soft_skills_for_work_workbook.pdf",
        iconClass: "fa-solid fa-briefcase",
        color: "bg-green-50"
      },
    ],
    "💼 Career Building": [
      {
        title: "Writing an Effective Resume",
        description: "Guidelines to craft a compelling and effective resume.",
        link: "https://www.elmhurst.edu/wp-content/uploads/2017/10/Elmhurst-College-Writing-An-Effective-Resume.pdf",
        iconClass: "fa-solid fa-file-lines",
        color: "bg-purple-100"
      },
      {
        title: "Resume Guide 2024",
        description: "Up-to-date resume writing tips and best practices.",
        link: "https://www.dctc.edu/sites/DCTC/assets/File/pdf/support-services/career-services/Resume-Guide-2024.pdf",
        iconClass: "fa-solid fa-file-alt",
        color: "bg-purple-50"
      },
    ],
    "🎤 Public Speaking": [
      {
        title: "Basic Tips for Public Speaking",
        description: "Fundamental tips to enhance your public speaking skills.",
        link: "https://www.charities.org/wp-content/uploads/legacy/Basic%20Tips%20for%20Public%20Speaking.pdf",
        iconClass: "fa-solid fa-microphone",
        color: "bg-red-100"
      },
      {
        title: "52 Tips to Power Up Your Public Speaking",
        description: "Comprehensive tips to become a confident public speaker.",
        link: "https://edwebcontent.ed.ac.uk/sites/default/files/atoms/files/handout_-_52_tips_to_power_up_your_public_speaking.pdf",
        iconClass: "fa-solid fa-bullhorn",
        color: "bg-red-50"
      },
    ],
    "🎯 Interview Prep": [
      {
        title: "Preparing for an Interview",
        description: "Essential steps to prepare effectively for job interviews.",
        link: "https://www.goucher.edu/career-education-office/documents/Preparing-for-an-Interview.pdf",
        iconClass: "fa-solid fa-comments",
        color: "bg-yellow-100"
      },
      {
        title: "Commonly Asked Interview Questions",
        description: "Frequently asked interview questions and answers.",
        link: "https://www.regiscollege.edu/sites/default/files/academics/career/interview-faq.pdf",
        iconClass: "fa-solid fa-question-circle",
        color: "bg-yellow-50"
      },
    ]
  };

  const nonTechnicalReadSuggestion = () => {
    navigate('/nonTechnicalRead/suggestResource');
  };

  const filteredResources = Object.fromEntries(
    Object.entries(nonTechResources).map(([category, items]) => [
      category,
      items.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  ]));

  const ResourceCard = ({ title, description, link, iconClass, color }) => (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`p-5 rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-64 ${color} border border-white`}
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg ${color.replace('100', '200').replace('50', '100')}`}>
            <i className={`${iconClass} text-lg text-gray-700`}></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <motion.a 
        href={link} 
        target="_blank"
        whileHover={{ scale: 1.05 }}
        className="mt-4 text-center text-white font-medium py-2 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
      >
        View Resource
      </motion.a>
    </motion.div>
  );

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-3">
            Essential <span className="bg-orange-200 px-3 py-1 rounded-lg">Non-Technical</span> Resources
          </h1>
          <p className="text-xl text-orange-700 max-w-3xl mx-auto">
            Boost your career with these carefully curated soft skills and professional development materials
          </p>
        </motion.div>

        {/* Search and Category Filter */}
        <div className="mb-10">
          <div className="max-w-2xl mx-auto mb-6 relative">
            <input
              type="text"
              placeholder="🔍 Search resources by title or description..."
              className="w-full px-5 py-3 border border-orange-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {Object.keys(nonTechResources).map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                className={`px-4 py-2 rounded-full font-medium ${activeCategory === category ? 'bg-orange-600 text-white' : 'bg-white text-orange-600'} shadow-md`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Resource Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(filteredResources).map(([category, items], i) => (
            (activeCategory === null || activeCategory === category) && items.length > 0 && (
              <motion.section 
                key={i}
                variants={itemVariants}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">{category.split(" ")[0]}</h2>
                  <span className="text-gray-500">{category.split(" ").slice(1).join(" ")}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {items.map((item, index) => (
                    <ResourceCard key={index} {...item} />
                  ))}
                </div>
              </motion.section>
            )
          ))}
        </motion.div>

        {/* Featured Resources */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 mb-20"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-orange-700 mb-8">
              <span className="bg-orange-100 px-4 py-2 rounded-lg">🌟 Featured Resources</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(nonTechResources).flat().slice(0, 3).map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-xl border border-orange-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-500 text-white p-2 rounded-lg">
                      <i className={`${item.iconClass} text-lg`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    className="text-orange-600 font-medium hover:underline flex items-center gap-2"
                  >
                    Access Resource <i className="fas fa-external-link-alt text-sm"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default NonTechnicalRead;