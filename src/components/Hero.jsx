import { useState, useEffect } from 'react';
import profilSatria from '../assets/profil.jpg';

const Hero = ({ btnClass, scrollToSection }) => {
  const roles = ["Fullstack\nDeveloper.", "Data\nAnalyst."];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 5000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
<section
      id="home"
      className="stack-section flex flex-col justify-center items-center py-20 px-4 sm:px-6 bg-[#dfdfdf] border-b-8 border-black overflow-hidden"
      style={{ "--stack-i": 0 }}
    >
      {/* --- ANIMATED BACKGROUND ELEMENTS --- */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating Particles Simulation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-6 w-4 h-4 border-2 border-blue-600 animate-bounce opacity-20"></div>
        <div className="absolute bottom-1/3 right-8 w-6 h-6 border-2 border-yellow-500 rounded-full animate-pulse opacity-20"></div>
        <div
          className="absolute top-1/2 right-1/4 w-2 h-10 bg-black animate-spin opacity-[0.05]"
          style={{ animationDuration: '8s' }}
        ></div>
      </div>

      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[150px] opacity-[0.06] z-0" />

      <div className="absolute -bottom-10 -right-10 font-black text-[12rem] text-black/[0.015] select-none pointer-events-none hidden md:block uppercase tracking-tighter italic animate-pulse">
        SATORIAA
      </div>

      {/* KONTEN UTAMA */}
      <div className="grid md:grid-cols-12 gap-4 sm:gap-6 md:gap-10 max-w-6xl w-full items-stretch relative z-10">
        {/* LEFT PANEL */}
        <div className="md:col-span-7 border-4 border-black p-4 sm:p-6 md:p-10 bg-white flex flex-col justify-center relative shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(30,58,138,1)] transition-all duration-300 min-h-0 md:min-h-[500px] group/card">
          {/* Status Bar dengan Glitch Effect pada Hover */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,1)]"></span>
              <p className="font-black text-black tracking-widest uppercase text-[10px] group-hover/card:text-blue-700 transition-colors">{'>'} system_active</p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-blue-800 relative inline-block">
              M_Satria_Rizky.exe
              <span className="absolute top-0 left-0 w-full h-full text-red-500 opacity-0 group-hover/card:opacity-30 group-hover/card:animate-ping pointer-events-none text-2xl sm:text-3xl md:text-4xl font-black uppercase italic tracking-tighter">
                M_Satria_Rizky.exe
              </span>
            </h2>
            <div className="h-1 w-20 bg-black mt-1 group-hover/card:w-full transition-all duration-500"></div>
          </div>

          {/* TYPING AREA WITH HOVER SCALE */}
          <div className="h-[160px] sm:h-[190px] md:h-[220px] flex items-center group/text transition-transform duration-300 hover:scale-[1.02]">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase leading-[1.1] italic tracking-tighter w-full">
              <span className="bg-yellow-400 px-3 py-2 border-4 border-black inline-block shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover/text:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative whitespace-pre-line transition-all">
                {displayText}
                <span className="animate-blink border-r-8 border-black ml-2 h-[1em] inline-block align-middle"></span>
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl font-bold border-l-8 border-blue-700 pl-4 sm:pl-6 mb-6 sm:mb-8 leading-relaxed text-black max-w-lg mt-0">
            Mahasiswa{' '}
            <span className="underline decoration-yellow-400 decoration-4 hover:bg-yellow-400 transition-colors">UNTAR</span>{' '}
            yang fokus pada integrasi sistem web dan analisis data untuk solusi masa depan.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className={`${btnClass} text-base sm:text-lg px-6 sm:px-8 py-3 bg-black text-white hover:bg-blue-700 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(59,130,246,0.5)] transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] flex items-center gap-3`}
            >
              <span className="group-hover:animate-spin">⚙️</span> INITIALIZE_WORKS.EXE
            </a>
            <a
              href="/cv.pdf"
              download
              className={`${btnClass} text-base sm:text-lg px-6 sm:px-8 py-3 bg-blue-700 text-white hover:bg-black hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.5)] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] flex items-center gap-3`}
            >
              <span>📄</span> DOWNLOAD_CV.EXE
            </a>
          </div>
        </div>

        {/* RIGHT PANEL: IMAGE WITH ENHANCED INTERACTION */}
        <div className="md:col-span-5 flex flex-col h-full relative z-10 group/img">
        <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] text-white text-[11px] px-3 py-1.5 flex justify-between items-center font-bold mb-1 border-b-2 border-black relative z-20">
            <span className="group-hover/img:animate-pulse">Identity_Check.jpg</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-[#c0c0c0] border border-gray-600 shadow-[inset_-1px_-1px_white] group-hover/img:bg-red-500 transition-colors"></div>
              <div className="w-3 h-3 bg-[#c0c0c0] border border-gray-600 shadow-[inset_-1px_-1px_white]"></div>
            </div>
          </div>

          {/* Ensure the image container keeps a sensible min-height across breakpoints so the image doesn't shrink too small */}
          <div className="w-full flex-1 border-2 border-black overflow-hidden bg-black relative cursor-crosshair flex flex-col">
            <div className="w-full h-full min-h-[300px] md:min-h-0 flex-1 overflow-hidden">
              <img
                src={profilSatria}
                alt="Satria Rizky"
                className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 group-hover/img:scale-110 transition-all duration-1000"
              />
            </div>
            {/* Scanline Overlay */}
            <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-20 group-hover/img:opacity-40 animate-scanline"></div>

            {/* Target Reticle */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-500">
              <div className="w-20 h-20 border-2 border-white/30 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 bg-yellow-400 border-4 border-black px-4 py-2 font-black text-xs uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-5deg] z-30 group-hover/img:rotate-0 transition-transform duration-300">
            UNTAR_FTI_NODE_04
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

