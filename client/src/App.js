import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage/HomePage';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';

function App() {
  return (
    <div className='app'>
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route path='/dashboard'>
           <DashBoard/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
