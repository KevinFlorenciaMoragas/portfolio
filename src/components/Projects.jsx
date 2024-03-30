import React, { useEffect, useState } from 'react';
import projectData from '../assets/projects.json';
import Card from './Card';
import { useTheme } from './ThemeContext';

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectData.data);
    }, []);

    if (projects.length === 0) {
        return <h1>Cargando información</h1>;
    }

    const { themeName } = useTheme();
    
    return (
        <div className={`pt-5 pb-4 row ${themeName === "dark" ? "dark-theme" : "light-theme"}`} id='projects'>
            {projects.map((project, index) => (
                <Card
                    key={index}
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    photo={project.photo}
                    url={project.url}
                    tec={project.tec.map((tech, i) => ({
                        name: tech.name,
                        photo: tech.photo
                    }))}
                />
            ))}
        </div>
    );
}