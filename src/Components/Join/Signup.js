import React, { Component } from 'react';
import eye_close from '../Assets/eye_unlock.png';
import eye_open from '../Assets/eye_lock.png';

let firebaseCommand = require('../Database/Firestore.js');
let passwordHash = require('password-hash');

class Signup extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit = async () => {
        const alphaNumeric = '^[a-zA-Z0-9 .\'?!@,-]*$';
        this.setState({fname_error: '', lname_error: '', email_error: ''});
        const data = await firebaseCommand.findUser("email", this.props.email);
        var valid = true;
        
        if (!this.props.fname.match(alphaNumeric) || this.props.fname.length > 50 || !this.props.fname){
            this.setState({fname_error: "Invalid First Name"});
            valid = false;
        }
        if (!this.props.lname.match(alphaNumeric) || this.props.lname.length > 50 || !this.props.lname){
            this.setState({lname_error: "Invalid Last Name"});
            valid = false;
        }
        if (!this.props.email.match(alphaNumeric) || this.props.email.length > 50 || !this.props.email){
            this.setState({email_error: "Invalid Email"});
            valid = false;
        }
        else if (data.length != 0 ){
            this.setState({email_error: "Email Exists"});
            valid = false;
        }
        if (!this.props.username.match(alphaNumeric) || this.props.username.length > 50 || !this.props.username){
            this.setState({username_error: "Invalid Username"});
            valid = false;
        }
        if (!this.props.password.match(alphaNumeric) || this.props.password.length > 50 || !this.props.password){
            this.setState({password_error: "Invalid Password"});
            valid = false;
        }       
        if (valid){
            const userData = {
                fname: this.props.fname,
                lname: this.props.lname,
                email: this.props.email,
                username: this.props.username,
                password: passwordHash.generate(this.props.password),
                memeCount: 0,
                imageURLs: []
            }
            firebaseCommand.addUser(userData);
            this.props.logIn({
                fname: this.props.fname,
                lname: this.props.lname,
                email: this.props.email,
                username: this.props.username,
                password: this.props.password
            });
            this.props.reDirect();
        }
        else {
            alert("Error Submitting Data");
        }
    }
    render() {
        return (
            <React.Fragment>
                <div class="data">
                    First Name
                    <div class= "error">
                        {this.props.fname_error}
                    </div>
                    <input
                        class="medium"
                        type="text"
                        name="fname"
                        value={this.props.fname}
                        onChange={this.props.handleChange}
                        placeholder="First Name"
                        maxLength="100"
                    />
                </div>
                <div class="data">
                    Last Name
                    <div class= "error">
                        {this.props.lname_error}
                    </div>
                 <input
                        class="medium"
                        type="text"
                        name="lname"
                        value={this.props.lname}
                        onChange={this.props.handleChange}
                        placeholder="Last Name"
                        maxLength="100"
                    />
                </div>
                <div class="data">
                    Email
                    <div class= "error">
                        {this.props.email_error}
                    </div>
                    <input
                        class="medium"
                        type="text"
                        name="email"
                        value={this.props.email}
                        onChange={this.props.handleChange}
                        placeholder="Email"
                        maxLength="100"
                    />
                </div>
                <div class="data">
                Username
                <div class= "error">
                    {this.props.username_error}
                </div>
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
                <div class= "error">
                    {this.props.password_error}
                </div>
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
            <button className="Submit" onClick={this.submit}>Submit App</button>
            <button className="Submit" onClick={this.props.alternate}>Already have an Application? Login Here</button>

            </React.Fragment>
        );
    }
}

export default Signup;