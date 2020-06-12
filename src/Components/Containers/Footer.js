import React, {Component} from 'react'
import './Footer.scss';

class Footer extends Component {
    render() {
      return (
        <React.Fragment>
        <div class="footer-container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <footer>
            <b>Contact Us</b>
            <br />
            <div>
              <a href="mailto:" target="_blank" rel="noopener noreferrer"><span>Krishna</span></a>
           
              <a href="https://www.linkedin.com/" class="fa fa-linkedin"> </a>
              <a href="https://www.facebook.com/" class="fa fa-facebook"> </a>
              <a href="https://twitter.com/" class="fa fa-twitter"> </a>
            </div>
            <div>
              <a href="mailto:" target="_blank" rel="noopener noreferrer"><span>Alex</span></a>

              <a href="https://www.linkedin.com/" class="fa fa-linkedin"> </a>
              <a href="https://www.facebook.com/" class="fa fa-facebook"> </a>
              <a href="https://twitter.com/" class="fa fa-twitter"> </a>
            </div>
            <p>  © 2020 ??? inc. All rights reserved.</p>
        </footer>
        </div>
        </React.Fragment>
      );
    }
  }
 
export default Footer; 
