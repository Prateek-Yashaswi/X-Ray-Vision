import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Mynav from './components/Mynav';
import {Switch,Route} from 'react-router-dom';
import Error from './components/Error';
import Devs from './components/Developers';


function App() {
  return (
  <div className='body'>
    <Mynav/>
    <Switch>
      <Route exact path="/" component={Header}/>
      <Route path="/content" component={Content}/>
      <Route path='/developers' component={Devs}></Route>
      <Route component={Error}/>
    </Switch>
      
  </div>
  );
}

export default App;