import { ReactElement } from 'react';
import AccordionComponent from '../components/AccordionComponent';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';

export default function AboutFAQPage(): ReactElement {
    TrackPageViewIfEnabled();
    
    return (
        <>
            <div className="divider">FAQ</div>
            <AccordionComponent />
        </>
    );
}