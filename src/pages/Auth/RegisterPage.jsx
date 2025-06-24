// src/pages/Auth/RegisterPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      // --- Actual Backend Call ---
      // Assuming our backend expects 'username' and 'password' for registration
      const response = await api.post('/auth/register', { username, password });
      toast.success(response.data.message || 'Registration successful! Please login.');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-secondary rounded-lg shadow-xl border border-border-color">
      <h2 className="text-2xl font-bold mb-6 text-text-primary">Register</h2>
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
        <div>
          <label htmlFor="confirmPassword" className="block text-text-secondary text-sm font-bold mb-2">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="shadow appearance-none border border-border-color rounded w-full py-2 px-3 bg-primary text-text-primary leading-tight focus:outline-none focus:shadow-outline focus:border-accent"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-accent hover:opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      <p className="mt-4 text-text-secondary">
        Already have an account?{' '}
        <Link to="/login" className="text-accent hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;