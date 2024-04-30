import { ReactElement } from 'react';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';
import DataSourcesComponent from '../components/DataSourcesComponent';

export default function DataPage(): ReactElement {
    TrackPageViewIfEnabled();

    return (
        <div>
            <p className="bg-green text-bold">Data page under construction</p>
            <DataSourcesComponent />
        </div>
    );
}