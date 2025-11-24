import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Contact() {
  let ref = useRef(null);
  let isInView = useInView(ref, { once: true, margin: '-100px' });
  let [showPhone, setShowPhone] = useState(false);

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

  let contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'nikolakremic15@gmail.com',
      link: 'mailto:nikolakremic15@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+381 60 422 4990',
      link: 'tel:+381604224990',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Belgrade, Serbia',
      link: null,
    },
  ];

  let socialLinks = [
    {
      icon: <FaGithub size={28} />,
      href: 'https://github.com/kremic03',
      label: 'GitHub',
      color: 'hover:text-gray-900',
    },
    {
      icon: <FaLinkedin size={28} />,
      href: 'https://www.linkedin.com/in/nikola-kremic-b4a318257/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
    },
    {
      icon: <FaInstagram size={28} />,
      href: 'https://www.instagram.com/kremic_nikola/',
      label: 'Instagram',
      color: 'hover:text-pink-600',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-primary-50">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations and opportunities.
          </p>
        </motion.div>

        {/* Contact Information Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-primary-600 mb-4 flex justify-center">
                {info.icon}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-gray-900 text-center">
                {info.label}
              </h3>
              {info.label === 'Phone' ? (
                showPhone ? (
                  <a
                    href={info.link}
                    className="text-gray-600 text-sm text-center block hover:text-primary-600 transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                ) : (
                  <button
                    onClick={() => setShowPhone(true)}
                    className="text-gray-600 text-sm text-center block hover:text-primary-600 transition-colors duration-300 w-full"
                  >
                    Click to reveal
                  </button>
                )
              ) : info.link ? (
                <a
                  href={info.link}
                  className="text-gray-600 text-sm text-center block hover:text-primary-600 transition-colors duration-300"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-600 text-sm text-center">{info.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-xl font-display font-semibold mb-6 text-gray-900">
            Connect With Me
          </h3>
          <div className="flex gap-6 justify-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-gray-700 ${social.color}`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
