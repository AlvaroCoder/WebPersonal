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
        {classItem : "link-item", linkItem : "/Home", imgItem : HomePageIcon, name : 'Home'},
        {classItem :  "link-item", linkItem : "/About", imgItem : ArchivePageIcon , name : 'About'},
        {classItem :  "link-item", linkItem : "/Projects", imgItem : ProjectPageIcon, name : 'Works'},
        {classItem : "link-item", linkItem: "/Contact", name: 'Contact'}
    ]
    
    return (
        <nav>
            {
                routes.map((item)=>{
                    return <div key={item.linkItem} className={item.classItem}><Link style={style} className="link-style" to={item.linkItem}>{item.name}</Link></div>
                })
            }
        </nav>
)
}
