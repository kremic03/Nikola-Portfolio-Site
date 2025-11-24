import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function Skills() {
  let ref = useRef(null);
  let isInView = useInView(ref, { once: true, margin: '-100px' });

  // Animation variants
  let containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  let itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  // Skills data organized by category
  let skillCategories = [
    {
      title: 'Frontend & Web',
      skills: [
        { name: 'React', color: 'from-cyan-400 to-blue-500' },
        { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
        { name: 'HTML', color: 'from-orange-500 to-red-600' },
        { name: 'CSS', color: 'from-blue-400 to-blue-600' },
        { name: 'TailwindCSS', color: 'from-cyan-400 to-teal-500' },
      ],
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Kotlin', color: 'from-purple-500 to-indigo-600' },
        { name: 'Firebase', color: 'from-yellow-500 to-orange-500' },
        { name: 'SQL', color: 'from-blue-500 to-indigo-600' },
        { name: 'Python', color: 'from-blue-400 to-yellow-400' },
        { name: 'Docker', color: 'from-blue-500 to-cyan-500' },
      ],
    },
    {
      title: 'Design & Other',
      skills: [
        { name: 'UI/UX Design', color: 'from-pink-500 to-rose-600' },
        { name: 'Figma', color: 'from-purple-400 to-pink-500' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-primary-50">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <h3 className="text-2xl font-display font-semibold mb-6 text-gray-800 text-center md:text-left">
                {category.title}
              </h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                      {/* Skill Icon/Initial */}
                      <div
                        className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md`}
                      >
                        {skill.name.charAt(0)}
                      </div>
                      {/* Skill Name */}
                      <p className="text-center font-semibold text-gray-800 text-sm md:text-base">
                        {skill.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
