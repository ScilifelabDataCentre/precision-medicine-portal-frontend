import { ReactElement } from 'react';
import CardComponent from "../components/CardComponent";
import ImageCarouselComponent from "../components/ImageCarouselComponent";
import { BODY_CLASSES, BUTTON_TYPE_ONE, H_1} from '../constants';
import { ICardConfig, ICardContent } from '../interfaces/types';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';

export default function HomePage(): ReactElement {
    TrackPageViewIfEnabled();

    var cardTitleClasses: string = "text-center text-white text-xl font-semibold";
    var cardTextClasses: string = "text-center";

    var cardConfig: { [id: string] : ICardConfig; } = {
        'whiteCard': { 
            cardClasses: "w-[40rem] bg-white text-black bg-opacity-95 shadow-xl border-2 border-zinc-300", 
            titleClasses: cardTitleClasses, 
            subTitleClasses: "",
            textClasses: cardTextClasses,
            imgClasses: "", 
            buttonClasses: "", 
            buttonPlacement: "",  
        },
        'blackCard': { 
            cardClasses: "bg-base-100 bg-opacity-95 rounded-[10px] shadow border-2", 
            titleClasses: cardTitleClasses, 
            subTitleClasses: "",
            textClasses: cardTextClasses,
            imgClasses: "",
            buttonClasses: BUTTON_TYPE_ONE, 
            buttonPlacement: "justify-center", 
        }
    };

    var cardContent: { [id: string] : ICardContent } = {
        'whiteCard1': {
            title: "",
            subTitle: "",
            text: "If a dog chews shoes whose shoes does he choose?", 
            buttonText: "",
            imageSrc: "",
            imageAlt: "",
        },
        'blackCard1': {
            title: "Data Search", 
            subTitle: "",
            text: "Some text; under development", 
            buttonText: "Sign In",
            imageSrc: "",
            imageAlt: "",
        },

    };

    return (
        <div>
            <div className={BODY_CLASSES}>
                <ImageCarouselComponent />
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
            </div>
        </div>
    );
}