import Buyer from "./components/Buyer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Advertisement from "./components/Advertisement";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/">
            <Buyer></Buyer>
          </Route>
          <Route path = "/ad">
            <Advertisement></Advertisement>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
