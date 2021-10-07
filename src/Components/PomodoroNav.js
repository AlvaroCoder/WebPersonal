import React,{useState} from 'react';
import {BrowserRouter as Router , Route,Link, Switch} from "react-router-dom";
import PomodoroPage from './PomodoroPage';
function DashBoardPage() {
    return(
        <div>
            <h1>Hola desde DashBoard</h1>
        </div>
    )
}


export default function PomodoroNavLink() {
    const itemSidebar = "item-sidebar"
    const itemSidebarActive = "item-sidebar-active"
    const [sidebarItems, setSidebarItems] = useState({items: [{key:0 , class : "item-sidebar-active", nombre:"Home",route :"/Home" ,icon:null}, {key : 1,class:"item-sidebar" , route : "/DashBoard",nombre:"Dashboard",icon:null}]})
    const changeClassItemSidebar = (index)=>{
        let updateItems = sidebarItems.items.map((item)=>{
            if (index === item.key) {
                return {...item, class : itemSidebarActive}
            }else{
                return {...item,class : itemSidebar}
            }
            
        })
        setSidebarItems({items : updateItems})
    }
        return (
            <Router basename="/Projects/Pomodoro">
                <div className="container-Pomodoro">
                    <div id="sidebar">
                        <ul className="content-item-sidebar">
                            {
                                sidebarItems.items.map((val,index)=>{
                                    return (
                                        <li className={val.class} key={val.key} onClick={()=>changeClassItemSidebar(index)} ><Link className={val.class} to={val.route}>{val.nombre}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                

                    <div >
                        <Switch>
                            <Route exact path="/Home">
                                <PomodoroPage></PomodoroPage>
                            </Route>
                            <Route path="/Dashboard">
                                <DashBoardPage></DashBoardPage>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
            )
}
