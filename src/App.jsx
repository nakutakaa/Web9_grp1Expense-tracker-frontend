import React, { useEffect } from 'react';

function App() {
  // Apply dark class to html element on initial load to ensure dark mode is active by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    // Test Tailwind classes: full screen, dark background, blue text, rounded border
    <div className="min-h-screen flex items-center justify-center bg-primary p-4">
      <h1 className="text-4xl font-bold text-accent border border-accent rounded-xl p-6 shadow-lg">
        Hello Tailwind Dark Mode!
      </h1>
    </div>
  );
}

export default App;