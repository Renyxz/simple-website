import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';



// CSS
import './css/index.css';
import './css/App.css';


// Components
import App from './components/App';
import About from './components/About';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    
    <Provider store={ createStore(Reducers) }>
        <Router>
            <div>
                <Route exact path="/" component={ App } />
                <Route path="/about" component={ About } />
            </div>
        </Router>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
