import React,{Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";

import Index from "../view/index/index";
import Test from "../view/test/test";

export default class Routes extends Component {
    render(){
        return (
            <Switch>
                <Route path="/" exact render={()=>(<Redirect to="/index" />)}/>
                <Route path="/index" component={Index}/>
                <Route path="/test" component={Test}/>
            </Switch>
        );
    }
}