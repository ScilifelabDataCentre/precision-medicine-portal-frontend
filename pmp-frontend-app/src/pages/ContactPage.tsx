import { ReactElement } from 'react';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';
import { BODY_CLASSES, H_1 } from '../constants';
import { ILink } from '../interfaces/types';
import { Link } from 'react-router-dom';
import { ContactPageContent } from '../content/content';

export default function ContactPage(): ReactElement {
    TrackPageViewIfEnabled();

    var breadcrumbs: { [id: string] : ILink; } = {
        'l1': { text: 'Home', classes: '', link: '/' },
        'l2': { text: 'Contact', classes: '', link: '' },
    };

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
            <div className="divider">{ContactPageContent.content[0].header}</div>
            <p>{ContactPageContent.content[0].body}</p>
            {/*<ContactFormComponent />*/}
            <div className="divider">{ContactPageContent.content[1].header}</div>
            <p>{ContactPageContent.content[1].body}</p>
        </div>
    );
}