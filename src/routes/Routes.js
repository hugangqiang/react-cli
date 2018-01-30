import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "view/home/Home";
import Register from "view/register/Register";
import Login from "view/login/Login";
import NotFound from "view/notFound/NotFound";

import '../themes/default.less';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}
 


export default Routes;