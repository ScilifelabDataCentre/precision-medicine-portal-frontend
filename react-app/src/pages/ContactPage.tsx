import React, { ReactElement } from 'react';
import { useMatomo } from '@jonkoops/matomo-tracker-react';

export default function ContactPage(): ReactElement {
    const { trackPageView, } = useMatomo()

    // Track page view
    React.useEffect(() => {
        trackPageView()
    }, [])

    return (
        <div>
            <p className="bg-green text-bold">Contact page under construction</p>
        </div>
    );
}