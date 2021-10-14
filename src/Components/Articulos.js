import React , {useState, useEffect} from 'react'
import BlogCard from './BlogCard'
import Blog from "../BaseDatos/BDArticulos.json"
export default function Articulos({Nav,Footer}) {
    const [articulo, setArticulo] = useState([])
    const [busqueda, setBusqueda] = useState("")
    useEffect(() => {
        Blog.forEach((val)=>{
            setArticulo(art=>[...art,{key : val.key, title: val.titulo, description : val.descripcion, tag : val.tema, time : val.fecha, img_Fondo:val.img_Fondo}])
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
                            return <BlogCard key={val.key} props={val}></BlogCard>
                        })
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
