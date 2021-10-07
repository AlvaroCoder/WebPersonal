import React from 'react'
import _ from "lodash"
function Separator(props) {
    return(
        <div style={{
            position:"absolute",
            height:"100%",
            transform:`rotate(${props.turn}turn)`
        }}>
            <div style={props.style}></div>
        </div>
    )
}
export default function RadiaSeparator(props) {
    const turn = 1/ props.count
    return _.range(props.count).map(index=>(<Separator turn={index*turn} style={props.style}></Separator>))
}
