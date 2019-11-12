import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import * as reducers from './reducers';

const rootReducer = history => combineReducers({
  ...reducers,
  router: connectRouter(history),
  form: formReducer,
});

const history = createBrowserHistory();

const createdRouterMiddleware = routerMiddleware(history);

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line

const store = createStore(
  rootReducer(history),

  composeEnhancers(
    applyMiddleware(createdRouterMiddleware),
    applyMiddleware(thunk),
  ),
);

export { store, history };
