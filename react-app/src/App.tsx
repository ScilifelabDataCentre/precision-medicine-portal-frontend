//import React from 'react';
import { ReactElement, useState } from 'react';
import { Outlet } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import Cookies from 'js-cookie';

export default function App(): ReactElement {

  const [isTrackingCookieSet, setTrackingCookie] = useState(!(Cookies.get('trackingEnabled') === undefined));
  if (!isTrackingCookieSet) {
    Cookies.set('trackingEnabled', 'true');
    setTrackingCookie(true);
  };

  return (
    <div data-theme="dark">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}