import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { Routes } from './Routes';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from={Routes.Base} to={Routes.Dashboard} />
        <Route component={Login} path={Routes.Login} />
        <ProtectedRoute component={Dashboard} path={Routes.Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};
