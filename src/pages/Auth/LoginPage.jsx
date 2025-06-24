import React, { useState, useEffect } from 'react'; // Added useEffect for initial dark mode
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast
import api from '../../services/api'; // Import our configured Axios instance

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // To manage button loading state

  // Ensure dark mode is applied if not already by the root App.jsx or main.jsx
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Disable button and show loading

    // Placeholder for actual API call
    // In a real scenario, we'd send username/password to our backend
    console.log('Attempting login with:', { username, password });

    try {
      // Simulate an API call delay
      // In a real app: const response = await api.post('/auth/login', { username, password });
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network request

      // Simulate successful login (replace with actual backend response handling)
      toast.success('Simulated Login Successful! You will be redirected soon.');
      // console.log('Login API response:', response.data);
      // TODO: Store token and user info, then redirect to dashboard
      // Example: localStorage.setItem('token', response.data.access_token);
      // navigate('/');
    } catch (error) {
      console.error('Simulated Login error:', error);
      // Display error message from backend or a generic one
      toast.error(error.response?.data?.message || 'Simulated Login Failed. Try again.');
    } finally {
      setLoading(false); // Re-enable button
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
          disabled={loading} // Disable button when loading
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