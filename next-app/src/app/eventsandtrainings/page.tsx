'use client';

import { ReactElement } from 'react';
import { TrackPageViewIfEnabled } from '@/util/cookiesHandling';

export default function EventsAndTrainingsPage(): ReactElement {
    TrackPageViewIfEnabled();

    return (
        <div>
            <p className="bg-green text-bold">Events & Trainings page under construction</p>
        </div>
    );
}