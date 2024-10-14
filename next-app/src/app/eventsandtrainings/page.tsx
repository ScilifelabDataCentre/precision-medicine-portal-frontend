"use client";

import { ReactElement } from "react";
import { ICardConfig, ICardContent, ILink } from "@/interfaces/types";
import CardComponent from "@/components/CardComponent";
import { TrackPageViewIfEnabled } from "@/util/cookiesHandling";
import { BODY_CLASSES, H_1 } from "@/constants";
import Link from "next/link";
import { LastUpdated } from "@/components/common/last-updated";

const nbisImage = "/Partner logo/nbislogo_orange_txt_3cb0778d90.svg";
const scilifelabImage = "/Partner logo/SciLifeLab_Logotype_Green_POS.png";
const scilifelabDataPlatformImage = "/Partner logo/sll_dp_outline.svg";
const pathogensPortalImage = "/Partner logo/swe_pathogens_logo.png";
const elixirImage = "/Partner logo/elixir-tess.svg";
const gmsImage = "/Partner logo/gms-logo.png";
const pmcImage = "/Partner logo/pmc-logo.png";

export default function EventsAndTrainingsPage(): ReactElement {
  TrackPageViewIfEnabled();

  const breadcrumbs: { [id: string]: ILink } = {
    l1: { text: "Home", classes: "", link: "/" },
    l2: { text: "Events & Training", classes: "", link: "" },
  };

  const cardClasses: string =
    "flex flex-row justify-center items-center w-full h-full bg-white shadow-xl";

  const cardConfig: { [id: string]: ICardConfig } = {
    sslCalendar: {
      cardClasses: cardClasses + " pl-6",
      titleClasses: "card-title",
      subTitleClasses: "",
      textClasses: "",
      imgClasses: "object-contain h-56 w-56",
      buttonClasses: "",
      buttonPlacement: "",
    },
    sslTrainingPortal: {
      cardClasses: cardClasses + " pl-6",
      titleClasses: "card-title",
      subTitleClasses: "",
      textClasses: "",
      imgClasses: "object-contain h-56 w-56",
      buttonClasses: "",
      buttonPlacement: "",
    },
    nbis: {
      cardClasses: cardClasses + " pl-10",
      titleClasses: "card-title",
      subTitleClasses: "",
      textClasses: "",
      imgClasses: "object-contain h-52 w-52",
      buttonClasses: "",
      buttonPlacement: "",
    },
    sllDataPlatform: {
      cardClasses: cardClasses + " pl-6",
      titleClasses: "card-title",
      subTitleClasses: "",
      textClasses: "",
      imgClasses: "object-contain h-56 w-56",
      buttonClasses: "",
      buttonPlacement: "",
    },
    pathogensPortal: {
      cardClasses: cardClasses + " pl-6",
      titleClasses: "card-title",
      subTitleClasses: "",
      textClasses: "",
      imgClasses: "object-contain h-56 w-56",
      buttonClasses: "",
      buttonPlacement: "",
    },
    elixir: {
      cardClasses: cardClasses + " pl-6",
      titleClasses: "card-title",
      subTitleClasses: "",
      textClasses: "",
      imgClasses: "object-contain h-56 w-56",
      buttonClasses: "",
      buttonPlacement: "",
    },
    gms: {
      cardClasses: cardClasses + " pl-6",
      titleClasses: "card-title",
      subTitleClasses: "",
      textClasses: "",
      imgClasses: "object-contain h-56 w-56",
      buttonClasses: "",
      buttonPlacement: "",
    },
    pmCoalition: {
      cardClasses: cardClasses + " pl-6",
      titleClasses: "card-title",
      subTitleClasses: "",
      textClasses: "",
      imgClasses: "object-contain h-56 w-56",
      buttonClasses: "",
      buttonPlacement: "",
    },
  };

  const cardContent: { [id: string]: ICardContent } = {
    sslCalendar: {
      title: "SciLifeLab Events Calendar",
      subTitle: "",
      text: "The SciLifeLab Events Calendar brings together life science professionals by highlighting key events across the SciLifeLab community. Offering a diverse array of courses, seminars, and networking opportunities, the calendar serves as a hub for skill development and collaboration in the life sciences.",
      buttonText: "",
      imageSrc: scilifelabImage,
      imageAlt: "SciLifeLab logo",
    },
    sslTrainingPortal: {
      title: "SciLifeLab Training Portal",
      subTitle: "",
      text: "The SciLifeLab Training Portal provides life science professionals with access to high-quality training resources and opportunities. Developed by the SciLifeLab Training Hub, the portal facilitates skill development and expert collaboration across the Swedish life science community. Backed by SciLifeLab, the DDLS program, and Vetenskapsrådet, the portal ensures that both researchers and trainers have the tools and support they need to stay at the forefront of scientific advancements.",
      buttonText: "",
      imageSrc: scilifelabImage,
      imageAlt: "SciLifeLab logo",
    },
    nbis: {
      title: "NBIS Training and Workshops",
      subTitle: "",
      text: "NBIS offers comprehensive training and workshops in bioinformatics for researchers across Swedish universities. Aimed at PhD students, postdocs, investigators, and other life science professionals, these national events provide an affordable way to develop cutting-edge skills in bioinformatics, with a small participation fee for attendees.",
      buttonText: "",
      imageSrc: nbisImage,
      imageAlt: "NBIS and ELIXIR Sweden logos",
    },
    sllDataPlatform: {
      title: "SciLifeLab Data Platform Events & Training",
      subTitle: "",
      text: "The SciLifeLab Data Platform offers an extensive list of upcoming conferences, webinars, and training opportunities focused on data-driven life science. This platform, developed and managed by SciLifeLab’s Data Centre, provides Swedish researchers with the latest resources and training needed to stay at the forefront of data science innovations in life sciences.",
      buttonText: "",
      imageSrc: scilifelabDataPlatformImage,
      imageAlt: "SciLifeLab logo",
    },
    pathogensPortal: {
      title: "Swedish Pathogens Portal Events & Training",
      subTitle: "",
      text: "The Swedish Pathogens Portal lists upcoming events, webinars, and training sessions focused on pandemic preparedness and infectious disease research. It also includes data management resources tailored to these fields. The portal was developed and is maintained by SciLifeLab’s Data Centre together with the DDLS Data Science Node in Epidemiology and Biology of infection.",
      buttonText: "",
      imageSrc: pathogensPortalImage,
      imageAlt: "Pathogens Portal logo",
    },
    elixir: {
      title: "ELIXIR TeSS",
      subTitle: "",
      text: "ELIXIR TeSS is a centralized platform for discovering training resources and events in life sciences across Europe. Developed as part of ELIXIR, a pan-European infrastructure for life-science data, TeSS provides access to a wealth of training materials, interactive tutorials, and face-to-face training opportunities. It serves as a one-stop-shop for researchers seeking to enhance their use of computational tools and infrastructures for scientific discovery.",
      buttonText: "",
      imageSrc: elixirImage,
      imageAlt: "Elixir TeSS logo",
    },
    gms: {
      title: "GMS Kalendarium",
      subTitle: "",
      text: "The GMS Kalendarium is a curated calendar of genomics-related seminars and events, hosted and maintained by Genomic Medicine Sweden. It offers valuable resources for researchers and professionals interested in the latest developments in genomic medicine in Sweden.",
      buttonText: "",
      imageSrc: gmsImage,
      imageAlt: "GMS logo",
    },
    pmCoalition: {
      title: "Personalized Medicine Coalition Events",
      subTitle: "",
      text: "The Personalized Medicine Coalition (PMC) maintains an event page dedicated to promoting events related to the field of personalized medicine. These events, hosted by PMC or its 200+ members, focus on advancing personalized medicine through collaboration between innovators, researchers, patients, and healthcare providers. Primarily U.S.-based, these events drive the adoption of personalized medicine for the benefit of both patients and health systems worldwide.",
      buttonText: "",
      imageSrc: pmcImage,
      imageAlt: "Personalized Medicine Coalition logo",
    },
  };

  const cardLinks: { [id: string]: string } = {
    sslCalendar: "https://www.scilifelab.se/events/#calendar",
    sslTrainingPortal: "https://training.scilifelab.se/",
    nbis: "https://nbis.se/training/future",
    sllDataPlatform: "https://data.scilifelab.se/events/",
    pathogensPortal: "https://www.pathogens.se/events/",
    elixir: "https://tess.elixir-europe.org/events",
    gms: "https://genomicmedicine.se/kalendarium/",
    pmCoalition: "https://www.personalizedmedicinecoalition.org/events/",
  };

  return (
    <div className={BODY_CLASSES}>
      <div className="text-sm breadcrumbs">
        <ul>
          {Object.keys(breadcrumbs).map((key) => (
            <li key={key}>
              {breadcrumbs[key].link ? (
                <Link href={breadcrumbs[key].link}>
                  {breadcrumbs[key].text}
                </Link>
              ) : (
                <>{breadcrumbs[key].text}</>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className={H_1}>Where to find key events in the research field</div>
      <p>
        The fields of Precision Medicine and Diagnostics encompass a wide range
        of activities, including conferences, symposiums, and training sessions.
        Even within Sweden and the broader Nordic region, keeping track of
        ongoing and upcoming events can be challenging. Currently, there is no
        centralized hub that covers all events across the Nordics. The Precision
        Medicine Portal aims to simplify this process by providing a curated
        overview, featuring links and descriptions of websites dedicated to
        events in this research area.
        <br />
        If you would like to include your website in this overview, please reach
        out to us via our <Link href="/contact">contact form</Link>.
      </p>
      <div className="flex flex-row flex-wrap flex-grow justify-between">
        {/* <div className="w-1/2 pb-2 px-2">
                    <CardComponent cardConfig={cardConfig['dcCard']} cardContent={cardContent['dcCard']} />
                </div> */}
        {Object.keys(cardConfig).map((key) => (
          <div key={key} className="w-1/2 pb-2 px-2">
            <a href={cardLinks[key]} target="_blank">
              <CardComponent
                cardConfig={cardConfig[key]}
                cardContent={cardContent[key]}
              />
            </a>
          </div>
        ))}
      </div>
      <LastUpdated date="11-11-2024" />
    </div>
  );
}
