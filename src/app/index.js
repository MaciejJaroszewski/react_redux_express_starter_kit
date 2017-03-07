import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { App } from './components';
import './components/bundle.scss';

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={App} />;
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));
