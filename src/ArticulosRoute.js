import React from 'react'
import {Switch,Route} from "react-router-dom"
import BaseDatos from "./BaseDatos/BDArticulos.json";
import PlantillaArticulo from './Components/PlantillaArticulo';
export default function ArticulosRoute() {
    return (
            <Switch>
                {
                    BaseDatos.map((val)=>{
                        return(
                            <Route path={val.ruta} render={()=><PlantillaArticulo props={val}></PlantillaArticulo>}></Route>
                        )
                    })
                }
            </Switch>
        )
}
