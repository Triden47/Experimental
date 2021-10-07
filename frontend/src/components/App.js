import React from "react";
// import '../css/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContestPage from "./ContestPage";
import LandingPage from "./LandingPage";
import TeamPage from "./TeamPage";
// import Navbar from "./Navbar.jsx";

function App() {
    return (
        <Router>
            {/* <Navbar/> */}
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/contests">
                    <ContestPage />
                </Route>
                <Route path="/team">
                    <TeamPage />
                </Route>
                <Route path="/about"></Route>
            </Switch>
        </Router>
    );
}

export default App;
