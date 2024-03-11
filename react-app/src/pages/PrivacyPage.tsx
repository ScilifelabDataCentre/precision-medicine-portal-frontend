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

export default function PrivacyPage(): ReactElement {

    TrackPageViewIfEnabled();

    var textBarContent: string = "Transparency is one of our guiding principles. Get acquainted with how we're creating a secure space for you.";
    var policyText: string = `
                                SciLifeLab operates the Swedish Precision Medicine Portal, which provides the Service. This page is 
                                used to inform website visitors regarding our personal data processing policy. If you choose to use 
                                our Service, then your personal data will be processed in accordance with this policy. The personal 
                                information that we collect is used for providing and improving the Service. We will not use 
                                or share your information with anyone except as described in this policy. All collected personal 
                                information will be processed for research purposes, i.e. using the lawful basis of public interest 
                                and in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council of 
                                27 April 2016, the General Data Protection Regulation.
                            `;
    var visitorStatisticsText: string =   `
                                We want to inform you that whenever you visit our Service, we collect the information that your 
                                browser sends to us, which is called "log data". Log data may include: the website that you 
                                visited us from, the parts of our Service you visit, the date and duration of your visit, 
                                your anonymised IP address, information from the device that you used during your visit (device 
                                type, operating system, screen resolution, language, country you are located in, and 
                                web browser type), and more. We process this usage data in Matomo Analytics (hosted on 
                                SciLifeLab servers and operated solely by SciLifeLab) for statistical purposes, to 
                                improve our Service, and to recognise and stop any misuse. You can opt out of your 
                                statistics being collected below:\n\nThe tracking opt-out feature requires cookies to be enabled.
                                    `;
    var formsText: string = `
                                Our Service contains a number of forms that visitors can use to contact us or send us suggestions. 
                                The website visitors may choose to provide their personal information such as their name and e-mail 
                                address through these forms. The following parties will have access to processing the personal data 
                                provided through the forms; SciLifeLab Data Centre, Uppsala University, Kungliga Tekniska högskolan 
                                (KTH). Your personal data will be deleted when no longer needed, or when stipulated by the archival 
                                rules for the university as a government authority. If you want to update or remove your personal data, 
                                please contact the controller SciLifeLab Data Centre at Uppsala University using x@scilifelab.se                            
                            `;
    var linksToOtherSitesText: string = `
                                Our Service may contain links to other sites. If you click on a third-party link, you will be 
                                directed to that site. Note that these external sites are not operated by us. Therefore, we 
                                strongly advise you to review the privacy policy of these websites. We have no control over, 
                                and assume no responsibility for, the content, privacy policies, or practices of any third-party 
                                sites or services.
                                        `;
    var changeToPrivacyText: string =   `
                                We may update our privacy policy from time to time. Thus, we advise you to review this page 
                                periodically for any changes. We will notify you of any changes by posting the new privacy policy 
                                on this page. These changes posted on this page are effective immediately.
                                        `;
    var contactUsText: string = `
                                If you have any questions or suggestions about our privacy policy, do not hesitate to contact 
                                us (link to contact page).
                                `;

    var breadcrumbs: { [id: string] : ILink; } = {
        'l1': { text: 'Home', classes: '', link: '/' },
        'l2': { text: 'Privacy', classes: '', link: '' },
    };

    var dividers: string[] = [
        'Privacy Policy', 
        'Visitor statistics', 
        'Forms', 
        'Links to Other Sites',
        'Changes to This Privacy Policy',
        'Contact Us',
    ];

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
            <TextBarComponent classes={PAGE_DESCRIPTION_TEXT_BAR_CLASSES} text={textBarContent} />
            <div className={BODY_CLASSES}>
                <div className="text-sm breadcrumbs">
                <ul>
                {Object.keys(breadcrumbs).map( key => (
                    <li>{breadcrumbs[key].link ? <Link to={breadcrumbs[key].link}>{breadcrumbs[key].text}</Link> : <>{breadcrumbs[key].text}</>}</li>
                ))}
                </ul>
                </div>
                <div className={H_1}>Privacy Policy</div>
                <div className="divider">{dividers[0]}</div>
                <p>{policyText}</p>
                <div className="divider">{dividers[1]}</div>
                <p>{visitorStatisticsText}</p>
                <div role="alert" className="alert bg-zinc-300 text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{optInText[0]}</span>
                    <div className="space-x-2">
                        <button onClick={handleOptOut} className={BUTTON_TYPE_ONE}>{optInText[1]}</button>
                    </div>
                </div>
                <div className="divider">{dividers[2]}</div>
                <p>{formsText}</p>
                <div className="divider">{dividers[3]}</div>
                <p>{linksToOtherSitesText}</p>
                <div className="divider">{dividers[4]}</div>
                <p>{changeToPrivacyText}</p>
                <div className="divider">{dividers[5]}</div>
                <p>{contactUsText}</p>
            </div>
        </>
    );
}