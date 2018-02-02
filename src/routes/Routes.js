import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,hashHistory } from 'react-router-dom';


import routerData from "./routerData";

import '../themes/default.less';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (  
            <Router history={hashHistory}>
                <Switch>
                    {
                        routerData.map(({ path,component,title }, key) => (
                            <Route key={key}
                                exact
                                path={path}
                                component={component}
                            />
                        ))
                        
                    }
                </Switch>
            </Router>
        )
    }
}


export default Routes;

