import React, { ReactElement } from 'react';
import { useMatomo } from '@jonkoops/matomo-tracker-react';
import TextBarComponent from '../components/TextBarComponent';

export default function PrivacyPage(): ReactElement {
    const { trackPageView,} = useMatomo()

    // Track page view
    React.useEffect(() => {
        trackPageView()
    }, [])

    var headerOne: string = "text-left text-black text-[40px] font-semibold";
    var textBarClasses: string = "bg-gradient-to-b from-base-100 from-90% to-white text-justify text-[48px] font-bold py-8";
    var textBarContent: string = "Transparency is one of our guiding principles. Get acquainted with how we're creating a secure space for you.";
    var privacyDescription = `
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
    var trackingMessage =   `
                            We want to inform you that whenever you visit this website, we collect information that 
                            your browser sends to us which includes: the website from which you visited us from, 
                            the parts of the website you visit, the date and duration of your visit, your anonymised IP address, 
                            information from the device (device type, operating system, screen resolution, language, country you are located in, and web browser type) 
                            you used during your visit, and more. We process this usage data in Matomo Analytics (hosted on SciLifeLab servers and operated solely by SciLifeLab) 
                            for statistical purposes, to improve the product and to recognize and stop any misuse.
                            `;

    return (
        <>
            <TextBarComponent classes={textBarClasses} text={textBarContent} />
            <div className="bg-white space-y-6 p-14">
                <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Home</a></li> 
                    <li><a>Documents</a></li> 
                    <li>Add Document</li>
                </ul>
                </div>
                <div className={headerOne}>Privacy Policy</div>
                <div className="divider">Default</div>
                <p>{privacyDescription}</p>
                <div className="divider">Default</div>
                <p>{trackingMessage}</p>
                <div role="alert" className="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>we use cookies for no reason.</span>
                    <div>
                        <button className="btn btn-sm">Deny</button>
                        <button className="btn btn-sm btn-primary">Accept</button>
                    </div>
                </div>
            </div>
        </>
    );
}