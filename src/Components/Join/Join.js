import React, { Component } from 'react';
import './Join.scss';
import Login from './Login';
import Signup from './Signup';


class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            username: '',
            password: '',
            fname_error: '',
            lname_error: '',
            email_error: '',
            username_error: '',
            password_error: '',
            hidden: true,
            isSignup: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.alternate = this.alternate.bind(this);
        this.setLoginInfo = this.setLoginInfo.bind(this);
    }

    handleChange = (event) => { //Changes State of an Object
        event.preventDefault()
        //console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

    alternate() {
        this.setState({ isSignup: !this.state.isSignup });
    }

    setLoginInfo(userInfo){
        this.setState(userInfo);
    }

    render() {
        return (
            <React.Fragment>

            {this.state.isSignup &&
            <Signup
            fname = {this.state.fname}
            lname = {this.state.lname}
            email = {this.state.email}
            username = {this.state.username}
            password = {this.state.password}
            fname_error = {this.state.fname_error}
            lname_error = {this.state.lname_error}
            email_error = {this.state.email_error}
            username_error = {this.state.username_error}
            password_error = {this.state.password_error}
            hidden = {this.state.hidden}
            handleChange = {this.handleChange}
            toggleShow = {this.toggleShow}
            alternate = {this.alternate}
            reDirect = {this.props.reDirect}
            />
            }

            { !this.state.isSignup && 
            <Login
            fname = {this.state.fname}
            lname = {this.state.lname}
            email = {this.state.email}
            username = {this.state.username}
            password = {this.state.password}
            hidden = {this.state.hidden}
            handleChange = {this.handleChange}
            toggleShow = {this.toggleShow}
            alternate = {this.alternate}
            setLoginInfo = {this.setLoginInfo}
            />}

            </React.Fragment>
        );
    }
}

export default Join; 