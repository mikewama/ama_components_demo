import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BasicLayout from './containers/BasicLayout/BasicLayout';

function App() {
  return (
      <div>
        <Switch>
          <Route path="/basic" component={BasicLayout} />
          <Route path="/" exact component={BasicLayout} />
        </Switch>
      </div>
  );
}

export default App;
