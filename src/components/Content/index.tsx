import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RoutesApp from '../../constants/routes';

const Content = () => {
  return (
    <main>
      <Router>
        <Switch>
          {RoutesApp.map((route) => (
            <Route key={route.key} path={`/${route.path}`}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </Router>
    </main>
  );
};

export default Content;
