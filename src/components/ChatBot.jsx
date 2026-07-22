import { useState, useEffect, useRef } from 'react';
import faqData from '../data/faqData';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: '> Halo! Saya SatBot \u{1F916}\n> Ketik atau pilih pertanyaan di bawah untuk tahu lebih lanjut tentang Satria!'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatRef = useRef(null);

  // Auto scroll ke pesan terbaru
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Focus input saat chat dibuka
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Tutup chat ketika klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chatRef.current && !chatRef.current.contains(e.target) && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Escape untuk tutup
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  // Fungsi untuk menambahkan pesan bot dengan efek mengetik
  const addBotMessage = async (text) => {
    setIsTyping(true);
    
    // Delay untuk simulasi "mengetik"
    const typingDelay = Math.min(800 + text.length * 15, 2500);
    await new Promise(resolve => setTimeout(resolve, typingDelay));
    
    setMessages(prev => [...prev, { type: 'bot', text }]);
    setIsTyping(false);
  };

  // Fungsi untuk mencari jawaban dari FAQ
  const findAnswer = (question) => {
    const q = question.toLowerCase().trim();
    
    // Cari yang paling cocok
    let bestMatch = null;
    let highestScore = 0;

    for (const item of faqData) {
      const itemQ = item.question.toLowerCase();
      
      // Hitung skor kecocokan berdasarkan jumlah kata yang cocok
      const questionWords = q.split(' ');
      const matchCount = questionWords.filter(word => 
        word.length > 2 && itemQ.includes(word)
      ).length;
      
      const score = matchCount / Math.max(questionWords.length, 1);
      
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    // Jika skor terlalu rendah, kasih fallback
    if (highestScore < 0.2) {
      return null;
    }

    return bestMatch?.answer || null;
  };

  // Handle klik pertanyaan
  const handleQuestionClick = async (question) => {
    setMessages(prev => [...prev, { type: 'user', text: question }]);
    const answer = findAnswer(question);
    await addBotMessage(answer || '> Maaf, saya belum punya jawaban untuk itu.\n> Coba pilih pertanyaan lain atau hubungi langsung lewat form Contact!');
  };

  // Handle input manual
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const question = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { type: 'user', text: question }]);

    const answer = findAnswer(question);
    await addBotMessage(answer || '> Maaf, saya belum punya jawaban untuk itu.\n> Coba pilih pertanyaan lain atau hubungi langsung lewat form Contact!');
  };

  // Format pesan (ganti \n jadi <br/>)
  const formatMessage = (text) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  // Grup pertanyaan (acak setiap render)
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  useEffect(() => {
    // Ambil 4 pertanyaan secara acak
    const shuffled = [...faqData].sort(() => Math.random() - 0.5).slice(0, 4);
    setShuffledQuestions(shuffled);
  }, [isOpen]);

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[9999] w-14 h-14 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center font-black text-lg group ${isOpen ? 'bg-blue-700 text-white' : 'bg-yellow-400 text-black'}`}
        aria-label={isOpen ? 'Tutup chat' : 'Buka chat'}
      >
        {isOpen ? (
          <span className="text-2xl">&times;</span>
        ) : (
          <div className="relative">
            <span className="animate-bounce-slow inline-block">{'\u{1F4AC}'}</span>
            <span className="absolute -top-1 -right-2 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
          </div>
        )}

        {/* Label tooltip */}
        <span className={`absolute -top-8 right-0 bg-black text-white text-[8px] font-black uppercase px-2 py-1 border border-white whitespace-nowrap transition-all duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          Chat_Me!
        </span>
      </button>

      {/* CHAT WINDOW */}
      <div
        ref={chatRef}
        className={`fixed bottom-24 right-6 z-[9998] w-[360px] max-w-[calc(100vw-2rem)] bg-[#c0c0c0] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 origin-bottom-right flex flex-col ${
          isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'
        }`}
        style={{ maxHeight: 'min(600px, calc(100vh - 120px))' }}
      >
        {/* TITLE BAR */}
        <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] text-white p-2 flex justify-between items-center border-b-4 border-black flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#c0c0c0] border-2 border-white border-r-gray-700 border-b-gray-700 flex items-center justify-center text-[10px] font-black text-black">
              {'\u{1F4AC}'}
            </div>
            <span className="text-xs font-black uppercase tracking-wider">SatBot_AI.exe</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-5 h-5 bg-[#c0c0c0] border-2 border-white border-r-gray-700 border-b-gray-700 flex items-center justify-center text-[10px] font-black text-black hover:bg-red-500 hover:text-white transition-colors active:border-r-white active:border-b-white"
          >
            X
          </button>
        </div>

        {/* CHAT BODY */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-[#dfdfdf] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PC9yZWN0Pgo8L3N2Zz4=')]"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#000000 #c0c0c0' }}
        >
          {/* MESSAGES */}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
            >
              <div
                className={`max-w-[85%] p-2.5 border-2 border-black text-xs font-bold leading-relaxed ${
                  msg.type === 'user'
                    ? 'bg-blue-700 text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                {msg.type === 'user' ? (
                  <span>{msg.text}</span>
                ) : (
                  <span className="text-[11px] font-mono">{formatMessage(msg.text)}</span>
                )}
              </div>
            </div>
          ))}

          {/* TYPING INDICATOR */}
          {isTyping && (
            <div className="flex justify-start animate-fadeIn">
              <div className="bg-white border-2 border-black p-2.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* QUICK QUESTIONS */}
        <div className="flex-shrink-0 p-2 border-t-4 border-black bg-[#c0c0c0]">
          <p className="text-[8px] font-black uppercase tracking-widest text-gray-600 mb-2">
            {'>'} Quick_Access:
          </p>
          <div className="flex flex-wrap gap-1.5 max-h-[72px] overflow-y-auto">
            {shuffledQuestions.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleQuestionClick(item.question)}
                disabled={isTyping}
                className="text-[9px] font-bold px-2 py-1 border-2 border-black bg-white hover:bg-yellow-400 hover:-translate-y-0.5 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed uppercase text-left leading-tight"
              >
                {item.question.length > 30 ? item.question.slice(0, 30) + '...' : item.question}
              </button>
            ))}
          </div>
        </div>

        {/* INPUT FORM */}
        <form onSubmit={handleSubmit} className="flex-shrink-0 border-t-4 border-black p-2 bg-[#c0c0c0]">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="{'>>'} Ketik pertanyaan..."
              disabled={isTyping}
              className="flex-1 bg-white border-2 border-black p-2 text-xs font-bold shadow-[inset_2px_2px_0px_rgba(0,0,0,0.1)] focus:outline-none focus:border-blue-600 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isTyping || !inputValue.trim()}
              className="px-3 py-2 bg-black text-yellow-400 border-2 border-black font-black text-xs uppercase hover:bg-blue-700 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
            >
              {'>>'}
            </button>
          </div>
        </form>

        {/* STATUS BAR */}
        <div className="flex-shrink-0 bg-[#c0c0c0] border-t-2 border-gray-400 px-3 py-1 flex justify-between items-center text-[7px] font-black uppercase tracking-wider">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span>Online</span>
          </div>
          <span className="text-gray-500">v1.0 | {faqData.length} FAQs</span>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </>
  );
};

export default ChatBot;

