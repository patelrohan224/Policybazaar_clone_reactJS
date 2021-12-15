import { Route, Switch } from 'react-router-dom';
import Numbike from './components/Number BikePage/Numbike';
import Twheelmake from "./components/vehicle details/Twheelmake"
function App() {
  return (
    <Switch>
    <Route path="/home" exact>
    <Numbike />
    </Route>
   <Route path="/">
   <Twheelmake />
   </Route>
  </Switch>
  );
}

export default App;
