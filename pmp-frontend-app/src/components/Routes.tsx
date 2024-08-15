import { ReactElement } from 'react';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import DataSourcesPage from '../pages/DataSourcesPage';
import EventsAndTrainingsPage from '../pages/EventsAndTrainingsPage';
import SignInPage from '../pages/SignInPage';
import PrivacyPage from '../pages/PrivacyPage';
import AboutProductPage from '../pages/AboutProductPage';
import AboutFAQPage from '../pages/AboutFAQPage';
import AboutTeamPage from '../pages/AboutTeamPage';
import AboutPartnersPage from '../pages/AboutPartnersPage';
import AccessClinicalDataPage from '../pages/AccessClinicalDataPage'
import RegistryPage from '../pages/RegistryPage'


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
                children: [
                    {
                        index: true,
                        loader: async () => redirect('product')
                    },
                    {
                        path: 'product',
                        element: <AboutProductPage />,
                    },
                    {
                        path: 'faq',
                        element: <AboutFAQPage />,
                    },
                    {
                        path: 'team',
                        element: <AboutTeamPage />,
                    },
                    {
                        path: 'partners',
                        element: <AboutPartnersPage />,
                    },
                ]
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
            {
                path: 'datasources',
                element: <DataSourcesPage />,
            },
            {
                path: 'eventsandtrainings',
                element: <EventsAndTrainingsPage />,
            },
            {
                path: "accessclinicaldata",
                element: <AccessClinicalDataPage />,
              },
            {
                path: 'signin',
                element: <SignInPage />,
            },
            {
                path: 'registry',
                element: <RegistryPage />,
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

