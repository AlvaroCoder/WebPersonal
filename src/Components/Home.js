import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    const textHello = "<Hello/>"
    return (
        <div id='ctn-home'>
            <div id='wave2'></div>
            <div id="wave3"></div>
            <div id='ship'></div>
            <div id='ctn-intro-home'>
                <div id='intro-home'>
                    <h1 id='title-home1' className='text-animate'>{textHello}</h1>
                    <h2 id='title-home2' className='text-animate'>I'm Alvaro</h2>
                    <h3 id='title-home3' className='text-animate'>I like programming and chess</h3>
                    <p  id='btn-continue'><Link style={{ fontWeight:'bold'}} to='/About'><span>Continue to About</span></Link></p>      
                </div>    
            </div>
           <div id='ctn-sun'>
            <div id='sun'></div>
           </div>
        </div>
    )
}
