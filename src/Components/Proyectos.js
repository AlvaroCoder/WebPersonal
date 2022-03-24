import React,{useEffect,useState} from 'react';
import { Loading,Project } from '../Elements';

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
    const dataProjects = [
      {idProject : 1,projectImg : "",nameProject : "Daily Planner", classification : [{name : "Desktop App"}], language : [{name : "JAVA"}, {name : 'MYSQL'}], description : "Create task and finish it", difficulty : 'Medium', link : 'https://github.com/AlvaroCoder/AppTareario', pageLink : null},
    ]    
  if (loading) {
      return <Loading/>
  }else{
    return <div id='ctn-projects'>
      <h1>My projects</h1>
      <div id='ctn-all-projects'>
          {
            dataProjects.map((value)=>{
              return <div key={value.idProject} className='card-project'>
                        <div className='card-front'>
                          <h1>{value.nameProject}</h1>
                        </div>
                        <div>
                          
                        </div>
                    </div>
            })
          }
      </div>

    </div>;
  }
}

export default Proyectos;
