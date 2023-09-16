import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path= "/" component = {Login} />
                <Route path="/login" component = {Login} />
                <Route path="/register" component = {Register} />
                <Route path="/dashboard" component = {Dashboard} />
            </Switch>
        );
    }
}

export default App;