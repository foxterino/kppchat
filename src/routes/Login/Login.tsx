import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, login } from '../../state/ducks/Auth';
import { Routes } from '../Routes';
import { Field } from '../../commons/components/Field';

export const Login: React.FC = () => {
  const isAuthorized = useSelector(authSelectors.isAuthorized);
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleLogin = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    dispatch(login(username));
  };

  return isAuthorized ? (
    <Redirect to={Routes.Dashboard} />
  ) : (
    <div>
      <form>
        <Field
          value={username}
          onChange={handleChange}
          label="Username field"
          id="username-field"
          type="text"
        />
        <input value="Login" onClick={handleLogin} type="submit" />
      </form>
    </div>
  );
};
