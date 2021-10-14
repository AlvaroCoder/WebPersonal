import Home from "./Components/Home";
import  {BrowserRouter,Switch,Route, Redirect} from "react-router-dom";
import Articulos from "./Components/Articulos";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import CalcQui from "./Components/CalcQui";
import Tricki from "./Components/Tricki";
import PlantillaApps from "./Components/PlantillaApps";
import Pomodoro from "./Components/PomodoroNav";
import ArticulosRoute from "./ArticulosRoute";
function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/Home">
          <Redirect to="/"></Redirect>
        </Route>
        <Route exact path = "/" >
          <Home/>
        </Route>
        <Route path="/Blog">
          <Articulos Nav={Nav} Footer={Footer}/>
        </Route>
        
        <Route path="/Projects/CalculadoraQuimica">
          <PlantillaApps Child={CalcQui}></PlantillaApps>
        </Route>
        <Route path="/Projects/Pomodoro">
        <PlantillaApps Child={Pomodoro}></PlantillaApps>
        </Route>
        <Route path="/Projects/TresEnLínea">
        <PlantillaApps Child={Tricki}></PlantillaApps>
        </Route>
        <ArticulosRoute></ArticulosRoute>
      </Switch>
    </BrowserRouter>
  )
}
export default App;
