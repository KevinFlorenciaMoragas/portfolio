import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { LanguageProvider } from './components/LanguageContext'
import { ThemeProvider } from './components/ThemeContext'
import './index.css'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <Header></Header>
          <div className='container-fluid'>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </LanguageProvider>
      </ThemeProvider>
    </>
  )
}

export default App
