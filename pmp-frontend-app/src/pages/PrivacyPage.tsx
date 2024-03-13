import { ReactElement, useState } from 'react';
import TextBarComponent from '../components/TextBarComponent';
import {
    BODY_CLASSES,
    BUTTON_TYPE_ONE,
    H_1,
    PAGE_DESCRIPTION_TEXT_BAR_CLASSES,
} from '../constants';
import { Link } from 'react-router-dom';
import { ILink } from '../interfaces/types';
import Cookies from 'js-cookie';
import { cookieIsSetToTrue, TrackPageViewIfEnabled } from '../util/cookiesHandling';
import { PrivacyPageContent } from '../content/content';

export default function PrivacyPage(): ReactElement {

    TrackPageViewIfEnabled();

    var breadcrumbs: { [id: string] : ILink; } = {
        'l1': { text: 'Home', classes: '', link: '/' },
        'l2': { text: 'Privacy', classes: '', link: '' },
    };

    const optInOrOutTextActive = (isTrackingEnabled: Boolean): String[] => {
        if (isTrackingEnabled) {
            return ["Click on the button to the right to opt out", "Opt Out"]
        }
        else {
            return ["Click on the button to the right to opt in", "Opt In"]
        }
    }

    const [ optInText, setOptInText ] = useState(optInOrOutTextActive(cookieIsSetToTrue('trackingEnabled')))

    const handleOptOut = () => {
        let trackingEnabledCookie: Boolean = cookieIsSetToTrue('trackingEnabled');
        setOptInText(optInOrOutTextActive(!trackingEnabledCookie))
        Cookies.set('trackingEnabled', String(!trackingEnabledCookie), { expires: 365 });
    };
    
    return (
        <>
            <TextBarComponent classes={PAGE_DESCRIPTION_TEXT_BAR_CLASSES} text={PrivacyPageContent.textBar} />
            <div className={BODY_CLASSES}>
                <div className="text-sm breadcrumbs">
                <ul>
                {Object.keys(breadcrumbs).map( key => (
                    <li>{breadcrumbs[key].link ? <Link to={breadcrumbs[key].link}>{breadcrumbs[key].text}</Link> : <>{breadcrumbs[key].text}</>}</li>
                ))}
                </ul>
                </div>
                <div className={H_1}>Privacy Policy</div>
                <div className="divider">{PrivacyPageContent.headers[0]}</div>
                <p>{PrivacyPageContent.bodyTexts[0]}</p>
                <div className="divider">{PrivacyPageContent.headers[1]}</div>
                <p>{PrivacyPageContent.bodyTexts[1]}</p>
                <div role="alert" className="alert bg-zinc-300 text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{optInText[0]}</span>
                    <div className="space-x-2">
                        <button onClick={handleOptOut} className={BUTTON_TYPE_ONE}>{optInText[1]}</button>
                    </div>
                </div>
                <div className="divider">{PrivacyPageContent.headers[2]}</div>
                <p>{PrivacyPageContent.bodyTexts[2]}</p>
                <div className="divider">{PrivacyPageContent.headers[3]}</div>
                <p>{PrivacyPageContent.bodyTexts[3]}</p>
                <div className="divider">{PrivacyPageContent.headers[4]}</div>
                <p>{PrivacyPageContent.bodyTexts[4]}</p>
                <div className="divider">{PrivacyPageContent.headers[5]}</div>
                <p>{PrivacyPageContent.bodyTexts[5]}</p>
            </div>
        </>
    );
}