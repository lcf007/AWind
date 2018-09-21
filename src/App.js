import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import NYTimes from './Containers/NYTimes'

class App extends Component {

  onMyBlog(){
    window.location.href = 'http://www.awind.top/blog/'
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stay Hungry. Stay Foolish.</h1>
          <button className='button' onClick={this.onMyBlog.bind(this)}>My Blog</button>
        </header>
        <NYTimes />
      </div>
    );
  }
}

export default App;
