import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>123</div>
        )
    }
}



const mapStateToProps = state => ({
    routesData: ["aa","asdfas"]
})
  

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeActive:(args) => dispatch({
            type:"changeTable",
            data: args
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)