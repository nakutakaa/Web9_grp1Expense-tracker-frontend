// src/pages/Auth/LoginPage.jsx
/**
 * @file LoginPage.jsx
 * @description Our login form component, handles user authentication
 * by sending email and password to the backend.
 * @date June 24, 2025
 */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext'; // Our custom authentication hook

/**
 * LoginPage Component
 * This component provides the user interface for logging into our application.
 * It captures email and password, sends them to our Flask backend,
 * and uses our AuthContext to manage the authenticated state.
 * @returns {JSX.Element} The rendered login form.
 */
function LoginPage() {
  // We manage the email and password input fields' state.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // We use a loading state to disable the button during API calls.
  const [loading, setLoading] = useState(false);
  // We destructure our 'login' function from our AuthContext.
  const { login } = useAuth();

  // We ensure the 'dark' class is applied to the html element for our dark theme
  // on component mount.
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  /**
   * Handles the form submission for login.
   * Sends a POST request to our backend with the user's email and password.
   * On success, it calls our `login` context function to update global state.
   * On failure, it displays an error toast.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Disable button to prevent multiple submissions

    try {
      // We make the actual API call to our Flask backend's login endpoint.
      // The backend expects 'email' and 'password'.
      // We are using '/login' as per the backend's app.py configuration.
      const response = await api.post('/login', { email, password });

      // Our backend's LoginResource returns { "token": "..." }.
      // We will use the email entered by the user as part of the 'user' data
      // to store in our AuthContext, as the backend doesn't return user details.
      const { token } = response.data;
      const loggedInUser = { email: email }; // Create a user object with the email

      // We call our `login` function from AuthContext to:
      // 1. Store the token in localStorage.
      // 2. Store the user object (with email) in localStorage and context.
      // 3. Update the `isAuthenticated` state to true.
      // 4. Redirect to the dashboard.
      login(token, loggedInUser);

    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      // We display a user-friendly error message, preferring backend's message if available.
      toast.error(error.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false); // Re-enable the button.
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-secondary rounded-lg shadow-xl border border-border-color">
      <h2 className="text-2xl font-bold mb-6 text-text-primary">Login</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          {/* Email input field */}
          <label htmlFor="email" className="block text-text-secondary text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email" // Use type="email" for better user experience and basic validation
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border border-border-color rounded w-full py-2 px-3 bg-primary text-text-primary leading-tight focus:outline-none focus:shadow-outline focus:border-accent"
            required
          />
        </div>
        <div>
          {/* Password input field */}
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
          disabled={loading} // Button is disabled when loading
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