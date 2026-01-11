import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

function Projects() {
  let ref = useRef(null);
  let isInView = useInView(ref, { once: true, margin: '-100px' });

  // Animation variants
  let containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  // Projects data - Only showing 2 projects for Figma design
  let projects = [
    {
      title: 'Application for finding jobs',
      subtitle: 'Joblyst',
      description: 'Developed a job search application in Kotlin, focusing on creating a smooth and responsive user experience. Implemented features for browsing, filtering, and finding job opportunities efficiently.',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      liveUrl: 'https://github.com/kremic03/Aplikacija-za-pronalazenje-poslova',
    },
    {
      title: 'Internship Project - Zoo App',
      subtitle: 'Internship Project - Zoo App',
      description: 'Built a Zoo app from scratch as an internship project, designing both frontend and backend functionality. Implemented interactive features to explore animals, exhibits, and educational content.',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      liveUrl: '#',
    },
    {
      title: 'Real Estate  Website',
      subtitle: 'Real Estate  Website',
      description: 'Developed a real estate website using React and Tailwind CSS, focusing on creating a user-friendly interface for browsing property listings. Implemented features for searching, filtering, and viewing property details.',
      gradient: 'from-green-400 via-blue-500 to-purple-600',
      liveUrl: '#'
    },
    {
      title: 'Personal Portfolio',
      subtitle: 'Personal Portfolio Website',
      description: 'Created a personal portfolio website to showcase projects and skills using React and Tailwind CSS. Focused on responsive design and smooth animations to enhance user experience.',
      gradient: 'from-pink-500 via-red-500 to-yellow-500',
      liveUrl: 'https://github.com/kremic03/Nikola-Portfolio-Site'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-dark-bg transition-colors duration-300">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-accent-orange to-accent-coral bg-clip-text text-transparent">
            PROJECTS
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-border hover:border-accent-orange dark:hover:border-accent-orange transition-all duration-300 hover:shadow-2xl hover:shadow-accent-orange/10"
            >
              {/* Project Thumbnail */}
              <div className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 text-center text-white">
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-2">
                    {project.subtitle}
                  </h3>
                </div>

                {/* External Link Icon */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 z-20"
                >
                  <ExternalLink size={20} className="text-white" />
                </a>
              </div>

              {/* Project Content */}
              <div className="p-6 bg-white dark:bg-dark-card">
                <h4 className="font-display font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
