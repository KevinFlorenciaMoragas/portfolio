import React, { useEffect, useState } from 'react'
import { frontend, backend } from '../assets/tecnologies.jsx'
import { useTheme } from './ThemeContext.jsx'
export default function Skills() {
    const photoStyle = {
        width: "100px",
    }
    const backgroundSkill = {
        dark: {
        backgroundColor: "#282F44",
        borderRadius: 0.5 + "em",
        width: 9 + "em"
        },
        light: {
            backgroundColor: "#282F44",
            borderRadius: 0.5 + "em",
            width: 9 + "em"
        }
    }
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
            <div className={`pt-5  ${themeName === "dark" ? "dark-theme": "light-theme"}`}>
                <div className='row'>
                    <div className='col-12 col-md-12 col-lg-6 offset-lg-5'>
                    <h2 className='ps-2'>My Skills</h2>
                    <div className='d-flex flex-row  flex-wrap'>
                        {
                            front.map((e, i) => {
                                return (
                                    <div className='d-flex flex-column m-2 align-items-center justify-content-center' style={backgroundSkill[themeName]}>
                                        <img src={e.photo} style={photoStyle} className=''></img>
                                    </div>
                                )
                            })
                        }

                        {
                            back.map((e, i) => {
                                return (
                                    <div className='d-flex flex-column m-2 align-items-center justify-content-center' style={backgroundSkill[themeName]}>
                                        <img src={e.photo} style={photoStyle} className=''></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
