import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Project from "./components/Project.jsx"
import Index from './components/Index.jsx'
import Projects from './components/Projects.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
      <Route index element={<Index />}></Route>
      <Route path="project/:id" element ={<Project />}></Route>
    </Route>
  </Routes>
  </BrowserRouter>

  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
)
