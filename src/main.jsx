import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './auth/AuthProvider';


const domain = import.meta.env.VITE_AUTH0_DOMAIN || 'dev-sokjac4qe56385ss.us.auth0.com';
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || 'orJkcaf3ih5Wi61MdfyFkjhNKu7BjRql';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </Auth0Provider>
  </React.StrictMode>
);
