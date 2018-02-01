import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import './Frame.less';

class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        
    }
    getPageTitle() {
        
        const { routerData, location } = this.props;
        const { pathname } = location;
        let title = 'Ant Design Pro';
        if (routerData[pathname] && routerData[pathname].name) {
          title = `${routerData[pathname].name} - Ant Design Pro`;
        }
        return title;
    }
    render() { 
        console.log(this.props)
        return (
            <DocumentTitle title="登录">
                
            </DocumentTitle>
        )
    }
}

    
export default Frame;