"use client";

import { ReactElement } from "react";

import { H_1 } from "@/constants";
import Link from "next/link";
import { ILink } from "@/interfaces/types";
import { ContactPageContent } from "@/content/content";
import ContactFormComponent from "@/components/ContactFormComponent";
import { TrackPageViewIfEnabled } from "@/util/cookiesHandling";

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
      <div className={H_1}>Contact</div>
      <div className="divider">{ContactPageContent.content[0].header}</div>
      <p className="mb-4">{ContactPageContent.content[0].body}</p>
      <ContactFormComponent />
      <div className="divider">{ContactPageContent.content[1].header}</div>
      <p>{ContactPageContent.content[1].body}</p>
    </div>
  );
}
