import React, { createContext, useState, useContext } from 'react';
import dictionary from '../assets/dictionary';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {


  const [language, setLanguage] = useState('es');


  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  const translate = (key) => {
    return dictionary[language][key] || key;
  };



  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);