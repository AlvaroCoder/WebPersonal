import Home from "./Components/Home";
import  {BrowserRouter,Switch,Route, Redirect} from "react-router-dom";
import Articulos from "./Components/Articulos";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import CalcQui from "./Components/CalcQui";
import Tricki from "./Components/Tricki";
import PlantillaApps from "./Components/PlantillaApps";
import Pomodoro from "./Components/PomodoroNav";
import Testing from "./Components/Testing";
function App() {
  const AppRoutes = [
    {key : 1, component :<PlantillaApps Child={CalcQui}></PlantillaApps> ,route : "/Projects/CalculadoraQuímica"},
    {key: 2, component :<PlantillaApps Child={Pomodoro}></PlantillaApps>, route : "/Projects/Pomodoro"},
    {key:3, component : <PlantillaApps Child={Tricki}></PlantillaApps>, route:"/Projects/TresEnLínea"},
    {key:4,component:<PlantillaApps Child={Testing}></PlantillaApps>, route:"/Projects/Testing"}
  ]
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
        {
          AppRoutes.map((val)=>{
            return(
              <Route key={val.key} path={val.route} render={()=>val.component}></Route>
            )
          })
        }
      </Switch>
    </BrowserRouter>
  )
}
export default App;
