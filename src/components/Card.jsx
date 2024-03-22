import React from 'react'
import './Card.css'
export default function Card(props) {
    const svgStyle = {
        width: 3 + "em",
        marginRight: 1 + "em"
    }
    return (
        <>
            <section className='row pt-4'>
                <div className='col-12 col-md-6 col-lg-3 offset-lg-1 d-flex'>
                    <img className='img-fluid align-items-center' src={props.photo}></img>
                </div>
                <div className='col-12 col-md-6 col-lg-7'>
                    <div className='d-flex flex-column'>
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>
                        <div className='d-flex justify-content-start'>
                            {
                                props.tec.map((e, i) => {
                                    return (
                                        <button key={i} className='btn btn-outline-light btn-rounded m-2'>{e}</button>
                                    )
                                })
                            }
                        </div>
                        <div className='d-flex justify-content-start ms-2'>
                            <a href={props.url}>
                            <img className='' style={svgStyle} src="./svg/github.svg" ></img>
                            </a>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}