import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Header.scss';
class Header extends Component {
    render() {
      return (
        <React.Fragment>
          <div class="header-container">
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
                <Link to="/memes">Memes</Link>
            </header>
            </div>
        </React.Fragment>
      );
    }
  }
  
export default Header; 