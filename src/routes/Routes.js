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
                path: '/',
                title: '首页',
                component: Home
            },
            {
                path: '/login',
                title: '登录',
                component: Login
            },
            {
                path: '/register',
                title: '注册',
                component: Register
            }
        ]

        return (  
            <Router history={hashHistory}>
                <Switch>
                    {
                        routes.map(({ path,component,title }, key) => (
                            <Route key={key}
                                exact
                                path={path}
                                component={component}
                            />
                        ))
                    }
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}



export default Routes;