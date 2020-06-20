import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { browserHistory } from "react-router";
import Users from './Components/Users/Users';
import About from './Components/About/About';
import Join from './Components/Join/Join';
import Header from './Components/Containers/Header';
import Footer from './Components/Containers/Footer';
import Memes from './Components/Meme/Meme';
import { createBrowserHistory } from 'history'


const initial = {
  isLoggedIn: false,
  fname: '',
  lname: '',
  email: '',
  username: '',
  password: ''
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = initial;
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
    this.reDirect = this.reDirect.bind(this);
  }

  logOut(){
    this.setState(initial);
  }
  logIn(obj){
    this.setState({isLoggedIn: true});
    this.setState(obj);
  }
  reDirect(){
    const history = createBrowserHistory();
    //history.go('/');
    // browserHistory.push('/');
  }
  render () {
  return (
    <div className="App">
      <Router>
        <Header 
          isLoggedIn = {this.state.isLoggedIn} 
          fname = {this.state.fname} 
          lname = {this.state.lname} 
          logOut = {this.logOut}
        />
        <Switch>
          <Route exact path="/join" >
            {this.isLoggedIn && <Redirect to={{pathname: "/", state: { from: '/join' }}}/> }
            <Join 
            isLoggedIn = {this.state.isLoggedIn} 
            fname = {this.state.fname} 
            lname = {this.state.lname} 
            logIn = {this.logIn} 
            email = {this.state.email}
            username = {this.state.username}
            password = {this.state.password}
            reDirect = {this.reDirect}
            />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/memes">
            <Memes 
              isLoggedIn = {this.state.isLoggedIn}
              username = {this.state.username}
            />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
  }
}

export default App;
