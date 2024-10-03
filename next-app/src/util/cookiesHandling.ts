'use client';

import { hasCookie } from 'cookies-next'
import { useMatomo } from '@jonkoops/matomo-tracker-react';
import React from 'react';

// cookies are stored as strings, so they cannot be directly used as boolean type
export function trackingDisabled(): boolean {
    return (hasCookie('trackingDisabled'));
}

export function TrackPageViewIfEnabled() {

    // const { trackPageView, trackEvent } = useMatomo() , trackEvent to track clicks and other events
    const { trackPageView,} = useMatomo()

    // track page visit if trackingEnabled cookie is set to 'true'

    React.useEffect(() => {
        if (!trackingDisabled()) {
            trackPageView()
        }
    });
}