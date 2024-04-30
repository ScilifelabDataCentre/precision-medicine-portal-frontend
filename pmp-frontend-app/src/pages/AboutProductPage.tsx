import { ReactElement } from 'react';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';

export default function AboutProductPage(): ReactElement {
    TrackPageViewIfEnabled();

    var PMDDescription: string = `
                            Ut rhoncus ante in metus lobortis, eu euismod magna dignissim. Duis nec condimentum purus. 
                            Quisque urna enim, placerat non fermentum sed, pharetra sit amet quam. Ut rhoncus ante in metus lobortis, 
                            eu euismod magna dignissim. Duis nec condimentum purus. Quisque urna enim, placerat non fermentum sed, 
                            pharetra sit amet quam. Ut rhoncus ante in metus lobortis, eu euismod magna dignissim. Duis nec condimentum purus. 
                            Quisque urna enim, placerat non fermentum sed, pharetra sit amet quam. Ut rhoncus ante in metus lobortis, 
                            eu euismod magna dignissim. Duis nec condimentum purus. Quisque urna enim, placerat non fermentum sed, 
                            pharetra sit amet quam. Ut rhoncus ante in metus lobortis, eu euismod magna dignissim. Duis nec condimentum purus. 
                            Quisque urna enim, placerat non fermentum sed, pharetra sit amet quam. Ut rhoncus ante in metus lobortis, eu euismod magna dignissim. 
                            Duis nec condimentum purus. Quisque urna enim, placerat non fermentum sed, pharetra sit amet quam. Ut rhoncus ante in metus lobortis, 
                            eu euismod magna dignissim. Duis nec condimentum purus. Quisque urna enim, placerat non fermentum sed, pharetra sit amet quam.
                            `;

    
    return (
        <>
            <p>{PMDDescription}</p>
        </>
    );
}