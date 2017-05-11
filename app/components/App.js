import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, BrowserHistory, Switch} from 'react-router-dom';

//Import components
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';
import Popular from './Popular';

class App extends Component {
    render() {
        return (
            <Router>
               <div className="container">
                <Nav />
                <Switch>
                    <Route exact path='/' history={BrowserHistory} component={Home} />
                    <Route exact path='/battle' component={Battle} />
                    <Route path='/battle/results' component={Results} />
                    <Route path='/popular' component={Popular} />
                    <Route render={function() { return <div className="not-found"> 404 Not Found</div>}} />
                </Switch>
                </div>
            </Router>
        )
    }
}

export default App;