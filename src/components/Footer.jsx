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
        <footer className='d-flex flex-row pt-2 justify-content-between align-items-center mt-4' style={footerStyle} >
            <div className='col-4 col-md-4 col-lg-4 ms-2'>
                <span className=''>@ {year} Kevin Florencia </span>
            </div>
            <div className='col-4 col-md-4 col-lg-2 d-flex justify-content-end'>
                <a href='https://www.linkedin.com/in/kevin-florencia-moragas/'> <img style={svgStyle} src="./svg/linkedin.svg" ></img> </a>
                <a href='https://github.com/KevinFlorenciaMoragas'> <img style={svgStyle} src="./svg/github.svg" ></img> </a>
                <a href='mailto:kevinflorencia@gmail.com'><img style={svgStyle} src='./svg/email.svg'></img></a>
            </div>
            
        </footer>

        // <footer class="py-3 my-4">
        //     <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        //         <li class="nav-item"><a href="#" class="nav-link px-2 text-light">About Me</a></li>
        //         <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Project</a></li>
        //         <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Contact</a></li>
        //     </ul>
        //     <p class="text-center text-light">© {year} Kevin Florencia</p>
        // </footer>


    )
}
