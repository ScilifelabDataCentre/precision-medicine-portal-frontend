import { ReactElement } from 'react';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';

export default function AboutProductPage(): ReactElement {
    TrackPageViewIfEnabled();

    var PMDDescription: string = `
    The Precision Medicine Portal is part of the [SciLifeLab DDLS node for Precision Medicine and Diagnostics](https://www.scilifelab.se/data-driven/about-ddls/precision-medicine-and-diagnostics/) at Karolinska institutet and funded by the [Knut and Alice Wallenberg Foundation](https://kaw.wallenberg.org/en). Launching in autumn 2024, our overall goal is to support Swedish researchers with essential resources within precision medicine (or personalised medicine), such as relevant data sources, interactive data dashboards, data management support, and links to conferences, workshops and other Nordic precision medicine events. 

    Our website is divided into two repositories: a frontend React app and a backend using Python and Flask. While operated by the SciLifeLab Data Centre and partners, we very much welcome community contributions.
                            `;

    
    return (
        <>
            <p>{PMDDescription}</p>
        </>
    );
}