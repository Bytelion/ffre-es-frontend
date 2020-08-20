import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";
import About from './Pages/About';
import Login from './Pages/Login';
import Home from './Pages/Home';
import CompanyPage from './Pages/CompanyPage';
import './App.css';

function App() {
    return (
        <Auth0Provider
            domain="ffre.us.auth0.com"
            clientId="S6WOsuEZl9wB8SNmg9KQQIOXYGP86NzG"
            redirectUri={window.location.origin}
        >
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about-us" component={About} />
                    <Route path="/:companyId" render={(props) => {
                        return ( <CompanyPage {...props} /> )
                    }} />
                </Switch>
            </Router>
        </Auth0Provider>
    );
}

export default App;
