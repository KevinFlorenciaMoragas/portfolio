import React from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css"
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';
export default function Header() {

    const { translate, toggleLanguage, language} = useLanguage()
    const { toggleTheme, themeName } = useTheme()
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
    console.log(themeName)

    return (
        <>
{/* ${themeName === "dark" ? "dark-theme": "light-theme"} */}
            <header className={`d-flex flex-wrap justify-content-between mb-4 rounded fixed-top `} style={headerStyle}>
                <div className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none'>
                    <span className='ms-2' style={fontStyle}>{translate('headerTitle')}</span>
                </div>
                <div className='col-lg-8 d-none d-md-none d-lg-block'>
                    <ul className='nav nav-pills align-items-center' style={fontStyle}>
                        <li className='nav-item'>
                            <a className='nav-link'> {translate('aboutMe')}</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='projects'> {translate('projects')}</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'> {translate('skills')}</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'> {translate('contact')}</a>
                        </li>
                    </ul>
                </div>
                <div className='col-md-3 col-lg-3 d-flex flex-row justify-content-center align-items-center d-none d-md-block'>
                <button className='btn btn-primary ' onClick={toggleLanguage}>{
                    language === 'es' ? (
                        <span className="fi fi-es"></span>
                    ) : (
                        <span className='fi fi-gb'></span>
                    )
                }
                </button>
                <button className='btn btn-primary  ' onClick={toggleTheme}> Change theme
                    
                </button>
                </div>
            </header>
        </>
    )
}
