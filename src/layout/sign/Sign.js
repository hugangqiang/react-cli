import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import './Sign.less';

class Sign extends Component {
    constructor(props) {
        super(props);
        console.log(props)
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
        return (
            <DocumentTitle title="登录">
                <div className="u-Sign-bg">
                    
                </div>
            </DocumentTitle>
        )
    }
}

    
export default Sign;