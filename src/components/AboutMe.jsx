import React from 'react'
import photo from '../assets/photos/fotoLinkedin.jpg'
import { useLanguage } from './LanguageContext'
export default function AboutMe() {
    const strongStyle = {
        color: "#D31E0D",
        fontSize: 1.7 + 'em'
    }
    const letterStyle = {
        color: "#F7F4F3",
        fontSize: 1.4 + "em"
    }
    const { translate } = useLanguage()
    return (
        <section className='row'>
            <div className='col-lg-5 col-md-6 col-12 offset-lg-1 '>
                <span style={letterStyle}>{translate('aboutMeText')} <strong style={strongStyle}>Kevin Florencia</strong>, </span> <span style={letterStyle}> {translate('aboutMeText2')}
                </span>

            </div>
        </section>

    )
}
