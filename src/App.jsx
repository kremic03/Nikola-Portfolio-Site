import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section - Landing page with intro */}
      <Hero />

      {/* About Me Section - Biography and background */}
      <About />

      {/* Projects Section - Portfolio showcase */}
      <Projects />

      {/* Experience Section - Timeline of achievements */}
      <Experience />

      {/* Skills Section - Technical skills grid */}
      <Skills />

      {/* Contact Section - Get in touch */}
      <Contact />

      {/* Footer - Bottom navigation and links */}
      <Footer />
    </div>
  );
}

export default App;
