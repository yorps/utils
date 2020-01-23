import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import Converter from './tools/Converter';
import DateTool from './datetool/DateTool';
import Base64Decoder from './decoder/Base64Decoder';
import JSONTool from "./json/JSONTool";





//Generated Code:
//ReactDOM.render(<App />, document.getElementById('root'));

//Ab hier Routing
const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/datetool" component={DateTool} />
            <Route path="/converter" component={Converter} />
            <Route path="/base64decoder" component={Base64Decoder} />
            <Route path="/json" component={JSONTool} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Routing, siehe