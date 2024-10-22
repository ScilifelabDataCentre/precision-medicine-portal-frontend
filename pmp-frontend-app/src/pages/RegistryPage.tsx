import { ReactElement } from 'react';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';
import RegistryComponent from '../components/RegistryComponent';
import { BODY_CLASSES } from '../constants';

export default function DataPage(): ReactElement {
    TrackPageViewIfEnabled();

    return (
        <div className={BODY_CLASSES + " py-16"}>
            <RegistryComponent />
        </div>
    );
}