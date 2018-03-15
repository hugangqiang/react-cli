import React from 'react';

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';
import Reducers from "./reducers/index"
import App from "./view/app";
import "./index.less";

const store = createStore(Reducers,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();