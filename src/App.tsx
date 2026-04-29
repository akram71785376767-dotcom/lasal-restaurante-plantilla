import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import MenuSection from './components/MenuSection';
import Reservations from './components/Reservations';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Reviews from './components/Reviews';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'reservations', 'about', 'gallery', 'contact'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-black">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      <Hero onReserveClick={() => scrollToSection('reservations')} />
      <MenuSection />
      <Reservations />
      <About />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
