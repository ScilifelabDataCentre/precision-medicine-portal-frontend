import React, { ReactElement } from 'react';
import { useMatomo } from '@jonkoops/matomo-tracker-react';
import TextBarComponent from '../components/TextBarComponent';
import {
    BODY_CLASSES,
    BUTTON_TYPE_ONE,
    BUTTON_TYPE_TWO,
    HEADER_ONE,
    PAGE_DESCRIPTION_TEXT_BAR_CLASSES,
} from '../constants';
import { Link } from 'react-router-dom';
import { ILink } from '../interfaces/types';

export default function PrivacyPage(): ReactElement {
    const { trackPageView,} = useMatomo()

    // Track page view
    React.useEffect(() => {
        trackPageView()
    }, [])

    var textBarContent: string = "Transparency is one of our guiding principles. Get acquainted with how we're creating a secure space for you.";
    var privacyDescription: string = `
                            Ut rhoncus ante in metus lobortis, eu euismod magna dignissim. Duis nec condimentum purus. 
                            Quisque urna enim, placerat non fermentum sed, pharetra sit amet quam. Ut rhoncus ante in metus lobortis, 
                            eu euismod magna dignissim. Duis nec condimentum purus. Quisque urna enim, placerat non fermentum sed, 
                            pharetra sit amet quam. Ut rhoncus ante in metus lobortis, eu euismod magna dignissim. Duis nec condimentum purus. 
                            Quisque urna enim, placerat non fermentum sed, pharetra sit amet quam. Ut rhoncus ante in metus lobortis, 
                            eu euismod magna dignissim. Duis nec condimentum purus. Quisque urna enim, placerat non fermentum sed, 
                            pharetra sit amet quam. Ut rhoncus ante in metus lobortis, eu euismod magna dignissim. Duis nec condimentum purus. 
                            Quisque urna enim, placerat non fermentum sed, pharetra sit amet quam. Ut rhoncus ante in metus lobortis, eu euismod magna dignissim. 
                            Duis nec condimentum purus. Quisque urna enim, placerat non fermentum sed, pharetra sit amet quam. Ut rhoncus ante in metus lobortis, 
                            eu euismod magna dignissim. Duis nec condimentum purus. Quisque urna enim, placerat non fermentum sed, pharetra sit amet quam.
                            `;
    var trackingMessage: string =   `
                            We want to inform you that whenever you visit this website, we collect information that 
                            your browser sends to us which includes: the website from which you visited us from, 
                            the parts of the website you visit, the date and duration of your visit, your anonymised IP address, 
                            information from the device (device type, operating system, screen resolution, language, country you are located in, and web browser type) 
                            you used during your visit, and more. We process this usage data in Matomo Analytics (hosted on SciLifeLab servers and operated solely by SciLifeLab) 
                            for statistical purposes, to improve the product and to recognize and stop any misuse.
                            `;

    var breadcrumbs: { [id: string] : ILink; } = {
        'l1': { text: 'Home', classes: '', link: '/' },
        'l2': { text: 'Privacy', classes: '', link: '' },
    };

    var dividers: string[] = ['Default', 'Default'];

    var alertMessage: string = "we use cookies for no reason.";
    
    return (
        <>
            <TextBarComponent classes={PAGE_DESCRIPTION_TEXT_BAR_CLASSES} text={textBarContent} />
            <div className={BODY_CLASSES}>
                <div className="text-sm breadcrumbs">
                <ul>
                {Object.keys(breadcrumbs).map( key => (
                    <li>{breadcrumbs[key].link ? <Link to={breadcrumbs[key].link}>{breadcrumbs[key].text}</Link> : <>{breadcrumbs[key].text}</>}</li>
                ))}
                </ul>
                </div>
                <div className={HEADER_ONE}>Privacy Policy</div>
                <div className="divider">{dividers[0]}</div>
                <p>{privacyDescription}</p>
                <div className="divider">{dividers[1]}</div>
                <p>{trackingMessage}</p>
                <div role="alert" className="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{alertMessage}</span>
                    <div className="space-x-2">
                        <button className={BUTTON_TYPE_TWO}>Deny</button>
                        <button className={BUTTON_TYPE_ONE}>Accept</button>
                    </div>
                </div>
            </div>
        </>
    );
}