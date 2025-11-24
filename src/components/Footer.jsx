import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  let currentYear = new Date().getFullYear();

  let socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: 'https://github.com/kremic03',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/nikola-kremic-b4a318257/',
      label: 'LinkedIn',
    },
    {
      icon: <FaInstagram size={20} />,
      href: 'https://www.instagram.com/kremic_nikola/',
      label: 'Instagram',
    },
  ];

  let scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-3 text-gradient">
              Nikola Kremić
            </h3>
            <p className="text-gray-400 text-sm">
              Web Developer & Software Engineering Student passionate about
              building modern, responsive web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-3">
              Connect With Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-xl hover:bg-primary-600 transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center items-center">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} Nikola Kremić. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
