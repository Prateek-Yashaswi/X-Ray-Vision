import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Mynav from './components/Mynav';

function App() {
  return (
  <div className='body'>
      <Mynav/>
      <Header></Header>
      <Content></Content>
  </div>
  );
}

export default App;