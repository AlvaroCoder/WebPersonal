import React,{useEffect,useState} from 'react';
import { Loading } from '../Elements/Loading';
import {Project} from "../Elements/Project";

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
      {idProject: 2, projectImg:"",nameProject : "Merge Algorithm Visualizer",classification:[{name: "Design"}, {name:"Frontend"}] ,language: [{name : "React"}]},
      {idProject: 3, projectImg:"",nameProject : "Discord Bot", classification : [{name:"Backend"}], language : [{name: "Python"}], description : "Simple bot for Discord", difficulty :"Medium"},
      {idProject: 4, projectImg:"",nameProject : "Book Api", classification:[{name: "Backend"}], language : [{name:"JavaScript", name: "NodeJS"}], description : "Api for books of Latam", difficulty : "High", link: ''},
      {idProject:5, projectImg :"", nameProject:"AlvaBlog", classification : [{name:"Backend"}, {name:"Frontend"}]}
    ]    
  if (loading) {
      return <Loading/>
  }else{
    return <div id='ctn-projects'>
      <div id='ctn-intro-project'>

      </div>
      <div id='ctn-projects'>
        {
          dataProjects.map((value)=>{
            return <Project data={value}/>
          })
        }
      </div>
    </div>;
  }
}

export default Proyectos;
