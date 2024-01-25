import React from 'react';
import { useMatomo } from '@jonkoops/matomo-tracker-react';

export default function EventsAndNewsPage() {
    const { trackPageView, trackEvent } = useMatomo()

    // Track page view
    React.useEffect(() => {
        trackPageView()
    }, [])

    return (
        <div>
            <p className="bg-green text-bold">Events & News page under construction</p>
        </div>
    );
}