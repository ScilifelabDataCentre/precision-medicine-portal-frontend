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
import Title from "@/components/common/title";
import Image from "next/image";

export default function OMOPCDMPage(): ReactElement {
  return (
    <div className="container max-w-4xl mx-auto py-8">
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

      <div className="flex flex-col gap-y-4">
        <Title level={1} className="mb-6">
          Introduction to OMOP-CDM
        </Title>
        <section aria-labelledby="omop-what" className="mb-6">
          <div className="space-y-8 md:space-y-0 text-left md:space-x-16 md:justify-between md:flex md:items-center">
            <div className="w-full md:w-2/3 space-y-4">
              <Title level={2}>What is the OMOP CDM?</Title>
              <p>
                The OMOP Common Data Model (CDM) is an open, community-driven
                standard designed to harmonize the structure and content of
                observational data. The OMOP CDM offers a unified structure for
                diverse observational data, including patient demographics,
                conditions, procedures, drug exposures, and clinical
                measurements.
                <br />
                In Sweden, interest in OMOP is steadily growing. Several
                universities and healthcare organizations (including the
                Karolinska Institutet) are exploring its potential to support
                national and international collaborations in medical research.
              </p>
            </div>
            <Image
              className="mx-auto w-1/2 md:w-1/3"
              src="/img/omop/what_is_omop.png"
              alt="What is OMOP?"
              width={100}
              height={100}
              priority
            />
          </div>
        </section>
        <section aria-labelledby="omop-history" className="mb-6">
          <div className="space-y-8 md:space-y-0 text-left md:space-x-16 md:justify-between md:flex md:items-center">
            <Image
              className=" w-1/2 md:w-1/3"
              src="/img/omop/what_does_omop_mean.png"
              alt="What does OMOP mean? A bit of history"
              width={100}
              height={100}
              priority
            />
            <div className="w-full md:w-2/3 space-y-4">
              <Title level={2}>What does OMOP mean? A bit of history</Title>
              <p>
                The Observational Medical Outcomes Partnership (OMOP) was
                launched in 2008 in the United States as a public–private
                initiative focused on improving drug safety surveillance and the
                analysis of observational healthcare data. To enable this work,
                OMOP introduced a common format for structuring disparate
                datasets. Over time, the OMOP CDM grew beyond its initial focus
                on drug development, becoming a widely adopted standard with an
                independent life of its own.
                <br />
                Today, the OMOP CDM is maintained by the Observational Health
                Data Sciences and Informatics (OHDSI) community, a global,
                open-science collaborative. Beyond the data model itself, OHDSI
                also develops and maintains standardized vocabularies,
                open-source software tools, and methodological frameworks that
                together support the full lifecycle of observational research
                using OMOP.
                <br />
                As of 2024, 544 data sources from 54 different countries have
                been standardized to the OMOP CDM. These data include electronic
                health records, administrative claims, registries, hospital
                systems, genomics and biobanks. Together, these data sources
                conservatively cover more than 974 million unique patient
                records (approximately 12% of the world’s population). [ref.
                2024 OHDSI annual report]
                <br />
              </p>
            </div>
          </div>
        </section>
        <section aria-labelledby="omop-why" className="mb-6">
          <div className="space-y-8 md:space-y-0 text-left md:space-x-16 md:justify-between md:flex md:items-center">
            <div className="w-full md:w-2/3 space-y-4">
              <Title level={2}>Why should I use the OMOP CDM?</Title>
              <p>
                Health data is characterized by a wide variety of formats,
                database systems, information models, vocabularies, and tools
                for data management and analysis. This diversity stems from the
                complexity of the healthcare ecosystem, where numerous
                organizations collect data for different purposes and under
                varying regulatory constraints.
                <br />
                While an individual data model may serve the needs of a specific
                organization, the sheer diversity of data sources and models
                creates major challenges for researchers seeking to combine and
                analyze information across multiple data sources.
                <br />
                In this context, the OMOP CDM provides a unified structure that
                enables researchers to share and analyze data from diverse
                sources, regardless of their underlying data models or
                vocabulary.
                <br />
                Another important aspect of data standardization, especially
                considering the most recent advances in artificial intelligence
                (AI), is ensuring that data from different sources can be
                reliably combined, enabling the development of robust machine
                learning models and fair evaluations across populations.
                <br />
                Among any other possible solution for data standardization, OMOP
                CDM stands out for its proven efficacy in supporting federated
                data (data remain local, analyses run across sites) and for its
                open and collaborative nature.
              </p>
            </div>
            <Image
              className="mx-auto w-1/2 md:w-1/3"
              src="/img/omop/why_using_omop.png"
              alt="Why should I use the OMOP CDM?"
              width={100}
              height={100}
              priority
            />
          </div>
        </section>
        <section aria-labelledby="omop-how" className="mb-6">
          <div className="space-y-8 md:space-y-0 text-left md:space-x-16 md:justify-between md:flex md:items-center">
            <Image
              className="mx-auto w-1/2 md:w-1/3"
              src="/img/omop/how_does_omop_work.png"
              alt="How does the OMOP CDM work?"
              width={100}
              height={100}
              priority
            />
            <div className="w-full md:w-2/3 space-y-4">
              <Title level={2}>How does the OMOP CDM work?</Title>
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
                replace the need for local data models and vocabularies, but
                rather provide a common framework for data integration and
                analysis across multiple sources. In other words, an OMOP CDM
                instance represents an interface that allows different source
                data to be combined and analyzed, regardless of their underlying
                data models or vocabularies.
                <br />
                In Sweden, SciLifeLab is emerging as a service provider for
                OMOP, offering expertise and infrastructure to help researchers
                adopt the model and connect with the international OHDSI
                network.
              </p>
            </div>
          </div>
        </section>
        <section aria-labelledby="omop-scilifelab" className="mb-6">
          <div className="space-y-8 md:space-y-0 text-left md:space-x-16 md:justify-between md:flex md:items-center">
            <div className="w-full md:w-2/3 space-y-4">
              <Title level={2}>OMOP at SciLifeLab</Title>
              <p>
                Sweden is undertaking a national initiative (OMOP 4 Sweden) to
                create the conditions needed to accelerate the adoption of the
                OMOP standard. The project brings together a multi-helix
                consortium for long-term collaboration, aiming to build a clear
                OMOP case for Sweden while aligning international expertise with
                local needs and regulations.
                <br />
                SciLifeLab is contributing actively by driving pilot projects,
                such as the harmonization of the PREDDLUNG dataset. Through this
                work, SciLifeLab is helping to define national use cases,
                demonstrate OMOP’s value for the Swedish health data ecosystem,
                and capture best practices that will support wider
                implementation in the years ahead.
              </p>
            </div>
            <Image
              className="mx-auto w-1/2 md:w-1/3"
              src="/img/omop/omop_at_scilifelab.png"
              alt="OMOP at SciLifeLab"
              width={100}
              height={100}
              priority
            />
          </div>
        </section>
        <section aria-labelledby="omop-resources" className="mb-6">
          <Title level={2}>Links and Resources</Title>
          <div>
            <ul
              className="list-disc pl-4"
              role="list"
              aria-label="OMOP resources and links"
            >
              <li role="listitem">
                <a
                  href="https://www.vinnova.se/en/p/omop-4-sweden-preparation-project-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-black underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label="Visit OMOP 4 Sweden preparation project page (opens in new tab)"
                >
                  OMOP 4 Sweden
                </a>
                , the preparation project page for the OMOP initiative in Sweden
              </li>
              <li role="listitem">
                <a
                  href="https://ohdsi.github.io/CommonDataModel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-black underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label="Visit OMOP common data model webpage (opens in new tab)"
                >
                  OMOP common data model webpage
                </a>
              </li>
              <li role="listitem">
                <a
                  href="https://www.ohdsi.org/data-standardization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-black underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label="Visit OHDSI webpage (opens in new tab)"
                >
                  OHDSI webpage
                </a>
              </li>
              <li role="listitem">
                <a
                  href="https://academy.ehden.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-black underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label="Visit EHDEN Academy webpage (opens in new tab)"
                >
                  EHDEN Academy
                </a>
                , training and development programmes developed by the OHDSI and
                EHDEN community
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="mt-8">
        <LastUpdated date="01-10-2025" />
      </div>
    </div>
  );
}
