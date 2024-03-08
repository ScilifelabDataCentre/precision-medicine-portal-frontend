import { ReactElement } from 'react';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';

export default function SignInPage(): ReactElement {
    TrackPageViewIfEnabled();

    return (
        <div>
            <p className="bg-green text-bold">Sign In page under construction</p>
        </div>
    );
}