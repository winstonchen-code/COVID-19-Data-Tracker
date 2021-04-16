import React from 'react';
import Tracker from './Tracker';
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp'
import LogIn from './components/LogIn/LogIn'

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path='/Sign-Up' exact component={SignUp} />
                <Route path='/Log-In' exact component={LogIn} />
                <Route path='/' exact component={Tracker} />
            </Switch>
        </Router>
    )
}

export default App
