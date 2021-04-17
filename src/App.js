import React from 'react';
import Tracker from './Tracker';
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp'
import LogIn from './components/LogIn/LogIn'
import About from './components/About/About'
import Hero from './components/Hero/Hero'

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path='/sign-Up' exact component={SignUp} />
                <Route path='/log-In' exact component={LogIn} />
                <Route path='/' exact component={Hero} />
                <Route path='/tracker' exact component={Tracker} />
                <Route path='/about' exact component={About} />
            </Switch>
        </Router>
    )
}

export default App
