// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css'; //  global styles with Tailwind directives
// import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* BrowserRouter enables client-side routing */}
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* ToastContainer: Place this outside your app component, ideally as a sibling
          to ensure it renders on top of everything.
          'theme="dark"' applies the dark theme to your toasts. */}
      <ToastContainer theme="dark" position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </BrowserRouter>
  </React.StrictMode>,
);