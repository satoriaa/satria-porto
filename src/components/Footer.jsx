import { useState, useEffect } from 'react';

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [cpuLoad, setCpuLoad] = useState(42);
  const [ramUsage, setRamUsage] = useState(65);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setCpuLoad(Math.floor(Math.random() * (55 - 35 + 1)) + 35);
      setRamUsage(Math.floor(Math.random() * (72 - 60 + 1)) + 60);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* --- EXPANDED PANEL (slide-up) --- */}
      <div
        className={`bg-[#dfdfdf] border-t-8 border-black transition-all duration-300 overflow-hidden ${
          isExpanded ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* CYBER TICKER (MARQUEE) */}
        <div className="bg-black text-[#00ff00] py-1.5 border-b-4 border-black overflow-hidden flex items-center relative group">
          <div className="absolute inset-0 bg-green-500/5 pointer-events-none group-hover:bg-green-500/10 transition-colors"></div>
          <div className="flex items-center px-4 border-r-4 border-black bg-green-950/50 z-10">
            <span className="text-[9px] font-black animate-pulse flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_red]"></span>
              LIVE_NODE_STATUS
            </span>
          </div>
          <div className="animate-marquee-slow whitespace-nowrap flex z-10">
            {[1, 2].map((i) => (
              <span key={i} className="text-[10px] font-mono uppercase tracking-[0.2em] px-4 text-green-400 font-bold">
                {'>'} AUDIO: CX31993 + EPZ_Q1_PRO (HI-RES) -- GPU: NVIDIA_RTX_3050_STABLE -- DEV_MODE: NEXT.JS_V14 -- DB: MONGO_ATLAS_CONNECTED -- NODE: UNTAR_FTI_KLP_4 -- PROJECT: LOST_&amp;_FOUND_FTI -- 
              </span>
            ))}
          </div>
        </div>

        {/* NEU-WIN95 TASKBAR */}
        <div className="p-2 flex flex-col md:flex-row items-stretch gap-3 bg-[#c0c0c0] border-b-4 border-black shadow-[inset_2px_2px_0px_white]">
          <div className="flex items-stretch gap-2">
            <button className="bg-[#c0c0c0] border-2 border-white border-r-black border-b-black p-1 px-3 flex items-center gap-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:shadow-[inset_2px_2px_0px_black] transition-all">
              <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                <div className="bg-red-500 border border-black/40"></div>
                <div className="bg-blue-500 border border-black/40"></div>
                <div className="bg-yellow-400 border border-black/40"></div>
                <div className="bg-green-500 border border-black/40"></div>
              </div>
              <span className="font-black text-[12px] uppercase tracking-tighter">SATRIA_OS</span>
            </button>
            <div className="flex items-center gap-1 px-2 border-l-2 border-gray-400 border-r-2 mr-1">
              <div className="w-7 h-7 bg-white border-2 border-black flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer transition-all hover:-translate-y-1 shadow-[2px_2px_0px_black]" title="Terminal">
                <span className="text-[10px]">{'🐚'}</span>
              </div>
              <div className="w-7 h-7 bg-[#007acc] border-2 border-black flex items-center justify-center text-[10px] font-black text-white hover:bg-[#005fb8] shadow-[2px_2px_0px_black] hover:-translate-y-1 transition-all" title="VS Code">VS</div>
            </div>
          </div>

          <div className="flex-grow bg-white border-4 border-black p-1 px-4 flex items-center justify-between shadow-[4px_4px_0px_rgba(0,0,0,0.1)] group overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '10px 10px' }}></div>
            <div className="flex flex-col relative z-10">
              <span className="text-[9px] font-black text-blue-700 uppercase italic leading-none">Kernel_Monitor.exe</span>
              <div className="flex items-center gap-2">
                <span className="text-[7px] text-gray-400 uppercase font-bold tracking-widest animate-pulse">Running: Research_Police_Perception.pkg</span>
              </div>
            </div>
            <div className="hidden lg:flex gap-8 relative z-10">
              <div className="space-y-0.5">
                <div className="flex justify-between text-[7px] font-black text-gray-500 uppercase"><span>CPU_LOAD</span><span>{cpuLoad}%</span></div>
                <div className="w-24 h-2 bg-gray-200 border-2 border-black p-[1px]">
                  <div className="h-full bg-blue-600 shadow-[2px_0_4px_rgba(37,99,235,0.5)] transition-all" style={{ width: `${cpuLoad}%` }}></div>
                </div>
              </div>
              <div className="space-y-0.5">
                <div className="flex justify-between text-[7px] font-black text-gray-500 uppercase"><span>RAM_SWAP</span><span>{ramUsage}%</span></div>
                <div className="w-24 h-2 bg-gray-200 border-2 border-black p-[1px]">
                  <div className="h-full bg-green-500 shadow-[2px_0_4px_rgba(34,197,94,0.5)] transition-all" style={{ width: `${ramUsage}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-stretch gap-2">
            <div className="bg-[#c0c0c0] border-2 border-black border-l-white border-t-white px-3 flex items-center gap-4 shadow-[inset_1px_1px_0px_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-1 group cursor-help">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-[9px] font-black group-hover:text-blue-600 transition-colors">AUDIO_READY</span>
              </div>
              <div className="h-4 w-[2px] bg-gray-400"></div>
              <span className="font-mono text-xs font-black tabular-nums tracking-widest">{time}</span>
            </div>
          </div>
        </div>

        {/* COPYRIGHT STRIP */}
        <div className="bg-black text-white text-[8px] py-2 px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 uppercase font-bold tracking-[0.2em]">
            <span className="text-yellow-400 hover:text-white transition-colors cursor-crosshair">Node: Universitas Tarumanagara</span>
            <span className="text-blue-400">Group: Kelompok 4 (FTI)</span>
          </div>
          <div className="flex items-center gap-2 opacity-60 font-black italic">
            <span>V4.1_STABLE_BUILD</span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span>SATORIAA &copy; 2026</span>
          </div>
        </div>
      </div>

      {/* --- COMPACT STRIP (always visible) --- */}
      <div
        className="bg-[#c0c0c0] border-t-4 border-black px-3 py-1.5 flex items-center justify-between cursor-pointer select-none hover:bg-[#b0b0b0] transition-colors shadow-[0_-2px_0_rgba(0,0,0,0.1)]"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Left: Expand indicator + Logo */}
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-black transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            &#9650;
          </span>
          <div className="w-4 h-4 grid grid-cols-2 gap-[1px]">
            <div className="bg-red-500 border border-black/40"></div>
            <div className="bg-blue-500 border border-black/40"></div>
            <div className="bg-yellow-400 border border-black/40"></div>
            <div className="bg-green-500 border border-black/40"></div>
          </div>
          <span className="font-black text-[10px] uppercase tracking-tighter">SATRIA_OS</span>
          <span className="hidden sm:inline text-[8px] text-gray-600 font-bold uppercase ml-1">Kernel_Monitor</span>
        </div>

        {/* Center: Mini CPU/RAM + Audio */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
            <span className="text-[9px] font-bold tabular-nums">{cpuLoad}%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
            <span className="text-[9px] font-bold tabular-nums">{ramUsage}%</span>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-[8px] font-bold text-gray-600">AUDIO</span>
          </div>
        </div>

        {/* Right: Time + Copyright */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] font-black tabular-nums tracking-widest">{time}</span>
          <span className="hidden sm:inline text-[7px] text-gray-500 font-black">&copy;2026</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
