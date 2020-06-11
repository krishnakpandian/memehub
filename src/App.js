import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from './Components/Users/Users';
import About from './Components/About/About';
import Join from './Components/Join/Join';
import Header from './Components/Containers/Header';
import Footer from './Components/Containers/Footer';
import Memes from './Components/Meme/Meme';

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
