import React, { Component } from 'react';
import './Users.css';
import { render } from '@testing-library/react';

let firebaseCommand = require('../Database/Firestore.js');

class Users extends Component {
  state = {
    results: null,
  };

  async componentDidMount() { //Fetches the data from the api
    const data = await firebaseCommand.getUser();
    const keys = Object.keys(data)

    var code = "<div class=\"data\">"
    for (var i = 0; i < data.length; i++) {
      var data_key = keys[i];
      if (data[data_key].username){
         code += "<div class=\"user\">" + data[data_key].username + "</div>";
      }
    }
    code += "</div>"
    this.setState({ results: code })
  }

  render() {
      return (
      <React.Fragment>
        <div> Users</div>
        <div dangerouslySetInnerHTML={{ __html: this.state.results }} />
      </React.Fragment>
      );
    }
}

export default Users;