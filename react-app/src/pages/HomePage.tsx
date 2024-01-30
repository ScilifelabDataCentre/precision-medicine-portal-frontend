import React, { ReactElement } from 'react';
import { useMatomo } from '@jonkoops/matomo-tracker-react';
import CardComponent from "../components/CardComponent";
import ImageCarouselComponent from "../components/ImageCarouselComponent";
import TextBarComponent from "../components/TextBarComponent";
import { BODY_CLASSES, BUTTON_TYPE_ONE, HEADER_ONE, PAGE_DESCRIPTION_TEXT_BAR_CLASSES } from '../constants';

export default function HomePage(): ReactElement {

    const { trackPageView, } = useMatomo()
    // const { trackPageView, trackEvent } = useMatomo() , trackEvent to track clicks and other events
    // Track page view
    React.useEffect(() => {
        trackPageView()
    }, [])

    var whiteTextCardClasses: string = "w-[580px] h-20 bg-white text-black bg-opacity-95 shadow-xl border-2 border-zinc-300";
    var blackCardClasses: string = "bg-base-100 bg-opacity-95 rounded-[10px] shadow border-2";
    var textBarContent: string = "UNDER CONSTRUCTION - Web portal by DDLS Data Science Node";

    return (
        <div>
            <TextBarComponent classes={PAGE_DESCRIPTION_TEXT_BAR_CLASSES} text={textBarContent} />
            <div className={BODY_CLASSES}>
            <ImageCarouselComponent />
            <div className="grid grid-cols-2 gap4">
                <div className="flex flex-col space-y-1.5 ...">
                    <h1 className={HEADER_ONE}>Latest News</h1>
                    <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" buttonClasses=''/>
                    <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" buttonClasses=''/>
                    <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" buttonClasses=''/>
                    <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" buttonClasses=''/>
                </div>
                <div className="flex flex-col space-y-1.5 ...">
                    <h1 className={HEADER_ONE}>Upcoming Events</h1>
                    <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" buttonClasses=''/>
                    <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" buttonClasses=''/>
                    <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" buttonClasses=''/>
                </div>
            </div>
                <div className="grid grid-cols-2">
                    <CardComponent classes={blackCardClasses} title="Data Search" text="Some text; under development" button="Sign In" buttonClasses={BUTTON_TYPE_ONE}/>
                    <CardComponent classes={blackCardClasses} title="Data Search" text="Some text; under development" button="Sign In" buttonClasses={BUTTON_TYPE_ONE}/>
                </div>
            </div>
        </div>
    );
}