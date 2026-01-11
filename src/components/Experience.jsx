import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Trophy, Code, Briefcase, Award } from 'lucide-react';
// Import logos
import singidunumLogo from '../assets/singidunum-logo.png';
import digiEduLogo from '../assets/digiedu.jpg';
import emsLogo from '../assets/Elektromreza_Srbije_Logo.jpg';
import ibmLogo from '../assets/ibm-logo.jpg';
import freelanceLogo from '../assets/freelance.jpg';

function Experience() {
  let ref = useRef(null);
  let isInView = useInView(ref, { once: true, margin: '-100px' });

  // Animation variants
  let containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  let itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Experience data - Expanded
  let experiences = [
    {
      company: 'Singidunum University',
      icon: <GraduationCap size={32} />,
      logo: singidunumLogo,
      position: 'Final year Software Engineering student',
      period: 'Sept 2022 - Present',
      description:
        'I am a final-year Software Engineering student at Singidunum University with strong technical knowledge and hands-on experience in frontend and backend development using JavaScript, React, Tailwind CSS, Python, SQL and Kotlin.',
      category: 'Education',
    },
    {
      company: 'Elektromreža srbije (EMS)',
      icon: <Code size={32} />,
      logo: emsLogo,
      position: 'Internship Full-Stack Developer',
      period: '2025',
      description:
        'During my internship, I worked on the development of full stack web applications with a strong focus on backend logic, database design, and modern frontend technologies. I was responsible for database modeling, including schema design and optimization, as well as creating UML diagrams such as activity and sequence diagrams to clearly define system workflows and business logic. On the frontend, I worked with React, Next.js, JavaScript, and Tailwind CSS to build responsive and user-friendly interfaces. On the backend, I worked with PostgreSQL, writing SQL queries, designing relational data models, and managing databases using DBeaver. Through this internship, I gained hands-on experience across the full development lifecycle and developed a solid understanding of full stack application architecture.',
      category: 'Experience',
    },
    {
      company: 'DigiEduHack',
      icon: <Trophy size={32} />,
      logo: digiEduLogo,
      position: '3rd Place Achievement',
      period: '2025',
      description:
        'Secured 3rd place at a national-level programming competition, demonstrating strong problem-solving skills and algorithmic thinking under pressure. Competed against top programmers across the country.',
      category: 'Achievement',
    },
    {
      company: 'IBM',
      icon: <Award size={32} />,
      logo: ibmLogo,
      position: 'Software Basics & Modeling Certification',
      period: '2023',
      description:
        'Completed IBM certification covering fundamental software engineering principles, UML modeling, and software development lifecycle best practices. Learned industry-standard practices for software design and architecture.',
      category: 'Certification',
    },
    {
      company: 'Freelance',
      icon: <Briefcase size={32} />,
      logo: freelanceLogo,
      position: 'Web Designer & Developer',
      period: '2022 - Present',
      description:
        'Creating custom websites, promotional banners, and digital assets for various clients. Focused on modern design trends, responsive layouts, and brand consistency. Managed projects end-to-end from design concept to deployment.',
      category: 'Freelance',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-dark-bg transition-colors duration-300">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-accent-blue to-primary-500 bg-clip-text text-transparent">
            EXPERIENCE
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <motion.div variants={containerVariants} className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-dark-card rounded-2xl p-8 border border-gray-200 dark:border-dark-border hover:border-accent-blue dark:hover:border-accent-blue transition-all duration-300 hover:shadow-2xl hover:shadow-accent-blue/10"
            >
              <div className="flex items-start gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-white rounded-xl flex items-center justify-center p-3 shadow-md">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-gray-800">
                      {exp.icon}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Category Badge */}
                  {exp.category && (
                    <span className="inline-block px-3 py-1 bg-accent-blue/10 dark:bg-accent-blue/20 text-accent-blue text-xs font-semibold rounded-full mb-3">
                      {exp.category}
                    </span>
                  )}

                  {/* Position & Period */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company */}
                  <p className="text-primary-600 dark:text-accent-pink font-semibold mb-3">
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Experience;
