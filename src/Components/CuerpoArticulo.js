import React from 'react'
import { ContainerPost }from '../Elements/ContainerPost'

function SearchComponent(params) {
    return(
        <div id='ctn-search'>
            
        </div>
    )
}

const CuerpoArticulo = () => {
    return (
        <div id='ctn-articulo'>
            <SearchComponent></SearchComponent>
            <ContainerPost></ContainerPost>
        </div>
        )
}
export default CuerpoArticulo;
