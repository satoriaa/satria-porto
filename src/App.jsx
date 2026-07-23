import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GithubStats from './components/GithubStats';
import Footer from './components/Footer';
import Experience from './components/Experience';
import SplashScreen from './components/SplashScreen';
import ChatBot from './components/ChatBot';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const retroShadow = { boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' };
  const btnClass = "bg-black text-white px-6 py-2 font-black text-xs border-2 border-black transition-all uppercase hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none";

  const handleFinishLoading = () => {
    setShowContent(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800); 
  };

  // Urutan section untuk navigasi stacking
  const sectionOrder = ['home', 'about', 'experience', 'skills', 'projects', 'github', 'contact'];

  // FUNGSI NAVIGASI UNTUK EFEK STACKING (Nimpa Section)
  // Karena semua section sticky di top:0, getBoundingClientRect tidak akurat.
  // Solusi: scroll berdasarkan index * viewport height
  const scrollToSection = (e, id) => {
    if (e) e.preventDefault();

    const index = sectionOrder.indexOf(id);
    if (index === -1) return;

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Setiap section = 1 viewport penuh
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (isLoading) return;

    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          el.classList.add('in-view');
        } else {
          el.classList.remove('in-view');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: [0.5]
    });

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <div className="bg-[#dfdfdf] font-mono text-black selection:bg-yellow-300 min-h-screen flex flex-col">
      {isLoading && <SplashScreen finishLoading={handleFinishLoading} isExiting={showContent} />}
      
      {showContent && <Navbar scrollToSection={scrollToSection} />}
      
      <main className={`relative w-full flex-grow transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Hero 
          retroShadow={retroShadow} 
          btnClass={btnClass} 
          scrollToSection={scrollToSection} 
        />

        <About />
        <Experience />
        <Skills />
        <Projects btnClass={btnClass} />
        <GithubStats />
        <Contact />
        
        <footer id="footer">
          <Footer />
        </footer>
      </main>

      {showContent && <ChatBot />}

      <style jsx>{`
        main {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}

export default App;
