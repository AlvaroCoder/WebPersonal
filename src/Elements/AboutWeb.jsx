import React from 'react'
import PythonLogo from "../icons/PythonLogo.png"
import ReactLogo from "../icons/ReactLogo.png"
import JavaLogo from "../icons/JavaLogo.png"
import LaptopVector from "../icons/LaptopVector.png"
import { Link } from 'react-router-dom'

export const AboutWeb = () => {
    return (
        <div id='container-about'>
            <div id='ctn-title-about' >
                <h1 className='title-l'>Acerca de este Blog</h1>
            </div>
            <div className='flex-row'>
                <section id='sec-img-about'>
                    <div id='col-logos'>
                        <img className='logo-web' src={PythonLogo} alt='Logo de Python'></img>
                        <img className='logo-web' src={ReactLogo} alt='Logo de React'></img>
                        <img className='logo-web' src={JavaLogo} alt='Logo de Java'></img>
                    </div>
                    <div id='col-laptop'>
                        <img className='laptop-vector' src={LaptopVector} alt='Vector de una laptop'></img>
                    </div>
                </section>
                <section id='sec-content-about'>
                    <p>
                        Comparto lo que aprendo en programacion y demas temas
                    </p>
                    <div>
                        <Link to='/Blog'>Ver Blog</Link>                        
                    </div>
                </section>
            </div>
        </div>
    )
}
