import React, { ReactElement } from 'react';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';
import ContactFormComponent from '../components/ContactFormComponent';
import { BUTTON_TYPE_ONE } from '../constants';

export default function ContactPage(): ReactElement {
    TrackPageViewIfEnabled();

    return (
        <>
            <ContactFormComponent />
        </>
    );
}