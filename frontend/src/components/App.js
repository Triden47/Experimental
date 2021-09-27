import React from 'react'
// import '../css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route path="/contest">

        </Route>
        <Route path="/team">
          
        </Route>
        <Route path="/about">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
