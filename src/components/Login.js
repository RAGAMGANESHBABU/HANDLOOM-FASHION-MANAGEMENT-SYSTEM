import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // CSS for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple hardcoded authentication for demonstration purposes
    if (username === 'admin' && password === 'admin123') {
      navigate('/admin');
    } else if (username === 'artisan' && password === 'artisan123') {
      navigate('/artisan');
    } else if (username === 'buyer' && password === 'buyer123') {
      navigate('/buyer');
    } else if (username === 'marketing' && password === 'marketing123') {
      navigate('/marketing');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
