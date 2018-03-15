import React,{Component} from "react";
import {connect} from "react-redux";



class Test extends Component{
    constructor(props) {
        super(props);

        let { text } = this.props;

        this.state = {
            text: text
        }

        this.upData = this.upData.bind(this);
    }
    upData(){
        this.props.dispatch(dispatch => {
            dispatch({
                type: "Data_test",
                data: {
                    test: '傻逼'
                }
            });
        })
    }
    componentWillReceiveProps(nextProps){
        let { text } = nextProps;
        this.setState({
            text: text
        });
    }
    render(){
        return (
            <div>
                <span onClick={ this.upData }>{this.state.text}</span>
            </div>
        );
    }
}

export default connect(state=>(state.test))(Test)