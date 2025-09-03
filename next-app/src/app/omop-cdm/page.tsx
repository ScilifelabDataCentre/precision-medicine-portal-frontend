"use client";

import { ReactElement } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LastUpdated } from "@/components/common/last-updated";

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
              <BreadcrumbLink href="/omop-cdm">
                Introduction to OMOP-CDM
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <div className="bg-gray-50">
        <div className="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <div className="space-y-16">
            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-medium text-2xl">What is the OMOP CDM?</h3>
                <p>
                  The OMOP Common Data Model (CDM) is an open, community-driven
                  standard designed to harmonize the structure and content of
                  observational data. The OMOP CDM offers a unified structure
                  for diverse observational data, including patient
                  demographics, conditions, procedures, drug exposures, and
                  clinical measurements.
                  <br />
                  In Sweden, interest in OMOP is steadily growing. Several
                  universities and healthcare organizations (including the
                  Karolinska Institutet) are exploring its potential to support
                  national and international collaborations in medical research.
                </p>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">Image placeholder</div>
            </div>
            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-medium text-2xl">
                  What does OMOP mean? A bit of history
                </h3>
                <p>
                  The Observational Medical Outcomes Partnership (OMOP) was
                  launched in 2008 in the United States as a public–private
                  initiative focused on improving drug safety surveillance and
                  the analysis of observational healthcare data. To enable this
                  work, OMOP introduced a common format for structuring
                  disparate datasets. Over time, the OMOP CDM grew beyond its
                  initial focus on drug development, becoming a widely adopted
                  standard with an independent life of its own.
                  <br />
                  Today, the OMOP CDM is maintained by the Observational Health
                  Data Sciences and Informatics (OHDSI) community, a global,
                  open-science collaborative. Beyond the data model itself,
                  OHDSI also develops and maintains standardized vocabularies,
                  open-source software tools, and methodological frameworks that
                  together support the full lifecycle of observational research
                  using OMOP.
                  <br />
                  Up to 2024, 544 data sources coming from 54 different
                  countries have been standardized to the OMOP CDM. These data
                  include electronic health records, administrative claims,
                  registries, hospital systems, genomics and biobanks. Together,
                  these data sources conservatively cover more than 974 million
                  unique patient records (approximately 12% fo the world’s
                  population). [ref. 2024 OHDSI annual report]
                  <br />
                </p>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">
                Placeholder vertical timeline
              </div>
            </div>
            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-medium text-2xl">
                  Why should I use the OMOP CDM?
                </h3>
                <p>
                  Health data is characterized by a wide variety of formats,
                  database systems, information models, vocabularies, and tools
                  for data management and analysis. This diversity stems from
                  the complexity of the healthcare ecosystem, where numerous
                  organizations collect data for different purposes and under
                  varying regulatory constraints.
                  <br />
                  While an individual data model may serve the needs of a
                  specific organization, the sheer diversity of data sources and
                  models creates major challenges for researchers seeking to
                  combine and analyze information across multiple data sources.
                  <br />
                  In this context, the OMOP CDM provides a unified structure
                  that enables researchers to share and analyze data from
                  diverse sources, regardless of their underlying data models or
                  vocabulary.
                  <br />
                  Another important aspect of data standardization, especially
                  considering the most recent advances in artificial
                  intelligence (AI), is ensuring that data from different
                  sources can be reliably combined, enabling the development of
                  robust machine learning models and fair evaluations across
                  populations.
                  <br />
                  Among any other possible solution for data standardization,
                  OMOP CDM stands out for its proven efficacy in supporting
                  federated data (data remain local, analyses run across sites)
                  and for its open and collaborative nature.
                </p>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">Image placeholder</div>
            </div>
            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-medium text-2xl">
                  How does the OMOP CDM work?
                </h3>
                <p>
                  The OMOP CDM is, at its core, simply a standardized way to
                  represent the information in a dataset, making it easier to
                  compare and analyze across different sources. Moving data into
                  this format requires a process known as mapping, where local
                  codes and structures are translated into the standardized OMOP
                  vocabulary. To support this transition, the OHDSI community
                  provides a range of open-source tools for mapping, data
                  transformation, and downstream analysis.
                  <br />
                  It is important to take in mind that the OMOP CDM will not
                  substitute the need for local data models and vocabularies,
                  but rather provide a common framework for data integration and
                  analysis across multiple sources. In other words, an OMOP CDM
                  instance represents an interface that allows different source
                  data to be combined and analyzed, regardless of their
                  underlying data models or vocabularies.
                  <br />
                  In Sweden, SciLifeLab is emerging as a service provider for
                  OMOP, offering expertise and infrastructure to help
                  researchers adopt the model and connect with the international
                  OHDSI network.
                </p>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">Image placeholder</div>
            </div>
            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-medium text-2xl">OMOP at Scilifelab</h3>
                <p>
                  Sweden is undertaking a national initiative (OMOP 4 Sweden) to
                  create the conditions needed to accelerate the adoption of the
                  OMOP standard. The project brings together a multi-helix
                  consortium for long-term collaboration, aiming to build a
                  clear OMOP case for Sweden while aligning international
                  expertise with local needs and regulations.
                  <br />
                  SciLifeLab is contributing actively by driving pilot projects,
                  such as the harmonization of the PREDDLUNG dataset. Through
                  this work, SciLifeLab is helping to define national use cases,
                  demonstrate OMOP’s value for the Swedish health data
                  ecosystem, and capture best practices that will support wider
                  implementation in the years ahead.
                </p>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">Image placeholder</div>
            </div>
            <h3 className="font-medium text-2xl">Links and Resources</h3>
            <div>
              <ul>
                <li>
                  <a href="https://www.vinnova.se/en/p/omop-4-sweden-preparation-project-/">
                    OMOP 4 Sweden
                  </a>
                  , the preparation project page for the OMOP initiative in
                  Sweden
                </li>
                <li>
                  <a href="https://ohdsi.github.io/CommonDataModel/">
                    OMOP common data model webpage
                  </a>
                </li>
                <li>
                  <a href="https://www.ohdsi.org/data-standardization">
                    {" "}
                    OHDSI webpage
                  </a>
                </li>
                <li>
                  <a href="https://academy.ehden.eu/">EHDEN Academy</a>,
                  training and development programmes developed by the OHDSI and
                  EHDEN community
                </li>
              </ul>
            </div>
            <h3 className="font-medium text-2xl">Contact</h3>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <LastUpdated date="05-09-2025" />
      </div>
    </div>
  );
}
