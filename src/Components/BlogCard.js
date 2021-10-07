import React from 'react'

export default function BlogCard({props}) {
    const {key,id,title,description,time,tag} = props
    return (
        <div id={id} key={key} className="ctn-blog-card">
            <div className="img-blog-card"></div>
            <div className="txt-blog-card">
                <h3 className="sbttl-card">
                    {title}
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
