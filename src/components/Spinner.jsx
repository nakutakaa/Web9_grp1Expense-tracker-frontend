// src/components/Spinner.jsx
/**
 * @file Spinner.jsx
 * @description A simple loading spinner component for indicating ongoing processes.
 * @author Your Name <your.email@example.com>
 * @date June 24, 2025
 */
import React from 'react';

/**
 * Spinner Component
 * Our small, animated loading spinner to show while content is loading or authentication is being checked.
 * @returns {JSX.Element} The rendered spinner.
 */
const Spinner = () => {
  return (
    // We ensure it's centered and takes full screen with a primary background
    <div className="flex items-center justify-center h-screen bg-primary">
      {/* Tailwind CSS spinner styles */}
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-accent motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status" // Accessibility role
      >
        {/* Visually hidden text for screen readers */}
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Spinner;