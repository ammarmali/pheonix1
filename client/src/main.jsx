import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './auth/AuthProvider';


const domain = 'dev-ta64a34rqbf454ih.us.auth0.com';
const clientId =  'Z4eMpyVhj7TfbT6hlKVJb03DaYFShrg4';

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
