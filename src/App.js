import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { store, history } from './store';
import Subscription from './components/subscription';
import User from './components/user';
import Payment from './components/payment';
import Finish from './components/finish';
import Layout from './components/layout';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={() => <Subscription />} />
          <Route exact path="/user" component={() => <User />} />
          <Route exact path="/payment" component={() => <Payment />} />
          <Route exact path="/finish" component={() => <Finish />} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>
);

export default App;
