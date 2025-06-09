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

export default function CitationAndLicensePage(): ReactElement {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/citation-and-license">
              Citation and license
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-y-4">
        <Title level={1}>Citation and license</Title>
        <p>
          In line with the principles of FAIR and Open Science, we encourage the
          reuse and recognition of material made available on the Precision
          Medicine Portal. This page provides guidance on how to cite the portal
          and outlines the licensing conditions for using its content and code.
        </p>
        <Title level={2}>Citing the Portal</Title>
        <p>
          The information on the portal is continuously updated. Therefore, it
          is important to refer to specific versions (or to provide access
          dates) when citing.
        </p>
        <Title level={3}>Research Community</Title>
        <p>
          Researchers are encouraged to cite the Precision Medicine Portal and
          its underlying code in scientific publications.
        </p>
        <Title level={4}>Citing website content</Title>
        <p>
          The <strong>Research Resource Identifier (RRID)</strong> for the
          Precision Medicine Portal is{" "}
          <strong>
            <a
              href="https://rrid.site/data/record/nlx_144509-1/SCR_026653/resolver"
              target="_blank"
              className="text-primary underline"
            >
              SCR_026653
            </a>
          </strong>
          . Using this identifier helps track reuse and ensures proper
          attribution.
          <br />
          Moreover, the <strong>version number</strong> is available at the
          bottom of any portal page. Two examples of how to cite the portal are
          provided below.
        </p>
        <ul className="list-disc pl-4">
          <li>
            In-text citation example (APA style): Precision Medicine Portal,
            SciLifeLab Data Centre, <i>version number</i>, RRID: SCR_026653.
            (Access date: date of access).
          </li>
          <li>
            Reference list example: Precision Medicine Portal (
            <i>access date</i>), SciLifeLab Data Centre, version (version
            number) from{" "}
            <a
              href="https://precision-medicine-portal.scilifelab.se"
              target="_blank"
              className="text-primary underline"
            >
              https://precision-medicine-portal.scilifelab.se
            </a>
            , RRID: SCR_026653.
          </li>
        </ul>
        <p>
          When citing a specific page with a listed author, date or DOI, include
          that information along with the RRID.
        </p>
        <Title level={3}>Journalists</Title>
        <p>
          Journalists are welcome to reuse text, images, and other content from
          the Precision Medicine Portal in articles, blog posts, and social
          media. Please acknowledge the source as{" "}
          <strong>Precision Medicine Portal</strong>, include a link to{" "}
          <a
            href="https://precision-medicine-portal.scilifelab.se"
            target="_blank"
            className="text-primary underline"
          >
            https://precision-medicine-portal.scilifelab.se
          </a>
          , and optionally cite the RRID as described above.
        </p>
        <Title level={2}>License Information</Title>
        <Title level={3}>Website Content</Title>
        <p>
          Unless otherwise stated, the content (text and images) of this website
          is licensed under the{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0"
            target="_blank"
            className="text-primary underline"
          >
            Creative Commons Attribution 4.0 International License (CC BY 4.0)
          </a>
          . This is a human-readable summary of (and not a substitute for){" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/legalcode"
            target="_blank"
            className="text-primary underline"
          >
            the license.
          </a>
        </p>
        <Title level={4}>You are free to</Title>
        <ul className="list-disc pl-4">
          <li>
            <strong>Share</strong> – copy and redistribute the material in any
            medium or format
          </li>
          <li>
            <strong>Adapt</strong> – remix, transform, and build upon the
            material for any purpose, even commercially
          </li>
        </ul>
        <p>
          These freedoms cannot be revoked as long as you follow the license
          terms.
        </p>
        <Title level={4}>Under the following terms</Title>
        <ul className="list-disc pl-4">
          <li>
            <strong>Attribution</strong> – You must give appropriate credit,
            provide a link to the license, and indicate if changes were made.
          </li>
          <li>
            <strong>No additional restrictions</strong> – You may not apply
            legal terms or technological measures that restrict others from
            doing anything the license permits.
          </li>
        </ul>
        <Title level={4}>Notices</Title>
        <p>
          You do not need to comply with the license for material in the public
          domain or when your use is covered by an applicable exception or
          limitation.
        </p>
        <p>
          No warranties are provided. The license may not cover all permissions
          for your intended use (e.g., publicity, privacy, or moral rights may
          still apply).
        </p>
        <Title level={3}>Software</Title>
        <p>
          Unless otherwise noted, all software in this repository is licensed
          under the{" "}
          <a
            href="https://opensource.org/licenses/mit-license.html"
            target="_blank"
            className="text-primary underline"
          >
            MIT License
          </a>
          .
        </p>
        <Title level={4}>MIT License Summary</Title>
        <p>
          Permission is granted, free of charge, to any person obtaining a copy
          of the software and associated documentation to use, copy, modify,
          merge, publish, distribute, sublicense, and/or sell copies, and to
          permit others to do so.
        </p>
        <p>
          This license must appear in all copies or substantial portions of the
          software.
        </p>
        <p>The software is provided "as is", without warranty of any kind.</p>
        <p>© 2025 SciLifeLab Data Centre</p>
        <p>
          For further citation or license inquiries, please contact the
          SciLifeLab Data Centre.
        </p>
        <LastUpdated date="09-06-2025" />
      </div>
    </div>
  );
}
