"use client";

import { ReactElement } from "react";
import { ICardConfig, ICardContent } from "@/interfaces/types";
import CardComponent from "@/components/CardComponent";
import { TrackPageViewIfEnabled } from "@/util/cookiesHandling";
import Title from "@/components/common/title";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LastUpdated } from "@/components/common/last-updated";

export default function AboutTeamPage(): ReactElement {
  TrackPageViewIfEnabled();

  const cardConfig: { [id: string]: ICardConfig } = {
    teamCard: {
      cardClasses: "card h-[33rem] w-96 bg-white shadow-xl",
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
      text: "",
      buttonText: "",
      imageSrc: "/TeamPics/JanTeamPic.jpg",
      imageAlt: "Portrait of Jan Lorenz - Product Owner",
    },
    NatCard: {
      title: "Natashia Benzian Olsson",
      subTitle: "Data Steward",
      text: "",
      buttonText: "",
      imageSrc: "/TeamPics/NatTeamPic.jpg",
      imageAlt: "Portrait of Natashia Benzian Olsson - Data Steward",
    },
    SebCard: {
      title: "Sebastian Lindbom Gunnari",
      subTitle: "Software Engineer",
      text: "",
      buttonText: "",
      imageSrc: "/TeamPics/SebTeamPic.png",
      imageAlt: "Portait of Sebastian Lindbom Gunnari - Software Engineer",
    },
    SamCard: {
      title: "Saman Rassam",
      subTitle: "Data Engineer",
      text: "",
      buttonText: "",
      imageSrc: "/TeamPics/SamTeamPic.jpg",
      imageAlt: "Portait of Saman Rassam - Data Engineer",
    },
    MarCard: {
      title: "Maria Ahlsén",
      subTitle: "Coordinator",
      text: "",
      buttonText: "",
      imageSrc: "/TeamPics/MarTeamPic.png",
      imageAlt: "Portait of Maria Ahlsén - Coordinator",
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/about">About us</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/about/team">Team</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Title level={1}>Team</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-2">
        {Object.keys(cardContent).map((key) => (
          <CardComponent
            cardConfig={cardConfig["teamCard"]}
            cardContent={cardContent[key]}
            key={key}
          />
        ))}
      </div>
      <LastUpdated date="11-03-2025" />
    </div>
  );
}
