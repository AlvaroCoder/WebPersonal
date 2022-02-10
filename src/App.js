import Home from "./Components/Home";
import  {BrowserRouter,Switch,Route} from "react-router-dom";
import { Nav } from "./Elements/Nav";
import About from "./Components/About";
import Proyectos from "./Components/Proyectos";
function App() {
  return(
    <BrowserRouter>
      <div id="wave3"></div>
      <div id="container">
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/Projects">
          <Proyectos></Proyectos>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App;
