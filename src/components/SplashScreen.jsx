'use client';

import { useState, useEffect } from 'react';

const SplashScreen = ({ finishLoading }) => {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [cpu, setCpu] = useState(10);
  const [fade, setFade] = useState(false);

  const bootSequences = [
    "INITIALIZING_SATORIAA_CORE_V4.1...",
    "CHECKING_FTI_UNTAR_RESOURCES... OK",
    "LOADING_NEO_BRUTALIST_UI_ENGINE... DONE",
    "ESTABLISHING_GITHUB_HANDSHAKE... ERROR",
    "RETRYING_CONNECTION...",
    "CONNECTION_ESTABLISHED ✔",
    "MOUNTING_PROJECT_DATABASE...",
    "DECRYPTING_PORTFOLIO_DATA...",
    "HELLO_SATRIA. WELCOME_BACK.",
    "SYSTEM_READY_TO_TRANSMIT."
  ];

  // 🔹 Typing Effect Function
  const typeText = (text, index) => {
    let i = 0;

    setLogs(prev => [...prev, "> "]);

    const interval = setInterval(() => {
      setLogs(prev => {
        const updated = [...prev];
        updated[index] = (updated[index] || "> ") + text[i];
        return updated;
      });

      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, 20);
  };

  useEffect(() => {
    // 🔹 Boot Log Animation (Typing)
    bootSequences.forEach((text, index) => {
      setTimeout(() => {
        typeText(text, index);
      }, index * 400);
    });

    // 🔹 Progress (tidak linear biar realistis)
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(prev + Math.random() * 10, 100);
      });
    }, 120);

    // 🔹 CPU Random
    const cpuInterval = setInterval(() => {
      setCpu(Math.floor(Math.random() * 40) + 10);
    }, 500);

    // 🔹 Finish + Fade Out
    const timeout = setTimeout(() => {
      setFade(true);
      setTimeout(finishLoading, 500);
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(cpuInterval);
      clearTimeout(timeout);
    };
  }, [finishLoading]);

  return (
    <div
      className={`fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center font-mono p-6 transition-all duration-500 ${
        fade ? 'opacity-0 scale-110' : ''
      }`}
    >
      {/* Container */}
      <div className="max-w-md w-full border-2 border-[#333] p-6 bg-[#050505] shadow-[0_0_20px_rgba(59,130,246,0.2)] relative overflow-hidden animate-[flicker_0.2s_infinite]">
        
        {/* Scanline */}
        <div className="absolute inset-0 bg-scanlines opacity-[0.05] pointer-events-none"></div>

        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b border-[#333] pb-2">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          </div>
          <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">
            Boot_Manager_v3
          </span>
        </div>

        {/* Logs */}
        <div className="space-y-1.5 mb-8 h-36 overflow-hidden">
          {logs.map((log, i) => (
            <p
              key={i}
              className={`text-[10px] md:text-xs leading-tight ${
                log.includes("ERROR")
                  ? "text-red-500"
                  : log.includes("✔")
                  ? "text-blue-400"
                  : "text-green-500"
              }`}
            >
              {log}
            </p>
          ))}
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] text-blue-500 font-bold">
            <span>LOADING_ARCHIVES</span>
            <span>{Math.floor(progress)}%</span>
          </div>

          <div className="w-full h-4 border-2 border-blue-900 p-0.5">
            <div
              className="h-full bg-blue-600 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#333] flex justify-between items-center opacity-40">
          <span className="text-[8px] text-white">
            CPU_LOAD: {cpu}%
          </span>
          <span className="text-[8px] text-white italic">
            0x4_SATORIAA
          </span>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/[0.05] text-[15vw] font-black italic select-none pointer-events-none uppercase">
        Satria
      </div>

      {/* Flicker Animation */}
      <style jsx>{`
        @keyframes flicker {
          0% { opacity: 1; }
          50% { opacity: 0.96; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;