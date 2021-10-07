import React,{useEffect, useState} from 'react';
import { Game } from '../Funciones/LogicTricki';
import "../Assets/Game1.css"

const game = new Game()
const buttons = game.generateTablero()


export default function Tricki() {
    const [memory, setMemory] = useState()
    const [click, setClick] = useState(false)
    const [position, setPosition] = useState()
    const [Loading, setLoading] = useState(false)
    const onClick = (index)=>{
        game.setPosition(index)
        setClick(!click)
        setPosition(index)
        setLoading(true)
    }   
    useEffect(() => {
        setLoading(false)
        game.machinePosition()
        console.log(game.getRandomPosition());
        setMemory(game.getMemory())
        console.log(position);
    }, [position])
    if (!Loading) {
        return (
            <div>
                <h1>Tres en Línea</h1>
                <div className="Container_Block_Tricki">
                    <div className="wrapper_block">
                        {
                            buttons.map((element,index)=>{
                                return (<input key={index} type="button" disabled={element.isActive} name={element.id} value={element.value} onClick={()=>onClick(index)} className="block_item"></input>)
                            })
                        }
                    </div>
                    <div>
                        <p>{memory}</p>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <p>Loading</p>
            </div>
        )
    }
}
