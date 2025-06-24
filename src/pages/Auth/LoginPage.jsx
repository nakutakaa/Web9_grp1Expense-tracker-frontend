// src/pages/Auth/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext'; // Import useAuth

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth(); // Destructure login function from useAuth context

  // Ensure dark mode is applied
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // --- Actual Backend Call ---
      // This is where we'll make the real API call to your Flask backend
      // The backend should return an access_token and possibly user info
      const response = await api.post('/auth/login', { username, password });
      // Assuming our backend responds with { access_token: '...', user: { username: '...' } }
      const { access_token, user: loggedInUser } = response.data; // Adjust based on our actual backend response structure

      // Call the login function from the AuthContext to update global state and store token
      login(access_token, loggedInUser);
      // The navigate('/') is already handled within the login function in AuthContext

    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-secondary rounded-lg shadow-xl border border-border-color">
      <h2 className="text-2xl font-bold mb-6 text-text-primary">Login</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <label htmlFor="username" className="block text-text-secondary text-sm font-bold mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border border-border-color rounded w-full py-2 px-3 bg-primary text-text-primary leading-tight focus:outline-none focus:shadow-outline focus:border-accent"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-text-secondary text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border border-border-color rounded w-full py-2 px-3 bg-primary text-text-primary leading-tight focus:outline-none focus:shadow-outline focus:border-accent"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-accent hover:opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p className="mt-4 text-text-secondary">
        Don't have an account?{' '}
        <Link to="/register" className="text-accent hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;