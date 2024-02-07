import React from 'react';
import Login from '../../components/LoginForm/LoginForm'; // Adjust the path
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
  return (
    <div className="container"> {/* Apply the container class */}
      <Login />
    </div>
  );
};

export default LoginPage;
