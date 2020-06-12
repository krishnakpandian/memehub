import React, { Component } from 'react';
import './Meme.scss';
import { render } from '@testing-library/react';

class Meme extends Component {
  render() {
      return (
      <React.Fragment>
       <div class="meme-container">
        <div> Hello World</div>
        <input type="file" /> 
        <button> 
          Upload! 
        </button> 
        </div>
      </React.Fragment>
      );
    }
}

export default Meme;