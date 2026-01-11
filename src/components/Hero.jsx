import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiHtml5, SiCss3, SiTailwindcss, SiPython, SiKotlin } from 'react-icons/si';
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

  let technologies = [
    { icon: <SiReact size={32} />, name: 'React' },
    { icon: <SiNodedotjs size={32} />, name: 'Node.js' },
    { icon: <SiHtml5 size={32} />, name: 'HTML5' },
    { icon: <SiCss3 size={32} />, name: 'CSS3' },
    { icon: <SiTailwindcss size={32} />, name: 'Tailwind' },
    { icon: <SiPython size={32} />, name: 'Python' },
    { icon: <SiKotlin size={32} />, name: 'Kotlin' },
  ];

  let scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-bg px-4 py-20 transition-colors duration-300">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with gradient border */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-44 h-44 mx-auto rounded-full p-1 bg-gradient-to-br from-accent-pink via-accent-magenta to-accent-orange">
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-dark-card">
              <img
                src={profileImage}
                alt="Nikola Kremić"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-gray-900 dark:text-white"
        >
         I build web apps and
          <br />
          share my coding journey{' '}
          <span className="bg-gradient-to-r from-accent-orange to-accent-coral bg-clip-text text-transparent">
          with the world.
          </span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I am a full-stack developer intern skilled in building web applications, with experience in frontend development using React, Next.js, JavaScript, and Tailwind CSS, as well as backend development and database modeling with PostgreSQL, SQL, and DBeaver.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-white dark:bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Get In Touch
          </button>
          <a
            href="/KremicNikolaCv.pdf"
            download
            className="px-8 py-3 bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 hover:-translate-y-1"
          >
            Download CV
          </a>
        </motion.div>

        {/* Experience With Section */}
        <motion.div variants={itemVariants}>
          <p className="text-sm md:text-base uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-6 font-semibold">
            Experience With
          </p>
          <div className="flex gap-6 md:gap-8 justify-center items-center flex-wrap">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="text-gray-400 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-400 transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                title={tech.name}
              >
                {tech.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
