import { ReactElement } from 'react';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';
import { BODY_CLASSES, H_1 } from '../constants';
import { ILink } from '../interfaces/types';
import { Link } from 'react-router-dom';

export default function ContactPage(): ReactElement {
    TrackPageViewIfEnabled();

    var breadcrumbs: { [id: string] : ILink; } = {
        'l1': { text: 'Home', classes: '', link: '/' },
        'l2': { text: 'Contact', classes: '', link: '' },
    };

    var dividers: string[] = [
        'Contact Form', 
        'Personal Data Policy', 
    ];

    return (
        <div className={BODY_CLASSES}>
            <div className="text-sm breadcrumbs">
                <ul>
                {Object.keys(breadcrumbs).map( key => (
                    <li>{breadcrumbs[key].link ? <Link to={breadcrumbs[key].link}>{breadcrumbs[key].text}</Link> : <>{breadcrumbs[key].text}</>}</li>
                ))}
                </ul>
            </div>
            <div className={H_1}>Contact</div>
            <div className="divider">{dividers[0]}</div>
            <p>
                Please fill out this form if you need to contact us at the Swedish Precision Medicine Portal. 
                Provide your contact information and we should get back to you within a weeks time.
            </p>
            {/*<ContactFormComponent />*/}
            <div className="divider">{dividers[1]}</div>
            <p>
                The personal data you provide in this form, your name and email address, will be used to process your 
                suggestion of added resource to the Swedish Precision Medicine Portal. It is a service run by the 
                SciLifeLab Data Centre on assignment from the … It serves to address…

                The information you provide will be processed for research purposes, i.e. using the lawful basis of 
                public interest and in accordance with Regulation (EU) 2016/679 of the European Parliament and of the 
                Council of 27 April 2016, the General Data Protection Regulation.

                The following parties will have access to processing your personal data: SciLifeLab Data Centre, 
                Uppsala University. Your personal data will be deleted when no longer needed, or when stipulated 
                by the archival rules for the university as a government authority. If you want to update or remove 
                your personal data please contact the controller SciLifeLab Data Centre at Uppsala University using 
                datacentre@scilifelab.se.
            </p>
        </div>
    );
}