import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="spinner-logo">
          
        </div>
        <h1>News Spinner</h1>
        <div className="search">
          <form>
            <input type="text"/>
            <button>Найти</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
