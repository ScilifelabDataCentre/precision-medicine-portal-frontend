import React, { ReactElement } from 'react';
import { useMatomo } from '@jonkoops/matomo-tracker-react';
import TextBarComponent from '../components/TextBarComponent';
import {
    BODY_CLASSES,
    H_1,
    PAGE_DESCRIPTION_TEXT_BAR_CLASSES,
} from '../constants';
import { Link } from 'react-router-dom';
import { ILink, ICardConfig, ICardContent } from '../interfaces/types';
import CardComponent from '../components/CardComponent';
import AccordionComponent from '../components/AccordionComponent';

export default function AboutPage(): ReactElement {
    const { trackPageView,} = useMatomo()

    // Track page view
    React.useEffect(() => {
        trackPageView()
    }, [])

    var pageTitle: string = "About Us";
    var textBarContent: string = "Get to know about the team behind the [product name] and our mission to connect you with the data you need.";
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
        'fundersAndPartnersCard': {
            cardClasses: "card lg:card-side bg-base-100 shadow-xl", 
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
        'fundersAndPartnersCard1': {
            title: "New album is released!", 
            text: "Click the button to listen on Spotiwhy app.", 
            buttonText: "",
            imageSrc: "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
            imageAlt: "Album",
        },
    };


    var breadcrumbs: { [id: string] : ILink; } = {
        'l1': { text: 'Home', classes: '', link: '/' },
        'l2': { text: 'About', classes: '', link: '' },
    };

    var dividers: string[] = ['Default', 'Default', 'Default', 'Default', 'Default'];
    
    return (
        <>
            <TextBarComponent classes={PAGE_DESCRIPTION_TEXT_BAR_CLASSES} text={textBarContent} />
            <div className={BODY_CLASSES}>
                <div className="text-sm breadcrumbs">
                <ul>
                {Object.keys(breadcrumbs).map( key => (
                    <li>{breadcrumbs[key].link ? <Link to={breadcrumbs[key].link}>{breadcrumbs[key].text}</Link> : <>{breadcrumbs[key].text}</>}</li>
                ))}
                </ul>
                </div>
                <div className={H_1}>{pageTitle}</div>
                <div className="divider">{dividers[0]}</div>
                <p>{PMDDescription}</p>
                <div className="divider">{dividers[1]}</div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <CardComponent cardConfig={cardConfig['teamCard']} cardContent={cardContent['teamCard1']} />
                        <CardComponent cardConfig={cardConfig['teamCard']} cardContent={cardContent['teamCard1']} />
                    </div>
                    <div className="flex flex-col">
                        <CardComponent cardConfig={cardConfig['teamCard']} cardContent={cardContent['teamCard1']} />
                        <CardComponent cardConfig={cardConfig['teamCard']} cardContent={cardContent['teamCard1']} />
                    </div>
                    <div className="flex flex-col">
                        <CardComponent cardConfig={cardConfig['teamCard']} cardContent={cardContent['teamCard1']} />
                    </div>
                </div>
                <div className="divider">{dividers[2]}</div>
                <AccordionComponent />
                <div className="divider">{dividers[3]}</div>
                <div className="flex flex-row space-x-4 justify-between">
                    <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard1']} />
                    <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard1']} />
                </div>
                <div className="divider">{dividers[4]}</div>
                <div className="flex flex-row space-x-4 justify-between">
                    <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard1']} />
                    <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard1']} />
                </div>
            </div>
        </>
    );
}