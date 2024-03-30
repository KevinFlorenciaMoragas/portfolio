import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
export default function Card(props) {
    const svgStyle = {
        width: 3 + "em",
        marginRight: 1 + "em"
    };
    const infoStyle = {
        fontSize: 1.2 + "em",
    };
    const { themeName } = useTheme();
    const buttonStyle = themeName === "dark" ? 'btn btn-outline-light btn-rounded mb-2 me-2' : 'btn btn-outline-dark btn-rounded mb-2 me-2';
    return (
        <section className='row pt-4'>
            <div className='col-12 col-md-6 col-lg-3 offset-lg-1 d-flex'>
                <img className='img-fluid align-items-center' src={props.photo} alt={props.name} />
            </div>
            <div className='col-12 col-md-6 col-lg-7'>
                <div className='d-flex flex-column'>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <div className='d-flex justify-content-start'>
                        {props.tec.map((tech, index) => (
                            <button key={index} className={buttonStyle}>{tech.name} </button>
                        ))}
                    </div>
                    <div className='d-flex flex-row justify-content-start mt-2 '>
                        <a href={props.url} target="_blank" >
                            <img className='' style={svgStyle} src="./svg/github.svg" alt="GitHub" />
                        </a>
                        <Link className={buttonStyle} to={`/project/${props.id}`}> <span style={{ ...infoStyle }}>Más información</span> </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
