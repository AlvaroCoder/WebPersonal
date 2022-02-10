import React from 'react'
import { Link } from 'react-router-dom'
import Imagenes from "../Imagenes/FondoListasEnlazadas.png"
export const Post = ({props}) => {
    const {author,idarticulo,titulo,categoria} = props
    return (
        <div key={idarticulo} className="ctn-blog-card">
            <div className="img-blog-card">
                <img className="img-blog" alt="img-Fondo" src={Imagenes}></img>
            </div>
            <div className="txt-blog-card">                
                <h3 className="sbttl-card">
                    <Link style={{color:"#000000",fontSize:"1.6em",fontWeight:"600"}} to='/'>{titulo}</Link>
                </h3>
                <div className='author-blog-card'>
                    <img className='img-author' src='' alt='img-author'></img>
                    <p><strong>{author}</strong></p>
                </div>
                <div className="foot-card">
                    <p className="tag-foot-card">#{categoria}</p>
                    <div className=''>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
