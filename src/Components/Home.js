import React , {useState,useEffect}from 'react'
import Nav from "./Nav";
import Footer from "./Footer";
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
import Blog from "../BaseDatos/BDArticulos.json"
import Image1 from "../Imagenes/Edicion de Foto 1.4.png"
import Skills from './Skills';
export default function Body() {
    const [articulos, setArticulos] = useState([])
    useEffect(() => {
        Blog.forEach((val)=>setArticulos(art => [...art,{key : val.key, id : val.id, title : val.titulo, description: val.descripcion , tag : val.tema, time : val.fecha}]))
    },[])
    const myProyects = [
        {key:1,id:"Project1",nombre:"Calculadora Quimica",ruta:"/Projects/CalculadoraQuimica"},
        {key:2,id:"Project2",nombre:"Tres en línea",ruta:"/Projects/TresEnLínea"},
        {key:3,id:"Project3",nombre:"Convertidor",ruta:"/Projects/CalculadoraQuimica"},
        {key:4,id:"Project4",nombre:"Pomodoro",ruta:"/Projects/Pomodoro/Home"},
        {key:5,id:"Project5",nombre:"Testing",ruta:"/Projects/Testing"},
        {key:6,id:"Project6",nombre:"Calculadora Quimica",ruta:"/Projects/CalculadoraQuimica"}
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
            <div className="bg-about">
                <div id="ctn-img-about">
                    <img src="/" alt="Img-Rostro-1"></img>
                </div>
                <div id="ctn-txt-about">
                    <h3 className="sbttl-1">Un poco de mi</h3>
                    <p className="desc-1">Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. In hac habitasse platea dictumst vestibulum. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor</p>
                </div>
            </div>
            <div className="bg-proyects">
                <div className="ctn-text-proyect">
                    <h3>MIS PROYECTOS</h3>
                </div>
                <div id="ctn-proyect">
                    {
                        myProyects.map((val)=>{
                            return(
                                <div key={val.key} className="ctn-proyect-card">
                                    <Link to={val.ruta}>{val.nombre}</Link>
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
                    <div className="btn-more"></div>
                </div>
                <div className="ctn-blog">
                    {
                        articulos.map((val)=>{
                            return(
                                <BlogCard key={val.key} props={val}></BlogCard>
                            )
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
