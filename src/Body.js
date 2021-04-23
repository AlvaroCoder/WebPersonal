import React from 'react'
import { Link } from 'react-router-dom';
import Nav from "./Nav";
import Footer from "./Footer"
function ContentRoute(props) {
    return(
        <div id="ctn-route-Redes">
            {props.name}
        </div>
    )
}
export default function Body() {
    const Redes =["F","I","T"]
    return (
        <div>
            <Nav></Nav>
            <div id="ctn-Name">
                <h1>Alvaro Felipe Pupuche Morales</h1>
            </div>
            <div id="About-me">
                <div id="About-img">
                    <img src="/" alt="fotomia"></img>
                </div>
                <div id="About-description">
                    <h2>Acerca de mi</h2>
                    <p>Soy un estudiante de la UDEP <br/> estudio Ingienería Industrial y de Sistemas 
                        <br/> me gusta aprender nuevas cosas <br/> amante de las nuevas tecnologias<br/>
                        me gusta el rock clásico 

                    </p>
                    <div>
                        follow me
                    </div>
                </div>
            </div>
            <div id="ctn-Redes">
                {Redes.map((val)=>
                    <ContentRoute name={val}/>
                )}
            </div>
            <div className="ctn-all-Hobbies">
                <div id="ctn-title-Hobbie">
                    <h3 >
                     Hobbies
                    </h3>
                </div>
                <section id="ctn-Hobbies">
                    <div id="ctn-Li-Hobbie">
                        <div className="ctn-foto-Hobbie">
                            <img src="#" alt="Imagendeunpeon"></img>
                        </div>
                        <div>
                            <p>Ajedrez</p>
                        </div>
                    </div>
                    <div id="ctn-Li-Hobbie">
                        <div  className="ctn-foto-Hobbie">
                            <img src="#" alt="Imagendealguienconcasco"></img>
                        </div>
                        <div>
                            <p>Programacion</p>
                        </div>
                    </div>
                    <div id="ctn-Li-Hobbie">
                        <div className="ctn-foto-Hobbie">
                            <img src="#" alt="Imagendeunapesa"></img>
                        </div>
                        <div>
                            <p>Gimnasio</p>
                        </div>
                    </div>
                </section>
            </div>
            <div id="ctn-all-Habilities">
                <div id="ctn-title-Habilities">
                    <h2>
                        Habilidades
                    </h2>
                </div>
                <div id="ctn-items-Habilities">
                    <div>
                        <div>
                            <h3>Programacion</h3>
                            <ul>
                                <li>React </li>
                                <li>JAVA </li>
                                <li>Node </li>
                                <li>html </li>
                                <li>Python </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Artes visuales</h3>
                            <ul>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Premier</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Idiomas</h3>
                            <ul>
                                <li>Ingles</li>
                                <li>Frances</li>
                                <li>Español</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="ctn-Contact">
                <div>
                    <h2 >
                        ¿Te gustaria que diseñe una pagina web por ti?
                    </h2>
                </div>
                <div id="btn-Contact">
                    <Link to="/Contact" style={{textDecoration:"none"}}>
                        Contactame
                    </Link>
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    )
}
