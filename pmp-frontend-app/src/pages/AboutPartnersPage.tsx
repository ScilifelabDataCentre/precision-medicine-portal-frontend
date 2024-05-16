import { ReactElement } from 'react';
import { ICardConfig, ICardContent } from '../interfaces/types';
import CardComponent from '../components/CardComponent';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';

export default function AboutPartnersPage(): ReactElement {
    TrackPageViewIfEnabled();

    var cardConfig: { [id: string] : ICardConfig; } = {
        'fundersAndPartnersCard': {
            cardClasses: "card lg:card-side bg-white shadow-xl", 
            titleClasses: "card-title", 
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
    };

    var cardContent: { [id: string] : ICardContent } = {
        'fundersAndPartnersCard1': {
            title: "New album is released!",
            subTitle: "",
            text: "Click the button to listen on Spotiwhy app.", 
            buttonText: "",
            imageSrc: "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
            imageAlt: "Album",
        },
    };

    
    return (
        <>
            <div className="divider">Funders</div>
            <div className="flex flex-row space-x-4 justify-between place-items-center">
                <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard1']} />
                <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard1']} />
            </div>
            <div className="divider pt-16">Partners</div>
            <div className="flex flex-row space-x-4 justify-between place-items-center">
                <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard1']} />
                <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard1']} />
            </div>
        </>
    );
}