"use client";

import { ReactElement } from "react";

import { LastUpdated } from "@/components/common/last-updated";

import Title from "@/components/common/title";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function OMOPCDMPage(): ReactElement {
  return (
    <div className="container mx-auto px-4 py-8">
      <nav aria-label="Breadcrumb navigation" role="navigation">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/OMOP-CDM/intro-pages">
                Introduction to OMOP-CDM
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <div
        className="flex flex-col gap-y-4"
        aria-label="What is OMOP"
      >
        <Title level={3}>What is the OMOP CDM?</Title>
        <p>
          <ul>
            <li>Definition of OMOP common data model</li>
            <li>Few lines of OMOP history</li>
            <li>Current usage of OMOP CDM around the world (maybe with some numbers and statistics)</li>
            <li>OMOP CDM features</li>
            <li>Few lines on the current status of OMOP in Sweden</li>
          </ul>
        </p>
        <p>
          The OMOP Common Data Model (CDM) is an open, community-driven standard designed to harmonize the structure and content of observational data. It was created to help researchers share and analyze information across the wide range of healthcare data sources.<br/>
          The Observational Medical Outcomes Partnership (OMOP) was launched in 2008 in the United States as a public–private initiative focused on improving drug safety surveillance and the analysis of observational healthcare data. To enable this work, OMOP introduced a common format for structuring disparate datasets. Over time, the OMOP CDM grew beyond its initial focus on drug development, becoming a widely adopted standard with an independent life of its own.<br/>
          Today, the OMOP CDM is maintained by the Observational Health Data Sciences and Informatics (OHDSI) community, a global, open-science collaborative. Beyond the data model itself, OHDSI also develops and maintains standardized vocabularies, open-source software tools, and methodological frameworks that together support the full lifecycle of observational research using OMOP.<br/>
          Up to 2024, 544 data sources coming from 54 different countries have been standardized to the OMOP CDM. These data include electronic health records, administrative claims, registries, hospital systems, genomics and biobanks. Together, these data sources conservatively  cover more than 974 million unique patient records (approximately 12% fo the world’s population).[2024 OHDSI annual report]<br/>
          The OMOP CDM offers a unified structure for diverse healthcare data, including patient demographics, conditions, procedures, drug exposures, and clinical measurements. It provides standardized vocabularies, relationships across medical concepts, and a framework that supports reproducible analytics across multiple datasets.<br/>
          In Sweden, interest in OMOP is steadily growing. Several universities and healthcare organizations (including the Karolinska Institutet) are exploring its potential to support national and international collaborations in medical research via the OMOP CDM. Pilot projects are underway to map Swedish healthcare data to OMOP, with the aim of enabling large-scale studies and improved comparability with global research initiatives.
        </p>
        <Title level={3} aria-label="Why OMOP">
          Why should I use the OMOP CDM?
        </Title>
        <p>
          <ul>
            <li>General intro on the variety of health care data and on the problem of sharing sensitive data</li>
            <li>Introduction of the concept of federated data</li>
            <li>OMOP CDM as a proven effective way to implement federated data</li>
            <li>Few lines on LLM applications with OMOP</li>
            <li>Few lines on OMOP OHDSI very active community</li>
            <li>Few lines on the future OMOP perspectives in Sweden</li>
          </ul>
        </p>
        <p>
          Health data is characterized by a wide variety of formats, database systems, information models, vocabularies, and tools for data management and analysis. This diversity stems from the complexity of the healthcare ecosystem, where numerous organizations collect data for different purposes and under varying regulatory constraints.<br/>
          While an individual data model may serve the needs of a specific organization, the sheer diversity of data sources and models creates major challenges for researchers seeking to combine and analyze information across multiple data sources.<br/>
          In this context, the OMOP CDM provides a unified structure that enables researchers to share and analyze data from diverse sources, regardless of their underlying data models or vocabulary.<br/>
          Another important aspect of data standardization, especially considering the most recent advances in artificial intelligence (AI), is ensuring that data from different sources can be reliably combined, enabling the development of robust machine learning models and fair evaluations across populations.<br/>
          Among any other possible solution for data standardization, OMOP CDM stands out for its proven efficacy in supporting federated data (data remain local, analyses run across sites) and for its open and collaborative nature.<br/>
        </p>
        <Title level={3} aria-label="How OMOP">
          How does the OMOP CDM work?
        </Title>
        <p>
          <ul>
            <li>OMOP CDM: just a standardised way to represent information in your dataset</li>
            <li>Few words on mapping and data transition</li>
            <li>Few words on OHDSI tools for mapping, data transition, and analysis</li>
            <li>Current status of SciLifeLab as OMOP service provider</li>
          </ul>
        </p>
        <Title level={3} aria-label="Scilifelab OMOP">
          OMOP at Scilifelab
        </Title>
        <p>
          Few lines on what is going on at SciLifeLab in relation to OMOP and in Sweden. Perhaps this is the place to put some future perspectives.
        </p>
        <Title level={3} aria-label="OMOP gallery">
          OMOP CDM Gallery
        </Title>
        <p>
          List of interesting published works that were possible because of data OMOPIZATION
        </p>
        <Title level={3} aria-label="OMOP resources">
          Links and Resources
        </Title>
        <p>
          A list of links and reseources with description:
          <ul>
            <li>Swedish OMOP page</li>
            <li>OMOP common data model page</li>
            <li>OHDSI academy</li>
            <li>List of OHDSI OMOP related tools (GitHub repositories)</li>
          </ul>
        </p>
        <Title level={3} aria-label="OMOP contact">
          Contact
        </Title>
        <p>
          Contact form or link to contact page
        </p>
      </div>
      <div className="mt-8">
        <LastUpdated date="26-08-2025" />
      </div>
    </div>
  );
}
