import React from 'react'
import {Link} from "react-router-dom";
export default function Nav() {
    const style ={
        color :"white"
    }
    return (
            <header >
                <div className="ctn-icon-web">
                    <h1 className="logo">AP.</h1>
                </div>
                <ul>
                    <li style={style} className="nav-item"><Link style={style} className="link-style" to="/Home">Principal</Link></li>
                    <li style={style} className="nav-item"><Link style={style} className="link-style" to="/Home">Proyectos</Link></li>
                    <li style={style} className="nav-item"><Link style={style} className="link-style" to="/Blog">Blog</Link></li>
                    <li style={style} className="nav-item"><Link style={style} className="link-style" to="/Home">YouTube</Link></li>
                </ul>
            </header>
    )
}
