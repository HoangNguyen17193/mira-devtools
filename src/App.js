import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import MainLayout from './components/Common/MainLayout/MainLayout';
import JsonFormatter from './containers/JsonFormatter/JsonFormater';
import { ROUTES }  from './constants';

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path={ROUTES.home.path} exact component={JsonFormatter} />
        </Switch>
      </MainLayout>
    )
  }
}

export default App;