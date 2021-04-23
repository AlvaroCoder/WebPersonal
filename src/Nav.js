import "./App.css";
import React from 'react'
import {Link} from "react-router-dom";

function LinkNav(props) {
    return(
        <li id="Li-Nav">
            <Link to={props.route}>
                {props.name}
            </Link>
        </li>
    )
}
export default function Nav() {
    const routes = {
        Home:"/",
        Portfolio : "/",
        Contact : "/"
    }
    return (
            <header id="Navbar">
                <ul>
                    <LinkNav route={routes.Home} name="Home"/>
                    <LinkNav route={routes.Contact} name="Contact"/>
                    <LinkNav route={routes.Portfolio} name="Portfolio"/>
                </ul>
            </header>
    )
}
