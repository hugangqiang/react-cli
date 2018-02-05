import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
};

@connect(({mapStateToProps,mapDispatchToProps}) => ({
    state: mapStateToProps,
    dispatch: mapDispatchToProps
}))
export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {  }
    }
    render() { 
        return (
            <div>
                首页
            </div>
        )
    }
}
