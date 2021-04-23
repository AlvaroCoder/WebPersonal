import Body from "./Body";
import  {BrowserRouter,Switch,Route} from "react-router-dom";
import Contact  from "./Contact";
function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" render={()=><Body/>}/>
        <Route path = "/Contact" render = {()=><Contact/>}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
