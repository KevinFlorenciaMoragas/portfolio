import React, { useEffect, useState } from 'react'
import { frontend, backend } from '../assets/tecnologies.jsx'
import { useTheme } from './ThemeContext.jsx'
import SkillCard from './SkillCard.jsx'
export default function Skills() {
    const [back, setBack] = useState([])
    const [front, setFront] = useState([])
    useEffect(() => {
        setFront(frontend.data)
        setBack(backend.data)

    }, [])
    if (back == "" || front == "") {
        return <h2>Cargando información </h2>
    }
    const { themeName } = useTheme()
    return (
        <>
            <section className={`pt-5 row ${themeName === "dark" ? "dark-theme" : "light-theme"}`} id="skills">
     
                    <div className='col-12 col-md-12 col-lg-6 offset-lg-5'>
                        <h2 className='ps-2'>My Skills</h2>
                        <div className='d-flex flex-row  flex-wrap'>
                            {
                                front.map((e, i) => {
                                    return (
                                        <SkillCard photo={e.photo} name={e.name} key={i} ></SkillCard>
                                    )
                                })
                            }

                            {
                                back.map((e, i) => {
                                    return (
                                        <SkillCard photo={e.photo} name={e.name} key={i} ></SkillCard>
                                    )
                                })
                            }
                        </div>
                    </div>
            
            </section>
        </>
    )
}
