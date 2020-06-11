import React, { Component } from 'react';
import './Meme.css';
import { render } from '@testing-library/react';

class Meme extends Component {
  render() {
      return (
      <React.Fragment>
        <div> Hello World</div>
        <input type="file" /> 
        <button> 
          Upload! 
        </button> 

      </React.Fragment>
      );
    }
}

export default Meme;