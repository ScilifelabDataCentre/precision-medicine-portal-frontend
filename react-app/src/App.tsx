//import React from 'react';
import { ReactElement, useState } from 'react';
import { Outlet } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import Cookies from 'js-cookie';

export default function App(): ReactElement {

  // the statement in the useState tries to do Cookies.get('trackingEnabled'), if that cookie doesn't exist
  // it should return undefined. Since the statement is negated then isTrackingCookieSet will be set to true if
  // the useState statement is False, i.e. when the trackingEnabled cookie doesn't exist.
  const [isTrackingCookieSet, setTrackingCookie] = useState(!(Cookies.get('trackingEnabled') === undefined));

  // only set a new cookie to 'true' if no cookies have been set yet
  if (!isTrackingCookieSet) {
    Cookies.set('trackingEnabled', 'true', { expires: 365 });
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