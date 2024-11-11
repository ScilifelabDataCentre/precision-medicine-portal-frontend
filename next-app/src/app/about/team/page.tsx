"use client";

import { ReactElement } from "react";
import { ICardConfig, ICardContent } from "@/interfaces/types";
import CardComponent from "@/components/CardComponent";
import { TrackPageViewIfEnabled } from "@/util/cookiesHandling";

export default function AboutTeamPage(): ReactElement {
  TrackPageViewIfEnabled();

  const cardConfig: { [id: string]: ICardConfig } = {
    teamCard: {
      cardClasses: "card h-[46rem] w-96 bg-white shadow-xl",
      titleClasses: "card-title",
      subTitleClasses: "italic",
      textClasses: "",
      imgClasses: "object-cover h-96 w-96 rounded-t-[8px]",
      buttonClasses: "",
      buttonPlacement: "",
    },
  };

  const cardContent: { [id: string]: ICardContent } = {
    JanCard: {
      title: "Jan Lorenz",
      subTitle: "Product Owner",
      text: "Jan holds a Master's degree in Health Informatics from Karolinska Institute and a Bachelor's degree in Business Informatics. He possesses management and leadership experience from his previous roles in management consultancy and from serving on the boards of startups.",
      buttonText: "",
      imageSrc: "/TeamPics/JanTeamPic.jpg",
      imageAlt: "Portrait of Jan Lorenz - Product Owner",
    },
    NatCard: {
      title: "Natashia Benzian Olsson",
      subTitle: "Data Steward",
      text: "Natashia holds a MSc in Behavioural Genetics and a BSc in Psychology. She has numerous years of hands-on experience with NGS data and bioinformatics at King's College London with several publications in high-impact journals. She is currently involved in content development and ensuring data quality at the PMD DSN.",
      buttonText: "",
      imageSrc: "/TeamPics/NatTeamPic.jpg",
      imageAlt: "Portrait of Natashia Benzian Olsson - Data Steward",
    },
    SebCard: {
      title: "Sebastian Lindbom Gunnari",
      subTitle: "Software Engineer",
      text: "Sebastian has a BSc in Computer Science from Stockholm University. He has previously worked as a data engineering consultant, building platforms and pipelines handling analytical data flows. Currently, he's working with web development at the PMD DSN.",
      buttonText: "",
      imageSrc: "/TeamPics/SebTeamPic.png",
      imageAlt: "Portait of Sebastian Lindbom Gunnari - Software Engineer",
    },
    SamCard: {
      title: "Saman Rassam",
      subTitle: "Data Engineer",
      text: "Saman has a MSc in Computer Science and Engineering from KTH. He is focusing on Kubernetes and back-end development at the PMD DSN. He is also supporting the TEF-Health initiative.",
      buttonText: "",
      imageSrc: "/TeamPics/SamTeamPic.jpg",
      imageAlt: "Portait of Saman Rassam - Data Engineer",
    },
    MarCard: {
      title: "Maria Ahlsén",
      subTitle: "Coordinator",
      text: "Maria holds a PhD in Physiology from Karolinska Institutet and a bachelor’s degree in Chemistry from Stockholm University. She has coordinated several research studies at both universities and hospitals, with a particular expertise in ethics and contractual matters related to handling sensitive data.",
      buttonText: "",
      imageSrc: "/TeamPics/MarTeamPic.png",
      imageAlt: "Portait of Maria Ahlsén - Coordinator",
    },
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-2">
        {Object.keys(cardContent).map((key) => (
          <CardComponent
            cardConfig={cardConfig["teamCard"]}
            cardContent={cardContent[key]}
            key={key}
          />
        ))}
      </div>
    </>
  );
}
