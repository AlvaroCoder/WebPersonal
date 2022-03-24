import React from 'react'

const Project=({data})=>{
    return <div key={data.idProject} className="project">
        <h1>{data.nameProject}</h1>
    </div>
}
export default Project;