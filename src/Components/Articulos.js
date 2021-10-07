import React , {useState, useEffect} from 'react'
import BlogCard from './BlogCard'
import Blog from "../BaseDatos/BDArticulos.json"
export default function Articulos({Nav,Footer}) {
    const [articulo, setArticulo] = useState([])
    const [busqueda, setBusqueda] = useState("")
    useEffect(() => {
        Blog.forEach((val)=>{
            setArticulo(art=>[...art,{key : val.key, title: val.titulo, description : val.descripcion, tag : val.tema, time : val.fecha}])
        })
    }, [])
    const handleBusqueda = (event)=>{
        event.preventDefault()
        const {value} = event.target
        setBusqueda(value)
    }
    return (
        <div>
            <Nav></Nav>
            <div className="bg-intro">
                <form>
                    <input className="intro-searchBar" value={busqueda} onChange={handleBusqueda} autoComplete="off" required></input>
                    <label></label>
                </form>
            </div>
            <div className="bg-art">
                <div className="ctn-art">
                    {
                        articulo.map((val)=>{
                            if (val.key <= 3) {
                                return <BlogCard props={val}></BlogCard>
                            }else{
                                return null
                            }
                        })
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
