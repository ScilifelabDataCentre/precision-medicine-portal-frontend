'use client';

import { ReactElement } from 'react';
import { ICardConfig, ICardContent } from '@/interfaces/types';
import CardComponent from '@/components/CardComponent';
import { TrackPageViewIfEnabled } from '@/util/cookiesHandling';

let dcImage = '/Partner logo/dc.png';
// import elixirImage from '../assets/Partner logo/Elixir-Europe-logo-1.png';
let nbisImage = '/Partner logo/nbislogo_orange_txt_3cb0778d90.svg';
let kawImage = '/Partner logo/kaw_sv_300x300.png';
let kiImage = '/Partner logo/KI_digital_logotyp_positiv_RGB.png';
let scilifelabImage = '/Partner logo/SciLifeLab_Logotype_Green_POS.png';


export default function AboutPartnersPage(): ReactElement {
    TrackPageViewIfEnabled();

    let cardClasses: string = "flex flex-row justify-center items-center w-full h-full bg-white shadow-xl";
    var cardConfig: { [id: string] : ICardConfig; } = {
        'dcCard': {
            cardClasses: cardClasses + " pl-6",
            titleClasses: "card-title",
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "object-contain h-56 w-56",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
        'kiCard': {
            cardClasses: cardClasses,
            titleClasses: "card-title",
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "object-contain h-72 w-72",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
        'ddlsCard': {
            cardClasses: cardClasses + " pl-6",
            titleClasses: "card-title",
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "object-contain h-56 w-56",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
        'kawCard': {
            cardClasses: "w-full h-full card lg:card-side bg-white shadow-xl",
            titleClasses: "card-title",
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "object-contain",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
        'nbisCard': {
            cardClasses: cardClasses + " pl-10",
            titleClasses: "card-title",
            subTitleClasses: "",
            textClasses: "",
            imgClasses: "object-contain h-36 w-36",
            buttonClasses: "", 
            buttonPlacement: "",  
        },
    };

    var cardContent: { [id: string] : ICardContent } = {
        'dcCard': {
            title: "SciLifeLab Data Centre",
            subTitle: "",
            text: "SciLifeLab Data Centre is a central unit within SciLifeLab with responsibility for IT- and data management issues, serving the SciLifeLab and the Data Driven Life Science (DDLS) research program. At SciLifeLab, we see data as one of the most valuable and long-lasting products of our operations and strive to make our data FAIR, handled according to open science standards and that its long-term value to the scientific community is maximised.", 
            buttonText: "",
            imageSrc: dcImage,
            imageAlt: "SciLifeLab Data Centre logo",
        },
        'kiCard': {
            title: "Karolinska Institutet",
            subTitle: "",
            text: "Karolinska Institutet (KI) is a research-led medical university in Solna within the Stockholm urban area of Sweden and one of the foremost medical research institutes globally. KI hosts the Data Science Node in Precision Medicine and Diagnostics as part of the national Data-Driven Life Science program and associated to the SciLifeLab Data Platform.", 
            buttonText: "",
            imageSrc: kiImage,
            imageAlt: "Karolinska Institutet logo",
        },
        'ddlsCard': {
            title: "Data-Driven Precision Medicine and Diagnostics",
            subTitle: "",
            text: "The Data-Driven Life Science subject area hosted by KI concerns research that will make use of computational tools to integrate molecular and clinical data for precision medicine and diagnostic development. The focus is on data integration, analysis, visualisation, and data interpretation for patient stratification, discovery of biomarkers for disease risks, diagnosis, drug response and monitoring of health.", 
            buttonText: "",
            imageSrc: scilifelabImage,
            imageAlt: "Data-Driven Precision Medicine and Diagnostics logo",
        },
        'kawCard': {
            title: "SciLifeLab & Wallenberg National Program for Data-Driven Life Science",
            subTitle: "",
            text: "Life science research is becoming increasingly data-driven. The amount and complexity of data is also growing exponentially. Data is one of the most valuable products of research, and it is therefore crucially important that we ensure it is managed appropriately throughout its lifecycle. In response, SciLifeLab and The Knut and Alice Wallenberg Foundation (KAW) have launched the DDLS program in Sweden. This initiative aims to train and develop the next wave of life scientists, enhancing Sweden's capabilities in data science within the life sciences to achieve international competitiveness. The DDLS program has been funded by KAW for 12 years. SciLifeLab, as a national infrastructure for life science, coordinates this program in close collaboration with ten Swedish universities and the Swedish Museum of Natural History.", 
            buttonText: "",
            imageSrc: kawImage,
            imageAlt: "SciLifeLab & Wallenberg National Program for Data-Driven Life Science logo",
        },
        'nbisCard': {
            title: "National Bioinformatics Infrastructure Sweden and ELIXIR Sweden",
            subTitle: "",
            text: "National Bioinformatics Infrastructure Sweden (NBIS) is a distributed national research infrastructure supported by the Swedish Research Council (Vetenskapsrådet), Science for Life Laboratory, all major Swedish universities, and the Knut and Alice Wallenberg Foundation. It provides state-of-the-art bioinformatics to the life science research community in Sweden. NBIS is also the Swedish contact point to the European infrastructure for biological information, ELIXIR Europe.", 
            buttonText: "",
            imageSrc: nbisImage,
            imageAlt: "NBIS and ELIXIR Sweden logos",
        },
    };

    return (
        <>
        <div className="flex flex-row flex-wrap flex-grow justify-between">
            <div className="w-1/2 pb-2 px-2">
                <CardComponent cardConfig={cardConfig['dcCard']} cardContent={cardContent['dcCard']} />
            </div>
            <div className="w-1/2 pb-2 px-2">
                <CardComponent cardConfig={cardConfig['kiCard']} cardContent={cardContent['kiCard']} />
            </div>
            <div className="w-1/2 p-2">
                <CardComponent cardConfig={cardConfig['ddlsCard']} cardContent={cardContent['ddlsCard']} />
            </div>
            <div className="w-1/2 p-2">
                <CardComponent cardConfig={cardConfig['nbisCard']} cardContent={cardContent['nbisCard']} />
            </div>
            <div className="grow w-1/2 p-2">
                <CardComponent cardConfig={cardConfig['kawCard']} cardContent={cardContent['kawCard']} />
            </div>
        </div>
        </>
    );
}