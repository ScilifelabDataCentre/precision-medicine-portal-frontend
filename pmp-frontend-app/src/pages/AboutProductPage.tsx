import { ReactElement } from 'react';
import { ICardConfig, ICardContent } from '../interfaces/types';
import CardComponent from '../components/CardComponent';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';
import { TeamDescriptions } from '../content/content';

export default function AboutProductPage(): ReactElement {
    TrackPageViewIfEnabled();

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
            cardClasses: "card h-[46rem] w-96 bg-white shadow-xl", 
            titleClasses: "card-title",
            subTitleClasses: "italic",
            textClasses: "",
            imgClasses: "object-cover h-96 w-96",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
    };

    var cardContent: { [id: string] : ICardContent } = {
        'JanCard': {
            title: TeamDescriptions.teamMembers.jan.name, 
            subTitle: TeamDescriptions.teamMembers.jan.title,
            text: TeamDescriptions.teamMembers.jan.description, 
            buttonText: "",
            imageSrc: TeamDescriptions.teamMembers.jan.img,
            imageAlt: TeamDescriptions.teamMembers.jan.imgAlt,
        },
        'NatCard': {
            title: TeamDescriptions.teamMembers.natashia.name, 
            subTitle: TeamDescriptions.teamMembers.natashia.title,
            text: TeamDescriptions.teamMembers.natashia.description, 
            buttonText: "",
            imageSrc: TeamDescriptions.teamMembers.natashia.img,
            imageAlt: TeamDescriptions.teamMembers.natashia.imgAlt,
        },
        'SebCard': {
            title: TeamDescriptions.teamMembers.sebastian.name, 
            subTitle: TeamDescriptions.teamMembers.sebastian.title,
            text: TeamDescriptions.teamMembers.sebastian.description, 
            buttonText: "",
            imageSrc: TeamDescriptions.teamMembers.sebastian.img,
            imageAlt: TeamDescriptions.teamMembers.sebastian.imgAlt,
        },
        'SamCard': {
            title: TeamDescriptions.teamMembers.saman.name, 
            subTitle: TeamDescriptions.teamMembers.saman.title,
            text: TeamDescriptions.teamMembers.saman.description, 
            buttonText: "",
            imageSrc: TeamDescriptions.teamMembers.saman.img,
            imageAlt: TeamDescriptions.teamMembers.saman.imgAlt,
        },
        'MarCard': {
            title: TeamDescriptions.teamMembers.maria.name, 
            subTitle: TeamDescriptions.teamMembers.maria.title,
            text: TeamDescriptions.teamMembers.maria.description, 
            buttonText: "",
            imageSrc: TeamDescriptions.teamMembers.maria.img,
            imageAlt: TeamDescriptions.teamMembers.maria.imgAlt,
        },
    };
    
    return (
        <>
            <div className="divider">Product</div>
            <p>{PMDDescription}</p>
            <div className="divider pt-16">Team & Contributions</div>
            <div className="grid grid-cols-3 place-items-center gap-2">
                {Object.keys(cardContent).map( key => (
                    <CardComponent cardConfig={cardConfig['teamCard']} cardContent={cardContent[key]} />
                ))}
            </div>
        </>
    );
}