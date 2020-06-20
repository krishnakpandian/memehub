import React, {Component} from 'react'
import { Link } from "react-router-dom";
import './Header.scss';
class Header extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <React.Fragment>
          <div class="header-container">
            <header>
                <div class= "name">
                  Meme-Hub
                </div>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/memes">Memes</Link>
                { !this.props.isLoggedIn && <Link to="/join">Join</Link> }
                { this.props.isLoggedIn && <div class= "user">
                  <Link to="/join">{this.props.fname} {this.props.lname}</Link>
                </div> }
                {
                  this.props.isLoggedIn && <button onClick={this.props.logOut}>Logout</button>
                }
            </header>
            </div>
        </React.Fragment>
      );
    }
  }
  
export default Header; 