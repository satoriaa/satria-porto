import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Ambil dari localStorage jika ada
    const saved = localStorage.getItem('portfolio-lang');
    return saved || 'id';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'id' ? 'en' : 'id'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

