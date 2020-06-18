import React, { Component } from 'react';
import './Users.scss';

let firebaseCommand = require('../Database/Firestore.js');

class Users extends Component {
  state = {
    results: null,
  };

  async componentDidMount() { //Fetches the data from the api
    const data = await firebaseCommand.getUser();
    const keys = Object.keys(data)

    var code = ""
    for (var i = 0; i < data.length; i++) {
      var data_key = keys[i];
      if (data[data_key].username){
         code += "<div class=\"user\">" + data[data_key].username + "</div>";
      }
    }
    this.setState({ results: code })
  }

  render() {
      return (
      <React.Fragment>
        <div class="users-container">
        <div class= "title"> Users</div>
        <div dangerouslySetInnerHTML={{ __html: this.state.results }} />
        </div>
      </React.Fragment>
      );
    }
}

export default Users;