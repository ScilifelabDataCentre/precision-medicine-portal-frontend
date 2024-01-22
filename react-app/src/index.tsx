import React from 'react';
import ReactDOM from 'react-dom/client';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'
import './index.css';
import App from './App';

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
    <App />
    <MatomoProvider value={instance} />
  </React.StrictMode>
);
