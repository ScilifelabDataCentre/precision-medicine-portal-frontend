import React, { ReactElement } from 'react';
import { useMatomo } from '@jonkoops/matomo-tracker-react';
import { ICardConfig, ICardContent } from '../interfaces/types';
import CardComponent from '../components/CardComponent';

export default function AboutProductPage(): ReactElement {
    const { trackPageView,} = useMatomo()

    // Track page view
    React.useEffect(() => {
        trackPageView()
    }, [])

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

    var cardConfig: { [id: string] : ICardConfig; } = {
        'teamCard': { 
            cardClasses: "card w-96 bg-base-100 shadow-xl", 
            titleClasses: "card-title", 
            textClasses: "", 
            buttonClasses: "", 
            buttonPlacement: "",  
        },
    };

    var cardContent: { [id: string] : ICardContent } = {
        'teamCard1': {
            title: "Shoes!", 
            text: "If a dog chews shoes whose shoes does he choose?", 
            buttonText: "",
            imageSrc: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
            imageAlt: "Shoes",
        },
    };
    
    return (
        <>
            <div className="divider">Product</div>
            <p>{PMDDescription}</p>
            <div className="divider pt-16">Team & Contributions</div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col space-y-8">
                    <CardComponent cardConfig={cardConfig['teamCard']} cardContent={cardContent['teamCard1']} />
                    <CardComponent cardConfig={cardConfig['teamCard']} cardContent={cardContent['teamCard1']} />
                </div>
                <div className="flex flex-col space-y-8">
                    <CardComponent cardConfig={cardConfig['teamCard']} cardContent={cardContent['teamCard1']} />
                    <CardComponent cardConfig={cardConfig['teamCard']} cardContent={cardContent['teamCard1']} />
                </div>
                <div className="flex flex-col space-y-8">
                    <CardComponent cardConfig={cardConfig['teamCard']} cardContent={cardContent['teamCard1']} />
                </div>
            </div>
        </>
    );
}