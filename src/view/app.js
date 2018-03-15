import React,{Component} from "react";
import Routes from "../routes/routes";

export default class App extends Component {
    render(){
        return (
           <div className="wrap">
              <Routes />
           </div>
        );
    }
}