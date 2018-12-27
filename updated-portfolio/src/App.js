import React, { Component } from 'react';
import './App.css';
// import DefaultCode from './components/DefaultCode/DefaultCode';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <DefaultCode /> */}
      </div>
    );
  }
}

export default App;
