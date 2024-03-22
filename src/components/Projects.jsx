import React, { useEffect, useState } from 'react'
import projectData from '../assets/projects.json'
import Card from './Card'

export default function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(projectData.data)
        console.log(projects)
    }, [])
    if (projects == "") {
        return <h1>Cargando infromacion</h1>
    }

    return (
        <>
            <div className='pt-5' id="projects">
            {
                projects.map((e, i) => {
                    return (
                        
                            <Card key={i} name={e.name} description={e.description} photo={e.photo} url={e.url} tec={e.tec}></Card>
                      
                    )
                })
            }
            </div>
        </>
    )
}
