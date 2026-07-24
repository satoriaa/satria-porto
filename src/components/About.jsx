import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language].about;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="stack-section bg-[#dfdfdf] flex items-center justify-center p-4 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] z-0 animate-pulse"
        style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}>
      </div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-500 rounded-full blur-[120px] opacity-10 animate-pulse"></div>
      <div className="absolute top-10 right-10 font-black text-[10rem] text-black/[0.02] select-none pointer-events-none hidden md:block uppercase tracking-tighter hover:text-blue-700/5 transition-colors duration-1000">{t.backgroundText}</div>

      <div className={`max-w-5xl w-full bg-white border-4 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] flex flex-col relative z-10 overflow-hidden transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        
        {/* WINDOW HEADER */}
        <div className="bg-black text-white p-3 flex justify-between items-center border-b-4 border-black">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">{t.windowTitle}</span>
          </div>
          <span className="text-[9px] font-mono text-orange-400 animate-pulse">{t.readingBio}</span>
        </div>

        {/* WINDOW BODY CONTAINER */}
        <div className="flex flex-col md:flex-row">
          
          {/* LEFT CONTENT (BIO) */}
          <div className="md:w-3/5 p-8 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white group flex flex-col justify-between">
            <div>
              <div className="mb-8 overflow-hidden">
                <h2 className={`text-4xl md:text-6xl font-black uppercase italic leading-none mb-4 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                  {t.whoTitle}<span className="text-blue-700 underline group-hover:bg-blue-700 group-hover:text-white transition-all px-2">{t.whoName}</span>
                </h2>
                <div className="bg-yellow-400 border-2 border-black px-3 py-1 w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-[10px] font-black uppercase mb-6 hover:translate-x-2 transition-transform">{t.statusLabel}</div>
              </div>

              <div className="space-y-6 font-bold text-base md:text-lg leading-relaxed italic text-black">
                <p className={`transition-all duration-500 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  {t.desc1} <span className="bg-blue-100 px-1 border-b-2 border-blue-400">{t.desc1Highlight}</span> {t.desc1End}
                </p>
                <p className={`transition-all duration-500 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  {t.desc2} <span className="bg-orange-100 px-1 text-orange-700 border-b-2 border-orange-400">{t.desc2Highlight}</span>{t.desc2End}
                </p>
              </div>
            </div>

            <div className={`mt-10 pt-6 border-t-2 border-black/10 flex gap-8 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div>
                <p className="text-[10px] font-black uppercase text-gray-400">{t.focusLabel}</p>
                <p className="font-black text-sm uppercase italic tracking-tighter hover:text-blue-700 cursor-default transition-colors">{t.focusValue}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-gray-400">{t.locLabel}</p>
                <p className="font-black text-sm uppercase italic tracking-tighter hover:text-blue-700 cursor-default transition-colors">{t.locValue}</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT (GEAR & SPECS) */}
          <div className="md:w-2/5 p-8 bg-[#f5f5f5] flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="animate-spin-slow">⚙️</span> {t.audioGear}
                </h4>
                <div className="space-y-2">
                  <div className={`bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(30,58,138,1)] transition-all duration-300 ${isVisible ? 'scale-100' : 'scale-95 opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
                    <p className="text-[9px] font-black text-gray-400 uppercase">{t.dacLabel}</p>
                    <p className="font-bold text-xs uppercase italic">{t.dacValue}</p>
                  </div>
                  <div className={`bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(30,58,138,1)] transition-all duration-300 ${isVisible ? 'scale-100' : 'scale-95 opacity-0'}`} style={{ transitionDelay: '1.4s' }}>
                    <p className="text-[9px] font-black text-gray-400 uppercase">{t.iemLabel}</p>
                    <p className="font-bold text-xs uppercase italic">{t.iemValue}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="animate-pulse">📟</span> {t.workstation}
                </h4>
                <ul className="space-y-2 font-bold text-[11px] uppercase italic">
                  {[
                    { label: t.gpuLabel, value: t.gpuValue },
                    { label: t.envLabel, value: t.envValue },
                    { label: t.osLabel, value: t.osValue }
                  ].map((spec, i) => (
                    <li key={i}
                      className={`flex justify-between border-b border-black/10 pb-1 hover:bg-white/50 px-1 transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                      style={{ transitionDelay: `${1.6 + (i * 0.2)}s` }}>
                      <span>{spec.label}</span>
                      <span className="text-blue-700">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t-4 border-black border-dotted">
              <div className="flex justify-between items-end">
                <div className="text-[8px] font-black uppercase leading-tight animate-pulse">
                  {t.integrity}<br />{t.coffee}
                </div>
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center font-black text-lg bg-white rotate-6 hover:rotate-0 hover:scale-110 transition-all cursor-pointer shadow-[2px_2px_0px_black]">S4</div>
              </div>
            </div>
          </div>

        </div>

        {/* WINDOW FOOTER */}
        <div className="bg-[#dfdfdf] border-t-4 border-black p-2 px-6 flex justify-between items-center text-[9px] font-black uppercase tracking-widest overflow-hidden">
          <span className="animate-pulse">{isVisible ? t.statusReady : t.statusWait}</span>
          <span className="opacity-40 hover:opacity-100 transition-opacity">{t.build}</span>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;