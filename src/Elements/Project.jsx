import React from 'react'

export const Project=({data})=>{
    return <div key={data.idProject} className="project">
        <h1>{data.nameProject}</h1>
    </div>
}