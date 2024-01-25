import React from 'react';
import { useMatomo } from '@jonkoops/matomo-tracker-react';
import CardComponent from "../components/CardComponent";
import ImageCarouselComponent from "../components/ImageCarouselComponent";
import TextBarComponent from "../components/TextBarComponent";

export default function HomePage() {

     const { trackPageView, trackEvent } = useMatomo()

    // Track page view
    React.useEffect(() => {
        trackPageView()
    }, [])

    var headerOne: string = "text-left text-black text-[40px] font-semibold";
    var whiteTextCardClasses: string = "w-[580px] h-20 bg-white text-black bg-opacity-95 shadow-xl border-2 border-zinc-300";
    var blackCardClasses: string = "w-[700px] h-[253px] bg-base-100 bg-opacity-95 rounded-[10px] shadow border-2";
    var textBarClasses: string = "bg-gradient-to-b from-base-100 from-90% to-white text-justify text-[48px] font-bold py-8";
    var textBarContent: string = "UNDER CONSTRUCTION - Web portal by DDLS Data Science Node";

    return (
        <div>
            <TextBarComponent classes={textBarClasses} text={textBarContent} />
            <div className="bg-white space-y-14">
            <ImageCarouselComponent />
            <div className="grid grid-cols-2 gap4">
                <div className="flex flex-col space-y-1.5 ...">
                    <h1 className={headerOne}>Latest News</h1>
                    <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" />
                    <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" />
                    <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" />
                    <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" />
                </div>
                <div className="flex flex-col space-y-1.5 ...">
                    <h1 className={headerOne}>Upcoming Events</h1>
                    <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" />
                    <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" />
                    <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" />
                </div>
            </div>
                <div className="grid grid-cols-2">
                    <CardComponent classes={blackCardClasses} title="Data Search" text="Some text; under development" button="Sign In" />
                    <CardComponent classes={blackCardClasses} title="Data Search" text="Some text; under development" button="Sign In" />
                </div>
            </div>
        </div>
    );
}