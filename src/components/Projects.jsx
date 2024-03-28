import React, { useEffect, useState } from 'react'
import projectData from '../assets/projects.json'
import Card from './Card'
import { useTheme } from './ThemeContext'
export default function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(projectData.data)
        console.log(projects)
    }, [])
    if (projects == "") {
        return <h1>Cargando infromacion</h1>
    }
    const { themeName } = useTheme()
    return (
        <>
           <div className={`pt-5  ${themeName === "dark" ? "dark-theme": "light-theme"}`} id='projects'>
            {
                projects.map((e, i) => {
                    return (
                        
                            <Card key={i} id={e.id} name={e.name} description={e.description} photo={e.photo} url={e.url} tec={e.tec}></Card>
                      
                    )
                })
            }
            </div>
        </>
    )
}
