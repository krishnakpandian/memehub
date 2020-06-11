import React, { Component } from 'react';
import '../../index.css';
import { render } from '@testing-library/react';

class Users extends Component {
  state = {
    results: [],
  };

  async componentDidMount() { //Fetches the data from the api
    const url = 'https://randomuser.me/api/';

    fetch(url)
    .then(response => response.json())    // one extra step
    .then(data => {
      console.log(data) 
      this.setState({results: data})
    })
    .catch(error => console.error(error));

  }

  render() {
      return (
      <React.Fragment>
        <div> Users</div>

      </React.Fragment>
      );
    }
}

export default Users;