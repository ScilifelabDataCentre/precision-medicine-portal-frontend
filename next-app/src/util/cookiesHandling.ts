'use server';

import { cookies } from 'next/headers'
import { useMatomo } from '@jonkoops/matomo-tracker-react';

export async function initiateTrackingCookie() {
    if (!cookies().has('trackingEnabled')) {
        cookies().set('trackingEnabled', 'true', { maxAge: 365 });
    }
}

// cookies are stored as strings, so they cannot be directly used as boolean type
export async function cookieIsSetToTrue(cookieName: string): Promise<boolean> {
    // note: cookies().get(cookieName) is type RequestCookie | undefined
    // need to use cookies().get(cookieName)?.value to get type string | undefined
    const cookieValue: string | undefined = cookies().get(cookieName)?.value;
    if (!cookieValue) {
        throw new Error('Cookie with name "'+ cookieName +'" does not exist or is not set yet.')
    }
    else {
        return (cookies().get(cookieName)?.value === 'true');
    }
}

export async function TrackPageViewIfEnabled() {

    // const { trackPageView, trackEvent } = useMatomo() , trackEvent to track clicks and other events
    const { trackPageView,} = useMatomo()

    // track page visit if trackingEnabled cookie is set to 'true'

    if (await cookieIsSetToTrue('trackingEnabled')) {
        trackPageView()
    }
}