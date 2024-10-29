/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuth } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { authState, isLoading } = useAuth();

  // Debugging: Check if authState and isLoading are correct
  console.log('authState:', authState);
  console.log('isLoading:', isLoading);

  // Show loading message while authentication state is being determined
  if (isLoading) return <div>Loading...</div>;

  // Redirect to home (or login) if not authenticated
  return authState.isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
