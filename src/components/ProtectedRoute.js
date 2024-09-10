import React from 'react';
import { Navigate } from 'react-router-dom';

// Dummy authentication check (replace with real authentication logic)
const isAuthenticated = () => {
  // Logic to check if the user is authenticated (e.g., checking a token in localStorage)
  return localStorage.getItem("authToken") !== null;
};

// This function protects routes by redirecting unauthenticated users
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
