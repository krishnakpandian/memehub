import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from './Components/Users';
import About from './Components/About';
import Join from './Components/Join';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Memes from './Components/Meme';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/memes">
            <Memes />
          </Route>
          <Route path="/">
            <Join />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
