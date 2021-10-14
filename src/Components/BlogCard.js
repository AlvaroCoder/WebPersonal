import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({props}) {
    const {key,id,title,description,time,tag,img_Fondo,route} = props
    return (
        <div id={id} key={key} className="ctn-blog-card">
            <div className="img-blog-card">
                <img className="img-blog" alt="img-Fondo" src={img_Fondo}></img>
            </div>
            <div className="txt-blog-card">                
                <h3 className="sbttl-card">
                <Link style={{color:"black"}} to={route}>{title}</Link>
                </h3>
                <span className="dec-card">
                    {description}
                </span>
                <div className="foot-card">
                    <p className="time-foot-card">{time}</p>
                    <p className="tag-foot-card">{tag}</p>
                </div>
            </div>
        </div>
    )
}
