import React from 'react'
import photo from '../assets/photos/fotoLinkedin.jpg'
import { useLanguage } from './LanguageContext'
export default function Index() {
    const titleStyle = {
        color: "#8895BF",
        fontSize: 5 + "em"
    }
    const sectionStyle = {
        height: 90 + "vh",
        display: "flex",
        alignItems: "center"
    }
    const svgStyle = {
        width: 3 + "em",
        marginRight: 1 + "em"
    }
    const photoStyle = {
        width: 15 + "em",
        height: "auto",
        borderRadius: 100 + "%"
    }
    const helloStyle = {
        fontSize: 3 + "em"
    }
    const { translate } = useLanguage()
    return (
        <section className='row mt-5' style={sectionStyle}>

            <div className='d-flex flex-column col-12 col-md-6 col-lg-5  offset-lg-1'>
                <h3 className='' style={helloStyle}>{translate(('hello'))}!</h3>
                <h2 className='' style={titleStyle}>{translate(('title'))}</h2>
                <h4 className='' >{translate('web')}</h4>
                <div className='d-flex flex-row '>
                    <a href='https://www.linkedin.com/in/kevin-florencia-moragas/'> <img style={svgStyle} src="./svg/linkedin.svg" ></img> </a>
                    <a href='https://github.com/KevinFlorenciaMoragas'> <img style={svgStyle} src="./svg/github.svg" ></img> </a>
                    <a href='mailto:kevinflorencia@gmail.com'><img style={svgStyle} src='./svg/email.svg'></img></a>
                </div>
            </div>
            <div className='col-lg-2 col-md-2 col-12 '>
                <img style={photoStyle} src={photo}></img>
            </div>
        </section>
    )
}
