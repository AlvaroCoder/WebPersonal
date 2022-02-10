import React  from 'react'
import {Link} from "react-router-dom";
import HomePageIcon from "../icons/HomePageIcon.png";
import ArchivePageIcon from "../icons/ArchivePageIcon.png";
import ProjectPageIcon from "../icons/ProjectPageIcon.png"

export  const Nav = () => {
    const style ={
        color :"white",
        textDecoration : "none"
    }
    const routes = [
        {classItem : "link-item", linkItem : "/Home", imgItem : HomePageIcon},
        {classItem :  "link-item", linkItem : "/About", imgItem : ArchivePageIcon},
        {classItem :  "link-item", linkItem : "/Projects", imgItem : ProjectPageIcon}
    ]
    
    return (
        <nav>
            {
                routes.map((item)=>{
                    return <div key={item.linkItem} className={item.classItem}><Link style={style} className="link-style" to={item.linkItem}><img src={item.imgItem} alt='ImagenIcon'></img></Link></div>
                })
            }
        </nav>
)
}
