"use client";

import { TrackPageViewIfEnabled } from "@/util/cookiesHandling";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Title from "@/components/common/title";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LastUpdated } from "@/components/common/last-updated";
import Image from "next/image";

const logos: { [key: string]: string } = {
  dc: "/Partner logo/dc.png",
  nbis: "/Partner logo/nbislogo_orange_txt_3cb0778d90.svg",
  kaw: "/Partner logo/kaw_sv_300x300.png",
  ki: "/Partner logo/KI_digital_logotyp_positiv_RGB.png",
  scilifelab: "/Partner logo/SciLifeLab_Logotype_Green_POS.png",
  tef: "/Partner logo/tefhealth_logo.png",
};

interface Partner {
  name: string;
  description: string;
  url: string;
  logoKey: string;
}

const partners: Partner[] = [
  {
    name: "SciLifeLab Data Centre",
    description:
      "SciLifeLab Data Centre is a central unit within SciLifeLab with responsibility for IT- and data management issues, serving the SciLifeLab and the Data Driven Life Science (DDLS) research program. At SciLifeLab, we see data as one of the most valuable and long-lasting products of our operations and strive to make our data FAIR, handled according to open science standards and that its long-term value to the scientific community is maximised.",
    url: "https://www.scilifelab.se/contact/data-center/",
    logoKey: "dc",
  },
  {
    name: "Karolinska Institutet",
    description:
      "Karolinska Institutet is a research-led medical university in Solna within the Stockholm urban area of Sweden and one of the foremost medical research institutes globally. KI hosts the Data Science Node in Precision Medicine and Diagnostics as part of the national Data-Driven Life Science program and associated to the SciLifeLab Data Platform.",
    url: "https://ki.se",
    logoKey: "ki",
  },
  {
    name: "Data-Driven Precision Medicine and Diagnostics",
    description:
      "The Data-Driven Life Science subject area hosted by KI concerns research that will make use of computational tools to integrate molecular and clinical data for precision medicine and diagnostic development. The focus is on data integration, analysis, visualisation, and data interpretation for patient stratification, discovery of biomarkers for disease risks, diagnosis, drug response and monitoring of health.",
    url: "https://www.scilifelab.se/data-driven/about/",
    logoKey: "scilifelab",
  },
  {
    name: "SciLifeLab & Wallenberg National Program for Data-Driven Life Science",
    description:
      "Life science research is becoming increasingly data-driven. The amount and complexity of data is also growing exponentially. Data is one of the most valuable products of research, and it is therefore crucially important that we ensure it is managed appropriately throughout its lifecycle. In response, SciLifeLab and The Knut and Alice Wallenberg Foundation (KAW) have launched the DDLS program in Sweden. This initiative aims to train and develop the next wave of life scientists, enhancing Sweden's capabilities in data science within the life sciences to achieve international competitiveness. The DDLS program has been funded by KAW for 12 years. SciLifeLab, as a national infrastructure for life science, coordinates this program in close collaboration with ten Swedish universities and the Swedish Museum of Natural History.",
    url: "https://www.scilifelab.se/data-driven/about/",
    logoKey: "kaw",
  },
  {
    name: "National Bioinformatics Infrastructure Sweden and ELIXIR Sweden",
    description:
      "National Bioinformatics Infrastructure Sweden (NBIS) is a distributed national research infrastructure supported by the Swedish Research Council (Vetenskapsrådet), Science for Life Laboratory, all major Swedish universities, and the Knut and Alice Wallenberg Foundation. It provides state-of-the-art bioinformatics to the life science research community in Sweden. NBIS is also the Swedish contact point to the European infrastructure for biological information, ELIXIR Europe.",
    url: "https://nbis.se",
    logoKey: "nbis",
  },
  {
    name: "TEF-Health",
    description:
      "The European Commission has co-funded an initiative to establish Testing and Experimentation Facilities (TEFs) for artificial intelligence and robotics, with healthcare as one of the targeted sectors. TEF-Health aims to provide expertise and assistance to small and medium-sized enterprises and innovators, promoting the transfer of research innovations to healthcare applications. The Data Science Node in Precision Medicine and Diagnostics contributes to and collaborates specifically with Work Package 4 - Virtual Testing Centers, to co-develop and maintain services and products beneficial for innovators and researchers.",
    url: "https://tefhealth.eu/home",
    logoKey: "tef",
  },
];

export default function AboutPartnersPage() {
  TrackPageViewIfEnabled();

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
            <BreadcrumbLink href="/about/partners">Partners</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Title level={1}>Partners</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partners.map((partner, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader className="bg-muted flex flex-row items-center justify-between p-4 h-auto lg:h-20">
              {/* Left-aligned title */}
              <div className="flex-1 text-left">
                <CardTitle className="text-lg">
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {partner.name}
                  </a>
                </CardTitle>
              </div>

              {/* Right-aligned logo (consistent size) */}
              <div className="flex-shrink-0">
                <Image
                  src={logos[partner.logoKey]}
                  alt={partner.name}
                  width={128} // Standardized width
                  height={64} // Standardized height
                  className="object-contain"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <p className="whitespace-pre-line">{partner.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <LastUpdated date="11-03-2025" />
    </div>
  );
}
