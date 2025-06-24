// src/pages/Auth/RegisterPage.jsx
/**
 * @file RegisterPage.jsx
 * @description Our registration form component, allows users to create a new account
 * by providing their email, full name, and password.
 * @date June 24, 2025
 */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api'; // Our configured Axios instance
import { toast } from 'react-toastify'; // For notifications

/**
 * RegisterPage Component
 * This component provides the user interface for new user registration.
 * It captures email, full name, and password, sends them to our Flask backend,
 * and redirects the user to the login page upon successful registration.
 * @returns {JSX.Element} The rendered registration form.
 */
function RegisterPage() {
  // We manage the state for email, password, and full name.
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState(''); // New state for full_name
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // We use a loading state to disable the button during API calls.
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Our hook to programmatically navigate

  // We ensure the 'dark' class is applied to the html element for our dark theme
  // on component mount.
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  /**
   * Handles the form submission for registration.
   * Performs client-side password matching, then sends a POST request
   * to our backend with the user's details.
   * On success, it displays a success toast and redirects to the login page.
   * On failure, it displays an error toast.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    // First, we validate that the passwords match.
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return; // Stop the submission if passwords don't match.
    }
    setLoading(true); // Disable button to prevent multiple submissions

    try {
      // We make the actual API call to our Flask backend's registration endpoint.
      // The backend expects 'email', 'password', and 'full_name'.
      // We are using '/signin' as per the backend's app.py configuration.
      const response = await api.post('/signin', {
        email,
        password,
        full_name: fullName, // Sending full_name as expected by backend
      });

      // On successful registration, we display a success message and redirect to login.
      toast.success(response.data.message || 'Registration successful! Please login.');
      navigate('/login');

    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      // We display a user-friendly error message, preferring backend's message if available.
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false); // Re-enable the button.
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-secondary rounded-lg shadow-xl border border-border-color">
      <h2 className="text-2xl font-bold mb-6 text-text-primary">Register</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          {/* Email input field */}
          <label htmlFor="email" className="block text-text-secondary text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email" // Use type="email" for better UX
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border border-border-color rounded w-full py-2 px-3 bg-primary text-text-primary leading-tight focus:outline-none focus:shadow-outline focus:border-accent"
            required
          />
        </div>
        <div>
          {/* Full Name input field */}
          <label htmlFor="fullName" className="block text-text-secondary text-sm font-bold mb-2">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
        <div>
          {/* Confirm Password input field */}
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