import { useEffect, useState } from 'react';

const Navbar = ({ scrollToSection }) => {
  const [time, setTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    // Deteksi scroll yang lebih aman untuk arah atas maupun bawah
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];

      // Ambil titik tengah layar atau sedikit di atasnya sebagai jangkar akurat
      const triggerPoint = window.innerHeight * 0.3;

      let current = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Jika bagian atas elemen sudah melewati trigger point, anggap section ini sedang aktif
          if (rect.top <= triggerPoint) {
            current = section;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    // Jalankan sekali di awal agar section default langsung terdeteksi
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  // Class tombol diperbarui: ada efek "pressed" kalau section-nya aktif
  const getBtnClass = (id) => `
    flex items-center gap-2 px-4 py-2 border-2 border-black transition-all cursor-pointer font-black text-xs uppercase
    ${activeSection === id
      ? "bg-[#808080] text-white shadow-[inset_3px_3px_0px_rgba(0,0,0,1)] translate-y-[1px]"
      : "bg-[#c0c0c0] text-black shadow-[inset_2px_2px_0px_rgba(255,255,255,1),2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#d1d1d1] active:shadow-[inset_2px_2px_0px_rgba(0,0,0,1)] active:translate-y-[2px]"}
  `;

  const navItems = [
    { id: 'about', label: 'About.txt' },
    { id: 'experience', label: 'Experience.' },
    { id: 'skills', label: 'Modules.sys' },
    { id: 'projects', label: 'Works.exe' },
    { id: 'github', label: 'GitHub.dll' },
    { id: 'contact', label: 'Link.lnk' },
  ];

  const handleNavClick = (e, id) => {
    scrollToSection(e, id);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full bg-[#c0c0c0] border-b-4 border-black z-[999] p-1 flex justify-between items-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] min-h-[56px] pointer-events-auto"
      style={{ ['--nav-height']: '56px' }}
    >
      {/* BACKDROP (mobile menu) */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 z-[998]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* KIRI: START MENU & USER IDENT */}
      <div className="flex items-center gap-2">
        <button
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-2 px-3 py-2 border-2 border-black bg-[#c0c0c0] shadow-[inset_2px_2px_0px_rgba(255,255,255,1),2px_2px_0px_rgba(0,0,0,1)] active:shadow-[inset_3px_3px_0px_rgba(0,0,0,1)] hover:bg-blue-800 hover:text-white transition-all group"
        >
          <div className="grid grid-cols-2 gap-[2px] w-4 group-hover:rotate-180 transition-transform duration-500">
            <div className="w-2 h-2 bg-[#ff5555]"></div>
            <div className="w-2 h-2 bg-[#55ff55]"></div>
            <div className="w-2 h-2 bg-[#5555ff]"></div>
            <div className="w-2 h-2 bg-[#ffff55]"></div>
          </div>
          <span className="font-black text-[12px] italic tracking-tighter">START</span>
        </button>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          aria-label="Buka menu"
          className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-black bg-[#c0c0c0] shadow-[inset_2px_2px_0px_rgba(255,255,255,1),2px_2px_0px_rgba(0,0,0,1)] active:shadow-[inset_3px_3px_0px_rgba(0,0,0,1)]"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <div className="w-5">
            <div className={`h-[2px] bg-black transition-transform ${isMenuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
            <div className={`h-[2px] bg-black my-[6px] transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <div className={`h-[2px] bg-black transition-transform ${isMenuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </div>
        </button>

        <div className="h-7 w-[3px] bg-gray-500 border-r-2 border-white mx-1 hidden sm:block"></div>

        <div className="hidden lg:flex flex-col">
          <h1 className="font-black text-[10px] text-blue-900 tracking-tighter uppercase italic leading-none">
            MUHAMMAD_SATRIA_RIZKY
          </h1>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[8px] font-bold text-gray-600 uppercase">Status: Online</span>
          </div>
        </div>
      </div>

      {/* TENGAH: TASKBAR STYLE NAVIGATION (desktop) */}
      <div className="hidden md:flex gap-2 bg-black/5 p-1 border border-black/10 rounded-sm">
        {navItems.map((item) => (
          <button key={item.id} onClick={(e) => handleNavClick(e, item.id)} className={getBtnClass(item.id)}>
            {item.label}
          </button>
        ))}
      </div>

      {/* MOBILE MENU (dropdown) */}
      <div
        className={`md:hidden fixed left-0 right-0 z-[1000] transition-all duration-200 overflow-hidden ${isMenuOpen ? 'max-h-[68vh] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ top: 'var(--nav-height, 72px)' }}
      >
        <div className="mx-2 mt-2 bg-[#c0c0c0] border-2 border-black shadow-[0_10px_0px_rgba(0,0,0,1)]">
          <div className="p-2 grid grid-cols-1 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className={getBtnClass(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* KANAN: ENHANCED SYSTEM TRAY (desktop) */}
      <div className="hidden md:flex items-center gap-4 border-2 border-gray-600 bg-[#c0c0c0] px-4 py-2 shadow-[inset_2px_2px_0px_rgba(0,0,0,0.5),1px_1px_0px_rgba(255,255,255,1)] ml-4">
        <div className="flex gap-3 items-center border-r-2 border-gray-400 pr-3">
          <div className="flex flex-col gap-[2px]">
            <div className="flex gap-[1px]">
              <div className="w-1.5 h-3 bg-green-500"></div>
              <div className="w-1.5 h-3 bg-green-500"></div>
              <div className="w-1.5 h-3 bg-gray-400"></div>
            </div>
            <span className="text-[6px] font-black leading-none">CPU</span>
          </div>

          <div className="relative">
            <div className="w-5 h-5 border border-black flex items-center justify-center bg-black">
              <div className="w-1 h-1 bg-blue-400 animate-ping"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-[12px] font-black text-black tabular-nums tracking-widest leading-none">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
          <span className="text-[7px] font-bold text-gray-600 tracking-tighter">
            {time.toLocaleDateString([], { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
