import React , {useState,useEffect}from 'react'
import Nav from "./Nav";
import Footer from "./Footer";
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
import Blog from "../BaseDatos/BDArticulos.json"
import Image1 from "../Imagenes/Edicion de Foto 1.4.png"
import Skills from './Skills';
import PomodoroImage from "../Imagenes/Icon Pomodoro.png"
import TresenLineaImage from "../Imagenes/Icon 3 en línea.png"
export default function Body() {
    const [articulos, setArticulos] = useState([])
    useEffect(() => {
        Blog.forEach((val)=>setArticulos(art => [...art,{key : val.key, id : val.id, title : val.titulo, description: val.descripcion , tag : val.tema, time : val.fecha, img_Fondo : val.img_Fondo, route : val.ruta}]))
    },[])
    const myProyects = [
        {key:1,id:"Project1",img:"https://images.unsplash.com/photo-1600493033157-eed3fbe95d96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",nombre:"Calculadora Quimica",descripcion:"Calcula el Peso Molecular de un compuesto, balancea una fórmula química y descubre datos curiosos de los compuestos químicos más comúnes.",ruta:"/Projects/CalculadoraQuimica"},
        {key:2,id:"Project2",img:TresenLineaImage,nombre:"Tres en línea",descripcion:"Inspirado en el juego de infancia, desafía a la computadora o a otro amigo. Anímate a pasar un buen rato.",ruta:"/Projects/TresEnLínea"},
        {key:3,id:"Project3",img:PomodoroImage,nombre:"Pomodoro App",descripcion:"La técnica de Pomodoro, ayuda a estudiar o trabajar de una manera más eficiente. Organízate y mide tu tiempo de productividad.",ruta:"/Projects/Pomodoro/Home"},
    ]
    const myHobbies=[
        {key:1,name: "Programación",percentage :80},
        {key:2,name: "Inglés",percentage:60},
        {key:3,name: "UI/UX",percentage:40},
    ]
    return (
        <div id="container">
            <Nav></Nav>
            <div className="bg-header">
                <div >
                    <h1 className="">Hola</h1>
                    <h2 className="name-bold-2">Soy <span className="name-bold">Alvaro</span></h2>
                    <p className="name-2" >Desarrollador Freelancer y estudiante <br></br> de ingienería</p>
                </div>
                <div className="img-bg-header">
                    <img className="img-header" alt="Fondo_Rostro_1" src={Image1}></img>
                </div>                
                <div className="bg-circle-1">
                </div>
            </div>
            
            <div className="bg-proyects">
                <div className="ctn-text-proyect">
                    <h1 className="sbttl-2">Portfolio</h1>
                </div>
                <div id="ctn-proyect">
                    {
                        myProyects.map((val)=>{
                            return(
                                <div key={val.key} className="ctn-proyect-card">
                                    <div className="ctn-img-proyect">
                                        <img className="img-proyect" alt="img-dealgo" src={val.img}></img>
                                    </div>
                                    <div className="ctn-txt-proyect">
                                        <h1 className="title-card-proyect">{val.nombre}</h1>
                                        <p className="sbttl-3">{val.descripcion}</p>
                                        <p className="btn-proyect"><Link style={{color:"white"}} className="link-style" to={val.ruta}>Ver detalles</Link></p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="bg-hobbies">
            <div className="ctn-txt-hobbies">
                <h3 className="sbttl-1">Mis habilidades</h3>
                <p className="desc-2">Neque sodales ut etiam sit amet nisl purus in mollis. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Nec feugiat in fermentum posuere urna.</p>
            </div>
            <div id="ctn-hobbie">
                {
                    myHobbies.map((val)=>{
                        return(
                            <Skills key={val.key} name={val.name} percentage={val.percentage} ></Skills>
                        )
                    })
                }
            </div>
            <div id="ctn-puntos">
                <div className="ctn-puntos-punto active"></div>
                <div className="ctn-puntos-punto"></div>
                <div className="ctn-puntos-punto"></div>
            </div>
        </div>
            <div className="bg-blog">
                <div className="ctn-title-blog">
                    <h3 className="sbttl-2">Ultimos Blog</h3>
                    <h3 ><Link to="/Blog">Ver mas</Link></h3>
                </div>
                <div className="ctn-blog">
                    {
                        articulos.map((val)=>{
                            if (val.key<=3) {
                                return(
                                    <BlogCard key={val.key} props={val}></BlogCard>
                                )
                            }
                            return null
                        })
                    }
                </div>
            </div>
            <div className="bg-yt">
                <div className="img-bg-yt"></div>
                <div className="txt-bg-yt">
                    <h3>YOUTUBE</h3>
                </div>
            </div>
            <div className="bg-scmedia">
                    <div>
                        
                    </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
