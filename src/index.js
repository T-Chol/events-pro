import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your global styles here
import App from './App'; // Import your main App component
import 'bootstrap/dist/css/bootstrap.min.css'
// Import any additional CSS or global stylesheets here

// Import additional libraries or configurations if needed
// Example: ;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optionally, you can add performance logging or other configurations here
// Example: console.log('App rendered');
