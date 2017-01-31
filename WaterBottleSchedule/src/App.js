import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Calendar from './components/Calendar';
import ManageEmployees from './components/ManageEmployees';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header headerText="Water Bottle Schedule"></Header>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        
        <Calendar></Calendar>
        <ManageEmployees></ManageEmployees>
      </div>
    );
  }
}

export default App;
