"use client";

import { ILink } from "@/interfaces/types";
import { LINK_CLASSES } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import clsx from "clsx";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links: { [id: string]: ILink } = {
    l1: { text: "Data sources", classes: LINK_CLASSES, link: "/datasources" },
    l2: {
      text: "Quality registries",
      classes: LINK_CLASSES,
      link: "/registries",
    },
    l3: {
      text: "Access clinical data",
      classes: LINK_CLASSES,
      link: "/accessclinicaldata",
    },
    l4: {
      text: "KIARVA dashboard",
      classes: LINK_CLASSES,
      link: "/kiarva",
    },
    l5: { text: "Contact", classes: LINK_CLASSES, link: "/contact" },
    l6: { text: "About us", classes: LINK_CLASSES, link: "/about/product" },
  };

  return (
    <div className="bg-gradient-to-b from-secondary to-primary">
      <div className="text-white 2xl:max-w-screen-2xl 2xl:mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-4 px-6">
          <div className="flex justify-between items-center">
            <Link href="/">
              <img
                className="h-auto w-[600px]"
                src={"/SciLifeLab logo/Precisionmedicineportal_logo_white.png"}
                alt="SciLifeLab Logo"
              />
            </Link>
            <button
              className="lg:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:block mt-4 lg:mt-0`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 text-lg">
              {Object.keys(links).map((key) => (
                <li key={key}>
                  <Link
                    className={clsx(
                      links[key].classes,
                      "block",
                      pathname === links[key].link && "underline"
                    )}
                    href={links[key].link}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {links[key].text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
