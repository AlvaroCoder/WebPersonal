import Home from "./Components/Home";
import  {BrowserRouter,Switch,Route} from "react-router-dom";
import { Nav } from "./Elements";
import About from "./Components/About";
import Proyectos from "./Components/Proyectos";
import Contact from "./Components/Contact";
import LostPage from "./Components/404";
function App() {
  return(
    <BrowserRouter>
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
          <Route path="/Contact">
            <Contact></Contact>
          </Route>
          <Route>
            <LostPage></LostPage>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App;
