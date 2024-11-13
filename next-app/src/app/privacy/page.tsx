"use client";

import { ReactElement, useState } from "react";
import { BUTTON_TYPE_ONE } from "@/constants";
import Link from "next/link";
import { ILink } from "@/interfaces/types";
import {
  TrackPageViewIfEnabled,
  trackingDisabled,
} from "@/util/cookiesHandling";
import React from "react";
import { deleteCookie, setCookie } from "cookies-next";
import Title from "@/components/common/title";

export default function PrivacyPage(): ReactElement {
  TrackPageViewIfEnabled();

  const breadcrumbs: { [id: string]: ILink } = {
    l1: { text: "Home", classes: "", link: "/" },
    l2: { text: "Privacy policy", classes: "", link: "" },
  };

  const optInOrOutTextActive = (isTrackingEnabled: boolean): string[] => {
    if (isTrackingEnabled) {
      return ["Click on the button to the right to opt out", "Opt Out"];
    } else {
      return ["Click on the button to the right to opt in", "Opt In"];
    }
  };

  const [optInText, setOptInText] = useState(
    optInOrOutTextActive(!trackingDisabled())
  );

  const handleOptOut = () => {
    trackingDisabled()
      ? deleteCookie("trackingDisabled")
      : setCookie("trackingDisabled", "true", { maxAge: 365 });
    setOptInText(optInOrOutTextActive(!trackingDisabled()));
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
        <Title level={1}>Privacy policy</Title>
        <p>
          Data Centre at SciLifeLab provides and operates the Precision Medicine
          Portal. This page is intended to inform website visitors about our
          personal data processing policy. By using our Service, you agree that
          your personal data will be processed in accordance with this policy.
        </p>
        <Title level={2}>Data collection and usage</Title>
        <p>
          The personal information we collect is used solely for providing and
          improving the Service. We will not use or share your information with
          anyone except as described in this policy. All collected personal
          information will be processed for research purposes under the lawful
          basis of public interest and in compliance with Regulation (EU)
          2016/679 of the European Parliament and of the Council of 27 April
          2016, the General Data Protection Regulation (GDPR).
        </p>
        <div role="alert" className="alert bg-neutral text-neutral-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{optInText[0]}</span>
          <div className="space-x-2">
            <button onClick={handleOptOut} className={BUTTON_TYPE_ONE}>
              {optInText[1]}
            </button>
          </div>
        </div>
        <Title level={2}>Visitor statistics</Title>
        <p>
          We collect information that your browser sends to us whenever you
          visit our Service, referred to as &apos;log data.&apos; This data may
          include:
        </p>
        <ul className="list-disc pl-4">
          <li>The website you visited us from</li>
          <li>The parts of our Service you visit</li>
          <li>The date and duration of your visit</li>
          <li>Your anonymised IP address</li>
          <li>
            Information about the device you used during your visit (device
            type, operating system, screen resolution, language, country you are
            located in, and web browser type)
          </li>
        </ul>
        <p>
          We process this usage data using Matomo Analytics (hosted on
          SciLifeLab servers and operated solely by SciLifeLab) for statistical
          purposes, to improve our Service, and to recognise and prevent any
          misuse. You can opt out of your statistics being collected below. Note
          that the tracking opt-out feature requires cookies to be enabled.
        </p>
        <Title level={2}>Forms</Title>
        <p>
          Our Service contains several forms that visitors can use to contact us
          or provide suggestions. The website visitors may choose to provide
          their personal information such as their name and e-mail address
          through these forms. The following parties will have access to
          processing the personal data provided through the forms; SciLifeLab
          Data Centre, Uppsala University, Kungliga Tekniska högskolan (KTH).
          Your personal data will be deleted when no longer needed, or when
          stipulated by the archival rules for the university as a government
          authority. If you want to update or remove your personal data, please
          contact the controller SciLifeLab Data Centre at Uppsala University
          using datacentre@scilifelab.se
        </p>
        <Title level={2}>Links to other sites</Title>
        <p>
          Our Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. These external
          sites are not operated by us, and we strongly advise you to review the
          privacy policy of these websites. We have no control over and assume
          no responsibility for the content, privacy policies, or practices of
          any third-party sites or services.
        </p>
        <Title level={2}>Changes to this privacy policy</Title>
        <p>
          We may update our privacy policy from time to time. We advise you to
          review this page periodically for any changes. We will notify you of
          any changes by posting the new privacy policy on this page. Changes
          are effective immediately upon being posted on this page.
        </p>
        <Title level={2}>Contact us</Title>
        <p>
          If you have any questions or suggestions about our privacy policy, do
          not hesitate to contact us at{" "}
          <Link href="/contact">the Swedish Precision Medicine Portal</Link>.
        </p>
      </div>
    </div>
  );
}
