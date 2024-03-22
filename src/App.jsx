import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Index from './components/Index'
import { LanguageProvider } from './components/LanguageContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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

    </>
  )
}

export default App
