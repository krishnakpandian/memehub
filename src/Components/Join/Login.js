import React, { Component } from 'react';
import eye_close from '../Assets/eye_unlock.png';
import eye_open from '../Assets/eye_lock.png';

class Login extends Component {
    constructor(props) {
        super(props);
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
            <button className="Submit" onClick={this.props.submit}>Submit App</button>
            <button className="Submit" onClick={this.props.alternate}>Already have an Account</button>
            </div>
            </React.Fragment>
        );
    }
}

export default Login;