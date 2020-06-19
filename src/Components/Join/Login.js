import React, { Component } from 'react';
import eye_close from '../Assets/eye_unlock.png';
import eye_open from '../Assets/eye_lock.png';

let firebaseCommand = require('../Database/Firestore.js');
let passwordHash = require('password-hash');

class Login extends Component {
    constructor(props) {
        super(props);
        this.LoginValidate = this.LoginValidate.bind(this);
    }
    LoginValidate() {
        let docRefs = firebaseCommand.findUser("username", this.props.username);
        if (docRefs.length > 0) {
            var user = docRefs[0];
            if (user.password == passwordHash.generate(this.props.password)){
                this.props.setLoginInfo(user);
            }
        }
    }
    render() {
        return (
            <React.Fragment>
            <div class="join-container">
                <div class="data">
                Username
                <input
                    class="medium"
                    type="text"
                    name="username"
                    value={this.props.username}
                    onChange={this.props.handleChange}
                    placeholder="username"
                    maxlength="100"
                />
            </div>
            <div class="data">
                Password
                <div class = "password" id="password">
                    <input
                        class="medium"
                        type={this.props.hidden ? "password" : "text"}
                        name="password"
                        value={this.props.password}
                        onChange={this.props.handleChange}
                        placeholder="password"
                        maxlength="100"
                        id="input"
                    />
                    { !this.props.hidden && <img id = "img" class ="eye" src =  { eye_open } onClick={this.props.toggleShow} alt ="error"/> }
                    { this.props.hidden && <img id = "img" class ="eye" src =  { eye_close } onClick={this.props.toggleShow} alt ="error"/> }
                    
                </div>
            </div>
            <button className="Submit" onClick={this.LoginValidate}>Submit App</button>
            <button className="Submit" onClick={this.props.alternate}>Already have an Account</button>
            </div>
            </React.Fragment>
        );
    }
}

export default Login;