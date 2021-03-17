import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import MainLayout from './components/Common/MainLayout/MainLayout';
import JsonFormatter from './containers/JsonFormatter/JsonFormatter';
import UnixTimeConverter from './containers/UnixTimeConverter/UnixTimeConverter';
import JWTParser from "./containers/JWTParser/JWTParser";
import UUIDGenerator from "./containers/UUIDGenerator/UUIDGenerator";
import { ROUTES }  from './utils/constants';

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exac path={ROUTES.Home.path} exact component={JsonFormatter} />
          <Route path={ROUTES.UnixTimeConverter.path} exact component={UnixTimeConverter} />
          <Route path={ROUTES.UUIDGenerator.path} exact component={UUIDGenerator} />
          <Route path={ROUTES.JWTParser.path} exact component={JWTParser} />
        </Switch>
      </MainLayout>
    )
  }
}

export default App;