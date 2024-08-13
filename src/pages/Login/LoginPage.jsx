import React from 'react';
import { Helmet } from 'react-helmet';
import Login from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Login | Compass Real Estate</title>
      </Helmet>
      <Login />
    </div>
  );
};

export default LoginPage;
