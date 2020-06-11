import React, { Component } from 'react';
import * as firebase from 'firebase';
import firestore from '../Database/Firestore';

let firebaseCommand = require('../Database/Firestore.js')

class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            username: '',
            fname_error: '',
            lname_error: '',
            email_error: '',
            username_error: ''
        }
    }
    addUser = e => {
    //e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection('users').add({
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      //created: firebase.timestamp.now()
    }).then(docRef => {
      //this.setState({id: docRef.id})
      //console.log("Document written with ID: ", this.state.id);
  })
  .catch(error => console.error("Error: ", error))

  };

    handleChange = (event) => { //Changes State of an Object
        event.preventDefault()
        //console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = () => {
        const alphaNumeric = '^[a-zA-Z0-9 .\'?!@,-]*$';
        this.setState({fname_error: '', lname_error: '', email_error: ''});
        const db = firebase.firestore();
        let users = db.collection('users');
        var valid = true;
        users.where('email', '==', this.state.email).get().then(snapshot => {   //Needs to be fixed
            if (snapshot.empty) {
                console.log('No matching documents.');
            }
            else {
                this.setState({email_error: "Email Exists"});  
            }
            valid = false;
        });

        
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
        if (!this.state.username.match(alphaNumeric) || this.state.username.length > 50 || !this.state.username){
            this.setState({username_error: "Invalid Username"});
            valid = false;
        }
        console.log(this.state.email_error);

        if (valid){
            console.log(firebaseCommand.getUser())
            alert('Success');
        }
        else {
            alert("Error Submitting Data");
        }
    }

    render() {
        return (
            <React.Fragment>
                <label>
                    First Name
                    {this.state.fname_error}
                    <input
                        class="medium"
                        type="text"
                        name="fname"
                        value={this.state.fname}
                        onChange={this.handleChange.bind(this)}
                        placeholder="First Name"
                        maxlength="100"
                    />
                </label>
                <label>
                    Last Name
                    {this.state.lname_error}
                 <input
                        class="medium"
                        type="text"
                        name="lname"
                        value={this.state.lname}
                        onChange={this.handleChange.bind(this)}
                        placeholder="Last Name"
                        maxlength="100"
                    />
                </label>
                <label>
                    Email
                    {this.state.email_error}
                    <input
                        class="medium"
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                        placeholder="Email"
                        maxlength="100"
                    />
                </label>
                <label>
                Username
                {this.state.username_error}
                <input
                    class="medium"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange.bind(this)}
                    placeholder="username"
                    maxlength="100"
                />
            </label>
            <button className="Submit" onClick={this.submit}>Submit App</button>
            </React.Fragment>
        );
    }
}

export default Join; 