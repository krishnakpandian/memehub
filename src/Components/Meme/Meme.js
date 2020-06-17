import React, { Component } from 'react';
import './Meme.scss';
import * as firebase from 'firebase';
import firestore from '../Database/Firestore';
import { render } from '@testing-library/react';


let firebaseCommand = require('../Database/Firestore');


class Meme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      file: null,
      images: [],
    };
  }

  handleChange = e => {
    if (e.target.files[0]){
      const image = e.target.files[0];
      this.setState( () => ({ image })  );
      this.setState({file: URL.createObjectURL(image)});
    }
  };

  handleClick = async () => {
    try {
      const {image} = this.state;
      await firebaseCommand.upload(image);
      this.setState({image: null, file: null});
      alert("Your Meme Has been Submitted");
    }
    catch(error){
      alert("Your Meme failed to Submit");
    }
  };

  renderImage(image) {
    return (
      <div>
        <img src={image} />
      </div>
    );
  }

  async componentDidMount() { //Fetches the data from the api
    const data = await firebaseCommand.getImages();
    this.setState({ images: data });
    console.log("componentDidMount finito");
  }

  render() {
      return (
      <React.Fragment>
       <div class="meme-container">
        <div> Hello World</div>
        <input type="file" onChange={this.handleChange}/> 
        <button onClick={this.handleClick}> 
          Upload! 
        </button>
        <br /> 
        <img src={ this.state.file}/>
        { this.state.images.map(image => this.renderImage(image))}
        </div>
      </React.Fragment>
      );
    }
}

export default Meme;