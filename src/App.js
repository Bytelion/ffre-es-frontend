import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from './Pages/About';
import Home from './Pages/Home';
import CompanyPage from './Pages/CompanyPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/about-us" component={About} />
                <Route exact path="/" component={Home} />
                <Route path="/:companyId" render={(props) => {
                    return ( <CompanyPage {...props} /> )
                }} />
            </Switch>
        </Router>
    );
}

export default App;
