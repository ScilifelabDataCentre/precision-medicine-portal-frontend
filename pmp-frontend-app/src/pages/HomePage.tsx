import { ReactElement } from 'react';
// import CardComponent from "../components/CardComponent";
import ImageCarouselAlternativeComponent from "../components/ImageCarouselAlternativeComponent";
import { BODY_CLASSES, 
        // BUTTON_TYPE_ONE, 
        // H_1
    } from '../constants';
// import { ICardConfig, ICardContent } from '../interfaces/types';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';

export default function HomePage(): ReactElement {
    TrackPageViewIfEnabled();

    // var cardTitleClasses: string = "text-center text-base-100-content text-xl font-semibold";
    // var cardTextClasses: string = "text-center";

    // var cardConfig: { [id: string] : ICardConfig; } = {
    //     'whiteCard': { 
    //         cardClasses: "w-[40rem] bg-base-100 text-base-100-content bg-opacity-95 shadow-xl border-2 border-base-100", 
    //         titleClasses: cardTitleClasses, 
    //         subTitleClasses: "",
    //         textClasses: cardTextClasses,
    //         imgClasses: "", 
    //         buttonClasses: "", 
    //         buttonPlacement: "",  
    //     },
    //     'blackCard': { 
    //         cardClasses: "bg-neutral bg-opacity-95 rounded-[10px] shadow border-2", 
    //         titleClasses: cardTitleClasses, 
    //         subTitleClasses: "",
    //         textClasses: cardTextClasses,
    //         imgClasses: "",
    //         buttonClasses: BUTTON_TYPE_ONE, 
    //         buttonPlacement: "justify-center", 
    //     }
    // };

    // var cardContent: { [id: string] : ICardContent } = {
    //     'whiteCard1': {
    //         title: "",
    //         subTitle: "",
    //         text: "In development", 
    //         buttonText: "",
    //         imageSrc: "",
    //         imageAlt: "",
    //     },
    //     'blackCard1': {
    //         title: "Data sources", 
    //         subTitle: "",
    //         text: "In development", 
    //         buttonText: "Sign In",
    //         imageSrc: "",
    //         imageAlt: "",
    //     },

    // };

    return (
        <div>
            <div className={BODY_CLASSES}>
                <ImageCarouselAlternativeComponent />
                {
  /* Commented out until the team has sufficient time to fill the cards with useful content
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col space-y-1.5">
                        <h1 className={H_1}>Latest News</h1>
                        <CardComponent cardConfig={cardConfig['whiteCard']} cardContent={cardContent['whiteCard1']} />
                        <CardComponent cardConfig={cardConfig['whiteCard']} cardContent={cardContent['whiteCard1']} />
                        <CardComponent cardConfig={cardConfig['whiteCard']} cardContent={cardContent['whiteCard1']} />
                        <CardComponent cardConfig={cardConfig['whiteCard']} cardContent={cardContent['whiteCard1']} />
                        <CardComponent cardConfig={cardConfig['blackCard']} cardContent={cardContent['blackCard1']} />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <h1 className={H_1}>Latest News</h1>
                        <CardComponent cardConfig={cardConfig['whiteCard']} cardContent={cardContent['whiteCard1']} />
                        <CardComponent cardConfig={cardConfig['whiteCard']} cardContent={cardContent['whiteCard1']} />
                        <CardComponent cardConfig={cardConfig['whiteCard']} cardContent={cardContent['whiteCard1']} />
                        <CardComponent cardConfig={cardConfig['whiteCard']} cardContent={cardContent['whiteCard1']} />
                        <CardComponent cardConfig={cardConfig['blackCard']} cardContent={cardContent['blackCard1']} />
                    </div>
                </div>
  */
}
            </div>
        </div>
    );
}