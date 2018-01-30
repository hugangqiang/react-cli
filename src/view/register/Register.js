import React, { Component } from 'react';
import RegisterBox from 'layout/sign/RegisterBox';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <RegisterBox />
            </div>
        )
    }
}
 
export default Register;