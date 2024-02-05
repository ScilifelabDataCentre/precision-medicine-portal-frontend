import React, { ReactElement } from 'react';
import { useMatomo } from '@jonkoops/matomo-tracker-react';
import { ICardConfig, ICardContent } from '../interfaces/types';
import CardComponent from '../components/CardComponent';

export default function AboutPartnersPage(): ReactElement {
    const { trackPageView,} = useMatomo()

    // Track page view
    React.useEffect(() => {
        trackPageView()
    }, [])

    var cardConfig: { [id: string] : ICardConfig; } = {
        'fundersAndPartnersCard': {
            cardClasses: "card lg:card-side bg-base-100 shadow-xl", 
            titleClasses: "card-title", 
            textClasses: "", 
            buttonClasses: "", 
            buttonPlacement: "",  
        },
    };

    var cardContent: { [id: string] : ICardContent } = {
        'fundersAndPartnersCard1': {
            title: "New album is released!", 
            text: "Click the button to listen on Spotiwhy app.", 
            buttonText: "",
            imageSrc: "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
            imageAlt: "Album",
        },
    };

    
    return (
        <>
            <div className="divider">Funders</div>
            <div className="flex flex-row space-x-4 justify-between">
                <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard1']} />
                <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard1']} />
            </div>
            <div className="divider">Partners</div>
            <div className="flex flex-row space-x-4 justify-between">
                <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard1']} />
                <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard1']} />
            </div>
        </>
    );
}