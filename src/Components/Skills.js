import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
export default function Skills(props) {
    return (
        <CircularProgressbar
        className="ctn-hobbie-card"
        text={props.name}
        strokeWidth={6}
        value={props.percentage}
        styles={{
            text:{
                fontSize:"0.8em",
                color:"white"
            },
            path:{
                stroke:"#5061a5"
            }
        }}
        >

        </CircularProgressbar>
    )
}
