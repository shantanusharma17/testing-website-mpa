import React, { useState } from 'react'; // Import useState
import './LoginForm.css'; // Updated CSS file name

const Login = () => {
  // Define state variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // Add state for tracking login status

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here (e.g., check credentials)
    // For demonstration purposes, set loggedIn to true if username and password are 'admin'
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
      alert('Login successful!'); // Display a message for successful login
    } else {
      alert('Invalid username or password'); // Display an error message for invalid credentials
    }
  };

  // If user is logged in, display a greeting message
  if (loggedIn) {
    return <div className="login-form">Welcome back, {username}!</div>;
  }

  // If user is not logged in, display the login form
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username} // Bind the input value to username state
          onChange={(event) => setUsername(event.target.value)} // Update username state on change
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password} // Bind the input value to password state
          onChange={(event) => setPassword(event.target.value)} // Update password state on change
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
