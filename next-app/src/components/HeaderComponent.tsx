'use client';

import { ILink } from "@/interfaces/types";
import { LINK_CLASSES } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AboutPageContent, ContactPageContent, DataSourcesPageContent, EventsAndTrainingsPageContent, HomePageContent, PrivacyPageContent, ClinicalDataPageContent } from '../content/content';
import React from "react";

export default function HeaderComponent() {
    
  const links: { [id: string] : ILink; } = {
      'l1': { text: 'Data Sources', classes: LINK_CLASSES, link: 'datasources' },
      'l2': { text: 'Events & Trainings', classes: LINK_CLASSES, link: 'eventsandtrainings' },
      'l3': { text: 'Access Clinical Data', classes: LINK_CLASSES, link: '/accessclinicaldata' },
      'l4': { text: 'Contact', classes: LINK_CLASSES, link: 'contact' },
      'l5': { text: 'About Us', classes: LINK_CLASSES, link: 'about/product' },
  };
  
  {/*
          // This is the signin button. We  can add this again once we have a user page, login, registration and features for users.
  let buttons: { [id: string] : ILink; } = {
      'b1': { text: 'Sign In', classes: BUTTON_TYPE_ONE, link: 'signin' },
  };
  */}

  const currentRoute = usePathname();
  let textBar: string = "";

  switch (currentRoute) {
      case "/":
        textBar = HomePageContent.textBar;
        break;
      case "/datasources":
        textBar = DataSourcesPageContent.textBar;
        break;
      case "/eventsandtrainings":
        textBar = EventsAndTrainingsPageContent.textBar;
        break;
      case "/contact":
        textBar = ContactPageContent.textBar;
        break;
      case "/about/product":
        textBar = AboutPageContent.textBar;
        break;
      case "/about/faq":
        textBar = AboutPageContent.textBar;
        break;
      case "/about/team":
        textBar = AboutPageContent.textBar;
        break;
      case "/about/partners":
        textBar = AboutPageContent.textBar;
        break;
      case "/privacy":
        textBar = PrivacyPageContent.textBar;
        break;
      case "/accessclinicaldata":
        textBar = ClinicalDataPageContent.textBar;
        break;
      default:
        textBar = "";
        break;
    }

    return (
      <div className="bg-gradient-to-b from-secondary to-primary">
        <div className="text-primary-content px-32 2xl:max-w-screen-2xl 2xl:mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <Link href="/">
                        <img className="h-auto w-auto 2xl:max-w-2xl" src={'/SciLifeLab logo/Precisionmedicineportal_logo_white.png'} alt="SciLifeLab Logo" />
                    </Link>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal text-lg">
                    {Object.keys(links).map( key => (
                        <li key={key}>{<Link className={links[key].classes} href={links[key].link}>{links[key].text}</Link>}</li>
                    ))}
                    </ul>
                </div>
                <div className="navbar-end hidden 2xl:block">
                </div>
                {/*
                // This is the signin button. We  can add this again once we have a user page, login, registration and features for users.
                {Object.keys(buttons).map( key => (
                    <div className="navbar-end">
                        {<Link className={buttons[key].classes} to={buttons[key].link}>{buttons[key].text}</Link>}
                    </div>
                ))} */}
            </div>
                <div className="text-left text-4xl leading-tight tracking-tight font-bold py-6 px-4">
                    <p>{textBar}</p>
                </div>
        </div>
      </div>
    )
  }
  