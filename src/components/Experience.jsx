import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Code, Briefcase, Users, Award } from 'lucide-react';

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Timeline data
  let timeline = [
    {
      icon: <Trophy size={24} />,
      title: '3rd Place - National Programming Competition',
      date: '2025',
      description:
        'Secured 3rd place at a national-level programming competition, demonstrating strong problem-solving skills and algorithmic thinking under pressure.',
      color: 'from-yellow-400 to-orange-500',
      category: 'Achievement',
    },
    {
      icon: <Users size={24} />,
      title: 'Hackathon Participation',
      date: '2025',
      description:
        'Collaborated with a team to build a working prototype within 48 hours. Worked on frontend development using React and TailwindCSS. Gained valuable experience in rapid prototyping, teamwork, and presenting technical solutions.',
      color: 'from-purple-500 to-pink-600',
      category: 'Experience',
      tags: ['React', 'TailwindCSS', 'Teamwork', 'Problem Solving'],
    },
    {
      icon: <Award size={24} />,
      title: 'IBM Software Basics & Modeling Diploma',
      date: '2023',
      description:
        'Completed IBM certification covering fundamental software engineering principles, UML modeling, and software development lifecycle best practices.',
      color: 'from-blue-500 to-indigo-600',
      category: 'Certification',
    },
    {
      icon: <Code size={24} />,
      title: 'JavaScript Course',
      date: '2024',
      description:
        'Finished comprehensive JavaScript course covering ES6+, DOM manipulation, async programming, and modern JavaScript frameworks.',
      color: 'from-green-500 to-teal-600',
      category: 'Education',
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Web Design & Banner Creation',
      date: '2022 - Present',
      description:
        'Created custom websites, promotional banners, and digital assets for various clients. Focused on modern design trends, responsive layouts, and brand consistency.',
      color: 'from-pink-500 to-rose-600',
      category: 'Freelance',
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Watch Sales Specialist',
      date: '6 months',
      description:
        'Worked in retail sales gaining customer service experience, product knowledge, and communication skills. Developed ability to understand customer needs and provide tailored solutions.',
      color: 'from-cyan-500 to-blue-600',
      category: 'Work',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-primary-50">
      <motion.div
        ref={ref}
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-primary-300 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <motion.div variants={containerVariants} className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:items-center gap-8`}
              >
                {/* Content Card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                  } ml-20 md:ml-0`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">
                      {item.category}
                    </span>

                    {/* Title and Date */}
                    <h3 className="font-display font-bold text-lg md:text-xl mb-2 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-primary-600 font-semibold mb-3">
                      {item.date}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tags (if any) */}
                    {item.tags && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Icon Circle */}
                <div
                  className={`absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white shadow-lg z-10`}
                >
                  {item.icon}
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
