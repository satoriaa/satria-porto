import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const skills = [
    { name: "REACT", category: "LIBRARY", code: "v19.x" },
    { name: "NEXT.JS", category: "FRAMEWORK", code: "v15.x" },
    { name: "NODE.JS", category: "RUNTIME", code: "v20.x" },
    { name: "MONGOOSE", category: "ODM_DB", code: "v8.x" },
    { name: "PYTHON", category: "LANGUAGE", code: "v3.12" },
    { name: "TAILWIND", category: "STYLING", code: "v4.0" },
    { name: "GIT", category: "VCS_TOOL", code: "v2.4x" },
    { name: "MERMAID", category: "DIAGRAM", code: "v11.x" },
  ];

  return (
    <section id="skills" className="stack-section bg-[#dfdfdf] flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="relative mb-20 text-center z-10">
        <h2 className="text-6xl font-black uppercase italic tracking-tighter text-black relative z-10">
          {t.title}
        </h2>
        <div className="absolute -bottom-2 -left-4 w-[110%] h-6 bg-yellow-400 -z-0 skew-x-[-12deg] border-2 border-black"></div>
        <p className="mt-6 font-bold text-[10px] uppercase tracking-[0.5em] text-gray-500">
          {t.subtitle}
        </p>
      </div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full relative z-10">
        {skills.map((skill, index) => (
          <div key={index} className="group relative bg-white border-4 border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col items-start overflow-hidden">
            
            {/* CARD TOP INFO */}
            <div className="w-full flex justify-between items-start mb-6">
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-gray-400 leading-none">{t.regId}</span>
                <span className="text-[10px] font-bold">00{index + 1}</span>
              </div>
              <div className="w-8 h-8 border-2 border-black flex items-center justify-center bg-[#c0c0c0] group-hover:bg-yellow-400 transition-colors">
                <span className="text-[10px] font-black">#</span>
              </div>
            </div>

            {/* SKILL INFO */}
            <h3 className="text-2xl font-black text-black mb-1 group-hover:text-yellow-600 transition-colors">{skill.name}</h3>
            <div className="bg-black text-white text-[9px] font-bold px-2 py-0.5 mb-6 uppercase tracking-widest">{skill.category}</div>

            {/* CARD FOOTER */}
            <div className="mt-auto w-full border-t-2 border-black pt-4 flex justify-between items-center">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 group-hover:bg-green-500 transition-colors"></div>
              </div>
              <span className="text-[9px] font-black font-mono">{skill.code}</span>
            </div>

            {/* DECORATIVE SIDE TABS */}
            <div className="absolute -right-[4px] top-1/2 -translate-y-1/2 flex flex-col gap-1">
              <div className="w-1 h-3 bg-black"></div>
              <div className="w-1 h-3 bg-black"></div>
            </div>

          </div>
        ))}
      </div>

      {/* BACKGROUND TEXT */}
      <div className="fixed -bottom-10 -left-10 text-[12rem] font-black text-black/5 pointer-events-none select-none z-0">{t.backgroundText}</div>
    </section>
  );
};

export default Skills;