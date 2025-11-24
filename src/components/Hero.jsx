import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';
import profileImage from '../assets/profilna_slika.jpeg';

function Hero() {
  // Animation variants for staggered children
  let containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  let itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Scroll to about section
  let scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-primary-50 px-4 relative">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full shadow-2xl overflow-hidden border-4 border-white">
            <img
              src={profileImage}
              alt="Nikola Kremić"
              className="w-full h-full object-cover object-center scale-100"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-display font-bold mb-4 text-gray-900"
        >
          Nikola Kremić
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gradient font-semibold mb-6"
        >
          Web Developer • Software Engineering Student
        </motion.p>

        {/* Short intro */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
        >
          Building modern, responsive web applications with clean design and
          attention to detail. Passionate about creating seamless user
          experiences.
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center mb-12"
        >
          <a
            href="https://github.com/kremic03"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-gray-700 hover:text-primary-600"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nikola-kremic-b4a318257/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-gray-700 hover:text-primary-600"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/kremic_nikola/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-gray-700 hover:text-primary-600"
          >
            <FaInstagram size={24} />
          </a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.button
          variants={itemVariants}
          onClick={scrollToAbout}
          className="inline-flex flex-col items-center text-gray-500 hover:text-primary-600 transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
