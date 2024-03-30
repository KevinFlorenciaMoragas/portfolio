import React, { useEffect, useState } from 'react'
import { useTheme } from './ThemeContext.jsx'
export default function SkillCard(props) {
    const photoStyle = {
        width: "100px",
    }
    const { themeName } = useTheme()
    const backgroundSkill = {
        backgroundColor: themeName === "dark" ? "#2A3250" : "#272635",
        color:  "#EBEBEB",
        borderRadius: 0.5 + "em",
        width: 9 + "em",
        maxHeight: 12.4+"em",
    }
    
    return (
        <>
            <div className='d-flex flex-column m-2 align-items-center justify-content-between' style={backgroundSkill}>
                <img src={props.photo} style={photoStyle} className='pt-4'></img>
                <h3 className=''>{props.name}</h3>
            </div>

        </>
    )
}
