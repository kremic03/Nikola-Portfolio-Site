import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Trophy, Gamepad2, Download } from 'lucide-react';

function About() {
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

  // Highlight cards data
  let highlights = [
    {
      icon: <Code2 size={28} />,
      title: 'Software Engineering',
      description: 'Final-year student at Singidunum University',
    },
    {
      icon: <Palette size={28} />,
      title: 'UI/UX Enthusiast',
      description: 'Passionate about clean design & user experience',
    },
    {
      icon: <Trophy size={28} />,
      title: 'Hackathon Participant',
      description: 'Hands-on experience building real solutions',
    },
    {
      icon: <Gamepad2 size={28} />,
      title: 'Gamer & Athlete',
      description: 'FPS, FIFA, GTA • Basketball background',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Bio Content */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a final-year <span className="font-semibold text-primary-700">Software and Information Engineering</span> student
              at Singidunum University, with a unique background in air traffic safety from the Aviation Academy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My journey into tech has been driven by a deep interest in{' '}
              <span className="font-semibold text-primary-700">web development</span>,{' '}
              <span className="font-semibold text-primary-700">frontend technologies</span>,{' '}
              <span className="font-semibold text-primary-700">backend technologies</span>, and{' '}
              <span className="font-semibold text-primary-700">UI/UX design</span>. I have hands-on experience working with various backend
              frameworks and databases, allowing me to build full-stack applications. I thrive on solving complex problems
              and creating modern applications that combine functionality with beautiful, intuitive interfaces.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Beyond coding, I'm passionate about competitive gaming  and have a strong sports background in basketball.
              These experiences have taught me teamwork, strategic thinking, and the importance of continuous improvement—skills
              I bring to every project I work on.
            </p>

            {/* CV Download Button */}
            <div className="flex justify-center">
              <a
                href="/KremicNikolaCv.pdf"
                download="Nikola_Kremic_CV.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:from-primary-700 hover:to-primary-800"
              >
                <Download size={20} />
                <span>Download My CV</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Highlight Cards Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-primary-600 mb-4">{highlight.icon}</div>
              <h3 className="font-display font-semibold text-lg mb-2 text-gray-900">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
