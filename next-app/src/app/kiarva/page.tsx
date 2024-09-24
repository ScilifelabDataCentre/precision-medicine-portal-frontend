'use client';

import { ReactElement } from 'react';
import { TrackPageViewIfEnabled } from '@/util/cookiesHandling';
import Iframe from 'react-iframe';

export default function KiarvaIFramePage(): ReactElement {
    TrackPageViewIfEnabled();

    let kiarva_hostname = '';

    return (
        <>
            {kiarva_hostname &&
            (<Iframe 
            url={kiarva_hostname}
            width="100%" 
            height="1000" 
            allow='modals scripts' />)
            }
        </>
    );
}