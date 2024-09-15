import { ReactElement } from 'react';
import { ICardConfig, ICardContent, ILink } from '../interfaces/types';
import CardComponent from '../components/CardComponent';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';
import nbisImage from '../assets/Partner logo/nbislogo_orange_txt_3cb0778d90.svg';
import scilifelabImage from '../assets/Partner logo/SciLifeLab_Logotype_Green_POS.png';
import { BODY_CLASSES, H_1 } from '../constants';
import { Link } from 'react-router-dom';

export default function EventsAndTrainingsPage(): ReactElement {
    TrackPageViewIfEnabled();

    var breadcrumbs: { [id: string] : ILink; } = {
        'l1': { text: 'Home', classes: '', link: '/' },
        'l2': { text: 'Events & Training', classes: '', link: '' },
    };

    let cardClasses: string = "flex flex-row justify-center items-center w-full h-full bg-white shadow-xl";

    let cardConfig: { [id: string] : ICardConfig; } = {
        'sslCalendar': {
            cardClasses: cardClasses + " pl-6",
            titleClasses: "card-title",
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "object-contain h-56 w-56",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
        'sslTrainingPortal': {
            cardClasses: cardClasses + " pl-6",
            titleClasses: "card-title",
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "object-contain h-56 w-56",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
        'nbis': {
            cardClasses: cardClasses + " pl-10",
            titleClasses: "card-title",
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "object-contain h-36 w-36",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
        'sllDataPlatform': {
            cardClasses: cardClasses + " pl-6",
            titleClasses: "card-title",
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "object-contain h-56 w-56",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
        'pathogensPortal': {
            cardClasses: cardClasses + " pl-6",
            titleClasses: "card-title",
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "object-contain h-56 w-56",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
        'elixir': {
            cardClasses: cardClasses + " pl-6",
            titleClasses: "card-title",
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "object-contain h-56 w-56",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
        'gms': {
            cardClasses: cardClasses + " pl-6",
            titleClasses: "card-title",
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "object-contain h-56 w-56",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
        'pmCoalition': {
            cardClasses: cardClasses + " pl-6",
            titleClasses: "card-title",
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "object-contain h-56 w-56",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
        'pmOnline': {
            cardClasses: cardClasses + " pl-6",
            titleClasses: "card-title",
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "object-contain h-56 w-56",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
    };

    let cardContent: { [id: string] : ICardContent } = {
        'sslCalendar': {
            title: "SciLifeLab events calendar",
            subTitle: "",
            text: "", 
            buttonText: "",
            imageSrc: scilifelabImage,
            imageAlt: "SciLifeLab logo",
        },
        'sslTrainingPortal': {
            title: "SciLifeLab training portal",
            subTitle: "",
            text: "", 
            buttonText: "",
            imageSrc: scilifelabImage,
            imageAlt: "SciLifeLab logo",
        },
        'nbis': {
            title: "NBIS training and workshops",
            subTitle: "",
            text: "", 
            buttonText: "",
            imageSrc: nbisImage,
            imageAlt: "NBIS and ELIXIR Sweden logos",
        },
        'sllDataPlatform': {
            title: "SciLifeLab data platform events & training",
            subTitle: "",
            text: "", 
            buttonText: "",
            imageSrc: 'https://raw.githubusercontent.com/ScilifelabDataCentre/data.scilifelab.se/e3545c72cefa27596d26e1300a8765ae6e1a51a9/static/img/logos/sll_dp_outline.svg',
            imageAlt: "SciLifeLab logo",
        },
        'pathogensPortal': {
            title: "Swedish pathogens portal events & training",
            subTitle: "",
            text: "", 
            buttonText: "",
            imageSrc: 'https://raw.githubusercontent.com/ScilifelabDataCentre/pathogens-portal/develop/static/img/site_logo/swe_pathogens_logo.png',
            imageAlt: "Pathogens Portal logo",
        },
        'elixir': {
            title: "Elixir TeSS",
            subTitle: "",
            text: "", 
            buttonText: "",
            imageSrc: 'https://raw.githubusercontent.com/ElixirTeSS/TeSS/6435fc833a20d6d81252a723ab9514418f7d1c1c/app/assets/images/elixir/elixir-tess.svg',
            imageAlt: "Elixir TeSS logo",
        },
        'gms': {
            title: "GMS kalendarium",
            subTitle: "",
            text: "", 
            buttonText: "",
            imageSrc: 'https://gms.enestedt-playground.se/wp-content/uploads/2019/04/GMS-logo-namn-RGB-b300px.png',
            imageAlt: "GMS logo",
        },
        'pmCoalition': {
            title: "Personalized Medicine Coalition events",
            subTitle: "",
            text: "", 
            buttonText: "",
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67A0yM3D5LK5GGvUHo0v3XD6LZcdpQvHZ_w&s',
            imageAlt: "Personalized Medicine Coalition logo",
        },
        'pmOnline': {
            title: "Precision Medicine Online events",
            subTitle: "",
            text: "", 
            buttonText: "",
            imageSrc: 'https://www.precisionmedicineonline.com/profiles/custom/crain_core/themes/custom/gweb/images/logo--pmls.svg',
            imageAlt: "Precision Medicine Online logo",
        },
    };

    let cardLinks: { [id: string] : string } = {
        'sslCalendar': 'https://www.scilifelab.se/events/#calendar',
        'sslTrainingPortal': 'https://training.scilifelab.se/',
        'nbis': 'https://nbis.se/training/future',
        'sllDataPlatform': 'https://data.scilifelab.se/events/',
        'pathogensPortal': 'https://www.pathogens.se/events/',
        'elixir': 'https://tess.elixir-europe.org/events',
        'gms': 'https://genomicmedicine.se/kalendarium/',
        'pmCoalition': 'https://www.personalizedmedicinecoalition.org/events/',
        'pmOnline': 'https://www.precisionmedicineonline.com/events',
    };

    return (
        <div className={BODY_CLASSES}>
            <div className="text-sm breadcrumbs">
                <ul>
                {Object.keys(breadcrumbs).map( key => (
                    <li>{breadcrumbs[key].link ? <Link to={breadcrumbs[key].link}>{breadcrumbs[key].text}</Link> : <>{breadcrumbs[key].text}</>}</li>
                ))}
                </ul>
            </div>
            <div className={H_1}>Events and training</div>
            <div className="flex flex-row flex-wrap flex-grow justify-between">
                {/* <div className="w-1/2 pb-2 px-2">
                    <CardComponent cardConfig={cardConfig['dcCard']} cardContent={cardContent['dcCard']} />
                </div> */}
                {Object.keys(cardConfig).map( key => (
                    <div key={key} className="w-1/2 pb-2 px-2">
                        <a href={cardLinks[key]}>
                            <CardComponent cardConfig={cardConfig[key]} cardContent={cardContent[key]} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}