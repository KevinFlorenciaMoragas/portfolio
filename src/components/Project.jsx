import React from 'react'
import { useParams } from 'react-router-dom'
import projectData from '../assets/projects.json'
import { useTheme } from './ThemeContext'
import SkillCard from './SkillCard'
import { useLanguage } from './LanguageContext'
export default function project() {
  const { id } = useParams()
  console.log(id)
  const project = projectData.data.find(e => e.id == id)
  console.log(project)
  const { themeName } = useTheme()
  const {translate} = useLanguage()
  const preStyle = {
    whiteSpace: 'pre-wrap',
    fontFamily: 'Arial, sans-serif',
    fontSize: '1rem',
  }
  const rowStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
    backgroundColor: themeName === "dark" ? "#222844" : "#BABABB",
    color: themeName === "dark" ? "#EBEBEB" : "#46494C"

  }
  return (
    <>
      <div className={`row`} style={rowStyle} >
        <div className='col-12 col-md-12 col-lg-12'>
          <h2 className='text-center'>{project.name}</h2>
        </div>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-2 offset-lg-3'>
            <img src={project.photo} className='img-fluid' alt={project.name}></img>
          </div>
          <div className='col-12 col-md-12 col-lg-6'>
            <pre style={preStyle} className=''>{project.longDescription}</pre>
          
          <div className='d-flex flex-row  align-items-center justify-content-between   '>
            <div className='d-flex flex-row flex-wrap'>
            {project.tec.map((e, i) => {
              return (
                <SkillCard key={i} photo={e.photo} name={e.name}></SkillCard>
              )
            })
            }
            </div>
            <div className=''>
            <a href={project.url} className='btn btn-primary'>
                <img src='/svg/github.svg' alt='github' className='img-fluid' width={20} />
               {translate(("github"))}</a>
            </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
