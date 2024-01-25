//import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

export default function App() {
  return (
    <div data-theme="dark">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}