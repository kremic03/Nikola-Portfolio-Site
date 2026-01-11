import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section - Landing page with intro */}
      <Hero />

      {/* Projects Section - Portfolio showcase */}
      <Projects />

      {/* Experience Section - Timeline of achievements */}
      <Experience />

      {/* Contact Section - Get in touch */}
      <Contact />

      {/* Footer - Bottom navigation and links */}
      <Footer />
    </div>
  );
}

export default App;
