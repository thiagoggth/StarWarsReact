import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import People from './pages/People';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/people" exact component={People} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
