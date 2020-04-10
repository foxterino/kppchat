import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, login } from '../../state/ducks/Auth';
import { Routes } from '../Routes';

export const Login: React.FC = () => {
  const isAuthorized = useSelector(authSelectors.isAuthorized);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login('my username'));
  };

  return isAuthorized ? (
    <Redirect to={Routes.Dashboard} />
  ) : (
    <div>
      login <button onClick={handleLogin}>login and go to dashboard</button>
    </div>
  );
};
