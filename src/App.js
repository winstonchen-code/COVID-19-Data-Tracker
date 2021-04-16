import React from 'react';
import Tracker from './Tracker';
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Tracker/>
            </Switch>
        </Router>
    )
}

export default App
