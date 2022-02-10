import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    
    return (
        <div id='ctn-home'>

            <div id='glass-home' className='ctn-glass'>
                <h1 id='title-home'>BIENVENIDOS A MI PORTFOLIO</h1>
                <div className=''>
                    <Link to="/about">Continuar</Link>
                </div>
            </div>
        </div>
    )
}
