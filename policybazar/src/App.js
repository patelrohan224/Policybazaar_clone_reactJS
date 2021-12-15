import { Route, Switch } from 'react-router-dom';
import Numbike from './components/Number BikePage/Numbike';
import Twheelmake from "./components/vehicle details/Twheelmake"
import Bikenotodetails from './Routes/Bike no to Bike details/BikeNotoDetails';
function App() {
  return (
    <>
    <Bikenotodetails />
    <Switch>
    <Route path="/bikeno" exact>
    <Numbike />
    </Route>
   <Route path="/bikedetail">
   <Twheelmake />
   </Route>
  </Switch>
  </>
  );
}

export default App;
