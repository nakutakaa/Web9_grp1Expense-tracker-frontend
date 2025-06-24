/** @type {import('tailwindcss').Config} */
export default {
  // Enable dark mode based on the presence of the 'dark' class on the HTML element.
  //  allows for manual dark mode toggling.
  darkMode: 'class',

  // Specify files where Tailwind should look for classes to generate CSS.
  content: [
    "./index.html", // our main HTML file
    "./src/**/*.{js,jsx}", // All JavaScript and JSX files in the src directory
  ],
  theme: {
    extend: {
      // Define  custom dark mode colors here.
      // These are chosen to mimic the deep dark backgrounds and vibrant accents
      // seen in interfaces like dark mode on X-Twitter.
      colors: {
        // Main background: very dark, almost black
        primary: '#000000',
        // Secondary background for cards, modals, or slightly lighter elements
        secondary: '#1A1A1A',
        // Accent color: a vibrant blue, similar to X-Twitter active elements
        accent: '#3B82F6',
        // Primary text color: light, highly readable on dark backgrounds
        'text-primary': '#E0E0E0',
        // Secondary text color: slightly dimmer for less prominent text
        'text-secondary': '#A0A0A0',
        // Border color: subtle, but present, matching the crisp lines of modern dark UIs
        'border-color': '#303030',
      },
      // Define custom border widths for consistent line thickness.
      borderWidth: {
        DEFAULT: '1px', // Standard border thickness for elements
        '2': '2px',     // Example: a slightly thicker border
        '3': '3px',     // Example: an even thicker border
      },
      // Customize border radius for a modern, slightly rounded aesthetic.
      borderRadius: {
        'lg': '0.5rem', // Default large radius
        'xl': '0.75rem', // Extra large for more pronounced rounding
        '2xl': '1rem',   // Even more rounded corners
      }
    },
  },
  plugins: [],
}
