import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,hashHistory } from 'react-router-dom';

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
        const routes = [
            {
              path: '/dashboard',
              component: () => import('./routes/dashboard/'),
            }
        ]
        return (  
            <Router history={hashHistory}>
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