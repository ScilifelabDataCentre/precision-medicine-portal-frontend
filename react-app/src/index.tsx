import React from 'react';
import ReactDOM from 'react-dom/client';
import { MatomoProvider, createInstance } from '@jonkoops/matomo-tracker-react'
import './index.css';
import Routes from './components/Routes';

const instance = createInstance({
  urlBase: 'https://matomo.dc.scilifelab.se/',
  siteId: 9,
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
