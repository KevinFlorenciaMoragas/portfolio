import React, { useEffect, useState } from 'react'
import { frontend, backend } from '../assets/tecnologies.jsx'

export default function Skills() {
    const photoStyle = {
        width: "100px",

    }
    const backgroundSkill = {
        backgroundColor: "#282F44",
        borderRadius: 0.5 + "em",
        width: 9 + "em"
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

    return (
        <>
            <div className='pt-5'>
                <div className='row'>
                    <div className='col-12 col-md-5 col-lg-6 offset-lg-5'>
                    <h2 className='ps-2'>My Skills</h2>
                    <div className='d-flex flex-row  flex-wrap'>
                        {
                            front.map((e, i) => {
                                return (
                                    <div className='d-flex flex-column m-2 align-items-center justify-content-center' style={backgroundSkill}>
                                        <img src={e.photo} style={photoStyle} className=''></img>
                                    </div>
                                )
                            })
                        }

                        {
                            back.map((e, i) => {
                                return (
                                    <div className='d-flex flex-column m-2 align-items-center justify-content-center' style={backgroundSkill}>
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
