import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Navbar} from './navbar/Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="">

        <Navbar />
          <div className="container">
            <h2>Utils</h2>

              Eine Sammlung von Entwicklertools und eine Testapplikation für ReactJS.

          </div>

        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}
        {/*</header>*/}
      </div>
    );
  }
}

export default App;
