import React, {
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  FormEvent
} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Form,
  Button
} from 'shards-react';
import { Routes } from '../Routes';
import { authSelectors, login } from '../../state/ducks/Auth';
import { Field } from '../../commons/components/Field';
import './style.css';

export const Login: React.FC = () => {
  const isAuthorized = useSelector(authSelectors.isAuthorized);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = (setState: Dispatch<SetStateAction<string>>) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setState(event.target.value);
    };
  };

  const handleLogin = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    dispatch(login(username));
  };

  return isAuthorized ? (
    <Redirect push to={Routes.Dashboard} />
  ) : (
    <Container className="login-container">
      <Card className="login-card">
        <CardHeader>
          Just one more step before sharing your thoughts...
        </CardHeader>
        <CardBody>
          <CardTitle>Sign in to KppChat</CardTitle>
          <Form>
            <Field
              value={username}
              onChange={handleChange(setUsername)}
              placeholder="Hey bro, cool nickname!"
              label="Username"
              id="username-field"
              type="text"
            />
            <Field
              value={password}
              onChange={handleChange(setPassword)}
              placeholder="You shall not see it..."
              label="Password"
              id="password-field"
              type="password"
            >
              <Link to={Routes.Login}>Forgot password?</Link>
            </Field>
            <div className="login-btn-group">
              <Button onClick={handleLogin} className="login-btn" type="submit">
                Sign in
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};
