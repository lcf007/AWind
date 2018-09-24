import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App';
import NYTimes from './Containers/NYTimes';
import About from './Containers/About';

ReactDOM.render(
    <Router>
    <div>
        <Route exact path="/" component={App}/>
        <Route path="/NYTimes" component={NYTimes} />
        <Route path="/About" component={About} />
    </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
