import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route } from 'react-router-dom'

import App from './App';
import MyApp from './Containers/MyApp';

ReactDOM.render(
    <Router>
    <div>
        <Route exact path="/" component={App}/>
        <Route path="/MyApp" component={MyApp} />
    </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
