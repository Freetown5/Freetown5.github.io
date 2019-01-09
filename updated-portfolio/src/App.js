import React, { Component } from 'react';
import 'semantic-ui-react';
import './App.css';
// import DefaultCode from './components/DefaultCode/DefaultCode';
import NavBar from './components/NavBar/NavBar';
// import Experience from './components/Experience/Experience';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <DefaultCode /> */}
        {/* <Experience /> */}
      </div>
    );
  }
}

export default App;
