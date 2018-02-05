import React, { Component } from 'react';
import Sign from 'layout/sign/Sign';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }
    render() { 
        return (
            <div>
                <Sign>
                    <span>登录</span>
                </Sign>
            </div>
        )
    }
}
 
export default Login;