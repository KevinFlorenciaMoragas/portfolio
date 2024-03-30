import React from 'react'

export default function Footer() {

    const date = new Date()
    const year = date.getFullYear()
    const svgStyle = {
        width: 3 + "em",
        marginRight: 1 + "em",
        fill: "red"
    }   
    const footerStyle = {
        background: 'rgb(40,47,68)',
        backgroundImage: 'linear-gradient(135deg, rgba(40,47,68,1) 0%, rgba(89,105,149,1) 100%)',
        color: '#EBEBEB',
        height: 4 + "em" 
    }

    return (
        <footer className='d-flex flex-row pt-2 justify-content-between align-items-center ' style={footerStyle} >
            <div className='col-4 col-md-4 col-lg-4 ms-2'>
                <span className=''>@ {year} Kevin Florencia </span>
            </div>
            <div className='col-4 col-md-4 col-lg-2 d-flex justify-content-end'>
                <a href='https://www.linkedin.com/in/kevin-florencia-moragas/' target="_blank"> <img style={svgStyle} src="./svg/linkedin.svg" ></img> </a>
                <a href='https://github.com/KevinFlorenciaMoragas' target="_blank"> <img style={svgStyle} src="./svg/github.svg" ></img> </a>
                <a href='mailto:kevinflorencia@gmail.com'><img style={svgStyle} src='./svg/email.svg'></img></a>
            </div>
            
        </footer>

    )
}
