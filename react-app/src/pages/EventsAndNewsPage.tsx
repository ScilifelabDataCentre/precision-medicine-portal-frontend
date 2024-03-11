import { ReactElement } from 'react';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';

export default function EventsAndNewsPage(): ReactElement {
    TrackPageViewIfEnabled();

    return (
        <div>
            <p className="bg-green text-bold">Events & News page under construction</p>
        </div>
    );
}