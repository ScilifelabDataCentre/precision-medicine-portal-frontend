"use client";

import { ReactElement } from "react";
import { ICardConfig, ICardContent } from "@/interfaces/types";
import CardComponent from "@/components/CardComponent";
import { TrackPageViewIfEnabled } from "@/util/cookiesHandling";

const dcImage = "/Partner logo/dc.png";
const nbisImage = "/Partner logo/nbislogo_orange_txt_3cb0778d90.svg";
const kawImage = "/Partner logo/kaw_sv_300x300.png";
const kiImage = "/Partner logo/KI_digital_logotyp_positiv_RGB.png";
const scilifelabImage = "/Partner logo/SciLifeLab_Logotype_Green_POS.png";
const tefImage = "/Partner logo/tefhealth_logo.png";

export default function AboutPartnersPage(): ReactElement {
  TrackPageViewIfEnabled();

  const cardClasses: string =
    "flex flex-row justify-center items-center w-full h-full bg-white shadow-xl";
  const cardConfig: { [id: string]: ICardConfig } = {
    dcCard: {
      cardClasses: cardClasses,
      titleClasses: "card-title",
      subTitleClasses: "",
      textClasses: "",
      imgClasses: "object-contain h-56 w-56",
      buttonClasses: "",
      buttonPlacement: "",
    },
    kiCard: {
      cardClasses: cardClasses,
      titleClasses: "card-title",
      subTitleClasses: "",
      textClasses: "",
      imgClasses: "object-contain h-72 w-72",
      buttonClasses: "",
      buttonPlacement: "",
    },
    ddlsCard: {
      cardClasses: cardClasses,
      titleClasses: "card-title",
      subTitleClasses: "",
      textClasses: "",
      imgClasses: "object-contain h-56 w-56",
      buttonClasses: "",
      buttonPlacement: "",
    },
    kawCard: {
      cardClasses: cardClasses,
      titleClasses: "card-title",
      subTitleClasses: "",
      textClasses: "",
      imgClasses: "object-contain",
      buttonClasses: "",
      buttonPlacement: "",
    },
    nbisCard: {
      cardClasses: cardClasses,
      titleClasses: "card-title",
      subTitleClasses: "",
      textClasses: "",
      imgClasses: "object-contain h-36 w-36",
      buttonClasses: "",
      buttonPlacement: "",
    },
    tefCard: {
      cardClasses: cardClasses,
      titleClasses: "card-title",
      subTitleClasses: "",
      textClasses: "",
      imgClasses: "object-contain h-72 w-96",
      buttonClasses: "",
      buttonPlacement: "",
    },
  };

  const cardContent: { [id: string]: ICardContent } = {
    dcCard: {
      title: "SciLifeLab Data Centre",
      subTitle: "",
      text: "SciLifeLab Data Centre is a central unit within SciLifeLab with responsibility for IT- and data management issues, serving the SciLifeLab and the Data Driven Life Science (DDLS) research program. At SciLifeLab, we see data as one of the most valuable and long-lasting products of our operations and strive to make our data FAIR, handled according to open science standards and that its long-term value to the scientific community is maximised.",
      buttonText: "",
      imageSrc: dcImage,
      imageAlt: "SciLifeLab Data Centre logo",
    },
    kiCard: {
      title: "Karolinska Institutet",
      subTitle: "",
      text: "Karolinska Institutet (KI) is a research-led medical university in Solna within the Stockholm urban area of Sweden and one of the foremost medical research institutes globally. KI hosts the Data Science Node in Precision Medicine and Diagnostics as part of the national Data-Driven Life Science program and associated to the SciLifeLab Data Platform.",
      buttonText: "",
      imageSrc: kiImage,
      imageAlt: "Karolinska Institutet logo",
    },
    ddlsCard: {
      title: "Data-Driven Precision Medicine and Diagnostics",
      subTitle: "",
      text: "The Data-Driven Life Science subject area hosted by KI concerns research that will make use of computational tools to integrate molecular and clinical data for precision medicine and diagnostic development. The focus is on data integration, analysis, visualisation, and data interpretation for patient stratification, discovery of biomarkers for disease risks, diagnosis, drug response and monitoring of health.",
      buttonText: "",
      imageSrc: scilifelabImage,
      imageAlt: "Data-Driven Precision Medicine and Diagnostics logo",
    },
    kawCard: {
      title:
        "SciLifeLab & Wallenberg National Program for Data-Driven Life Science",
      subTitle: "",
      text: "Life science research is becoming increasingly data-driven. The amount and complexity of data is also growing exponentially. Data is one of the most valuable products of research, and it is therefore crucially important that we ensure it is managed appropriately throughout its lifecycle. In response, SciLifeLab and The Knut and Alice Wallenberg Foundation (KAW) have launched the DDLS program in Sweden. This initiative aims to train and develop the next wave of life scientists, enhancing Sweden's capabilities in data science within the life sciences to achieve international competitiveness. The DDLS program has been funded by KAW for 12 years. SciLifeLab, as a national infrastructure for life science, coordinates this program in close collaboration with ten Swedish universities and the Swedish Museum of Natural History.",
      buttonText: "",
      imageSrc: kawImage,
      imageAlt:
        "SciLifeLab & Wallenberg National Program for Data-Driven Life Science logo",
    },
    nbisCard: {
      title: "National Bioinformatics Infrastructure Sweden and ELIXIR Sweden",
      subTitle: "",
      text: "National Bioinformatics Infrastructure Sweden (NBIS) is a distributed national research infrastructure supported by the Swedish Research Council (Vetenskapsrådet), Science for Life Laboratory, all major Swedish universities, and the Knut and Alice Wallenberg Foundation. It provides state-of-the-art bioinformatics to the life science research community in Sweden. NBIS is also the Swedish contact point to the European infrastructure for biological information, ELIXIR Europe.",
      buttonText: "",
      imageSrc: nbisImage,
      imageAlt: "NBIS and ELIXIR Sweden logos",
    },
    tefCard: {
      title: "TEF-Health",
      subTitle: "",
      text: "The European Commission has co-funded an initiative to establish Testing and Experimentation Facilities (TEFs) for artificial intelligence and robotics, with healthcare as one of the targeted sectors. TEF-Health aims to provide expertise and assistance to small and medium-sized enterprises and innovators, promoting the transfer of research innovations to healthcare applications. The Data Science Node in Precision Medicine and Diagnostics contributes to and collaborates specifically with Work Package 4 - Virtual Testing Centers, to co-develop and maintain services and products beneficial for innovators and researchers.",
      buttonText: "",
      imageSrc: tefImage,
      imageAlt: "TEF-Health logo",
    },
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-2">
          <CardComponent
            cardConfig={cardConfig["dcCard"]}
            cardContent={cardContent["dcCard"]}
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <CardComponent
            cardConfig={cardConfig["kiCard"]}
            cardContent={cardContent["kiCard"]}
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <CardComponent
            cardConfig={cardConfig["ddlsCard"]}
            cardContent={cardContent["ddlsCard"]}
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <CardComponent
            cardConfig={cardConfig["nbisCard"]}
            cardContent={cardContent["nbisCard"]}
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <CardComponent
            cardConfig={cardConfig["kawCard"]}
            cardContent={cardContent["kawCard"]}
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <CardComponent
            cardConfig={cardConfig["tefCard"]}
            cardContent={cardContent["tefCard"]}
          />
        </div>
      </div>
    </>
  );
}
