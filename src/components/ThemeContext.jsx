import React, { createContext, useState, useContext,useEffect } from 'react';

const ThemeContext = createContext({themeName: "dark"
}
    );

export const ThemeProvider = ({ children }) => {

  const themes = {
    dark: {
      background: '#222844',
      color: '#EBEBEB',
    },
    light: {
      background: '#dfdfdf',
      color: '#000000',
    }
  }
  const [themeName, setThemeName] = useState("dark");
  const [theme, setTheme] = useState(themes[themeName]);


  const setCSSVariables = theme => {
    for (const value in theme) {
      document.documentElement.style.setProperty(`--${value}`, theme[value]);
    }
  };
  useEffect(() => {
    setCSSVariables(theme);
  },[theme]);

  const toggleTheme = () => {
    if (themeName === "dark") {
      console.log(themes)
      setTheme(themes.light);
      setThemeName("light");
    } else {
      console.log(theme)
      setTheme(themes.dark);
      setThemeName("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeName, setCSSVariables }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);