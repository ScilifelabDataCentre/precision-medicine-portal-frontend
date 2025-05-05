"use client";

import { ReactElement } from "react";

import Title from "@/components/common/title";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LastUpdated } from "@/components/common/last-updated";

export default function AboutFAQPage(): ReactElement {
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
            <BreadcrumbLink href="/about/faq">FAQ</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Title level={1} className="mb-4">
        Frequently Asked Questions
      </Title>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What is the Data Science Node in Precision Medicine & Diagnostics?
          </AccordionTrigger>
          <AccordionContent>
            We are one out of the four Data Driven Life Science&apos;s nodes at
            SciLifeLab; our node is hosted by Karolinska Institutet. Established
            in late 2023, we are currently organising our efforts to develop
            technologies and data support that aid Swedish precision medicine
            researchers and bridge the gap between hospital and research. By
            providing robust data science tools and support, we aim to empower
            researchers who focus on enhancing diagnostics and personalised
            treatment strategies, facilitating the translation of precision
            medicine innovations into clinical practice. Our work is
            specifically driven by the Data Centre, a central hub within
            SciLifeLab.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How do you take the FAIR principles into account in your work?
          </AccordionTrigger>
          <AccordionContent>
            We incorporate the FAIR principles by keeping our code open in a
            GitHub repository and want to offer several dashboards with open
            data for researchers. We aim to make data on our portal findable and
            accessible, as well as providing detailed dataset descriptions, thus
            enhancing reusability. We address interoperability on our platform
            by actively participating in national and international projects
            that aim to create a cohesive precision medicine ecosystem and a
            coordinated exchange system of data between regions and EU
            countries.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How can I provide feedback or suggest improvements for the portal?
          </AccordionTrigger>
          <AccordionContent>
            We highly value your feedback. Please share your suggestions and
            comments through the contact form.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How was the data sources list curated? Can I add specific data
            sources myself?
          </AccordionTrigger>
          <AccordionContent>
            The Data Centre&apos;s data stewards have manually searched for,
            collected, and summarised the displayed data sources. We recognise
            that new sources are continually emerging and strive to keep our
            data updated and accurate. If you think we have missed a source or
            have mislabelled one, please contact us using the contact form.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            How can I showcase my research data on the portal?
          </AccordionTrigger>
          <AccordionContent>
            We are always eager to collaborate and support the Swedish precision
            medicine and diagnostics research community. If you would like your
            project or data source to be featured as a dashboard on this portal,
            please reach out to us via the contact form.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <LastUpdated date="05-05-2025" />
    </div>
  );
}
