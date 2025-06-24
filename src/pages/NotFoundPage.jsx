import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-text-primary">
      <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
      <p className="text-xl mb-8">Page Not Found</p>
      <Link to="/" className="px-6 py-3 bg-accent text-white rounded-md hover:opacity-90 transition-opacity">
        Go to Dashboard
      </Link>
    </div>
  );
}

export default NotFoundPage;