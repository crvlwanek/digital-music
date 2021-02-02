import React from "react";
import SongsPage from "./SongsPage";
import PortfoliosPage from "./PortfoliosPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/register' component={RegisterPage} />
                <Route path='/songs' component={SongsPage} />
                <Route path='/portfolios' component={PortfoliosPage} />
            </Switch>
        </Router>
    )
}

export default App