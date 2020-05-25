import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from './Components/Users';
import About from './Components/About';
import Join from './Components/Join';


function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </header>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Join />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
