'use client';

import { ReactElement, useState } from 'react';
import {
    BODY_CLASSES,
    BUTTON_TYPE_ONE,
    H_1,
} from '@/constants';
import Link from 'next/link';
import { ILink } from "@/interfaces/types";
import Cookies from 'js-cookie';
import { TrackPageViewIfEnabled, cookieIsSetToTrue } from '@/util/cookiesHandling';
import { PrivacyPageContent } from '@/content/content';

export default async function PrivacyPage(): Promise<ReactElement> {
    TrackPageViewIfEnabled();

    const breadcrumbs: { [id: string] : ILink; } = {
        'l1': { text: 'Home', classes: '', link: '/' },
        'l2': { text: 'Privacy', classes: '', link: '' },
    };

    const optInOrOutTextActive = async (isTrackingEnabled: boolean): Promise<string[]> => {
        if (await isTrackingEnabled) {
            return ["Click on the button to the right to opt out", "Opt Out"]
        }
        else {
            return ["Click on the button to the right to opt in", "Opt In"]
        }
    }

    const [ optInText, setOptInText ] = useState(optInOrOutTextActive(await cookieIsSetToTrue('trackingEnabled')))

    const handleOptOut = async () => {
        const trackingEnabledCookie: boolean = await cookieIsSetToTrue('trackingEnabled');
        setOptInText(optInOrOutTextActive(!trackingEnabledCookie))
        Cookies.set('trackingEnabled', String(!trackingEnabledCookie), { expires: 365 });
    };
    
    return (
        <>
            <div className={BODY_CLASSES}>
                <div className="text-sm breadcrumbs">
                    <ul>
                    {Object.keys(breadcrumbs).map( key => (
                        <li key={key}>
                            {
                            breadcrumbs[key].link 
                                ? 
                                <Link href={breadcrumbs[key].link}>
                                    {breadcrumbs[key].text}
                                </Link> 
                                : 
                                <>
                                    {breadcrumbs[key].text}
                                </>
                            }
                        </li>
                    ))}
                    </ul>
                </div>
                <div className={H_1}>Privacy Policy</div>
                <div className="divider">{PrivacyPageContent.content[0].header}</div>
                <p>{PrivacyPageContent.content[0].body}</p>
                <div className="divider">{PrivacyPageContent.content[1].header}</div>
                <p>{PrivacyPageContent.content[1].body}</p>
                <div role="alert" className="alert bg-neutral text-neutral-content">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{optInText.then(res => res[0])}</span>
                    <div className="space-x-2">
                        <button onClick={handleOptOut} className={BUTTON_TYPE_ONE}>{optInText.then(res => res[1])}</button>
                    </div>
                </div>
                <div className="divider">{PrivacyPageContent.content[2].header}</div>
                <p>
                    We collect information that your browser sends to us whenever you visit our Service, referred to as &apos;log data.&apos; This data may include:
                </p>
                <ul className="list-disc pl-4">
                    <li>The website you visited us from</li>
                    <li>The parts of our Service you visit</li>
                    <li>The date and duration of your visit</li>
                    <li>Your anonymised IP address</li>
                    <li>Information about the device you used during your visit (device type, operating system, screen resolution, language, country you are located in, and web browser type)</li>
                </ul>
                <p>
                    We process this usage data using Matomo Analytics (hosted on SciLifeLab servers and operated solely by SciLifeLab)
                    for statistical purposes, to improve our Service, and to recognise and prevent any misuse. You can opt out of your statistics 
                    being collected below. Note that the tracking opt-out feature requires cookies to be enabled. 
                </p>
                <div className="divider">{PrivacyPageContent.content[3].header}</div>
                <p>{PrivacyPageContent.content[3].body}</p>
                <div className="divider">{PrivacyPageContent.content[4].header}</div>
                <p>{PrivacyPageContent.content[4].body}</p>
                <div className="divider">{PrivacyPageContent.content[5].header}</div>
                <p>{PrivacyPageContent.content[5].body}</p>
            </div>
        </>
    );
}