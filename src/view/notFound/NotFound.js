import React, { Component } from 'react';
import Frame from 'layout/frame/Frame';

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Frame>404</Frame>
            </div>
        )
    }
}
 
export default NotFound;