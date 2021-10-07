import React from 'react'

export default function Tarjeta1({OBJ}) {
    const {titulo, img, alt, descripción, fecha} =OBJ
    return (
        <div>
            <h1>{titulo}</h1>
            <img src={img} ></img>
        </div>
    )
}
