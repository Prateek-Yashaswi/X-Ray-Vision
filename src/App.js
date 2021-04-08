import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Mynav from './components/Mynav';
import { Switch, Route } from 'react-router-dom';
import Error from './components/Error';
import Devs from './components/Developers';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import firebase from 'firebase/app';
import 'firebase/database';
import ThreadDisplay from './components/Discussion/Threaddisplay';

class App extends Component {
  constructor(props) {
    super(props);

    const config =
    {
      apiKey: "AIzaSyAzOLxJForep4JreGgaWc1T7sLPE37sJdA",
      authDomain: "rakathon2021.firebaseapp.com",
      projectId: "rakathon2021",
      storageBucket: "rakathon2021.appspot.com",
      messagingSenderId: "474743612391",
      appId: "1:474743612391:web:98196fd37f41ca2c085342"
    };

    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }

  render() {
    return (
      <div className='body'>
        <Mynav />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/content" component={Content} />
          <Route path='/developers' component={Devs}></Route>
          <Route path='/discussion'><ThreadDisplay database={this.database} /></Route>
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;