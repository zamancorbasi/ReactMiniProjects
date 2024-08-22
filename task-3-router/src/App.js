import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import SecondPage from './SecondPage';

function App() {
  return (
    <>
    <Router>
      <p>task 3 router</p>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/second">
        <SecondPage/>
        </Route>
      </Switch>
    </Router>
    
    
    </>
  );
}

export default App;
