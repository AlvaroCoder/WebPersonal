import React,{useEffect, useState} from 'react';
import FotoBack1 from "../Imagenes/ImgMe2.0.png"
import LogoGithub from "../icons/LogoGithub4.png"
import LogoInstagram from "../icons/LogoInstagram3.png"
import LogoTwitter from "../icons/LogoTwitter2.png"
import LogoLinkedin from "../icons/LogoLinkedin3.png"
import BanderaPeru from "../icons/banderaPeru.png"
import LocationIcon from "../icons/LocationIcon 2.png"
import { Loading } from '../Elements/Loading';

export default function About() {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  useEffect(() => {
    setImage(FotoBack1)
    const timeout = setTimeout(()=>{
      setLoading(false)
      
    },2000)    

    return ()=>clearTimeout(timeout)
  }, []);
  if (loading) {
    return <Loading/>
  }else{
    return (
      <div id='ctn-about'>
        <div id='glass-profile' className='ctn-glass'>
            <section id='profile-img'>
              <div className='ctn-img-profile'>
                <img className='img-profile' src={image} alt='Me1'></img>
                <div id='gradient-img'></div>
                <div id='ligth'></div>

              </div>
            </section>
            <section id='profile-info'>
              <div id='info'>
                <h1 id='name-profile'>Alvaro Felipe </h1>
                <h3 id='bio-profile'> Freelancer</h3>
                <div className='ctn-icon' id='location'><img className='icon-location' src={LocationIcon} alt='LocationIcon'></img> <p>Piura, Peru </p> <img className='icon-peru' alt='Bandera de peru' src={BanderaPeru}></img></div>
                <section id='ctn-icons'>
                  <div className='ctn-icon'><img  className='icon' src={LogoGithub} alt='Logo de Github'></img><a href='https://github.com/AlvaroCoder'>Alvaro Coder</a></div>
                  <div className='ctn-icon'><img className='icon' src={LogoTwitter} alt='Icon Twitter'></img><a href='https://twitter.com/AlvaroCoder'><p>@AlvaroCoder</p></a></div>
                  <div className='ctn-icon'><img className='icon' src={LogoLinkedin} alt='Icon Linkedin'></img> <a href='https://www.linkedin.com/in/alvaro-felipe-pupuche-morales-8052ba210/'>Alvaro Felipe</a></div>
                  <div className='ctn-icon'><img className='icon' src={LogoInstagram} alt='LogoInsta'></img> <a href='https://www.instagram.com/alvaropupuche/'>alvaropupuche</a></div>
                  
                </section>
                <div id='ctn-cv'>
                  <button id='btn-CV'>Dowload CV</button>
                </div>
              </div>
            </section>
        </div>
      </div>
    );
  }
}


