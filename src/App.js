import React from 'react'
import './components/Navbar.js'
import Navbar from './components/Navbar.js';
import Weather from './components/Weather.js';
import Todo from './components/Todo';
import Calculator from './components/Calculator';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
        <Route path = "/weather" exact component = {Weather}/>
        <Route path = "/todo" component = {Todo}/>
        <Route path = "/calculator" component = {Calculator}/>
        </Switch>
      </BrowserRouter>
      </>
  );
}

export default App;
