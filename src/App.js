import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Redirect } from 'react-router';

class App extends Component {
  constructor(){
    super();
    this.state = { redirect: false }
  }

  onMyBlog(){
    window.location.href = 'http://www.awind.top/blog/'
  }

  onMyApps(){
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/MyApp" />;
    }
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stay Hungry. Stay Foolish.</h1>
          <button className='button' onClick={this.onMyApps.bind(this)}>My Apps</button>
          <button className='button' onClick={this.onMyBlog.bind(this)}>My Blog</button>
        </header>
      </div>
    );
  }
}

export default App;
