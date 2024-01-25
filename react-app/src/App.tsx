//import React from 'react';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

export default function App(): ReactElement {
  return (
    <div data-theme="dark">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}