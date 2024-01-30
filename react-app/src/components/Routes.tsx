import { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import DataPage from '../pages/DataPage';
import EventsAndNewsPage from '../pages/EventsAndNewsPage';
import SignInPage from '../pages/SignInPage';
import PrivacyPage from '../pages/PrivacyPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
            {
                path: 'data',
                element: <DataPage />,
            },
            {
                path: 'eventsandnews',
                element: <EventsAndNewsPage />,
            },
            {
                path: 'signin',
                element: <SignInPage />,
            },
            {
                path: 'privacy',
                element: <PrivacyPage />,
            },
        ]
    },
  ]);

export default function Routes(): ReactElement {
    return <RouterProvider router={router} />;
}