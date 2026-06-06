import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const experiences = [
    {
      id: "LOG_01",
      period: "2024 - PRESENT",
      title: "FULLSTACK DEVELOPER",
      company: "KELOMPOK 4 - UNTAR",
      desc: "Memimpin arsitektur teknis untuk proyek 'Lost & Found FTI'. Mengimplementasikan alur otentikasi aman dan manajemen state kompleks untuk pelaporan barang hilang secara efisien.",
      skills: ["Next.js", "Node.js", "Mongoose"],
      color: "bg-blue-600"
    },
    {
      id: "LOG_02",
      period: "2024 - 2024",
      title: "DATA ANALYST",
      company: "ACADEMIC RESEARCH",
      desc: "Mengekstraksi wawasan dari dataset mentah menggunakan teknik pembersihan data dan pemodelan prediktif. Berhasil meningkatkan akurasi model klasifikasi melalui tuning hyperparameter.",
      skills: ["Python", "SciKit-Learn", "Matplotlib"],
      color: "bg-green-600"
    },
    {
      id: "LOG_03",
      period: "2024 - 2024",
      title: "SYSTEM ARCHITECT",
      company: "BEM UNTAR PROJECT",
      desc: "Mentransformasi kebutuhan organisasi menjadi diagram sistem yang terukur. Menggunakan standar Mermaid untuk dokumentasi database dan alur kerja internal BEM.",
      skills: ["Mermaid", "System Design", "Documentation"],
      color: "bg-purple-600"
    }
  ];

  // Efek transisi saat ganti tab
  const handleTabChange = (index) => {
    if (index === activeTab) return;
    setIsChanging(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsChanging(false);
    }, 300);
  };

  return (
    <section id="experience" className="stack-section bg-[#dfdfdf] flex items-center justify-center p-4 md:p-10 relative overflow-hidden">
      
      {/* --- DEKORASI BACKGROUND --- */}
      <div className="absolute inset-0 opacity-[0.1]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px)', backgroundSize: '100% 40px' }}>
      </div>
      
      <div className="absolute left-10 top-0 bottom-0 w-1 bg-black/5 hidden md:block animate-pulse"></div>
      
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 font-black text-[15rem] text-black/[0.02] select-none pointer-events-none hidden md:block uppercase -rotate-90 tracking-widest">
        HISTORY
      </div>

      <div className="max-w-5xl w-full relative z-10">
        
        {/* HEADER DECOR */}
        <div className="flex justify-between items-end mb-6 px-2">
          <div className="border-l-8 border-black pl-4 overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-black leading-none animate-slide-right">
              CAREER_PATH.EXE
            </h2>
            <p className="text-[10px] font-mono font-bold text-blue-700 mt-2 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-700 rounded-full animate-ping"></span>
              {isChanging ? 'RELOADING_ARCHIVE...' : '>> ACCESSING_ARCHIVE_DATA...'}
            </p>
          </div>
          <div className="hidden md:block bg-yellow-400 border-2 border-black px-3 py-1 font-black text-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
            USER: SATORIAA_STATION_04
          </div>
        </div>

        {/* TABS SELECTOR DENGAN ANIMASI HOVER */}
        <div className="flex flex-wrap gap-2 mb-[-4px] relative z-20">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`px-6 py-3 font-black text-[10px] md:text-sm uppercase border-4 border-black transition-all duration-300 relative overflow-hidden group/tab ${
                activeTab === index 
                ? "bg-white border-b-white -translate-y-1 shadow-[4px_0px_0px_rgba(0,0,0,1)]" 
                : "bg-[#b0b0b0] hover:bg-[#c0c0c0] hover:-translate-y-0.5 translate-y-1 opacity-70"
              }`}
            >
              <div className={`absolute inset-0 bg-black/5 -translate-x-full group-hover/tab:translate-x-0 transition-transform duration-500`}></div>
              <span className={`absolute top-1 left-1 w-1.5 h-1.5 rounded-full relative z-10 ${activeTab === index ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></span>
              <span className="relative z-10">{exp.id}</span>
            </button>
          ))}
        </div>

        {/* MAIN CONTENT AREA DENGAN ANIMASI TRANSISI */}
        <div className={`bg-white border-4 border-black p-6 md:p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] min-h-[480px] flex flex-col justify-between relative group overflow-hidden transition-all duration-500 ${isChanging ? 'opacity-50 scale-[0.98] blur-[1px]' : 'opacity-100 scale-100 blur-0'}`}>
          
          <div className="absolute inset-0 bg-scanlines opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity"></div>

          <div className="relative z-10">
            {/* Top Row */}
            <div clazzzzssName="flex justify-between items-center mb-8 animate-fadeIn">
              <div className="flex items-center gap-4">
                <span className={`text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest ${experiences[activeTab].color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform`}>
                  {experiences[activeTab].period}
                </span>
                <div className="h-[2px] w-12 bg-black/10 hidden md:block"></div>
                <span className="text-[10px] font-mono font-bold text-gray-400">STATUS: VERIFIED_RECORD</span>
              </div>
            </div>

            {/* Title & Company */}
            <div className="mb-10">
              <h3 className="text-4xl md:text-6xl font-black uppercase leading-[0.85] italic text-black mb-6 tracking-tighter hover:tracking-normal transition-all duration-500">
                {experiences[activeTab].title}
              </h3>
              <div className="inline-flex items-center gap-3 bg-yellow-400 border-2 border-black px-4 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-rotate-2 hover:scale-105 transition-all">
                <span className="text-sm font-black uppercase italic">@{experiences[activeTab].company}</span>
              </div>
            </div>

            {/* Description Body with Reveal Effect */}
            <div className="max-w-2xl border-l-8 border-black pl-8 py-4 bg-gray-50/50 relative overflow-hidden group/desc">
              <div className="absolute inset-0 bg-blue-600/5 -translate-x-full group-hover/desc:translate-x-0 transition-transform duration-700"></div>
              <p className="text-base md:text-xl font-bold leading-relaxed text-black italic relative z-10">
                "{experiences[activeTab].desc}"
              </p>
            </div>
          </div>

          {/* Technology Badges with Staggered Animation */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-700 underline">CORE_TECHNOLOGIES:</p>
              <div className="flex flex-wrap gap-3">
                {experiences[activeTab].skills.map((skill, i) => (
                  <span key={i} 
                    className="bg-white border-2 border-black px-4 py-1.5 text-[11px] font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:-translate-y-1 transition-all cursor-crosshair active:scale-90"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right font-mono text-[9px] font-bold text-gray-400 space-y-1 group-hover:text-black transition-colors">
              <p>REF_ID: 0x{activeTab + 1}FC99</p>
              <p className="animate-pulse">ENCRYPTION: AES_LOCAL</p>
            </div>
          </div>

          {/* Corner Interactive Button */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-black flex items-center justify-center group-hover:bg-blue-700 transition-all duration-300 group-hover:rotate-90">
            <span className="text-white font-black text-2xl">+</span>
          </div>
        </div>

        {/* BOTTOM ANIMATED DECORATIVE BAR */}
        <div className="mt-6 flex gap-2 overflow-hidden">
            {[...Array(15)].map((_, i) => (
                <div key={i} 
                     className={`h-2 w-full border-2 border-black transition-all duration-1000 ${i % 2 === 0 ? 'bg-black animate-pulse' : 'bg-transparent'}`}
                     style={{ animationDelay: `${i * 150}ms` }}>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;