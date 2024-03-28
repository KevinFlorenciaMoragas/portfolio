import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Index from './components/Index'
import { LanguageProvider } from './components/LanguageContext'
import { ThemeProvider } from './components/ThemeContext'
import './index.css'
function App() {

  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <Header></Header>
          <div className='container-fluid'>
            <Index></Index>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
          </div>
          <Footer></Footer>
        </LanguageProvider>
      </ThemeProvider>
    </>
  )
}

export default App
