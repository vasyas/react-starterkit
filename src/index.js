import React from 'react';
import { render } from 'react-dom'

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux'
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as app from './app';

let reducers = combineReducers({
    app: app.reducer,
    routing: routerReducer
});

const store = compose(
    applyMiddleware(), // thunk middleware or smth will go there
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore)(reducers);

const history = syncHistoryWithStore(browserHistory, store);

render(<Provider store={store}>
        <Router history={history}>
            <Route path="/" component={app.Layout}>
                <Route path="hello" component={app.HelloPage} />
                <IndexRoute component={app.LandingPage} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);