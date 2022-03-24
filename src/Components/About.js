import React,{useEffect, useState} from 'react';
import BanderaPeru from "../icons/banderaPeru.png"
import { Link } from 'react-router-dom';
import JAVALOGO from '../icons/JavaLogo.png';
import REACTLOGO from '../icons/ReactLogo.png';
import PYTHONLOGO from '../icons/PythonLogo.png';
import {BarSkill, Loading, Footer} from '../Elements'
export default function About() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(()=>{
      setLoading(false)      
    },2000)    

    return ()=>clearTimeout(timeout)
  }, []);
  const Skills = [
    {nombre:'JAVA', img : JAVALOGO, prctje : 80},
    {nombre: 'React', img : REACTLOGO, prctje : 70},
    {nombre:'Python', img:PYTHONLOGO, prctje: 60}
  ]
  if (loading) {
    return <Loading/>
  }else{
    return (
      <div id='ctn-about'>
        <section className='ctn-intro-about'>
          <div className='ctn-hacker'>
            <div id='hacker'></div>
          </div>
          <div className='ctn-panel-hacker'>
            <div id='panel-hacker'> 
              <div id='panel-sup'>
                <div id='btn-yellow'></div>
                <div id='btn-green'></div>
              </div>
              <div id='panel-inf'>
                <span id='text-animate'>Welcome to my Resume</span>
              </div>
            </div>
          </div>
        </section>
        <section id='ctn-cv'>
          <div id='content-cv'>
            <p>
              Hello, I'm from Peru <img style={{width:"30px",height:"20px"}} src={BanderaPeru} alt='BanderaPeru'></img> ,<br></br>
              I'm a freelancer with over 3  <br></br>
              years experience' in UI web <br></br>
              design, desktop applications and <br></br>
              Fullstack JS developer.<br></br>
            </p>
            <p>Read More in my CV</p>
              <div id='btn-download'>
                <p>
                  Download CV
                </p>
              </div>
          </div>
          <div id='img-cv'></div>
        </section>
        <section className='ctn-banner-hire'>
          <p className='hire-text'>
            I'm available for freelancer projects
          </p>
          <div className='btn-hire'>
            <p><Link to='/Contact'><span className='text-hire'>Contact Me</span></Link></p>
          </div>
        </section>
        <section className='ctn-skills'>
          <h1 id='title-skills' >My Skills</h1>
          {
            Skills.map((elem)=>{
              return <BarSkill values={elem}/>
            })
          }
        </section>
        <Footer/>
      </div>
    );
  }
}


