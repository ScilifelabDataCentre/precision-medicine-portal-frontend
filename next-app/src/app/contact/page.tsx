"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { ILink } from "@/interfaces/types";
import ContactFormComponent from "@/components/ContactFormComponent";
import { TrackPageViewIfEnabled } from "@/util/cookiesHandling";
import Title from "@/components/common/title";

export default function ContactPage(): ReactElement {
  TrackPageViewIfEnabled();

  const breadcrumbs: { [id: string]: ILink } = {
    l1: { text: "Home", classes: "", link: "/" },
    l2: { text: "Contact", classes: "", link: "" },
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
        <div className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="text-sm lg:text-base">
            The contact page is currently under reconstruction, and the contact
            form below has been disabled. In the meantime, please reach out to
            the Data Science Node in Precision Medicine and Diagnostics at{" "}
            <a
              href="mailto:precisionmedicine@scilifelab.se"
              className="text-primary hover:text-black underline"
            >
              precisionmedicine@scilifelab.se
            </a>
            .
          </span>
        </div>
        <Title level={1}>Contact</Title>
        <p>
          Please fill out this form if you need to contact us at the Swedish
          Precision Medicine Portal. Provide your contact information and we
          should get back to you within a weeks time.
        </p>
        <ContactFormComponent />
        <Title level={2}>Personal data policy</Title>
        <p>
          The personal data you provide in this form, your name and email
          address, will be used to process your suggestion of added resource to
          the Swedish Precision Medicine Portal. It is a service run by the
          SciLifeLab Data Centre on assignment from the … It serves to address…
          The information you provide will be processed for research purposes,
          i.e. using the lawful basis of public interest and in accordance with
          Regulation (EU) 2016/679 of the European Parliament and of the Council
          of 27 April 2016, the General Data Protection Regulation. The
          following parties will have access to processing your personal data:
          SciLifeLab Data Centre, Uppsala University. Your personal data will be
          deleted when no longer needed, or when stipulated by the archival
          rules for the university as a government authority. If you want to
          update or remove your personal data please contact the controller
          SciLifeLab Data Centre at Uppsala University using{" "}
          <a
            href="mailto:datacentre@scilifelab.se"
            className="text-primary hover:text-black underline"
          >
            datacentre@scilifelab.se
          </a>
          .
        </p>
      </div>
    </div>
  );
}
