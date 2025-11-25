import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

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

  // Projects data
  let projects = [
    {
      title: 'Mobile Application Development',
      description:
        'Developed an Android mobile application using Kotlin in Android Studio. Implemented features for tracking payments and online orders with Firebase integration for data storage and real-time updates. Focused on creating a clean, user-friendly interface and ensuring smooth app performance.',
      techStack: ['Kotlin', 'Android Studio', 'Firebase'],
      githubUrl: null,
      liveUrl: null,
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'IBM Software Modeling Project',
      description:
        'Completed as part of the IBM Software Basics and Modeling program. Created UML diagrams to represent software structure and workflows. Learned software lifecycle stages, requirement analysis, and system design principles. Gained hands-on experience with modeling tools and documentation practices.',
      techStack: ['UML', 'Software Design', 'Documentation'],
      githubUrl: null,
      liveUrl: null,
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      title: 'Client-Side Web Application',
      description:
        'Developed a modern web application as part of the Client-Side Web Applications university course. Used React for building an interactive and responsive user interface. Connected the application to a custom database for storing and retrieving data dynamically. Focused on clean code structure, component reusability, and efficient state management.',
      techStack: ['React', 'JavaScript', 'Database', 'HTML', 'CSS'],
      githubUrl: null,
      liveUrl: null,
      gradient: 'from-cyan-500 to-teal-600',
    },
    {
      title: 'Freelance Website Development',
      description:
        'Designed and developed websites for small clients using HTML, CSS, and JavaScript. Created responsive layouts and interactive features to improve user experience. Managed projects end-to-end, from design concept to deployment.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      githubUrl: null,
      liveUrl: null,
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'PixelFrame Portfolio',
      description:
        'Developed a responsive personal portfolio website to promote web design and development services. Showcases previous work, service details, and contact options for potential clients. Focused on clean UI design, usability, and performance optimization. Implemented modern front-end techniques to ensure compatibility across devices and browsers.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
      githubUrl: null,
      liveUrl: null,
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in web development,
            UI/UX design, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Project Thumbnail Placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-6xl font-bold relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                <span className="relative z-10">
                  {project.title.charAt(0)}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
                    >
                      <FaGithub size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
