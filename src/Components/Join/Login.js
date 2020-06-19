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
    async LoginValidate() {
        let docRefs = await firebaseCommand.findUser("username", this.props.username);
        console.log(docRefs);
        var users = Object.keys(docRefs);
        var onlyUser = users[0];
        if (users.length > 0) {
            var user = docRefs[onlyUser];
            if (passwordHash.verify(this.props.password, user.password)){
                this.props.logIn({
                    fname: user.fname,
                    lname: user.lname,
                    email: user.email,
                    username: user.username,
                    password: this.props.password
                });
            }
        }
        else {
            alert("Error");
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
                    maxLength="100"
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
                        maxLength="100"
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