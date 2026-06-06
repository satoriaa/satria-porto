import { useState } from 'react';

const Contact = () => {
  const [isTransmitting, setIsTransmitting] = useState(false);

  // FUNGSI SUBMIT GABUNGAN DENGAN API WEB3FORMS KAMU
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsTransmitting(true);

    const formData = new FormData(e.target);
    // Memasukkan Access Key unik milikmu
    formData.append("access_key", "64bb577c-4e07-46f2-b051-96f77673f8f9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert("SIGNAL_SENT: Pesan kamu telah diterima di Satria_Hub.");
        e.target.reset(); // Mereset isi form setelah sukses
      } else {
        alert("TRANSMISSION_ERROR: " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("SYSTEM_CRASH: Terjadi kesalahan jaringan.");
    } finally {
      setIsTransmitting(false);
    }
  };

  const outerClass = `max-w-5xl w-full bg-white border-4 border-black shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row overflow-hidden relative z-10 transition-all duration-500 ${isTransmitting ? 'scale-[0.99] brightness-90' : 'scale-100'}`;

  return (
    <section id="contact" className="stack-section bg-[#dfdfdf] flex items-center justify-center p-4 md:p-10 relative overflow-hidden">
      
      {/* --- DEKORASI BACKGROUND --- */}
      <div className="absolute inset-0 opacity-[0.15] z-0" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>
      
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>

      <div className="absolute top-10 left-10 font-black text-[10rem] text-black/[0.03] select-none pointer-events-none hidden md:block italic tracking-tighter uppercase">
        GET_IN_TOUCH
      </div>

      {/* OUTER WINDOW CONTAINER */}
      <div className={outerClass}>
        
        <div className="absolute inset-0 bg-scanlines opacity-[0.02] pointer-events-none z-0"></div>

        {/* LEFT PANEL: SYSTEM INFO & LINKS */}
        <div className="md:w-1/3 bg-[#c0c0c0] border-r-4 border-black p-8 flex flex-col gap-8 relative z-10">
          <div className="group">
             <div className="w-16 h-16 bg-blue-700 border-4 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-[360deg] transition-transform duration-700">
                <span className="text-white text-3xl font-black italic">?</span>
             </div>
             <h3 className="text-2xl font-black uppercase italic leading-none mb-2 group-hover:text-blue-700 transition-colors">SATRIA_HUB</h3>
             <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest leading-relaxed">
                Ready to process your digital transmission. Available for collaboration & research.
             </p>
          </div>

          {/* SOCIAL LINKS (EXTERNAL NODES) */}
          <div className="space-y-4">
            <p className="text-[9px] font-black uppercase text-gray-500 border-b-2 border-gray-400 pb-1 flex justify-between items-center">
              <span>Connect_Protocol:</span>
              <span className="animate-pulse text-blue-700 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-blue-700 rounded-full animate-ping"></div>
                LINK_ESTABLISHED
              </span>
            </p>
              
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'LinkedIn', icon: 'fa-linkedin-in', color: 'bg-[#0077b5]', hoverColor: 'group-hover:text-[#0077b5]', link: 'https://www.linkedin.com/in/muhammad-satria-rizky-832842371/' },
                { name: 'GitHub', icon: 'fa-github', color: 'bg-black', hoverColor: 'group-hover:text-black', link: 'https://github.com/satoriaa' },
                { name: 'Instagram', icon: 'fa-instagram', color: 'bg-[#E1306C]', hoverColor: 'group-hover:text-[#E1306C]', link: 'https://www.instagram.com/str_rzy?igsh=OHZ6ZWVzeHVndW9n&utm_source=qr' },
                { name: 'Email', icon: 'fa-envelope', color: 'bg-blue-600', hoverColor: 'group-hover:text-blue-600', link: 'mailto:muhanmadsatriarizky@gmail.com' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex flex-col items-center justify-center p-4 border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 overflow-hidden"
                >
                  <div className="absolute top-1.5 right-1.5 flex gap-0.5">
                    <div className="w-1 h-1 bg-green-500 rounded-full opacity-50 group-hover:opacity-100 animate-pulse"></div>
                  </div>

                  <div className={`absolute -bottom-4 -right-4 w-12 h-12 ${social.color} opacity-0 group-hover:opacity-10 rounded-full transition-all duration-500 group-hover:scale-[3]`}></div>

                  <div className={`w-12 h-12 ${social.color} border-2 border-black flex items-center justify-center text-white mb-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 relative z-10`}>
                    <i className={`${social.name === 'Email' ? 'fa-solid' : 'fa-brands'} ${social.icon} text-lg`}></i>
                  </div>

                  <span className={`text-[9px] font-black uppercase tracking-tighter text-center transition-all duration-300 group-hover:tracking-[0.15em] ${social.hoverColor}`}>
                    {social.name}
                  </span>
                  
                  <div className={`absolute bottom-0 left-0 h-1 w-0 ${social.color} transition-all duration-300 group-hover:w-full`}></div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-auto hidden md:block">
            <div className="bg-black text-yellow-400 p-2 text-[9px] font-black uppercase italic border-2 border-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center animate-bounce-slow">
                Loc: Jakarta_Untar_FTI
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: TRANSMISSION FORM */}
        <div className="md:w-2/3 flex flex-col relative z-10 bg-white">
          <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] text-white p-3 flex justify-between items-center border-b-4 border-black">
            <div className="flex items-center gap-2">
               <span className="text-[11px] font-black uppercase tracking-[0.2em]">OUTGOING_MESSAGE_V2.EXE</span>
            </div>
            <div className="flex gap-1">
              <div className="w-5 h-5 bg-[#c0c0c0] border-2 border-white border-r-gray-700 border-b-gray-700 text-black flex items-center justify-center font-bold text-[10px] cursor-pointer active:bg-gray-400">_</div>
              <div className="w-5 h-5 bg-[#c0c0c0] border-2 border-white border-r-gray-700 border-b-gray-700 text-black flex items-center justify-center font-bold text-[10px] cursor-pointer active:bg-gray-400">X</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5 relative">
             {isTransmitting && (
               <div className="absolute inset-0 bg-white/60 z-20 backdrop-blur-[2px] flex items-center justify-center">
                 <div className="bg-black text-white px-6 py-3 border-4 border-blue-600 font-black animate-pulse uppercase italic">
                   ENCRYPTING_SIGNAL...
                 </div>
               </div>
             )}

             <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 group/input">
                   <label className="text-[10px] font-black uppercase tracking-widest text-blue-700 group-focus-within/input:text-black transition-colors">User_Identity</label>
                   {/* Diberikan name="name" agar dibaca Web3Forms */}
                   <input required type="text" name="name" placeholder="Your Name" className="w-full bg-[#f8f8f8] border-4 border-black p-3 font-bold text-sm focus:bg-white focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(250,204,21,1)] transition-all shadow-[inset_4px_4px_0px_rgba(0,0,0,0.05)]" />
                </div>
                <div className="space-y-2 group/input">
                   <label className="text-[10px] font-black uppercase tracking-widest text-blue-700 group-focus-within/input:text-black transition-colors">Digital_Address</label>
                   {/* Diberikan name="email" agar dibaca Web3Forms */}
                   <input required type="email" name="email" placeholder="email@example.com" className="w-full bg-[#f8f8f8] border-4 border-black p-3 font-bold text-sm focus:bg-white focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(250,204,21,1)] transition-all shadow-[inset_4px_4px_0px_rgba(0,0,0,0.05)]" />
                </div>
             </div>

             <div className="space-y-2 group/input">
                <label className="text-[10px] font-black uppercase tracking-widest text-blue-700 group-focus-within/input:text-black transition-colors">Data_Payload</label>
                {/* Diberikan name="message" agar dibaca Web3Forms */}
                <textarea required rows="4" name="message" placeholder="Transmission details..." className="w-full bg-[#f8f8f8] border-4 border-black p-3 font-bold text-sm focus:bg-white focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(250,204,21,1)] transition-all resize-none shadow-[inset_4px_4px_0px_rgba(0,0,0,0.05)]"></textarea>
             </div>

             <button 
                type="submit"
                disabled={isTransmitting}
                className={`w-full py-4 font-black text-sm border-2 border-black transition-all uppercase italic flex items-center justify-center gap-4 relative overflow-hidden group/btn ${isTransmitting ? 'bg-gray-400 cursor-wait' : 'bg-black text-yellow-400 hover:bg-blue-700 hover:text-white hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'}`}
             >
                <span className="relative z-10">
                  {isTransmitting ? 'TRANSMITTING...' : '> INITIALIZE_TRANSMISSION'}
                </span>
                {!isTransmitting && <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping relative z-10 group-hover/btn:bg-white"></div>}
             </button>
          </form>

          <div className="mt-auto bg-[#c0c0c0] border-t-4 border-black p-3 flex justify-between items-center px-8 text-[9px] font-black uppercase">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Secured_Line_v4.1</span>
             </div>
             <span className="opacity-50 hover:opacity-100 transition-opacity cursor-default">SATRIA_STATION_READY</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
};

export default Contact;