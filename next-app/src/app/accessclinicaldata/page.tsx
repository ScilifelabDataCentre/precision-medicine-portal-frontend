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
        <Title level={1}>How to access clinical data</Title>
        <p>
          Human data for research can be accessed from several sources such as:
          medical records, quality registries, research databases, etc. If
          sensitive personal data (
          <a
            href="https://www.imy.se/en/individuals/data-protection/introduktion-till-gdpr/what-is-actually-meant-by-personal-data/what-is-meant-by-sensitive-personal-data/"
            target="_blank"
            className="text-primary hover:text-black underline"
          >
            definition
          </a>
          ) will be used, the research project must be approved by the{" "}
          <a
            href="https://etikprovningsmyndigheten.se/en/"
            target="_blank"
            className="text-primary hover:text-black underline"
          >
            Swedish Ethical Review Authority
          </a>
          . This applies even if all the sensitive personal data being processed
          is pseudonymised. Moreover, necessary legal measures must be in place
          before the data can be transferred from the agency or organisation
          that provides the source data. Exactly how the procedures for
          requesting data for research and how the data is disclosed differ
          between various authorities or organisations.
        </p>
        <Title level={2}>Patient records and medical records</Title>
        <p>
          Healthcare staff document patient interactions, and after a
          confidentiality assessment, this information can be requested for
          medical research. In Sweden, the 21 regions are responsible for most
          healthcare services, while municipalities handle services like home
          care, and private practitioners manage their own records.
          Consequently, to conduct research using patient records from across
          the country, it may be necessary to request data from multiple
          sources.
        </p>
        <div className="flex flex-row items-center">
          <Title level={2}>Quality registers</Title>
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
      </div>
      <LastUpdated date="11-11-2024" />
    </div>
  );
}
