

const Projects = () => {
  const projectList = [
    {
      title: "CREATIVE HUB FSRD",
      category: "WEB_APP",
      status: "INCOMING",
      desc: "Sebuah web dengan tujuan sentralisasi informasi dan manajemen kegiatan FSRD UNTAR.",
      tech: ["React.js", "Mongoose", "Tailwind", Node.js],
      link: "https://uts-softdev.vercel.app",
      color: "group-hover:bg-blue-600"
    },
    {
      title: "Calculator",
      category: "WEB_APP",
      status: "COMPLETED",
      desc: "Calculator berbasis web dengan tema clean dan logika yang efisien.",
      tech: ["javascript, HTML", "CSS"],
      link: "https://clean-calc-web.vercel.app/",
      color: "group-hover:bg-purple-600"
    },
    {
      title: "SABANA FRIED CHICKEN WEB",
      category: "WEB_APP",
      status: "COMPELETED",
      desc: "Sebuah website untuk restoran cepat saji dengan desain yang menarik dan user-friendly.",
      tech: ["next.js", "tailwind", "laravel"],
      link: "https://uastest-z4b6.vercel.app/",
      color: "group-hover:bg-green-600"
    }
  ];

  return (
    <section id="projects" className="stack-section bg-[#dfdfdf] flex items-center justify-center p-4 md:p-10 relative overflow-hidden">
      
      {/* --- DEKORASI BACKGROUND --- */}
      <div className="absolute inset-0 opacity-[0.05] z-0 animate-pulse" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}>
      </div>
      
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px] opacity-10 animate-pulse"></div>
      
      <div className="absolute top-20 right-20 font-black text-[8rem] text-black/[0.02] select-none pointer-events-none hidden md:block italic uppercase">
        Selected_Works
      </div>

      <div className="max-w-6xl w-full relative z-10">
        
        {/* SECTION HEADER DENGAN REVEAL ANIMATION */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-8 border-black pb-6 overflow-hidden">
          <div className="animate-slide-up">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none group cursor-default">
              PROJ_<span className="group-hover:text-blue-700 transition-colors">GALLERY</span>
            </h2>
            <p className="text-sm font-bold text-blue-700 mt-2 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-700 rounded-full animate-ping"></span>
              {'>'} DISPLAYING_ALL_ACTIVE_NODES...
            </p>
          </div>
          <div className="bg-black text-white px-4 py-2 text-[10px] font-black uppercase shadow-[4px_4px_0px_0px_rgba(59,130,246,1)] hover:scale-110 transition-transform cursor-help">
            Total_Records: {projectList.length}
          </div>
        </div>

        {/* PROJECTS GRID DENGAN STAGGERED APPEARANCE */}
        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col transition-all duration-500 hover:-translate-y-2"
              style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both` }}
            >
              
              {/* Card Label */}
              <div className="bg-white border-2 border-black border-b-0 px-3 py-1 w-fit ml-4 text-[10px] font-black uppercase z-10 relative shadow-[4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-yellow-400 transition-colors">
                {project.category}
              </div>

              {/* Main Card Body */}
              <div className="bg-white border-4 border-black p-6 flex flex-col h-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative overflow-hidden">
                
                {/* Background Hover Tint */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none ${project.color}`}></div>
                
                {/* Status Indicator */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 border-4 border-black flex items-center justify-center bg-gray-100 font-black group-hover:bg-black group-hover:text-white transition-all duration-500 rotate-[-5deg] group-hover:rotate-0">
                    0{index + 1}
                  </div>
                  <span className={`text-[8px] font-black border-2 border-black px-2 py-0.5 animate-pulse ${project.status === 'COMPLETED' ? 'bg-green-400' : 'bg-orange-400'}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase italic leading-none mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>

                <p className="text-xs font-bold text-gray-600 mb-8 flex-grow leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Tags with Individual Hover */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[9px] font-black uppercase border-2 border-black px-2 py-0.5 bg-yellow-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Link (The "Button" effect) */}
                <a 
                  href={project.link}
                  className="mt-auto w-full bg-black text-white text-center py-3 font-black text-xs border-2 border-black hover:bg-blue-600 active:scale-95 transition-all uppercase tracking-widest flex items-center justify-center gap-2 group/btn"
                >
                  <span className="group-hover/btn:translate-x-[-4px] transition-transform">[{'>'}]</span> VIEW_DEPLOYMENT
                </a>
              </div>

              {/* Ghost Shadow Element */}
              <div className="absolute inset-0 border-2 border-black translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 opacity-20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* GALLERY FOOTER INFO DENGAN ANIMASI FADE */}
        <div className="mt-16 flex justify-center animate-bounce-slow">
          <div className="bg-white border-4 border-black p-4 inline-flex items-center gap-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-[10px] font-black uppercase italic tracking-widest cursor-default">
              END_OF_GALLERY_DATABASE_SATORIAA
            </span>
          </div>
        </div>

      </div>

      {/* Tambahkan CSS Global atau di dalam file style kamu */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Projects;