import React,{useState}  from 'react'
import {Link} from "react-router-dom";
import Logo from "../icons/LogoAlvaWeb2.png";
export  const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    const style ={
        color :"white",
        textDecoration : "none"
    }
    const routes = [
        {classItem : "link-item", linkItem : "/Home", name : 'Home'},
        {classItem :  "link-item", linkItem : "/About",name : 'About'},
        {classItem :  "link-item", linkItem : "/Projects",  name : 'Works'},
        {classItem : "link-item", linkItem: "/Contact", name: 'Contact'}
    ]
    const clickBurguer = (evt)=>{
        evt.preventDefault();
        if (isActive) {
            setIsActive(false)
        }else{
            setIsActive(true)
        }
    }
    return (
        <nav className='navbar-item'>
            <div id='nav-default'>
                <div className='ctn-nav-logo'>
                    <img src={Logo} alt='alvaWeb' className='IconLogo2'></img>
                </div>
                <div className='ctn-nav-items'>
                    {
                        routes.map((item)=>{
                            return <div key={item.linkItem} className={item.classItem}><Link style={style} className="link-style" to={item.linkItem}>{item.name}</Link></div>
                        })
                    }
                </div>

            </div>
            <div id='nav-side-animate'>
                <div id='ctn-logo-items'>
                    <div >
                        <img src={Logo} alt='Logo' className='IconLogo2'></img>
                    </div>
                    <div onClick={clickBurguer} id='ctn-burguer'>
                        <div className='line-burguer'></div>
                        <div className='line-burguer'></div>
                        <div className='line-burguer'></div>                        
                    </div>
                </div>
                <div className={isActive ? 'ctn-nav-items-active' :'ctn-nav-items' }>
                    {
                        routes.map((item)=>{
                            return <div key={item.linkItem} className={item.classItem}><Link style={style} className="link-style" to={item.linkItem}>{item.name}</Link></div>
                        })
                    }        
                </div>                
            </div>
        </nav>
)
}
