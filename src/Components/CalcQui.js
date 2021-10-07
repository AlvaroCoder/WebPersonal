import React, { useState } from 'react'
import pesoMolecular from '../Funciones/PesoMolecular';
export default function CalcQui() {
    const [compuesto, setCompuesto] = useState("");
    const [resultado, setResultado] = useState("");
    const [moles, setMoles] = useState(1)
    const onChangeCompuesto = (val)=>{
        setCompuesto(val.target.value)
    }
    const onChangeMoles = (val)=>{
        setMoles(val.target.value)
    }
    const calcular = (e)=>{
        e.preventDefault();
        const res = pesoMolecular(compuesto,moles)
        setResultado(res)
    }
    return (
        <div>
            <h1>Calculadora Química</h1>
            <h3>Peso Molecular</h3>
            <input placeholder="Numero de Moléculas ..." value={moles} onChange = {onChangeMoles}></input>
            <input placeholder="Nombre del compuesto ..." value={compuesto} onChange={onChangeCompuesto}></input>
            <button onClick={calcular}>Calcular</button>
            <p>El resultado es {resultado ? resultado : "Error"}</p>
        </div>
    )
}
