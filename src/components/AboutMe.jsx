import React from 'react'
import photo from '../assets/photos/fotoLinkedin.jpg'
import { useLanguage } from './LanguageContext'
import { useTheme } from './ThemeContext'
export default function AboutMe() {
    const letterStyle = {
        fontSize: 1.4 + "em"
    }
    const { translate } = useLanguage()
    const { themeName } = useTheme()
    return (
        <section className={`row  ${themeName === "dark" ? "dark-theme": "light-theme"}`}>
            <div className='col-lg-5 col-md-12 col-12 offset-lg-1 '>
                <span style={letterStyle}>{translate('aboutMeText'.replace(/\n/g, '<br />'))}  </span>
            </div>
        </section>

    )
}
