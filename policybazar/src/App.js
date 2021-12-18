import { Route, Switch } from 'react-router-dom';
import Login from './components/Login page/Logni';
import Numbike from './components/Number BikePage/Numbike';
import PolicySteps from './components/Policy detail page/PolicySteps';
import Twheelmake from "./components/vehicle details/Twheelmake"
import Bikenotodetails from './Routes/Bike no to Bike details/BikeNotoDetails';
import { Home } from './components/Home Page/Home';
function App() {
  return (
    <>
  <Switch>
  <Route path="/" exact>
  <Home />
  </Route>
  <Route path="/bikeno" exact>
  <Numbike />
  </Route>
  <Route path="/bikedetail">
  <Bikenotodetails />
  <Twheelmake />
  </Route>
  <Route path="/policystep">
  <PolicySteps />
  </Route>
  </Switch>
  {/* <Login/> */}
  <PolicySteps />
  </>
  );
}

export default App;
