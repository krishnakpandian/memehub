import React, {Component} from 'react'
import { Link } from "react-router-dom";
import './Header.scss';
class Header extends Component {
    render() {
      return (
        <React.Fragment>
          <div class="header-container">
            <header>
                <div class= "name">
                  Meme-Hub
                </div>
                <Link to="/">Home</Link>
                <Link to="/join">Join</Link>
                <Link to="/users">Users</Link>
                <Link to="/memes">Memes</Link>
            </header>
            </div>
        </React.Fragment>
      );
    }
  }
  
export default Header; 