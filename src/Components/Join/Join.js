import React, { Component } from 'react';
import eye_close from '../Assets/eye_unlock.png';
import eye_open from '../Assets/eye_lock.png';
import './Join.scss';

let firebaseCommand = require('../Database/Firestore.js');
let passwordHash = require('password-hash');

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
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }

    handleChange = (event) => { //Changes State of an Object
        event.preventDefault()
        //console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = async () => {
        const alphaNumeric = '^[a-zA-Z0-9 .\'?!@,-]*$';
        this.setState({fname_error: '', lname_error: '', email_error: ''});
        const data = await firebaseCommand.findUser("email", this.state.email);
        var valid = true;
        
        if (!this.state.fname.match(alphaNumeric) || this.state.fname.length > 50 || !this.state.fname){
            this.setState({fname_error: "Invalid First Name"});
            valid = false;
        }
        if (!this.state.lname.match(alphaNumeric) || this.state.lname.length > 50 || !this.state.lname){
            this.setState({lname_error: "Invalid Last Name"});
            valid = false;
        }
        if (!this.state.email.match(alphaNumeric) || this.state.email.length > 50 || !this.state.email){
            this.setState({email_error: "Invalid Email"});
            valid = false;
        }
        else if (data.length != 0 ){
            this.setState({email_error: "Email Exists"});
            valid = false;
        }
        if (!this.state.username.match(alphaNumeric) || this.state.username.length > 50 || !this.state.username){
            this.setState({username_error: "Invalid Username"});
            valid = false;
        }
        if (!this.state.password.match(alphaNumeric) || this.state.password.length > 50 || !this.state.password){
            this.setState({password_error: "Invalid Password"});
            valid = false;
        }       
        if (valid){
            const userData = {
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                username: this.state.username,
                password: passwordHash.generate(this.state.password)
            }
            firebaseCommand.addUser(userData);
            alert('Success');
        }
        else {
            alert("Error Submitting Data");
        }
    }
    
    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
        return (
            <React.Fragment>
            <div class="join-container">
                <div class="data">
                    First Name
                    <div class= "error">
                        {this.state.fname_error}
                    </div>
                    <input
                        class="medium"
                        type="text"
                        name="fname"
                        value={this.state.fname}
                        onChange={this.handleChange}
                        placeholder="First Name"
                        maxlength="100"
                    />
                </div>
                <div class="data">
                    Last Name
                    <div class= "error">
                        {this.state.lname_error}
                    </div>
                 <input
                        class="medium"
                        type="text"
                        name="lname"
                        value={this.state.lname}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                        maxlength="100"
                    />
                </div>
                <div class="data">
                    Email
                    <div class= "error">
                        {this.state.email_error}
                    </div>
                    <input
                        class="medium"
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Email"
                        maxlength="100"
                    />
                </div>
                <div class="data">
                Username
                <div class= "error">
                    {this.state.username_error}
                </div>
                <input
                    class="medium"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    placeholder="username"
                    maxlength="100"
                />
            </div>
            <div class="data">
                Password
                <div class= "error">
                    {this.state.password_error}
                </div>
                <input
                    class="medium"
                    type={this.state.hidden ? "password" : "text"}
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="password"
                    maxlength="100"
                />
                { this.state.hidden && <img src =  { eye_open } onClick={this.toggleShow} alt ="error"/> }
                { !this.state.hidden && <img src =  { eye_close } onClick={this.toggleShow} alt ="error"/> }
            </div>
            <button className="Submit" onClick={this.submit}>Submit App</button>
            </div>
            </React.Fragment>
        );
    }
}

export default Join; 