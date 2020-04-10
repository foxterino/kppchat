import React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Routes } from './Routes';
import { authSelectors } from '../state/ducks/Auth';

export interface ProtectedRouteProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const isAuthorized = useSelector(authSelectors.isAuthorized);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: Routes.Login, state: { from: props.location } }}
          />
        )
      }
    />
  );
};
