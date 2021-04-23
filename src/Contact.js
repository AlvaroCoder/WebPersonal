import React from 'react'
import { Link } from 'react-router-dom';
import Nav from "./Nav";
import "./Contactstyle.css"
import Footer from "./Footer";
export default function Contact() {
    return (
        <div>
            <Nav></Nav>
            <div className="form-Contact">
                <h1>Hola de nuevo</h1>
                <form>
                    <div>
                        <label htmlFor="Nombre">
                            Nombre: <input type="text" name="Nombre" placeholder="Name"></input>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="Telefono">
                            Telefono : <input type="text" name="Telefono" placeholder="Telefono"></input>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="Correo">
                            Correo electronico : <input type="text" name="Correo" placeholder="Email"></input>
                        </label>
                    </div>
                
                    <div>
                        <button type="submit">
                            Enviar
                        </button>
                    </div>

                </form>
                <div>
                    <Link to="/">
                        Regresar
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
