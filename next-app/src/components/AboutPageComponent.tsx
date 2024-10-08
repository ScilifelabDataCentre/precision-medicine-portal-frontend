'use client';

import { ReactElement } from 'react';
import {
    H_1,
} from '@/constants';
import Link from 'next/link';
import { ILink, } from '@/interfaces/types';
import { usePathname } from 'next/navigation';

export default function AboutPage(): ReactElement {
    const pageTitle: string = "About Us";
    
    const breadcrumbs: { [id: string] : ILink; } = {
        'l1': { text: 'Home', classes: '', link: '/' },
        'l2': { text: 'About', classes: '', link: '' },
    };

    const currentRoute = usePathname();

    const paths = {
        'Product': '/about/product',
        'FAQ': '/about/faq',
        'Team': '/about/team',
        'Partners': '/about/partners'
    }
    
    return (
        <>
            <div>
                <div className="text-sm breadcrumbs">
                <ul>
                {Object.keys(breadcrumbs).map( key => (
                    <li key={key}>{breadcrumbs[key as keyof typeof breadcrumbs].link ? <Link href={breadcrumbs[key].link}>{breadcrumbs[key].text}</Link> : <>{breadcrumbs[key].text}</>}</li>
                ))}
                </ul>
                </div>
                <div className={H_1}>{pageTitle}</div>
                <div role="tablist" className="tabs tabs-lifted pb-4">
                    {Object.keys(paths).map( key => (
                        <Link 
                            key={key}
                            href={paths[key as keyof typeof paths]} 
                            role='tab' 
                            className={`tab ${ currentRoute == paths[key as keyof typeof paths] 
                                ? 
                                'tab-active text-info-content !bg-info' 
                                : 
                                'bg-white shadow'}`}
                        >
                        {key}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}