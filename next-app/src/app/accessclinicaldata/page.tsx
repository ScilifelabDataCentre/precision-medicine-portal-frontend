"use client";

import { ReactElement } from "react";
import Link from "next/link";
import { ILink } from "@/interfaces/types";

import { LastUpdated } from "@/components/common/last-updated";
import { TrackPageViewIfEnabled } from "@/util/cookiesHandling";
import Title from "@/components/common/title";

export default function AboutPage(): ReactElement {
  TrackPageViewIfEnabled();

  const breadcrumbs: { [id: string]: ILink } = {
    l1: { text: "Home", classes: "", link: "/" },
    l2: { text: "Access clinical data", classes: "", link: "" },
  };

  return (
    <div className="container mx-auto px-4 py-8">
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
      <div className="flex flex-col gap-y-4">
        <Title level={1}>Access data for precision medicine research</Title>
        <p>
          Researchers can access human data for research from various national
          and international sources, such as research databases, quality
          registries, patient or medical records, biobanks, and more. However,
          human data is often not freely available. Researchers seeking access
          to human data must submit an application outlining their project and
          its requirements. The responsible institution, typically a healthcare
          region or university, will release the data only after conducting harm
          and confidentiality assessments.
        </p>
        <div className="flex flex-row items-center">
          <Title level={2}>Swedish research projects or databases</Title>
          <Link href="/swedishresearchprojects">
            <svg
              className="ml-2 fill-primary w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <g data-name="19-Arrow Right">
                <path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z" />
                <path d="m26.71 15.29-7-7-1.42 1.42 5.3 5.29H5v2h18.59l-5.29 5.29 1.41 1.41 7-7a1 1 0 0 0 0-1.41z" />
              </g>
            </svg>
          </Link>
        </div>{" "}
        <p>
          It is possible to request existing data from several research projects
          or research databases in Sweden. Projects can be found, for example,
          on the website of the project’s entity responsible for the research,
          the{" "}
          <a
            href="https://snd.se/en/catalogue/search"
            target="_blank"
            className="text-primary hover:text-black underline"
          >
            Swedish National Data Service (SND)
          </a>
          , or the{" "}
          <a
            href="https://precision-medicine-portal.scilifelab.se/swedishresearchprojects"
            target="_blank"
            className="text-primary hover:text-black underline"
          >
            Precision Medicine Portal
          </a>
          .
        </p>
        <p>
          In the research data catalogue at SND, it is possible to search for
          research projects and data from several disciplines. Some data and
          metadata can be downloaded directly from the catalogue. SND also
          provides information about data management and a service for data
          sharing.
        </p>
        <div className="flex flex-row items-center">
          <Title level={2}>Quality registries</Title>
          <Link href="/registries">
            <svg
              className="ml-2 fill-primary w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <g data-name="19-Arrow Right">
                <path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z" />
                <path d="m26.71 15.29-7-7-1.42 1.42 5.3 5.29H5v2h18.59l-5.29 5.29 1.41 1.41 7-7a1 1 0 0 0 0-1.41z" />
              </g>
            </svg>
          </Link>
        </div>
        <p>
          The Swedish quality registries aim to improve the health care system
          by collecting individualised health data about, for example, certain
          diagnoses or problems{" "}
          <a
            href="https://www.1177.se/sa-fungerar-varden/lagar-och-bestammelser/nationella-kvalitetsregister/#:~:text=I%20nationella%20kvalitetsregister%20samlas%20information,l%C3%A4mnas%20till%20ett%20nationellt%20kvalitetsregister"
            target="_blank"
            className="text-primary hover:text-black underline"
          >
            (further information in Swedish)
          </a>
          . Data from a certain registry can be requested by researchers after
          approval by a steering group consisting of health care professionals
          and patient representatives.
        </p>
        <p>
          Healthcare providers must inform patients before their medical
          information is collected in a quality register. This procedure differs
          from the inclusion of a research subject in a study, where written
          consent is required. However, personal data cannot be processed in a
          quality register or research study if the individual objects. If a
          person opposes the processing of their personal data after it has
          begun, the information should be erased from the register as soon as
          possible{" "}
          <a
            href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/patientdatalag-2008355_sfs-2008-355/#K7"
            target="_blank"
            className="text-primary hover:text-black underline"
          >
            (further information in Swedish)
          </a>
          .
        </p>
        <p>
          Every quality registry in Sweden is connected to one of six centres
          that provide support:
        </p>
        <ul className="list-disc pl-4">
          <li>
            <a
              href="https://qrcstockholm.se/"
              target="_blank"
              className="text-primary hover:text-black underline"
            >
              Stockholm (QRC STHLM)
            </a>
          </li>
          <li>
            <a
              href="https://rcsyd.se/"
              target="_blank"
              className="text-primary hover:text-black underline"
            >
              Syd (RC SYD)
            </a>
          </li>
          <li>
            <a
              href="https://rcnorr.se/"
              target="_blank"
              className="text-primary hover:text-black underline"
            >
              Norr (RCN)
            </a>
          </li>
          <li>
            <a
              href="https://www.ucr.uu.se/"
              target="_blank"
              className="text-primary hover:text-black underline"
            >
              Uppsala Clinical Research Center (UCR)
            </a>
          </li>
          <li>
            <a
              href="https://registercentrum.se/rc-vast/vastra-gotaland"
              target="_blank"
              className="text-primary hover:text-black underline"
            >
              Västra Götaland
            </a>
          </li>
          <li>
            <a
              href="https://registercentrum.se/rc-sydost/sydost"
              target="_blank"
              className="text-primary hover:text-black underline"
            >
              SydOst (RCSO)
            </a>
          </li>
        </ul>
        <p></p>
        <Title level={2}>Patient and medical records</Title>
        <p>
          Healthcare staff document patient interactions, and after a
          confidentiality assessment, this information can be requested for
          medical research by lämna in en begäran om utlämnande av patientdata.
          In Sweden, the 21 regions are responsible for most healthcare
          services, while municipalities handle services like home care, and
          private practitioners manage their own records. Consequently, to
          conduct research using patient records from across the country, it may
          be necessary to request data from multiple sources.
        </p>
        <Title level={2}>Research data management</Title>
        <p>
          SciLifeLab provides general research data management (RDM) guidelines,{" "}
          <a
            href="https://data-guidelines.scilifelab.se/"
            target="_blank"
            className="text-primary hover:text-black underline"
          >
            available here
          </a>
          , and specific information about the ethical, legal, and societal
          implications (ELSI) for research involving human data,{" "}
          <a
            href="https://data-guidelines.scilifelab.se/topics/research-involving-human-data/"
            target="_blank"
            className="text-primary hover:text-black underline"
          >
            available here
          </a>
          . They also offer guidance on{" "}
          <a
            href="https://data-guidelines.scilifelab.se/topics/sharing-human-data/"
            target="_blank"
            className="text-primary hover:text-black underline"
          >
            sharing sensitive human data
          </a>
          .
        </p>
        <p>
          More information and tailored research support can be found at
          universities, colleges, and healthcare regions or hospitals. A
          selection of links:
        </p>
        <ul className="list-disc pl-4">
          <li>
            <a
              href="https://www.oru.se/english/research/research-support/"
              target="_blank"
              className="text-primary hover:text-black underline"
            >
              Örebro University
            </a>
          </li>
          <li>
            <a
              href="https://www.oru.se/english/research/research-support/"
              target="_blank"
              className="text-primary hover:text-black underline"
            >
              Karolinska University Hospital
            </a>
          </li>
          <li>
            <a
              href="https://www.staff.lu.se/research-and-education/research-support"
              target="_blank"
              className="text-primary hover:text-black underline"
            >
              Lund University
            </a>
          </li>
          <li>
            <a
              href="https://www.umu.se/en/research-support-and-collaboration-office/"
              target="_blank"
              className="text-primary hover:text-black underline"
            >
              Umeå University
            </a>
          </li>
          <li>
            <a
              href="https://www.uu.se/en/staff/gateway/research/research-handbook/uppsala-universitys-research-support/the-medfarm-research-support"
              target="_blank"
              className="text-primary hover:text-black underline"
            >
              Uppsala University
            </a>
          </li>
          <li>
            <a
              href="https://staff.ki.se/research-support"
              target="_blank"
              className="text-primary hover:text-black underline"
            >
              Karolinska Universitetet
            </a>
          </li>
        </ul>
        <LastUpdated date="13-01-2025" />
      </div>
    </div>
  );
}
