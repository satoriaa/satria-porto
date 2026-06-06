import { useState, useEffect } from 'react';

const GithubStats = () => {
  const username = "satoriaa";
  const [isLoading, setIsLoading] = useState(true);
  
  const statsUrl = `https://github-readme-stats-alpha.vercel.app/api?username=${username}&show_icons=true&theme=neobrutalism&bg_color=ffffff&hide_border=true&title_color=000000&icon_color=000080&cache_seconds=1800`;
  const langsUrl = `https://github-readme-stats-alpha.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=neobrutalism&bg_color=ffffff&hide_border=true&title_color=000000&cache_seconds=1800`;

  useEffect(() => {
    // Simulasi loading data dari server GitHub
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="github" className="stack-section bg-[#dfdfdf] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* --- DEKORASI BACKGROUND --- */}
      <div className="absolute inset-0 opacity-[0.05] z-0" 
           style={{ backgroundImage: 'linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] opacity-10 z-0 animate-pulse"></div>
      
      <div className="absolute -bottom-10 -left-10 font-black text-[12rem] text-black/[0.02] select-none pointer-events-none hidden md:block uppercase tracking-tighter hover:text-blue-700/5 transition-colors duration-1000">
        STATS
      </div>

      {/* WINDOW CONTAINER DENGAN EFEK SHAKE SAAT LOAD */}
      <div className={`max-w-3xl w-full bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden relative z-10 transition-all duration-500 hover:rotate-1 ${isLoading ? 'scale-95 blur-sm' : 'scale-100 blur-0'}`}>
        
        {/* WINDOW HEADER */}
        <div className="bg-black text-yellow-400 p-2 flex justify-between items-center border-b-4 border-black">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-red-500 animate-ping' : 'bg-green-500 animate-pulse'}`}></div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em]">Git_Stats.sys</span>
          </div>
          <div className="text-[9px] font-mono opacity-60 italic flex gap-4">
            <span className="hidden sm:inline">BITRATE: 128KBPS</span>
            <span>STATION: {username.toUpperCase()}</span>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="p-6 md:p-8 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] relative">
          
          {/* Overlay Glitch saat Loading */}
          {isLoading && (
            <div className="absolute inset-0 bg-white/80 z-20 flex flex-col items-center justify-center">
              <div className="w-12 h-1 bg-black animate-loading-bar mb-2"></div>
              <span className="text-[10px] font-black animate-pulse uppercase">Syncing_Archives...</span>
            </div>
          )}

          <div className="mb-6 border-l-4 border-blue-700 pl-4 flex justify-between items-end">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase italic leading-none text-black">
                Activity_Metrics
              </h2>
              <p className="text-[10px] font-bold text-gray-500 mt-1 uppercase tracking-widest overflow-hidden border-r-2 border-blue-700 whitespace-nowrap animate-typing w-[190px]">
                {'>'} ANALYZING_REMOTE_REPOS...
              </p>
            </div>
            <div className="hidden md:block text-[8px] font-black text-blue-700 border-2 border-blue-700 px-2 py-0.5 animate-bounce bg-blue-50">
              LIVE_FEED
            </div>
          </div>

          {/* Grid Cards DENGAN EFEK FLICKER */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Stats Card */}
            <div className="group flex flex-col">
              <div className="bg-black text-white text-[8px] font-black px-2 py-0.5 w-fit uppercase mb-[-2px] ml-2 relative z-10 border-2 border-black border-b-0 italic group-hover:bg-blue-700 transition-colors">
                General_Data
              </div>
              <div className="border-4 border-black p-2 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-200 flex items-center justify-center bg-white overflow-hidden">
                <img 
                  src={statsUrl} 
                  alt="GitHub Stats"
                  className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  onError={(e) => { e.target.src = "https://placehold.co/300x150?text=Stats+Error"; }}
                />
              </div>
            </div>

            {/* Language Stats Card */}
            <div className="group flex flex-col">
              <div className="bg-black text-white text-[8px] font-black px-2 py-0.5 w-fit uppercase mb-[-2px] ml-2 relative z-10 border-2 border-black border-b-0 italic group-hover:bg-blue-700 transition-colors">
                Language_Stack
              </div>
              <div className="border-4 border-black p-2 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-200 flex items-center justify-center bg-white overflow-hidden">
                <img 
                  src={langsUrl} 
                  alt="Top Languages"
                  className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:contrast-125"
                  onError={(e) => { e.target.src = "https://placehold.co/300x150?text=Langs+Error"; }}
                />
              </div>
            </div>
          </div>

          {/* Source Link */}
          <div className="mt-8 flex flex-col items-center gap-2">
            <a 
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2.5 font-black text-[11px] border-2 border-black hover:bg-yellow-400 hover:text-black hover:-translate-y-1 hover:shadow-none transition-all uppercase flex items-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] group/link"
            >
              <span className="group-hover/link:translate-x-1 transition-transform">{'>'} SOURCE_PROFILE</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping group-hover:bg-black"></div>
            </a>
          </div>
        </div>

        {/* TERMINAL FOOTER */}
        <div className="bg-[#c0c0c0] border-t-2 border-black p-1.5 flex justify-between items-center px-4 font-mono">
          <span className="text-[8px] font-black uppercase text-gray-600 italic animate-pulse">UNTAR_FTI_DATABASE_LINK_ESTABLISHED</span>
          <span className="text-[8px] font-black uppercase text-gray-400">0x4_SATORIAA_SECURE_v2.0</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0%; margin-right: auto; margin-left: 0; }
          50% { width: 100%; }
          100% { width: 0%; margin-left: auto; margin-right: 0; }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s infinite ease-in-out;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 190px }
        }
        .animate-typing {
          animation: typing 2s steps(30, end) infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default GithubStats;

