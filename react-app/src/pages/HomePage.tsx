import React, { ReactElement } from 'react';
import { useMatomo } from '@jonkoops/matomo-tracker-react';
import CardComponent from "../components/CardComponent";
import ImageCarouselComponent from "../components/ImageCarouselComponent";
import TextBarComponent from "../components/TextBarComponent";
import { BODY_CLASSES, BUTTON_TYPE_ONE, H_1, PAGE_DESCRIPTION_TEXT_BAR_CLASSES } from '../constants';
import { ICardConfig, ICardContent } from '../interfaces/types';

export default function HomePage(): ReactElement {

    const { trackPageView, } = useMatomo()
    // const { trackPageView, trackEvent } = useMatomo() , trackEvent to track clicks and other events
    // Track page view
    React.useEffect(() => {
        trackPageView()
    }, [])

    var cardTitleClasses: string = "text-center text-white text-xl font-semibold";
    var cardTextClasses: string = "text-center";

    var cardConfig: { [id: string] : ICardConfig; } = {
        'whiteCard': { 
            cardClasses: "w-[580px] h-20 bg-white text-black bg-opacity-95 shadow-xl border-2 border-zinc-300", 
            titleClasses: cardTitleClasses, 
            textClasses: cardTextClasses, 
            buttonClasses: "", 
            buttonPlacement: "",  
        },
        'blackCard': { 
            cardClasses: "bg-base-100 bg-opacity-95 rounded-[10px] shadow border-2", 
            titleClasses: cardTitleClasses, 
            textClasses: cardTextClasses, 
            buttonClasses: BUTTON_TYPE_ONE, 
            buttonPlacement: "justify-center", 
        }
    };

    var cardContent: { [id: string] : ICardContent } = {
        'whiteCard1': {
            title: "", 
            text: "If a dog chews shoes whose shoes does he choose?", 
            buttonText: "",
            imageSrc: "",
            imageAlt: "",
        },
        'blackCard1': {
            title: "Data Search", 
            text: "Some text; under development", 
            buttonText: "Sign In",
            imageSrc: "",
            imageAlt: "",
        },

    };

    var textBarContent: string = "UNDER CONSTRUCTION - Web portal by DDLS Data Science Node";

    return (
        <div>
            <TextBarComponent classes={PAGE_DESCRIPTION_TEXT_BAR_CLASSES} text={textBarContent} />
            <div className={BODY_CLASSES}>
            <ImageCarouselComponent />
            <div className="grid grid-cols-2 gap4">
                <div className="flex flex-col space-y-1.5 ...">
                    <h1 className={H_1}>Latest News</h1>
                    <CardComponent CardConfig={cardConfig['whiteCard']} CardContent={cardContent['whiteCard1']} />
                    <CardComponent CardConfig={cardConfig['whiteCard']} CardContent={cardContent['whiteCard1']} />
                    <CardComponent CardConfig={cardConfig['whiteCard']} CardContent={cardContent['whiteCard1']} />
                    <CardComponent CardConfig={cardConfig['whiteCard']} CardContent={cardContent['whiteCard1']} />
                </div>
                <div className="flex flex-col space-y-1.5 ...">
                    <h1 className={H_1}>Upcoming Events</h1>
                    <CardComponent CardConfig={cardConfig['whiteCard']} CardContent={cardContent['whiteCard1']} />
                    <CardComponent CardConfig={cardConfig['whiteCard']} CardContent={cardContent['whiteCard1']} />
                    <CardComponent CardConfig={cardConfig['whiteCard']} CardContent={cardContent['whiteCard1']} />
                </div>
            </div>
                <div className="grid grid-cols-2">
                    <CardComponent CardConfig={cardConfig['blackCard']} CardContent={cardContent['blackCard1']} />
                    <CardComponent CardConfig={cardConfig['blackCard']} CardContent={cardContent['blackCard1']} />
                </div>
            </div>
        </div>
    );
}