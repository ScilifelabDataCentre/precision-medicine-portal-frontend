import React, { ReactElement } from 'react';
import { useMatomo } from '@jonkoops/matomo-tracker-react';
import AccordionComponent from '../components/AccordionComponent';

export default function AboutFAQPage(): ReactElement {
    const { trackPageView,} = useMatomo()

    // Track page view
    React.useEffect(() => {
        trackPageView()
    }, [])
    
    return (
        <>
            <div className="divider">FAQ</div>
            <AccordionComponent />
        </>
    );
}