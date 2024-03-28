import React from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css"
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';
// import darkMode from "../../public/svg/dark-mode-night-moon-svgrepo-com.svg"
export default function Header() {

    const { translate, toggleLanguage, language } = useLanguage()
    const { toggleTheme, themeName } = useTheme()
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    const headerStyle = {
        background: 'rgb(40,47,68)',
        backgroundImage: 'linear-gradient(135deg, rgba(40,47,68,1) 0%, rgba(89,105,149,1) 100%)',
        color: '#EBEBEB',
        height: "auto"
    }

    const fontStyle = {
        fontSize: 2 + "em",
        color: '#EBEBEB !important',

    }

    const imageStyle = {
        height: 2 + "em",
        borderRadius: 20 + "%",
        cursor: "pointer"
    }
    const navLink = {
        cursor:"pointer"
    }

    return (
        <>
            <header className={`d-flex flex-wrap justify-content-between mb-4  fixed-top `} style={headerStyle}>
                <div className='col-2 col-md-2 col-lg-2  d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none'>
                    <span className='ms-2' style={fontStyle}>{translate('headerTitle')}</span>
                </div>
                <div className='col-lg-6 d-none d-md-none d-lg-block'>
                    <ul className='nav nav-pills align-items-center' style={fontStyle}>
                        <li className='nav-item'>
                            <a className='nav-link' style={navLink} onClick={() => scrollToSection('index')} > {translate('aboutMe')}</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' style={navLink}  onClick={() => scrollToSection('skills')}> {translate('skills')}</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' style={navLink} onClick={() => scrollToSection('projects')}> {translate('projects')}</a>
                        </li>
                        
                    </ul>
                </div>
                <div className='col-md-3 col-lg-3 d-flex justify-content-end align-items-center '>
                    <span className='m-2'  onClick={toggleLanguage}>{
                        language === 'es' ? (
                            <span style={imageStyle} className="fi fi-es"></span>
                        ) : (
                            <span style={imageStyle} className='fi fi-gb'></span>
                        )
                    }
                    </span>
                    <span className='m-2' onClick={toggleTheme}>
                        {
                            themeName === 'light' ? (
                                <img style={imageStyle} src="/svg/light-svgrepo-com.svg"></img>
                            ) : (
                                <img style={imageStyle} src="/svg/dark-mode-night-moon-svgrepo-com.svg"></img>
                            )
                        }
                    </span>
                </div>
            </header>
        </>
    )
}
