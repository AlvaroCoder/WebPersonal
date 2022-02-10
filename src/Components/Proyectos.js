import React,{useEffect,useState} from 'react';
import { Loading } from '../Elements/Loading';


function Proyectos() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(()=>{
          setLoading(false)
      },2000)
      return () => {
        clearTimeout(timer)
      };
    }, []);
    
  if (loading) {
      return <Loading/>
  }else{
    return <div className='ctn-slider-projects'>
        <div id='slider-title'>
          <h1 id='title-projects'>Proyectos</h1>
        </div>
        <div id='slider-project'>
          <div id='project1' className='project'>
            <div className='ctn-img-project'>
              <img className='img-project' src='https://raw.githubusercontent.com/AlvaroCoder/AppTareario/master/src/Imagenes/GifAppTareas.gif' alt='gif app de tareas'></img>
            </div>
            <div className='ctn-content-project'>
              <h1 className='title-project'>App de Tareas</h1>
              <p className='description-project'>Aplicación de escritorio, donde puedes guardar tareas y eliminarlas. Útil para organizarte</p>
              <div className='ctn-btnlinks'>
                <a className='link-vgithub' href='https://github.com/AlvaroCoder/AppTareario'>Ver en Github</a>
              </div>
            </div>    
          </div>
        </div>
    </div>;
  }
}

export default Proyectos;
