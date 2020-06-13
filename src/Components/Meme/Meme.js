import React, { Component } from 'react';
import './Meme.scss';
import * as firebase from 'firebase';
import firestore from '../Database/Firestore';
import { render } from '@testing-library/react';
//import storage from '../Database/Firestore';

const storage = firebase.storage();


class Meme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
    };
  }

  handleChange = e => {
    if (e.target.files[0]){
      const image = e.target.files[0];
      this.setState( () => ({ image })  );
    }
  };

  handleClick = () => {
    
    const {image} = this.state;
    const upload = storage.ref(`images/${image.name}`).put(image);
    
    upload.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
       storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
              this.setState({url});
          });
      }
    );
  };

  render() {
      return (
      <React.Fragment>
       <div class="meme-container">
        <div> Hello World</div>
        <input type="file" onChange={this.handleChange}/> 
        <button onClick={this.handleClick}> 
          Upload! 
        </button> 
        </div>
      </React.Fragment>
      );
    }
}

export default Meme;