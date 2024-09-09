import React from 'react';
import ReactDOM from 'react-dom/client';
import { MatomoProvider, createInstance } from '@jonkoops/matomo-tracker-react'
import './index.css';
import Routes from './components/Routes';
import { cookieIsSetToTrue } from './util/cookiesHandling';

// the cookie is set in App.tsx for the first time. From testing
// it seems like App doesn't set the cookie before code here has run, so if it's a first visit
// we need to conditionally set trackingEnabled to true for the matomo instance.
// Tried moving the script creating the cookie here but we cannot use hooks at the top level, so this
// workaround works for now.
let trackingEnabled: Boolean;
try {
  trackingEnabled = cookieIsSetToTrue('trackingEnabled') ? true : false;
}
catch(e) {
  console.log(e);
  trackingEnabled = true;
}

const instance = createInstance({
  urlBase: 'https://matomo.dc.scilifelab.se/',
  siteId: 9,
  disabled: !trackingEnabled,
  }
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MatomoProvider value={instance}>
      <Routes />
    </MatomoProvider>
  </React.StrictMode>
);
