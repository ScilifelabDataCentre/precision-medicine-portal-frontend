'use client';

import { ReactElement } from 'react';
import { TrackPageViewIfEnabled } from '@/util/cookiesHandling';
import { BODY_CLASSES, H_1 } from '@/constants'
import Link from 'next/link';
import { ILink } from "@/interfaces/types";
import { ContactPageContent } from '@/content/content';
import ContactFormComponent from '@/components/ContactFormComponent';

export default function ContactPage(): ReactElement {
    TrackPageViewIfEnabled();

    const breadcrumbs: { [id: string] : ILink; } = {
        'l1': { text: 'Home', classes: '', link: '/' },
        'l2': { text: 'Contact', classes: '', link: '' },
    };

    return (
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
            <div className={H_1}>Contact</div>
            <div className="divider">{ContactPageContent.content[0].header}</div>
            <p>{ContactPageContent.content[0].body}</p>
            <ContactFormComponent />
            <div className="divider">{ContactPageContent.content[1].header}</div>
            <p>{ContactPageContent.content[1].body}</p>
        </div>
    );
}