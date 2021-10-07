import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default function PlantillaApps({Child}) {
    return (
        <>
            <Nav></Nav>
            <Child></Child>
            <Footer></Footer>
        </>
    )
}
