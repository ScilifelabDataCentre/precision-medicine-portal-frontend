import { ReactElement } from 'react';
import { ICardConfig, ICardContent } from '../interfaces/types';
import CardComponent from '../components/CardComponent';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';

export default function AboutPartnersPage(): ReactElement {
    TrackPageViewIfEnabled();

    var cardConfig: { [id: string] : ICardConfig; } = {
        'fundersAndPartnersCard': {
            cardClasses: "w-full h-full card lg:card-side bg-white shadow-xl", 
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
            title: "SciLifeLab Data Centre",
            subTitle: "",
            text: "SciLifeLab Data Centre is a central unit within SciLifeLab with responsibility for IT- and data management issues, serving the SciLifeLab and the Data Driven Life Science (DDLS) research program. At SciLifeLab, we see data as one of the most valuable and long-lasting products of our operations and strive to make our data FAIR, handled according to open science standards and that its long-term value to the scientific community is maximised.", 
            buttonText: "",
            imageSrc: "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
            imageAlt: "SciLifeLab Data Centre",
        },
        'fundersAndPartnersCard2': {
            title: "Karolinska Institutet",
            subTitle: "",
            text: "Karolinska Institutet (KI) is a research-led medical university in Solna within the Stockholm urban area of Sweden and one of the foremost medical research institutes globally. KI hosts the Data Science Node in Precision Medicine and Diagnostics as part of the national DDLS program and associated to the SciLifeLab Data Platform.", 
            buttonText: "",
            imageSrc: "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
            imageAlt: "Karolinska Institutet",
        },
        'fundersAndPartnersCard3': {
            title: "Data-Driven Precision Medicine and Diagnostics",
            subTitle: "",
            text: "The subject area hosted by KI concerns research that will make use of computational tools to integrate molecular and clinical data for precision medicine and diagnostic development. The focus is on data integration, analysis, visualisation, and data interpretation for patient stratification, discovery of biomarkers for disease risks, diagnosis, drug response and monitoring of health.", 
            buttonText: "",
            imageSrc: "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
            imageAlt: "Data-Driven Precision Medicine and Diagnostics",
        },
        'fundersAndPartnersCard4': {
            title: "SciLifeLab & Wallenberg National Program for Data-Driven Life Science",
            subTitle: "",
            text: "Life science research is becoming increasingly data-driven. The amount and complexity of data is also growing exponentially. Data is the most valuable product of research, and it is therefore crucially important that we ensure it is managed appropriately throughout its lifecycle. In response, SciLifeLab and The Knut and Alice Wallenberg Foundation (KAW) have launched the DDLS program in Sweden. This initiative aims to train and develop the next wave of life scientists, enhancing Sweden's capabilities in data science within the life sciences to achieve international competitiveness. The DDLS program has been funded by KAW for 12 years. SciLifeLab, as a national infrastructure for life science, coordinates this program in close collaboration with ten Swedish universities and the Swedish Museum of Natural History.", 
            buttonText: "",
            imageSrc: "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
            imageAlt: "SciLifeLab & Wallenberg National Program for Data-Driven Life Science",
        },
        'fundersAndPartnersCard5': {
            title: "National Bioinformatics Infrastructure Sweden and ELIXIR Sweden",
            subTitle: "",
            text: "National Bioinformatics Infrastructure Sweden (NBIS) is a distributed national research infrastructure supported by the Swedish Research Council (Vetenskapsrådet), Science for Life Laboratory, all major Swedish universities, and the Knut and Alice Wallenberg Foundation. It provides state-of-the-art bioinformatics to the life science research community in Sweden. NBIS is also the Swedish contact point to the European infrastructure for biological information, ELIXIR Europe.", 
            buttonText: "",
            imageSrc: "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
            imageAlt: "NBIS and ELIXIR Sweden",
        },
    };

    return (
        <>
        <div className="flex flex-row flex-wrap flex-grow justify-between">
            <div className="w-1/2 pb-2 px-2">
                <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard1']} />
            </div>
            <div className="w-1/2 pb-2 px-2">
                <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard2']} />
            </div>
            <div className="w-1/2 p-2">
                <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard3']} />
            </div>
            <div className="w-1/2 p-2">
                <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard5']} />
            </div>
            <div className="grow w-1/2 p-2">
                <CardComponent cardConfig={cardConfig['fundersAndPartnersCard']} cardContent={cardContent['fundersAndPartnersCard4']} />
            </div>
        </div>
        </>
    );
}