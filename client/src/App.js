import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage/HomePage';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import LogIn from './components/LogIn/LogIn';
import { createContext, useState, useEffect } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { getCurrentUser } from './components/LogIn/LoginManager';


export const UserContext = createContext();

function App() {

  const [signedInUser, setSignedInUser] = useState(null);
  useEffect(() => {
    getCurrentUser().then(res => {
      setSignedInUser(res)
    })
  }, [])
  return (
    <div className='app'>
    <UserContext.Provider value={{signedInUser, setSignedInUser}}  >
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <PrivateRoute path='/dashboard'>
           <DashBoard/>
        </PrivateRoute>
        <Route path='/log-in'>
          <LogIn/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
