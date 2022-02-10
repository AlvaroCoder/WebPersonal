import React from 'react'
import Footer from './Footer'
import {Nav} from '../Elements/Nav'
import {BlockMath} from "react-katex";
import 'katex/dist/katex.min.css';


export default function PlantillaArticulo({props}) {
    const {titulo,descripcion,author,fecha,img_Fondo,desc_img,cuerpo} = props
    return (
        <div className="container-all-article">
            <Nav></Nav>
            <div className="container-articulos">
            <div className="ctn-arts">
                <div className="bg-intro-article">
                    <h1 className="intro-title">{titulo}</h1>
                    <p className="intro-desc">{descripcion}</p>
                    <div className="intro-data">
                        <img alt="img-avatar" className="avatar-author" src="https://img.icons8.com/ios/50/000000/user-male-circle.png"></img>
                        <p className="intro-author">By <span>{author}</span></p>
                        <p><time className="intro-time">{fecha}</time></p>
                    </div>
                    <div className="ctn-intro-img">
                        <img className="intro-img" alt="img-bg-art" src={img_Fondo}></img>
                        <p className="img-description">{desc_img}</p>
                    </div>
                </div>
                <div className="bg-content">
                    {
                        cuerpo.map((val)=>{
                            if (val.tipo==="parrafo") {
                                return(
                                    <div  className="sec-par-1">
                                        <p>
                                            {val.contenido}
                                        </p>
                                    </div>
 
                                )
                            }if (val.tipo === "sbttle") {
                                return(
                                    <div className="sec-sbttle">
                                        <h2 className="sbttle">{val.contenido}</h2>
                                    </div>
                                )
                            }
                            if (val.tipo === "lista") {
                                return(
                                    <div className="sec-lista">
                                        <ul>
                                            {
                                                val.contenido.map((item)=>{
                                                    return (<li>{item}</li>)
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                            if (val.tipo === "img") {
                                return(
                                    <div className="ctn-intro-img">
                                        <img className="intro-img" alt={val.alt} src={val.src}></img>
                                        <p className="img-description">{val.desc}</p>
                                    </div>
                                )
                            }
                            if (val.tipo === "ecuacion") {
                                return(
                                    <div className="sec-ecuacion">
                                        <BlockMath>{val.contenido}</BlockMath>
                                    </div>
                                )
                            }
                            if (val.tipo === "codigo") {
                                return(
                                    <div className='sec-codigo'>
                                        <h2>{val.clase}</h2>
                                        <code className='languaje-java'>
                                        {
                                            val.codigo.map((linea)=>{
                                                return <span>{linea}</span>
                                            })
                                        }
                                        </code>
                                    </div>
                                )
                            }
                            return null;
                        })
                    }
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
