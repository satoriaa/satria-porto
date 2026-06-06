import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GithubStats from './components/GithubStats';
import Footer from './components/Footer';
import Experience from './components/experience';
import SplashScreen from './components/SplashScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // State untuk mentrigger animasi transisi
  const [showContent, setShowContent] = useState(false);

  const retroShadow = { boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' };
  const btnClass = "bg-black text-white px-6 py-2 font-black text-xs border-2 border-black transition-all uppercase hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none";

  const handleFinishLoading = () => {
    setShowContent(true); // Jalankan animasi reveal dulu
    setTimeout(() => {
      setIsLoading(false); // Baru hapus splashscreen dari DOM
    }, 800); 
  };

  // FUNGSI NAVIGASI YANG SUDAH DIPERBAIKI (Mencegah macet dari arah bawah ke atas)
  const scrollToSection = (e, id) => {
    if (e) e.preventDefault();

    const element = document.getElementById(id);
    if (!element) return;

    // Jika kembali ke home, langsung arahkan ke paling atas (koordinat 0)
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    // Mengambil tinggi navbar secara dinamis agar offset pas
    const navEl = document.querySelector('nav');
    let navHeight = navEl ? navEl.getBoundingClientRect().height : 72;
    if (!navHeight || navHeight < 10) navHeight = 72;

    // Hitung posisi absolut elemen pada halaman pembungkus
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    
    // Kurangi dengan tinggi navbar agar konten tidak tertutup navbar fixed
    const offsetPosition = elementPosition - navHeight;

    // Eksekusi scroll satu kali perintah secara clean
    window.scrollTo({
      top: Math.max(0, offsetPosition),
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
      {/* 1. SplashScreen tetap di paling atas (Z-INDEX 999) */}
      {isLoading && <SplashScreen finishLoading={handleFinishLoading} isExiting={showContent} />}
      
      {/* 2. Navbar diluar main agar tetap FIXED. Muncul hanya jika showContent true */}
      {showContent && <Navbar scrollToSection={scrollToSection} />}
      
      {/* 3. Main content dengan animasi reveal yang tidak merusak posisi FIXED navbar */}
      <main className={`relative w-full flex-grow transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative z-10">
          <Hero 
            retroShadow={retroShadow} 
            btnClass={btnClass} 
            scrollToSection={scrollToSection} 
          />
        </div>

        <div className="relative z-20">
          <About />
        </div>

        <div className="relative z-35">
          <Experience />
        </div>

        <div className="relative z-30">
          <Skills />
        </div>

        <div className="relative z-40">
          <Projects btnClass={btnClass} />
        </div>

        <div className="relative z-45">
          <GithubStats />
        </div>

        <div className="relative z-50 min-h-screen">
          <Contact />
        </div>
        
        <footer id="footer">
          <Footer />
        </footer>
      </main>

      <style jsx>{`
        main {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}

export default App;