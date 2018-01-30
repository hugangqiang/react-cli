import React, { Component } from 'react';
import LoginBox from 'layout/sign/LoginBox';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <LoginBox />
            </div>
        )
    }
}
 
export default Login;