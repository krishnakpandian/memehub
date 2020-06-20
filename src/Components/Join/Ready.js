import React, { Component } from 'react';


let firebaseCommand = require('../Database/Firestore.js');
let passwordHash = require('password-hash');

class Ready extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: null,
            memeCount: 0,
        }
    }
    async componentDidMount() {
        // let docRefs = await firebaseCommand.findUser("username", this.props.username);
        // console.log(docRefs);
        // var users = Object.keys(docRefs);
        // var onlyUser = users[0];
    }
    render() {
        return (
            <React.Fragment>
                Welcome {this.props.fname} {this.props.lname}
            </React.Fragment>
        );
    }
}

export default Ready;