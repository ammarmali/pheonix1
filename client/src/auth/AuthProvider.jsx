/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Create the context
const AuthContext = createContext();

// Custom hook to use the context
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const { isAuthenticated, user, getAccessTokenSilently, isLoading } = useAuth0();
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    token: null,
  });

  useEffect(() => {
    const fetchToken = async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        setAuthState({
          isAuthenticated,
          user,
          token,
        });
      }
    };
    fetchToken();
  }, [isAuthenticated, user, getAccessTokenSilently]);

  return (
    <AuthContext.Provider value={{ authState, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
