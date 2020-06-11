import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends Component {
    render() {
      return (
        <React.Fragment>
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
                <Link to="/memes">Memes</Link>
            </header>
        </React.Fragment>
      );
    }
  }
  
export default Header; 